import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Year } from './';
import { WeekProps } from 'components/Week';

export default {
  title: '5200Weeks/Year',
  component: Year,
} as ComponentMeta<typeof Year>;

const Template: ComponentStory<typeof Year> = (args) => <Year {...args} />;


const generateWeeks = ({ randomColor }: {randomColor?: boolean}) => {
	const result: WeekProps[] = [];
	for (let i = 1; i <= 52; i++) {
		result.push({
			title: `week${i}`,
			backgroundColor: randomColor ? `#${Math.floor(Math.random() * 16777215).toString(16)}` : '#FFF',
		});
	}	

	return result;
};

export const Empty = Template.bind({});
Empty.args = {
	number: 42,
	weeks: generateWeeks({}),
};

export const RandomColors = Template.bind({});
RandomColors.args = {
	number: 42,
	weeks: generateWeeks({ randomColor: true }),
};