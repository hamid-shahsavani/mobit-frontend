'use client';

import convertNumber from '@/functions/global/convertNumber';
import { useFormik } from 'formik';
import { FC, useEffect, useRef } from 'react';
import * as Yup from 'yup';

const Form: FC = (): JSX.Element => {
  // formik for form
  interface IFormik {
    phoneNumber: string;
  }
  const formikConstant = {
    fields: {
      phoneNumber: {
        label: 'شماره موبایل *',
        placeholder: 'شماره موبایل خود را وارد کنید',
        errors: {
          isNotCorrect: 'شماره موبایل وارد شده معتبر نیست!',
          isRequired: 'این فیلد اجباری است!',
        },
      },
    },
    title: 'ورود به مبیت',
    submit: 'ورود به مبیت',
  };
  const formik = useFormik<IFormik>({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: Yup.object().shape({
      phoneNumber: Yup.string()
        .matches(
          /^0\d{10}$/,
          formikConstant.fields.phoneNumber.errors.isNotCorrect,
        )
        .required(formikConstant.fields.phoneNumber.errors.isRequired),
    }),
    onSubmit: async (values) => {},
  });

  // focus feild phoneNumber in first render
  const inputPhonenumberRef = useRef<null | HTMLInputElement>(null);
  useEffect(() => {
    inputPhonenumberRef.current?.focus();
  }, []);

  return (
    <section className="flex w-full max-w-[450px] flex-col gap-7 sm:rounded-3xl sm:p-4 sm:shadow-[0_0px_14px_#0000001a]">
      {/* title */}
      <p className="text-c-xl font-extrabold">{formikConstant.title}</p>
      {/* form */}
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        {/* fields */}
        <div>
          {/* field phoneNumber */}
          <div className="flex flex-col justify-center space-y-1.5">
            {/* label */}
            <p className="text-c-sm text-c-gray-400 mr-1.5 font-bold">
              {formikConstant.fields.phoneNumber.label}
            </p>
            {/* feild */}
            <input
              ref={inputPhonenumberRef}
              spellCheck={false}
              type={'text'}
              {...formik.getFieldProps('phoneNumber')}
              placeholder={formikConstant.fields.phoneNumber.placeholder}
              className={`bg-c-gray-100 text-c-md placeholder:text-c-sm focus:!ring-c-royal-blue w-full truncate rounded-[10px] p-3 font-semibold ring-[1px] transition-all duration-300 focus:bg-white focus:ring-[2px] ${
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? 'ring-red-400'
                  : 'ring-transparent'
              }`}
              onChange={({
                target: { value: inputValue },
              }: {
                target: HTMLInputElement;
              }) => {
                const value = convertNumber({
                  number: inputValue,
                  type: 'to-english',
                });
                if (/^[0-9]*$/.test(value)) {
                  formik.setFieldValue('phoneNumber', value);
                }
              }}
            />
            {/* error */}
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
              <p className="mr-1.5 pt-0.5 text-[13px] font-medium text-red-500">
                {formik.errors.phoneNumber}
              </p>
            ) : null}
          </div>
        </div>
        {/* rule text */}
        <p className="text-c-xs text-c-gray-400 border-b-[2px] p-3 font-bold">
          با ورود به مبیت، <span className="text-c-royal-blue">شرایط مبیت</span>{' '}
          و <span className="text-c-royal-blue">قوانین حریم ‌خصوصی</span> آن را
          می‌پذیرید.
        </p>
        {/* submit btn */}
        <button
          type="submit"
          className={`bg-c-royal-blue text-c-md mt-3 w-full rounded-[10px] p-3.5 font-bold text-white`}
        >
          {formikConstant.submit}
        </button>
      </form>
    </section>
  );
};

export default Form;
