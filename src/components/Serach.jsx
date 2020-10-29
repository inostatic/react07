import React, { useState } from 'react'

export const Search = ({ HandlerSearch }) => {
  const [text, setText] = useState('')

  const search = () => {
    HandlerSearch(text)
  }

  return (
    <div className="search">
      <button onClick={search}>
        <span className="material-icons">search</span>
      </button>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  )
}
