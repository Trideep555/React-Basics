import React from 'react'
import { useParams } from 'react-router-dom'

function Search() {
  const { value } = useParams();
  return (
    <div>You Searched for {value}</div>
  )
}

export default Search