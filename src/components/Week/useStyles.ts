import {createUseStyles} from 'react-jss';

export type StyleProps = {
	backgroundColor?: string,
}

const useStyles = createUseStyles({
	circle: {
		width: '1.5rem',
		height: '1.5rem',
		borderRadius: '50%',
		border: '1px solid #ccc',
		backgroundColor: ({ backgroundColor }: StyleProps) => backgroundColor ? backgroundColor : '#FFF',
		margin: '0.05rem',
		cursor: 'pointer',
	},
});

export default useStyles;