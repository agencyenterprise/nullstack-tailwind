import { NullstackNode } from 'nullstack';

import { classList } from '../../utils';

interface LabelProps {
  children?: NullstackNode;
  class?: string;
  for?: string;
}

export default function Label(props: LabelProps) {
  const { for: receivedFor, class: klass, children } = props;

  return (
    <label for={receivedFor} class={classList('block text-sm font-medium text-gray-700', klass)}>
      {children}
    </label>
  );
}
