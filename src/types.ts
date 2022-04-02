import { NullstackClientContext } from "nullstack/types";

export interface Todo {
  description: string
  complete: boolean
}

export interface ApplicationClientContext extends NullstackClientContext {
  todos?: Todo[]
}