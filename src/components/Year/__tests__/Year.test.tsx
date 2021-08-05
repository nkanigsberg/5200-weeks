import React from 'react';
import { render } from '@testing-library/react';
import { Year } from '..';

import { WeekProps } from 'components/Week';

// import * as types from 'types';

describe(`<Year />`, () => {
	const weeks: WeekProps[] = [];
	for (let i = 0; i < 52; i++) {
		weeks.push({
			title: `week${i}`,
			backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		});
	}

	test(`should render year number`, () => {
		expect.assertions(1);

		const { getByText } = render(<Year number={27} weeks={weeks} />);
		const yearNumber = getByText(`27`);
		expect(yearNumber).toBeInTheDocument();
	});

	test(`should render list of weeks`, () => {
		expect.assertions(1);

		const { getByTitle } = render(<Year number={27} weeks={weeks} />);
		const week0 = getByTitle(`week0`);
		expect(week0).toBeInTheDocument();
	});
});