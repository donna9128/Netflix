import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {
        results: [],
        on_hover: false
      }
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
        <li className="item">
          <img className="image" src={"https://image.tmdb.org/t/p/w200/" + this.state.movies.results[i].poster_path
}/></li>
      
      </div>)
    }

    // const movies = this.state.movieTitles.map(movie => {
    //   return <li>{movie}</li>
    // });
    for(let i = 0; i < this.state.movies.results.length; i++)
    {
      movies.push(<div onMouseEnter={() => this.setState({on_hover: true })} className="itemContainer">
        <li className="pop">{this.state.movies.results[i].overview}</li>
        </div>)
    }
    if (this.state.on_hover) {
      return (<div className="pop"></div>);
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
