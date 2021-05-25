import React from 'react'
import { Button } from 'react-bootstrap';

export default function ResultBox(props) {
    return (
        <div className="resultBox">
            <h4>Your currency exchange result:</h4>
            <h3>{props.exResult}</h3>
            <Button onClick={() => { props.exResultHandler() }}>Ok</Button>
        </div>
    )
}
