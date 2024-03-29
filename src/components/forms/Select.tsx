import { NullstackNode } from 'nullstack';

import { classList } from '../../utils';
import Helper from '../elements/Helper';
import Label from '../elements/Label';

interface SelectProps {
  children?: NullstackNode;
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  name?: string;
  source?: string;
}

/**
 * @name Select
 * @param {?string} label
 * @param {?string} helper
 * @param {?string} id
 * @param {?string} class
 * @param {?Element} children
 * @param {?boolean} disabled
 * @returns {Element}
 * @example
 * import { Select } from "nullstack-tailwind";
 *
 * <Select label="Country" helper="Select your country">
 *  <option value="">Select your country</option>
 *  <option value="US">United States</option>
 *  <option value="CA">Canada</option>
 * </Select>
 */
export default function Select(props: SelectProps) {
  const { id, class: klass, label, name, source, children, helper, disabled } = props;

  return (
    <div>
      <Label for={id}>{label}</Label>
      <select
        id={id}
        name={name}
        class={classList(
          'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md',
          klass
        )}
        bind={source[name]}
        disabled={disabled}
      >
        {children}
      </select>
      {helper && <Helper>{helper}</Helper>}
    </div>
  );
}
