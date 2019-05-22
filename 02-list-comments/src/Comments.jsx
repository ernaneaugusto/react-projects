import React, {Component} from 'react'
import Comment from './Comment'

class Comments extends Component {
  render(){
    const keys = Object.keys(this.props.comments)    

    return (
      <div className="col s12">
        <p>Numero de comentários: <strong>{this.props.countComments}</strong></p>
        {keys.map( key => <Comment key={key} comment={this.props.comments[key]} />)}
      </div>
    )
  }
}

export default Comments
