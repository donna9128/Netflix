import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {
        results: [],
        on_hover: false
        
      },
      trailers: "1IsL6g2ixak",
      show_info: false

    }
  }

  componentDidMount() {
    // this is where you load things from the internet
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then(response => response.json())
      .then(data => this.setState({movies: data}));
  }

    posterClick(num) {
      console.log(num)
    }

  render() {

    const movies = [];
    
    for(let i = 0; i < this.state.movies.results.length; i++)
    {
      movies.push(<div className="itemContainer">
        <div id={i.length} onClick={() => this.posterClick(this.state.movies.results[i])} >
        <li className="item">
          <img className="image" src={"https://image.tmdb.org/t/p/w200/" + this.state.movies.results[i].poster_path}/></li>
          </div>
        <div>
        <div className="info">
          <h1>
            <li>{this.state.movies.results[i].title}</li>
          </h1>
            <li>{this.state.movies.results[i].overview}</li>
            <iframe src={"https://www.youtube.com/embed/" + this.state.trailers} ></iframe>
          </div>
        </div> 
      </div>)

}

    return (
      <div>
        <div className="logo">NETFLIX</div>
        <div className={this.state.show_info?"show_movie":"hide_movie"}>
          {/* this h1 will display info from posterClick ^^ */}
          <h1>Movie info</h1>
        </div>
        <p className ="text">We have 20 movies ...</p>
          <div className="App">
            
            <ul className="list">
          {movies}
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
