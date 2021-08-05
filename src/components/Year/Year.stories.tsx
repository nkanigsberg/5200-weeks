import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Year } from './';

export default {
  title: '5200Weeks/Year',
  component: Year,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Year>;

const Template: ComponentStory<typeof Year> = (args) => <Year {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   // primary: true,
//   // label: 'Button',
// 	title: 'test',
// 	backgroundColor: '#FFF',
// };

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
