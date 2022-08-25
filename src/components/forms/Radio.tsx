import Nullstack from 'nullstack';

import { classList } from '../../utils';

interface RadioProps {
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  name: string;
  source: object;
  onclick?: () => void;
}

/**
 * @name Radio
 * @param {?string} label
 * @param {?string} id
 * @param {?string} class
 * @param {?string} helper
 * @param {?boolean} disabled
 * @returns {Element}
 * @example
 * import { Radio } from "nullstack-tailwind";
 *
 * <Radio label="Notifications" helper="Any description" bind={this.user.allowNotification} />
 */
class Radio extends Nullstack {
  toggle({ onclick, source, name }) {
    source[name] = !source[name];
    onclick && onclick();
  }

  render(props: RadioProps) {
    const { id, class: klass, label, name, source, helper, disabled = false } = props;
    const checked = !!source[name];

    return (
      <div class="relative flex items-start">
        <div class="flex items-center h-5">
          <input
            id={id}
            name={name}
            type="radio"
            checked={checked}
            class={classList('focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300', klass)}
            onclick={this.toggle}
            disabled={disabled}
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="small" class="font-medium text-gray-700">
            {label}
          </label>
          {helper && (
            <p id="small-description" class="text-gray-500">
              {helper}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Radio;
