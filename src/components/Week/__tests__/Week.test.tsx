import React from 'react';
import { render } from '@testing-library/react';
import { Week } from '..';

describe(`<Week />`, () => {
	test(`should render`, () => {
		expect.assertions(1);

		const { getByTitle } = render(<Week title={'test123'} />);
		// const week = getByText(`O`);
		const week = getByTitle(`test123`);
		
		expect(week).toBeInTheDocument();
	});
});