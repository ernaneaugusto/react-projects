import React from 'react'

const Comment = props => {  
  return (
    <div className="col s12">
      <p>{props.comment.comment}</p>
    </div>
  )  
}

export default Comment