import { NullstackClientContext } from 'nullstack';

declare global {
  interface BindableChangeEvent<T> {
    value?: T;
  }

  interface BindableProps<T> {
    bind?: { object: Record<string, unknown>; property: string };
    value?: T;
  }

  type ClientContext<TProps> = NullstackClientContext & TProps & { class?: string };
}
