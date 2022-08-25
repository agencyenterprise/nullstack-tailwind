import { classList } from '../../utils';

interface AvatarProps {
  alt?: string;
  class?: string;
  id?: string;
  placeholder?: string;
  src?: string;
}

/**
 * @name Avatar
 * @param {?string} src
 * @param {?string} alt
 * @param {?string} placeholder
 * @param {?string} id
 * @param {?string} class
 * @returns {Element}
 * @example
 * import { Avatar } from "nullstack-tailwind";
 *
 * <Avatar class="h-10 w-10" src="https://avatars0.githubusercontent.com/u/1234?s=460&v=4" alt="Avatar" />
 */
export default function Avatar(props: AvatarProps) {
  const { src, alt, id, class: klass, placeholder } = props;

  if (placeholder) {
    return (
      <span id={id} class={classList(`inline-flex items-center justify-center rounded-full bg-gray-500`, klass)}>
        <span class="font-medium leading-none text-white">{placeholder}</span>
      </span>
    );
  }

  return <img id={id} class={classList(`inline-block rounded-full`, klass)} src={src} alt={alt} />;
}
