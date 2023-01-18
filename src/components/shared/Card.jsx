import React from 'react'
import propTypes from 'prop-types';

const Card = ({children, reverse}) => {
  return (
    <div className={`card ${reverse && 'reverse'}` } >
        {children}
    </div>
  )
}


Card.defaultProps = {
    reverse : true
}



Card.propTypes  = {
    children : propTypes.node.isRequired,
    reverse: propTypes.bool,
}


export default Card