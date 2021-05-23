import React from 'react'

export default function ExList(props) {
    return (
        <div className="excListDiv">
            <h3>Exchange  {props.index + 1}</h3>
            <h4>From: {props.exList.from} To: {props.exList.to}</h4>
            <h4>{props.exList.amount} {props.exList.from} = {props.exList.result} {props.exList.to}</h4>
            <button className="listBtn" onClick={() => { props.removeExList(props.index) }}>X</button>
        </div>
    )
}
