import Nullstack from 'nullstack';

import noUiSlider, { API } from 'nouislider';

interface RootElement extends HTMLDivElement {
  noUiSlider: API;
}

export interface SliderProps extends BindableProps<number[]> {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export default class Slider extends Nullstack {
  rootEl!: RootElement;

  hydrate(context: ClientContext<SliderProps>) {
    const { bind, value, min = 0, max = 100, step = 1, disabled } = context;

    if (disabled) {
      this.rootEl.setAttribute('disabled', 'true');
    } else {
      this.rootEl.removeAttribute('disabled');
    }

    noUiSlider.create(this.rootEl, {
      start: value,
      range: { min, max },
      step,
      connect: true,
    });

    this.rootEl.noUiSlider.on('change', (values, handle, unencoded) => {
      if (bind) {
        bind.object[bind.property] = unencoded;
      }
    });
  }

  render() {
    return <div ref={this.rootEl}></div>;
  }
}
