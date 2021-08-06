import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Lifetime } from './';
import { YearProps } from 'components/Year';
import { WeekProps } from 'components/Week';

export default {
  title: '5200Weeks/Lifetime',
  component: Lifetime,
} as ComponentMeta<typeof Lifetime>;

const Template: ComponentStory<typeof Lifetime> = (args) => <Lifetime {...args} />;


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

const years: YearProps[] = [];
for (let i = 0; i < 100; i++) {
	years.push({
		number: i,
		weeks: generateWeeks({}),
	})
}

export const Default = Template.bind({});
Default.args = {
	years: years,
};

// export const RandomColors = Template.bind({});
// RandomColors.args = {
// 	number: 42,
// 	weeks: generateWeeks({ randomColor: true }),
// };