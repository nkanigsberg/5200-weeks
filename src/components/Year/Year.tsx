import React, { FC } from 'react';
import useStyles from './useStyles';

import { Week, WeekProps } from '../Week';

// import * as types from 'types';

type Props = {
	number: number;
	weeks: WeekProps[];
}

const Year: FC<Props> = ({
	number,
	weeks,
}) => {
	const { root, titleStyles, weekListStyles } = useStyles();

	return (
		<div className={root}>
			<h2 className={titleStyles}>{number}</h2>

			<ul className={weekListStyles}>
				{weeks.map((week, index) => {
					return (
						<li key={index}>
							<Week
								title={week.title}
								backgroundColor={week.backgroundColor}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Year;
