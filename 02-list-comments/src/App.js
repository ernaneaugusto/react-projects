import React, {Component} from 'react';
import './App.css';

import Comments from './Comments'
import NewComment from './NewComment'

class App extends Component {
  state = {
    comments: [],    
    countComments: 0
  }

  sendComment = commentOfNewComment => {
    if(commentOfNewComment.trim() !== '')
      this.setState({      
        comments: [
          ...this.state.comments, 
          commentOfNewComment
        ],
        countComments: this.state.countComments+1
      })
    else
      alert('Campo comentário deve ser preenchido!')
      return
  }

  render() {
    return (
      <main className="App container">
        <div className="row">
          <div className="col l10 offset-l1">
            <div className="card-panel card-item">

              <div className="row">
                <NewComment sendComment={this.sendComment}/>   
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
