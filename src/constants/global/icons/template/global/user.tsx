import { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  color: 'white' | 'base-gray-100';
}

const IconUser: FC<IProps> = ({ ...props }): JSX.Element => {
  const iconColor = classNames({
    'fill-white': props.color === 'white',
    'fill-base-gray-100': props.color === 'base-gray-100',
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={19.5}>
      <path
        className={iconColor}
        d="M224 256a128 128 0 100-256 128 128 0 100 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z"
      ></path>
    </svg>
  );
};

export default IconUser;
