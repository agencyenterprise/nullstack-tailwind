import { classList } from "../../utils";

interface AlertProps {
  children?: Element;
  class?: string;
  icon?: string;
  id?: string;
  variant?: "success" | "info" | "warning" | "danger";
}

/**
 * @name Alert
 * @param {?("success" | "info" | "warning" | "danger")} variant
 * @param {?SVGElement} icon
 * @param {?string} class
 * @param {?string} id
 * @param {!Element} children
 * @returns {Element}
 * @example
 * import { Alert } from "nullstack-tailwind";
 *
 * <Alert variant="success" icon={<Icon name="check" />}>
 *  <h3 class="text-sm font-medium text-green-800">Success</h3>
 *  <div class="mt-2 text-sm text-green-700">
 *    <p>
 *      Lorem ipsum dolor sit amet consectetur adipisicing elit.
 *      Aliquid pariatur, ipsum similique veniam.
 *    </p>
 *  </div>
 * </Alert>
 */
export default function Alert(props: AlertProps) {
  const { variant = "info", icon, children, id, class: klass } = props;

  const variants = {
    info: {
      color: "bg-blue-50",
      icon: (
        <svg
          class="h-5 w-5 text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    success: {
      color: "bg-green-50",
      icon: (
        <svg
          class="h-5 w-5 text-green-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    warning: {
      color: "bg-yellow-50",
      icon: (
        <svg
          class="h-5 w-5 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    danger: {
      color: "bg-red-50",
      icon: (
        <svg
          class="h-5 w-5 text-red-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
  };

  const currentVariant = variants[variant];

  return (
    <div id={id} class={`rounded-md bg-blue-50 ${currentVariant.color} p-4`}>
      <div class="flex">
        <div class="flex-shrink-0">{icon || currentVariant.icon}</div>
        <div class={classList("ml-3 ", klass)}>{children}</div>
      </div>
    </div>
  );
}
