import Nullstack from 'nullstack';

import { classList } from '../../utils';
import Helper from '../elements/Helper';
import Label from '../elements/Label';

interface DatePickerProps {
  class: string;
  config?: object;
  disabled?: boolean;
  helper?: string;
  id: string;
  label?: string;
  name: string;
  source: string;
}

/**
 * @name DatePicker
 * @param {?boolean} disabled
 * @param {?Element} children
 * @param {?object} config - flatpickr config
 * @param {?string} class
 * @param {?string} helper
 * @param {?string} id
 * @param {?string} label
 * @returns {Element}
 * @example
 * import { DatePicker } from "nullstack-tailwind";
 *
 * <DatePicker label="Comments" config={{}} bind={this.user.createdAt} />
 */
class DatePicker extends Nullstack {
  async hydrate({ self, config }) {
    const { default: flatpickr } = await import('flatpickr');
    flatpickr(self.element.querySelector('[data-date-picker]'), config);
  }
  render(props: DatePickerProps) {
    const { label, helper, id, class: klass, source, name, disabled } = props;

    return (
      <div>
        <div class="flex justify-between">
          <Label for={id}>{label}</Label>
        </div>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            class={classList(
              'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none',
              klass
            )}
            type="text"
            data-date-picker
            bind={source[name]}
            disabled={disabled}
          />
        </div>
        {helper && <Helper>{helper}</Helper>}
      </div>
    );
  }
}

export default DatePicker;
