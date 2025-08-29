import React from 'react'

const cardEls = [
    {
        title: "Lorem ipsum",
        id: '1',
        text: "lorem ipsum, dole sit amue ternico de lento orenterniestailanto!"
    },
    {
        title: "Lorem ipsum",
        id: '2',
        text: "lorem ipsum, dole sit amue ternico de lento orenterniestailanto!"
    },
    {
        title: "Lorem ipsum",
        id: '3',
        text: "lorem ipsum, dole sit amue ternico de lento orenterniestailanto!"
    },
]


function MainCard() {
    return (
        <ul>
                {cardEls.map((el) => {
                    <li key={el.id}>
                        <h3>{el.title}</h3>
                        <p>{el.text}</p>
                    </li>
                })}
        </ul>

    )
}

export default MainCard