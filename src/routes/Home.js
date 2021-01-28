import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

/**
 * state는 object이다
 * state 변경시 render 함수를 재호출하기 위해서 setState를 사용해야함
 * setState를 호출할때마다 react는 새로운 state와 함께 render function을 호출함
 */
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(()=>{
    //     this.setState({isLoading : false});
    // }, 6000);
    // fetch
    // axios
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader __text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
          {
            movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres = {movie.genres}
                />
              );
            })
          }
          </div>
        )}
      </section>
    );
  }
}

export default Home;
