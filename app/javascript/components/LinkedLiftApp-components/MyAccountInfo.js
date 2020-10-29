import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nameAndTitleThunk } from '../../reducers/UsersReducer'

export default () => {
    const name = useSelector(state => state.users.name)
    const title = useSelector(state => state.users.title)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>{name}</h3>
            <p>{title}</p>
            <button onClick={() => dispatch(nameAndTitleThunk())}>Get Name and Title</button>
        </div>
    )
}

