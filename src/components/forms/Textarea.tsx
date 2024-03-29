import { classList } from '../../utils';
import Helper from '../elements/Helper';
import Label from '../elements/Label';

interface TextareaProps {
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  name?: string;
  rows?: number;
  source?: string;
}

/**
 * @name Textarea
 * @param {?number} rows
 * @param {?string} label
 * @param {?string} helper
 * @param {?boolean} disabled
 * @returns {Element}
 * @example
 * import { Textarea } from "nullstack-tailwind";
 *
 * <Textarea label="Comments" rows={6} bind={this.user.about} />
 */
export default function Textarea(props: TextareaProps) {
  const { id, class: klass, label, name, rows = 4, source, helper, disabled = false } = props;
  const value = source[name];

  return (
    <div>
      <Label for={id}>{label}</Label>
      <div class="mt-1">
        <textarea
          rows={rows}
          id={id}
          class={classList(
            'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md',
            klass
          )}
          disabled={disabled}
          bind={source[name]}
        >
          {value}
        </textarea>
      </div>
      {helper && <Helper>{helper}</Helper>}
    </div>
  );
}
