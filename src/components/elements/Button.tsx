import { NullstackNode } from 'nullstack';

import { classList } from '../../utils';

interface ButtonProps {
  children?: NullstackNode;
  class?: string;
  id?: string;
  type?: 'button' | 'reset' | 'submit';
  onclick?: () => void;
}

/**
 * @name Button
 * @param {!Element} children
 * @param {?function} onclick
 * @param {?string} id
 * @param {?string} class
 * @param {?string} type
 * @returns {Element}
 * @example
 * import { Button } from "nullstack-tailwind";
 *
 * <Button onclick={() => alert("Hello")}>Hello</Button>
 */
export default function Button(props: ButtonProps) {
  const { type = 'button', id, class: klass, onclick, children } = props;

  return (
    <button
      id={id}
      type={type}
      class={classList(
        'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        klass
      )}
      onclick={onclick && onclick}
    >
      {children}
    </button>
  );
}
