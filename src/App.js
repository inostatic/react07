import React, {useEffect} from 'react'
import './App.scss';
import {getData} from "./redux/reducers/data";
import {useDispatch, useSelector} from "react-redux";
import {Task} from "./components/Task";

export const App = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.data)

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
            <div className='App'>
                <h1>Task</h1>
                <div className="task header">
                    <div className="task__container">
                        <div><b>id</b></div>
                        <div><b>name</b></div>
                        <div><b>sites</b></div>
                        <div><b>type</b></div>
                    </div>
                </div>
                {
                    data &&
                        data.map((item, index) => <Task key={index} {...item} />)
                }
            </div>
    )
}
