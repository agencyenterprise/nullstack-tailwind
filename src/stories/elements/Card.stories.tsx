import { Card, CardProps } from '../../components';
import { renderComponent } from '../utils';

export default {
  title: 'Elements/Card',
  component: Card,
  argTypes: {
    rounded: {
      type: 'boolean',
    },
    borderless: {
      type: 'boolean',
    },
    padding: {
      options: ['small', 'middle', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => {
  const component = <Card {...args}>Card</Card>;
  return renderComponent(component);
};

export const Basic = Template.bind({}) as Story<CardProps>;

Basic.args = {};

Basic.parameters = {
  docs: {
    source: {
      code: '<Card>Card</Card>',
      language: 'jsx',
    },
  },
};
