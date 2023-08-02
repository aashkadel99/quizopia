import React from 'react'

const Score = ({username, score}) => {
  return (
    <div>{username + score}</div>
  )
}

export default Score;