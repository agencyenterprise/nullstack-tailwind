import { classList } from '../../utils';

export default function Preview(props) {
  const { children, class: klass } = props;

  return (
    <div
      class={classList(
        'p-5 my-2 border-solid border-2 border-slate-100 flex flex-col justify-center items-center',
        klass
      )}
    >
      {children}
    </div>
  );
}
