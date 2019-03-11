import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

export default class App extends Component {
	state = { books: [] }

	onSearchSubmit = async (term) => {
		const books = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + term)
		
		this.setState({ books })
	}

	render() {
		console.log(this.state.books)
		return (
			<SearchBar onSubmit={this.onSearchSubmit} />
		);
	}
}

