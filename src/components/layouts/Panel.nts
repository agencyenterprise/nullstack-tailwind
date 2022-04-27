import { classList } from "../../utils";

interface PanelProps {
  title?: string;
  children?: string;
  class?: string;
  id?: string;
}

/**
 * @name Panel
 * @param {?string} id
 * @param {?string} class
 * @param {?string} title
 * @param {?Element} children
 * @returns {Element}
 * @example
 * import { Panel } from "nullstack-tailwind";
 *
 * <Panel id="my-panel" class="bg-gray-100">Child elements here...</Panel>
 */
export default function Panel(props: PanelProps) {
  const { children, id, class: klass, title } = props;

  return (
    <div id={id} class={classList("w-full", klass)}>
      {title && (
        <h2 class="text-2xl mb-4 font-semibold text-gray-800">{title}</h2>
      )}
      <div class="bg-white overflow-hidden shadow rounded-md">
        <div class="px-4 py-5 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
