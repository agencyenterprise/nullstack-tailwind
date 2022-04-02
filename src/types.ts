import { NullstackClientContext } from "nullstack/types";

export interface ButtonProps {
  class?: string;
  onClick?: (ctx: NullstackClientContext) => void;
}

export interface ApplicationClientContext extends NullstackClientContext {}
