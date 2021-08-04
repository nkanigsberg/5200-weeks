import React from 'react';
import { render } from '@testing-library/react';
import { Year } from '..';

import * as types from 'types';

describe(`<Year />`, () => {
	const weeks: types.IWeek[] = [];
	for (let i = 0; i < 52; i++) {
		weeks.push({
			text: `week${i}`,
			color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		});
	}

	test(`should render year number`, () => {
		expect.assertions(1);

		const { getByText } = render(<Year number={27} weeks={weeks} />);
		const yearNumber = getByText(`Year 27`);
		expect(yearNumber).toBeInTheDocument();
	});

	test(`should render list of weeks`, () => {
		expect.assertions(1);

		const { getByTitle } = render(<Year number={27} weeks={weeks} />);
		const week0 = getByTitle(`week0`);
		expect(week0).toBeInTheDocument();
	});
});