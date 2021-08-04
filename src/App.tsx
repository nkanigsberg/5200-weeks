import React from 'react';

import { Year } from './components/Year';

import * as types from 'types';

function App() {
	const weeks: types.IWeek[] = [];
	for (let i = 0; i < 52; i++) {
		weeks.push({
			text: `week${i}`,
			color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		});
	}

  return (
    <div className="App">
      <Year number={0} weeks={weeks} />
    </div>
  );
}

export default App;
