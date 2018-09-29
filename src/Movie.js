import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

// class Movie extends Component {

//     static propTypes = {
//         title: PropTypes.string.isRequired, // title은 string 값만을 넘겨야하고 title 이 무조건 있어야함
//         poster: PropTypes.string.isRequired
//     }

//     //return 은 하나의 태그만 가능 ( 태그안에 태그는 하나로 취급 )
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster} />

//             </div>
//         )
//     }
// }

function Movie({ title, poster, genres, synopsis}) {
    return (
        <div className="Movie__Columms">
            <MoviePoster poster={poster} alt={title} />
            <div className="Movie__Columms">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                  {genres.map((genre, index) => <MoiveGenre genre ={genre} key={index} />)} 
                </div>
                <div className="Movie__Synopsis">
                   <MovieSynopsis synopsis={synopsis}/>
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}


// class MoviePoster extends Component{
//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }
//     render(){

//         return (
//             <img src ={this.props.poster}/>
//         )
//     }
// }

//
function MovieSynopsis({synopsis}){
    return (
        <p>
            {synopsis}
        </p>
    )
}

function MoiveGenre({genre}){
    return (
        <span className="Movie_genre">{genre} </span>
    )
}

function MoviePoster({ poster, alt }) {
    return (
        <img title={alt} src={poster}/>
    )
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

export default Movie;