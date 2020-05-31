import React from 'react';
import Title from './Title';

class App extends React.PureComponent {
	abc = 'abc';

	render(): JSX.Element {
		return (
			<div>
				<Title data-testid="hello" className="hello">Hello World!</Title>
			</div>
		);
	}
}

export default App;
