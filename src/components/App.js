import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import BookList from './BookList';

export default class App extends Component {
	state = { books: [] }

	onSearchSubmit = async (term) => {
		const books = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + term)
		
		this.setState({ books })
	}

	render() {
		if (this.state.books.length === 0) {
			return (
				<div className="ui container">
					<SearchBar onSubmit={this.onSearchSubmit} />
				</div>
			);
		} else {
			return (
				<div className="ui container">
					<SearchBar onSubmit={this.onSearchSubmit} />
					<BookList books={this.state.books} />
				</div>
			);
		}
	}
}

