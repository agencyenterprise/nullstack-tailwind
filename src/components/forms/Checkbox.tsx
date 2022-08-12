import Nullstack from "nullstack";
import Label from "../elements/Label";
import Helper from "../elements/Helper";
import { classList } from "../../utils";

interface CheckboxProps {
  class?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
  label: string;
  name: string;
  onclick?: () => void;
  source: string;
}

/**
 * @name Checkbox
 * @param {?string} class
 * @param {?string} description
 * @param {?boolean} disabled
 * @param {?string} id
 * @returns {Element}
 * @example
 * import { Checkbox } from "nullstack-tailwind";
 *
 * <Checkbox label="Comments" description="Get notified when someones posts a comment on a posting." bind={this.user.allowNotification} />
 */
class Checkbox extends Nullstack {
  toggle({ onclick, source, name }) {
    source[name] = !source[name];
    onclick && onclick(source[name]);
  }

  render(props: CheckboxProps) {
    const {
      label,
      description,
      name,
      source,
      disabled,
      id,
      class: klass,
    } = props;
    const checked = source[name];

    return (
      <div class="relative flex items-start">
        <div class="flex items-center h-5">
          <input
            id={id}
            aria-describedby={id}
            type="checkbox"
            class={classList(
              "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
              klass
            )}
            checked={checked}
            disabled={disabled}
            onclick={!disabled && this.toggle}
          />
        </div>
        <div class="ml-3 text-sm">
          <Label for={id}>{label}</Label>
          {description && <Helper>{description}</Helper>}
        </div>
      </div>
    );
  }
}

export default Checkbox;
