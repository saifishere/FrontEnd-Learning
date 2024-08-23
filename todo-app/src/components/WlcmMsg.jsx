import React from 'react'

const WlcmMsg = ({todoItems}) => {
  return (
    todoItems.length === 0 &&<center><h1>Enjoy Your Day</h1></center>
  )
}

export default WlcmMsg
