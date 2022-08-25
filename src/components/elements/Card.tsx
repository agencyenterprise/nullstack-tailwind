import cx from 'classnames';

export interface CardProps {
  rounded?: boolean;
  borderless?: boolean;
  padding?: 'small' | 'middle' | 'large';
  class?: string;
}

export default function Card(props: ClientContext<CardProps>) {
  const { borderless, rounded, padding = 'middle', class: classNames, children } = props;

  const cardClasses = {
    'rounded-lg': rounded,
    'border ': !borderless,
    'p-2': padding === 'small',
    'p-4': padding === 'middle',
    'p-8': padding === 'large',
  };

  return <div class={cx(cardClasses, classNames)}>{children}</div>;
}
