'use client'

export default function Error({ error, reset }) {
    return (
        <>
            <p>An error occurred: {error.message}</p>
            <button onClick={() => reset()}>Retry</button>
        </>
    )
}