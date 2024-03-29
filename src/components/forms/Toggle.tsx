import Nullstack from 'nullstack';

import { classList } from '../../utils';

interface ToggleProps {
  class?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  name: string;
  source: object;
  onclick?: () => void;
}

/**
 * @name Toggle
 * @param {?string} label
 * @param {?string} id
 * @param {?string} class
 * @param {?boolean} disabled
 * @returns {Element}
 * @example
 * import { Toggle } from "nullstack-tailwind";
 *
 * <Toggle label="Notifications" bind={this.user.allowNotification} />
 */
class Toggle extends Nullstack {
  toggle({ onclick, source, name }) {
    source[name] = !source[name];
    onclick && onclick();
  }

  render(props: ToggleProps) {
    const { id, class: klass, label, name, source, disabled = false } = props;
    const value = source[name];

    return (
      <button
        id={id}
        type="button"
        class={classList(
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          value ? ' bg-indigo-600' : ' bg-gray-200',
          disabled ? ' cursor-not-allowed opacity-50' : '',
          klass
        )}
        role="switch"
        aria-checked={value}
        onclick={!disabled && this.toggle}
      >
        <span class="sr-only">{label}</span>
        <span
          aria-hidden="true"
          class={'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'.concat(
            value ? ' translate-x-5' : ' translate-x-0'
          )}
        ></span>
      </button>
    );
  }
}

export default Toggle;
