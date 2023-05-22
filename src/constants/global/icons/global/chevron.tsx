import { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  position: 'bottom' | 'top' | 'left' | 'right';
  color: 'white' | 'base-gray-300' | 'base-gray-400' | 'base-gray-600';
  hoverColor?: {
    group: 'hero-slider_navigation';
    color: 'base-gray-600';
  };
  size: 'xs' | 'sm' | 'md';
}

const IconChevron: FC<IProps> = ({ ...props }): JSX.Element => {
  const iconColor = classNames({
    'fill-white': props.color === 'white',
    'fill-base-gray-300': props.color === 'base-gray-300',
    'fill-base-gray-400': props.color === 'base-gray-400',
    'fill-base-gray-600': props.color === 'base-gray-600',
    'group-hover/hero-slider_navigation:fill-base-gray-600':
      props.hoverColor?.group === 'hero-slider_navigation' &&
      props.hoverColor?.color === 'base-gray-600',
  });
  const iconSize = classNames({
    'h-[11.5px]': props.size === 'xs',
    'h-[13px]': props.size === 'sm',
    'h-[15px]': props.size === 'md',
  });
  const iconPosition = classNames({
    '-rotate-90': props.position === 'top',
    'rotate-90': props.position === 'bottom',
    'rotate-180': props.position === 'left',
    'rotate-0': props.position === 'right',
  });

  return (
    <svg
      className={`transition-all duration-300 ${iconSize} ${iconPosition}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.017 16.031"
    >
      <path
        id="Path_1333"
        data-name="Path 1333"
        d="M1,16.031a1,1,0,0,1-.709-1.711L6.6,8.016.293,1.71A1,1,0,0,1,1.71.293L8.723,7.305a1,1,0,0,1,0,1.418L1.711,15.737A1,1,0,0,1,1,16.031Z"
        className={`transition-all duration-300 ${iconColor}`}
      />
    </svg>
  );
};

export default IconChevron;
