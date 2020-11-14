import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { employmentsThunk } from '../../reducers/EmploymentsReducer'
import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        background-color: green;
    `

export default () => {

    return (
        <Wrapper>
            <ul>
                <h1>Experience</h1>
                <p>Place holder</p>
            </ul>
        </Wrapper>
    )
}





