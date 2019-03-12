import '../css/SearchBar.css';
import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { term: '' };

	//prevent page automatic reload and submit the term to the api in App.js
	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment">
				<h1>Google Book Search API</h1>
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="ui huge icon input">
						<input 
							type="text" 
							placeholder="Search" 
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
						<i className="search icon"></i>
					</div>
				</form>
			</div>
		);
	}
}