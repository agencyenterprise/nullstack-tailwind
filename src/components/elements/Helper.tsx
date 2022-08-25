import { NullstackNode } from 'nullstack';

import { classList } from '../../utils';

interface HelperProps {
  children?: NullstackNode;
  class?: string;
}

export default function Helper(props: HelperProps) {
  const { class: klass, children } = props;

  return <p class={classList('mt-2 text-sm text-gray-500', klass)}>{children}</p>;
}
