import React from 'react';
import './App.css';
import YoutubeEmbed from './video.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {
        results: [],
        on_hover: false
        
      },
      trailers: "XdKzUbAiswE"
    }
  }

  componentDidMount() {
    // this is where you load things from the internet
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then(response => response.json())
      .then(data => this.setState({movies: data}));
  }

  

  render() {

    const movies = [];
    
    for(let i = 0; i < this.state.movies.results.length; i++)
    {
      movies.push(<div className="itemContainer">
        <div>
        <li className="item">
          <img className="image" src={"https://image.tmdb.org/t/p/w200/" + this.state.movies.results[i].poster_path}/></li>
          </div>
        <div>
        <div className="info" onMouseEnter={() => this.setState({on_hover: true})}>
          <h1>
            <li>{this.state.movies.results[i].title}</li>
          </h1>
            <li>{this.state.movies.results[i].overview}</li>
            <iframe src="{this.state.trailers}" ></iframe>
          </div>
        </div> 
      </div>)

}

    return (
      <div>
        <div className="logo">NETFLIX</div>
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
