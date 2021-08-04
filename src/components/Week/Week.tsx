import React, { FC } from 'react';
import useStyles from './useStyles';

import * as types from 'types';

type Props = {
	data: types.IWeek;
}

const Week: FC<Props> = ({ 
	data
 }) => {
	const { circle } = useStyles({ backgroundColor: data.color });

	return (
		<div className={circle} title={data.text}>
		</div>
	)
}

export default Week;
