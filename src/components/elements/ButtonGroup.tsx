import { classList } from "../../utils";

interface ButtonGroupProps {
  children: string;
  class?: string;
  id?: string;
}

/**
 * @name ButtonGroup
 * @param {!Element} children
 * @param {?string} id
 * @param {?string} className
 * @returns {Element}
 * @example
 * import { ButtonGroup, Button } from "nullstack-tailwind";
 *
 * <ButtonGroup>
 *  <Button class="rounded-r-none">Years</Button>
 *  <Button class="rounded-none">Months</Button>
 *  <Button class="rounded-l-none">Days</Button>
 * </ButtonGroup>
 */
export default function ButtonGroup(props: ButtonGroupProps) {
  const { id, class: klass, children } = props;

  return (
    <span
      id={id}
      class={classList("relative z-0 inline-flex shadow-sm rounded-md", klass)}
    >
      {children}
    </span>
  );
}
