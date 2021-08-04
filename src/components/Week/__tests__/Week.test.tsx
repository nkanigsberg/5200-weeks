import React from 'react';
import { render } from '@testing-library/react';
import { Week } from '..';

describe(`<Week />`, () => {
	test(`should render`, () => {
		expect.assertions(1);

		const { getByText, getByTitle } = render(<Week data={{ text: '123', color: 'red' }} />);
		// const week = getByText(`O`);
		const week = getByTitle(`123`);
		
		expect(week).toBeInTheDocument();
	});
});