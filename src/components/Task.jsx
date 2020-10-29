import React from 'react'

export const Task = ({ id, name, sites, type, status }) => {
  const site = sites ? `${sites} site` : sites

  return (
    <div className="task-item">
      <div>{name}</div>
      <div>{site}</div>
      <div className="orange">{type}</div>
      <div>
        {status === 'blocked' ? <i className="material-icons">lock</i> : ''}
        {status === 'disable' ? <span className="disable">OFF</span> : ''}
        {status === 'enable' ? <span className="enable">ON</span> : ''}
      </div>
    </div>
  )
}
