import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes  from 'prop-types';

function Movie({poster, title, year, genres, summary, rating}) {
    return (
        <li>
            <Link to="/movie-detail" state={{poster, title, year, genres, summary, rating}}>
            <img src={poster} alt={title}/>
            <p>
                <span className='title'>{title}</span>
                <span className='year'>{year}</span>
                <span className='type'>{genres && genres.join(', ')}</span>
                <span className='summary'>{summary ? summary.slice(0, 200): ''}</span>
                <span className='rating'>{rating}</span>
            </p>
            </Link>
        </li>
    );
}

Movie.propTypes = {
    id: PropTypes.number,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number,
};

export default Movie;