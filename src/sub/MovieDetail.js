import React from 'react';
import {useLocation} from 'react-router-dom';

function MovieDetail() {
    const location = useLocation();
    const {poster, title, year, genres, summary, rating} = location.state || {};

    return (
        <div className='movie-detail'>
            <img src={poster} alt={title}/>
            <p>
                <span className='title'>{title}</span>
                <span className='year'>{year}</span>
                <span className='type'>{genres}</span>
                <span className='summary'>{summary || '요약 정보 없음'}</span>
                <span className='rating'>⭐ {rating}</span>
            </p>
        </div>
    );
}

export default MovieDetail;