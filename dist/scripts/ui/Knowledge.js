import React from 'react';

function renderItem(item) {
    return (
        <div className="knowledge-item">
            <h2>{item.category}</h2>
            {item.items.map(techno => (
                <p>{techno}</p>
            ))}
        </div>
    )
}

export default function Knowledge(props) {
    console.log(props);
    return (
        <div id="knowledge" >
            <h1>Knowledge</h1>
            {props.knowledge.map(item => renderItem(item))}
        </div>
    )
}