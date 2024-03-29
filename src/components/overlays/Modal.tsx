import { NullstackNode } from 'nullstack';

import { classList } from '../../utils';

interface ModalProps {
  children?: NullstackNode;
  visible: boolean;
}

const Modal = (props: ModalProps) => {
  const { visible, children } = props;

  return (
    <div
      class={classList('modal-transition fixed z-10 inset-0 overflow-y-auto', visible ? 'block' : 'hidden')}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal={visible}
    >
      <div class={classList('flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0')}>
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          class={classList(
            'relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface CloseProps {
  onclick: () => void;
}

Modal.Close = ({ onclick }: CloseProps) => (
  <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4" onclick={onclick && onclick}>
    <button
      type="button"
      class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span class="sr-only">Close</span>
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

interface ElementsProps {
  class?: string;
  children?: NullstackNode;
}

Modal.Body = ({ children, class: klass }: ElementsProps) => (
  <div class={classList('bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4', klass)}>{children}</div>
);

Modal.Footer = ({ children, class: klass }: ElementsProps) => (
  <div class={classList('bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse', klass)}>{children}</div>
);

export default Modal;
