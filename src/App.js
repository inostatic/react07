import React, { useEffect } from 'react'
import './App.scss'
import { getData, searchByStrAC, sortByHeaderAC } from './redux/reducers/action'
import { useDispatch, useSelector } from 'react-redux'
import { Task } from './components/Task'
import { TableHeader } from './components/TableHeader'
import { Search } from './components/Serach'

export const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data.data)

  useEffect(() => {
    dispatch(getData())
  }, [])

  const HandlerSearch = React.useCallback((str) => {
    dispatch(searchByStrAC(str))
  }, [])

  const HandlerSort = React.useCallback((key) => {
    dispatch(sortByHeaderAC(key))
  }, [])

  return (
    <div className="App">
      <Search HandlerSearch={HandlerSearch} />
      <div className="table">
        <TableHeader HandlerSort={HandlerSort} />
        {data &&
          data.map((item, index) => <Task key={index + item.name} {...item} />)}
        {!data.length && <div className="data-empty">Записи не найдены</div>}
      </div>
    </div>
  )
}
