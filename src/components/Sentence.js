import styled from '@emotion/styled'

const Container = styled.div`
    padding: 3rem;
    border-radius: 0.5rem;
    background: #fff;
    max-width: 800px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: #000;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`

export default function Sentence({ sentence }) {
    return (
        <Container>
            <h1>{sentence.quote}</h1>
            <p>- {sentence.author}</p>
        </Container>
    )
}
