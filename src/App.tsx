import React from 'react';

import { Year, YearProps } from './components/Year';

import { WeekProps } from './components/Week';
import { Lifetime } from 'components/Lifetime';

function App() {
	const generateWeeks = ({ randomColor }: {randomColor?: boolean}) => {
		const result: WeekProps[] = [];
		for (let i = 1; i <= 52; i++) {
			result.push({
				title: `week${i}`,
				backgroundColor: randomColor ? `#${Math.floor(Math.random() * 16777215).toString(16)}` : '#FFF',
			});
		}	

		return result;
	};

	const years: YearProps[] = [];
	for (let i = 0; i < 100; i++) {
		years.push({
			number: i,
			weeks: generateWeeks({}),
		})
	}

  return (
    <div className="App">
			<Lifetime years={years} />
    </div>
  );
}

export default App;
