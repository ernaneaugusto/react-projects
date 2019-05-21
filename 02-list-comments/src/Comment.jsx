import React, {Component} from 'react'

class Comment extends Component{
  render(){
    return (
      <div className="col s12">
        {this.props.comment}
      </div>
    )
  }
}

export default Comment