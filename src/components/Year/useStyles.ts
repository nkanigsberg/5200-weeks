import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		margin: 0,
	},
	titleStyles: {
		fontSize: '1rem',
		margin: 0,
		width: '3rem',
		
	},
	weekListStyles: {
		listStyle: 'none',
		display: 'grid',
		gridTemplateColumns: 'repeat(52, 1fr)',
		margin: 0,
	}
});

export default useStyles;