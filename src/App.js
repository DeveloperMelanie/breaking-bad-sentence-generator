import { useState, useEffect } from 'react'

import Sentence from './components/Sentence'
import Spinner from './components/Spinner'

import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`

const Button = styled.button`
    background: -webkit-linear-gradient(
        top left,
        #007d35 0%,
        #007d35 40%,
        #0f574e 100%
    );
    background-size: 308px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid #000;
    cursor: pointer;
    transition: background-size 0.8s ease;

    &:hover {
        background-size: 400px;
    }
`

export default function App() {
    const [sentence, setSentence] = useState({})
    const [loading, setLoading] = useState(false)

    const getSentence = async () => {
        setLoading(true)

        const response = await fetch(
            'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
        )
        const data = await response.json()
        setSentence(data[0])

        setLoading(false)
    }

    useEffect(() => {
        getSentence()
    }, [])

    return (
        <Container>
            {loading ? <Spinner /> : <Sentence sentence={sentence} />}
            <Button onClick={getSentence}>Obtener Frase</Button>
        </Container>
    )
}
