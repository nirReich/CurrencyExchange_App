import React from 'react';
import ExList from './ExList';

export default function ExListComp(props) {
    return (
        <div>

        <div className="exchangeListBox">
            <button className="exitBtn" onClick={() => props.setTheFlag()}>Exit</button>
            <h1>Your exchange list:</h1>
          
            {props.exList.map((e, index) => { return <ExList exList={props.exList[index]} index={index} removeExList={props.removeExList} /> })}
        </div>
        </div>
    )
}
