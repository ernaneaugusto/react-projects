import React, {Component} from 'react';
import './App.css';

import Comments from './Comments'

class App extends Component {
  state = {
    comments: [],
    newComment: '',
    countComments: 0
  }

  sendComment = () => {
    if(this.state.newComment.trim() !== '')
      this.setState({      
        comments: [
          ...this.state.comments, 
          this.state.newComment
        ],
        newComment: '',
        countComments: this.state.countComments+1
      })
    else
      alert('Campo comentário deve ser preenchido!')
      return
  }

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })    
  }  

  render() {
    return (
      <main className="App container">
        <div className="row">
          <div className="col l10 offset-l2">
            <div className="card-panel card-item">

              <div className="row">

                <div className="col s12">
                  <h5>Adicione um comentário:</h5>
                  <textarea name="comment" id="comment" placeholder="Escreva um comentário..." rows="8" value={this.state.newComment} onChange={this.handleChange} required></textarea> 
                  <br/>
                  <button className="btn waves-effect teal" onClick={this.sendComment}>Adicionar comentário</button>                  
                </div>  

                <Comments comments={this.state.comments} countComments={this.state.countComments} />

              </div>

            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
