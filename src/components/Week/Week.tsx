import React, { FC } from 'react';
import useStyles from './useStyles';

// import * as types from 'types';

export type Props = {
	title?: string;
	backgroundColor?: string;
	onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
};

const Week: FC<Props> = ({ 
	title,
	backgroundColor,
	onClick,
 }) => {
	const { circle } = useStyles({ backgroundColor });

	return (
		<button type="button" className={circle} title={title} onClick={onClick} >
		</button>
	)
}

export default Week;
