import React from 'react';

import { Year } from './components/Year';

import { WeekProps } from './components/Week';

// import * as types from 'types';
// import * as types from 'types';

function App() {
	const weeks: WeekProps[] = [];
	for (let i = 1; i <= 52; i++) {
		weeks.push({
			title: `week${i}`,
			backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		});
	}

  return (
    <div className="App">
      <Year number={0} weeks={weeks} />
    </div>
  );
}

export default App;
