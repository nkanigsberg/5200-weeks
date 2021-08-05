import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Week } from './';

export default {
  title: '5200Weeks/Week',
  component: Week,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Week>;

const Template: ComponentStory<typeof Week> = (args) => <Week {...args} />;

export const Default = Template.bind({});
Default.args = {
  // primary: true,
  // label: 'Button',
	title: 'test',
	backgroundColor: '#FFF',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
