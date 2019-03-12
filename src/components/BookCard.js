import React from 'react';

const BookCard = (props) => {

	return (
		<div className="ui card">
		  <div className="image">
		    <img src={props.image} alt={props.title} />
		  </div>
		  <div className="content">
		    <h2 className="header">{props.title}</h2>
		    <div className="meta">
		      <span className="date">Written by {props.author}</span>
		    </div>
		    <div className="description">
		      {props.description}
		    </div>
		  </div>
		  <div className="extra content">
		  	<a href={props.previewLink} target="_blank" rel="noopener noreferrer">
		    	<button className="ui secondary button">Preview</button>
		    </a>
		    <a href={props.buyLink} target="_blank" rel="noopener noreferrer">
		    	<button className="ui primary button">Buy Me!</button>
		    </a>
		  </div>
		</div>
	);
}

export default BookCard;