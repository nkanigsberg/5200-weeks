import React, { FC } from 'react';
import useStyles from './useStyles';

import { Week } from '../Week';

import * as types from 'types';


type Props = {
	number: number;
	weeks: types.IWeek[];
}

const Year: FC<Props> = ({
	number,
	weeks,
}) => {
	return (
		<div>
			<h2>Year {number}</h2>

			{weeks.map((week, index) => {
				return (
					<Week
						key={index}
						data={week}
					/>
				)
			})}
		</div>
	)
}

export default Year;
