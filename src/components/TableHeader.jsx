import React, { useState } from 'react'

export const TableHeader = ({ HandlerSort }) => {
  const [before, after] = ['arrow_drop_down', 'arrow_drop_up']
  const stateArrow = ['name', 'sites', 'type', 'status'].reduce(
    (a, e) => ({ ...a, [e]: { el: before, flag: false } }),
    {}
  )
  const [sortItem, setSortItem] = useState(stateArrow)

  const sortChangeArrow = (key) => {
    const el = after
    const flag = !sortItem[key].flag
    sortItem[key].el === before
      ? setSortItem({ ...stateArrow, [key]: { el, flag } })
      : setSortItem({ ...stateArrow })
  }

  function sortBy(key) {
    return () => {
      sortChangeArrow(key)
      HandlerSort({ key, flag: sortItem[key].flag })
    }
  }

  return (
    <div className="table-header">
      <div onClick={sortBy('name')}>
        <b>
          Tool name<span className="material-icons">{sortItem.name.el}</span>
        </b>
      </div>
      <div onClick={sortBy('sites')}>
        <b>
          Used on<span className="material-icons">{sortItem.sites.el}</span>
        </b>
      </div>
      <div onClick={sortBy('type')}>
        <b>
          Type<span className="material-icons">{sortItem.type.el}</span>
        </b>
      </div>
      <div onClick={sortBy('status')}>
        <b>
          Status<span className="material-icons">{sortItem.status.el}</span>
        </b>
      </div>
    </div>
  )
}
