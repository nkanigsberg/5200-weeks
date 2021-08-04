import {createUseStyles} from 'react-jss';

export type StyleProps = {
	backgroundColor?: string,
}

const useStyles = createUseStyles({
	circle: {
		width: '2rem',
		height: '2rem',
		borderRadius: '50%',
		border: '1px solid #ccc',
		backgroundColor: ({ backgroundColor }: StyleProps) => backgroundColor ? backgroundColor : '#FFF',
	},
});

export default useStyles;