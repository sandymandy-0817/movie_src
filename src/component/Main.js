import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../sub/Movie';
import '../css/main.css';
import '../css/tablet.css';
import '../css/mobile.css';

class Main extends Component {
    state = {
        isLoading:true,
        movies:[],
    }

    getMovies = async()=> {
        const{
            data:{
                data:{movies},
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year');

        console.log(movies);

        this.setState({movies, isLoading:false});
    }

    componentDidMount() {
        this.getMovies();
        setTimeout(()=> {
            this.setState({isLoading:false})
        }, 3000);
    }
    render() {
        const {isLoading, movies} = this.state;
        return (
            <div className='list'>
                {/* 방법1 - 문자로 표시 */}
                {/* {isLoading?'Loading....':'데이터 로딩 완료'} */}
                {/* 방법2 - 이미지로 표현 */}
                {isLoading?<img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} className='loading_img'/>:(<article>
                <ul className="movie-list">
                    {movies.map((movie) => (
                        <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                        rating={movie.rating}
                        />
                    ))}
                </ul>
            </article>)} 
                {/* {isLoading?<img src={`${process.env.PUBLIC_URL}/images/loader.jpg`} className='loading_img' />:'데이터 로딩 완료'} */}
            </div>
        );
    }
}

export default Main;