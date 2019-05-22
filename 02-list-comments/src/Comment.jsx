import React, {Component} from 'react'

class Comment extends Component{
  render(){
    return (
      <div className="col s12">
        <p>{this.props.comment.comment}</p>
      </div>
    )
  }
}

export default Comment