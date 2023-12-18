import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	};

	componentDidMount() {
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
			context: this,
			state: 'fishes',
		});
	}

	componentWillUnmount() {
		base.removeBinding(this);
	}

	addFish = (fish) => {
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = (key) => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	};

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline='Fresh Seafood Market' />
					<ul className='fishes'>
						{Object.keys(this.state.fishes).map((key) => (
							<Fish
								key={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
								index={key}
							/>
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish} />
			</div>
		);
	}
}

function AppWithParams() {
	const params = useParams();
	return <App params={params} />;
}

export default AppWithParams;
