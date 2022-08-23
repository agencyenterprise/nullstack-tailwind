import Nullstack from 'nullstack';

import { Slider, SliderProps } from '../../components';
import { renderComponent } from '../utils';

export default {
  title: 'Elements/Slider',
  component: Slider,
  argTypes: {
    min: {
      type: 'number',
      defaultValue: 0,
    },
    max: {
      type: 'number',
      defaultValue: 100,
    },
    step: {
      type: 'number',
      defaultValue: 1,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as Meta<SliderProps>;

class SliderWrapper extends Nullstack {
  sliderValue = [10, 30];

  render(context: SliderProps) {
    return (
      <>
        <Slider bind={this.sliderValue} {...context} />
        <br />
        <p>Value: {JSON.stringify(this.sliderValue)}</p>
      </>
    );
  }
}

const Template: Story<SliderProps> = (args) => {
  const component = <SliderWrapper {...args} />;
  return renderComponent(component);
};

export const Basic = Template.bind({}) as Story<SliderProps>;

Basic.args = {};

Basic.parameters = {
  docs: {
    source: {
      language: 'jsx',
      code: `
class Example extends Nullstack {
  value = [10, 40];

  render() {
    return <Slider bind={this.value} />;
  }
}`,
    },
  },
};
