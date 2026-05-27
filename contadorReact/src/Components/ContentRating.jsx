
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totales: 0
    };
  }
  handleLike = () => {
    this.setState(
       (prevstate) => ({likes: prevstate.likes + 1, totales: prevstate.totales + 1})); 
  }
  handleDislike = () => {
    this.setState((prevstate) =>({dislikes: prevstate.dislikes + 1, totales: prevstate.totales + 1})); 
  }
  render() {
    return (
     <>
    <div className='content-rating'>
      <p>Te gusta La musica Lofi-HipHop</p>
      <div className='rating-buttons'>
        <button onClick={this.handleLike} className='btn_like'>
          Likes: {this.state.likes}
        </button>
        <button onClick={this.handleDislike} className='btn_dislike'>
          Dislikes: {this.state.dislikes}
        </button>
      </div>
      <p>Calificaciones totales: ({this.state.totales})</p>
    </div>
     </>
    );
  }
}

export default ContentRating;
