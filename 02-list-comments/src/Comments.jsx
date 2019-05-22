import React from 'react'
import Comment from './Comment'

const Comments = props => {
    const keys = Object.keys(props.comments)    
    return (
      <div className="col s12">
        <p>Numero de comentários: <strong>{props.countComments}</strong></p>
        {keys.map( key => <Comment key={key} comment={props.comments[key]} />)}
      </div>
    )
}

export default Comments
