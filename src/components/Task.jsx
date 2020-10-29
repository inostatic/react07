import React from 'react'
import classNames from 'classnames'

export const Task = ({id, name, sites, type, status}) => {

    const className = classNames({
        'task': true,
        'blocked': status === 'blocked',
        'disable': status === 'disable'
    })
  return (
    <div className={className}>
      <div className="task__container">
          <div>{id}</div>
          <div>{name}</div>
          <div>{sites}</div>
          <div>{type}</div>
      </div>
    </div>
  )
}