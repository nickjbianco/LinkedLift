import React, { useState } from 'react'
import GymsFeedComponent from './GymsFeedComponent'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: yellow;
`

export default () => {
    const [descriptionOne, setDescriptionOne] = useState('Search by title or company')
    const [descriptionTwo, setDescriptionTwo] = useState('Search by location')

    const handleGymSearch = (e) => {
        e.preventDefault()
        console.log('working')
        setDescriptionOne('Search by title or company')
        setDescriptionTwo('Search by location')
    }

    return (
        <div>
            <Wrapper>
                <h1>Search for your next gym</h1>
                <form onSubmit={handleGymSearch}>
                    <textarea
                        placeholder={descriptionOne}
                        onChange={(e) => setDescriptionOne(e.target.value)}
                    />
                    <textarea
                        placeholder={descriptionTwo}
                        onChange={(e) => setDescriptionTwo(e.target.value)}
                    />
                    <button>Search</button>
                </form>
            </Wrapper>

            <GymsFeedComponent />
        </div>
    )
}