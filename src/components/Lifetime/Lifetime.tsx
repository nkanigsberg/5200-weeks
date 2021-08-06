import React from 'react';
import useStyles from './useStyles';

import { Year, YearProps } from 'components/Year';


export type Props = {
	years: YearProps[];
}

const Lifetime = ({
	years,
}: Props) => {
const { lifetime } = useStyles();

	return (
		<div className={lifetime}>
			{years.map(year => {
				return (
					<Year key={year.number} number={year.number} weeks={year.weeks} />
				)
			})}
		</div>
	)
}

export default Lifetime;
