import React, {Component} from 'react'

class NewComment extends Component{

  state = {
    newComment: '',
    counterComments: 0
  }

  sendNewComment = () => {
    this.props.sendComment(this.state.newComment)
    this.setState({
      newComment: ''
    })  
  }

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })    
  }  

  render(){
    return (
      <div className="col s12">
        <h5>Adicione um comentário:</h5>
        <textarea name="comment" id="comment" placeholder="Escreva um comentário..." rows="8" value={this.state.newComment} onChange={this.handleChange} required></textarea> 
        <br/>
        <button className="btn waves-effect teal" onClick={this.sendNewComment}>Adicionar comentário</button>
      </div>  
    )
  }
}

export default NewComment