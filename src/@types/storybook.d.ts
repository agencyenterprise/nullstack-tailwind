import { AnnotatedStoryFn, Args, ComponentAnnotations } from '@storybook/csf';

declare global {
  type NullstackFramework = {
    component: unknown;
    storyResult: HTMLElement;
  };

  type Meta<TArgs = Args> = ComponentAnnotations<NullstackFramework, TArgs>;
  type StoryFn<TArgs = Args> = AnnotatedStoryFn<NullstackFramework, TArgs>;
  type Story<TArgs = Args> = StoryFn<TArgs>;
}
