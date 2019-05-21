import React, {Component} from 'react'
import Comment from './Comment'

class Comments extends Component {
  render(){
    return (
      <div className="col s12">
        <p>Numero de comentários: <strong>{this.props.countComments}</strong></p>
        {this.props.comments.map( item => {
          return <Comment comment={item} />
        })}
      </div>
    )
  }
}

export default Comments
