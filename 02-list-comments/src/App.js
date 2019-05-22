import React, {Component} from 'react'
import './App.css';

import Comments from './Comments'
import NewComment from './NewComment'

import {database} from './firebase'

class App extends Component {
  state = {
    comments: {},    
    countComments: 0,
    isLoading: false
  }

  componentDidMount(){
    this.setState({ isLoading: true})
    this.comments = database.ref('comments')

    this.comments.on('value', snapshot => {
      const getCommentsFirebase = snapshot.val()
      const numberComments = Object.keys(getCommentsFirebase).length
      
      this.setState({
        comments: getCommentsFirebase,
        isLoading: false,
        countComments: numberComments
      })            
    })    
    
  }

  sendComment = commentOfNewComment => {
    const id = database.ref().child('comments').push().key
    const newComment = {}
    const comment = commentOfNewComment    
    
    if(commentOfNewComment.trim() !== ''){
      newComment['comments/'+id] = { comment }
      database.ref().update(newComment)
    }
    else{
      alert('Campo comentário deve ser preenchido!')
      return
    }
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
                {
                  this.state.isLoading && <p>Carregando comentários...</p>
                }
              </div>

            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
