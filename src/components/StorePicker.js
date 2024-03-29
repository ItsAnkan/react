import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = (event) => {
		event.preventDefault();
		console.log(this.myInput.current.value);
		console.log(this);
		this.props.navigation.navigate(`/${this.myInput.current.value}`);
	};

	render() {
		return (
			<form className='store-selector' onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					type='text'
					ref={this.myInput}
					required
					placeholder='Store Name'
					defaultValue={getFunName()}
				/>
				<button type='submit'>Visit Store →</button>
			</form>
		);
	}
}

export default StorePicker;
