import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      rating: ''
    }
    this.updateName = this.updateName.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.add = this.add.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updateRating(e) {
    this.setState({
      rating: e.target.value
    })
  }

  add() {
    this.props.onAdd(this.state.name, this.state.rating);
  }
  
  render () {
    return (<div>
      Name: <input onChange={this.updateName} value={this.state.name}></input>
      <br />
      Rating: <input onChange={this.updateRating} value={this.state.rating}></input>
      <button onClick={this.add}>Add Movie</button>
    </div>)
  }
}

export default AddMovie;
