import classNames from 'classnames';
import { FC } from 'react';

interface IProps {
  color: 'white' | 'base-red';
}

const IconDiscountSquare: FC<IProps> = ({ ...props }) => {
  const iconColor = classNames({
    'stroke-white': props.color === 'white',
    'stroke-base-red': props.color === 'base-red',
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="21"
      fill="none"
      viewBox="0 0 23 23"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
        d="M9.012 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7zM8.582 15.27l6.54-6.54"
        className={iconColor}
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
        d="M8.992 10.37a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM15.532 16.09a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46z"
        className={iconColor}
      ></path>
    </svg>
  );
};

export default IconDiscountSquare;
