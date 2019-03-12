import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {

	//map over all of the book items to create a new card for each one in the list
	const books = props.books.data.items.map((book) => {
		return (
			<BookCard 
				image={book.volumeInfo.imageLinks.thumbnail}
				title={book.volumeInfo.title} 
				author={book.volumeInfo.authors[0]} 
				description={book.volumeInfo.description}
				key={book.id}
			/>
		); 
	})

	return (
		<div>{books}</div>
	);
}

export default BookList;