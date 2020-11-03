import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userThunk } from '../../reducers/CurrentUserReducer'

export default ({ userId }) => {
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userThunk(userId))
    }, [])

    return (
        <div>
            <h1>{currentUser.name}</h1>
            <p>{currentUser.title} in {currentUser.location}</p>
        </div>
    )
}

    
