import { classList } from "../../utils";

interface BadgeProps {
  children?: string;
  class?: string;
  id?: string;
}

/**
 * @name Badge
 * @param {!Element} children
 * @param {?string} id
 * @param {?string} class
 * @returns {Element}
 * @example
 * import { Badge } from "nullstack-tailwind";
 *
 * <Badge>Example</Badge>
 */
export default function Badge(props: BadgeProps) {
  const { id, class: klass, children } = props;

  return (
    <span
      id={id}
      class={classList(
        `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium`,
        klass
      )}
    >
      {children}
    </span>
  );
}
