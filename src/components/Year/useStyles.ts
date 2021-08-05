import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		display: 'flex',
	},
	titleStyles: {

	},
	weekListStyles: {
		listStyle: 'none',
		display: 'grid',
		gridTemplateColumns: 'repeat(52, 1fr)',
	}
});

export default useStyles;