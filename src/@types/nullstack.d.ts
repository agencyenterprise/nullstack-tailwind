import { NullstackClientContext } from 'nullstack';

declare global {
  type ClientContext<TProps> = NullstackClientContext & TProps;
}
