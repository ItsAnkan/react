import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	};

	addFish = (fish) => {
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = (key) => {};

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline='Fresh Seafood Market' />
					<ul className='fishes'>
						{Object.keys(this.state.fishes).map((key) => (
							<Fish key={key} details={this.state.fishes[key]} />
						))}
					</ul>
				</div>
				<Order />
				<Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish} />
			</div>
		);
	}
}

export default App;
