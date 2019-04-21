import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  //render : componentWillMount() -> render() -> componentDidMount()
  //update : componentWillReceiveProps() -> shouldComponentUpdate -> componentWillUpdate() -> render() -> component
  state = {};

  componentDidMount() {
    this._getMovie();
  }

  _getMovie = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    ) // 작업한것이 then 으로 넘어감
      .then(response => response.json()) // 작업한것이 다음 then으로 넘어감
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };
  _renderMoive = () => {
    var movies = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };
  render() {
    //render 의 state 가 변경되면 자동으로 render 한번 더 실행
    return (
      //js 안에 자리잡고 있는 html을 jsx 라고 함
      //jsx 는 리액트 컴포넌트를 만들때 사용하는 언어
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.greeting}
        {this.state.movies ? this._renderMoive() : "Loadig ..."}
      </div>
    );
  }
}

export default App;
