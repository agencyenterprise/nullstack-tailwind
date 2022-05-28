import Label from "../elements/Label";
import Helper from "../elements/Helper";
import { classList } from "../../utils";

interface InputProps {
  class?: string;
  corner?: string;
  error?: string;
  helper?: string;
  id?: string;
  label?: string;
  name: string;
  placeholder?: string;
  source: string;
  type?: string;
  step?: string;
  disabled?: boolean;
}

/**
 * @name Input
 * @param {?string} id
 * @param {?string} className
 * @param {?string} placeholder
 * @param {?string} helper
 * @param {?string} corner
 * @param {?string} error
 * @param {?string} type
 * @param {?boolean} disabled
 * @returns {Element}
 * @example
 * import { Input } from "nullstack-tailwind";
 *
 * <Input
 *  label="Email"
 *  type="email"
 *  bind={this.user.email}
 *  error="Invalid e-mail"
 *  placeholder="foo@bar.com"
 *  helper="Example description"
 *  corner="Optional"
 * />
 */
export default function Input(props: InputProps) {
  const {
    label,
    id,
    class: klass,
    type = "text",
    placeholder,
    name,
    source,
    error,
    helper,
    corner,
    step = "1",
    disabled = false,
  } = props;

  return (
    <div>
      <div class="flex justify-between">
        <Label for={id}>{label}</Label>
        <span class="text-sm text-gray-500" id={id}>
          {corner}
        </span>
      </div>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          class={classList(
            "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none",
            error &&
              " border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500",
            klass
          )}
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby="email-error"
          bind={source[name]}
          disabled={disabled}
          step={step}
        />

        {error && (
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              class="h-5 w-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error ? (
        <p class="mt-2 text-sm text-red-600">{error}</p>
      ) : (
        helper && <Helper>{helper}</Helper>
      )}
    </div>
  );
}
