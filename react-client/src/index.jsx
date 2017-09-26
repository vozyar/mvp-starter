// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import List from './components/List.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       items: []
//     }
//   }

//   componentDidMount() {
//     $.ajax({
//       url: '/items', 
//       success: (data) => {
//         this.setState({
//           items: data
//         })
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });
//   }


//  onMakeDecision () {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// }


// onFormSubmit (e) {
//   e.preventDefault();
//   //this one allow us to prevent whole page rendering
//   const option = e.target.elements.option.value;
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//   }
// }


//   render() {
//     return (
//        <div>
//         <h1>{app.title}</h1> 
//         <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//         <button onClick={onMakeDecision}>Which movie should I watch?</button>
//         <button onClick={onRemoval}>RemoveAll</button>
//         <ol>
//         {
//           app.options.map((option) => {
//             return <li key={option}>{option}</li>
//           })
//         }
//        </ol>
//         <form onSubmit={onFormSubmit}>
//           <input type="text" name="option"/>
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
import AddMovie from './components/AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
    }
    this.addMovieItem = this.addMovieItem.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  addMovieItem (name, rating) {
    $.ajax({
      url: '/movies',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ name, rating }), 
      success: (data) => {
        console.log(data);
        this.getMovies();
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      }
    });
  }
  
  getMovies () {
    $.ajax({
      url: '/movies', 
      success: (data) => {
        this.setState({
          list: data
        });
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render () {
    console.log('LIST: ', this.state.list)
    return (<div>
      <h1>Movie List</h1>
      <AddMovie onAdd={this.addMovieItem}/>
      <MovieList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import List from './components/List.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       items: []
//     }
//   }

//   componentDidMount() {
//     $.ajax({
//       url: '/items', 
//       success: (data) => {
//         this.setState({
//           items: data
//         })
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });
//   }


//  onMakeDecision () {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// }


// onFormSubmit (e) {
//   e.preventDefault();
//   //this one allow us to prevent whole page rendering
//   const option = e.target.elements.option.value;
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//   }
// }


//   render() {
//     return (
//        <div>
//         <h1>{app.title}</h1> 
//         <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//         <button onClick={onMakeDecision}>Which movie should I watch?</button>
//         <button onClick={onRemoval}>RemoveAll</button>
//         <ol>
//         {
//           app.options.map((option) => {
//             return <li key={option}>{option}</li>
//           })
//         }
//        </ol>
//         <form onSubmit={onFormSubmit}>
//           <input type="text" name="option"/>
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));