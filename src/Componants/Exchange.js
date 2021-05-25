import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ResultBox from './ResultBox';



export default function Exchange(props) {

    const [fromCoin, setFromCoin] = useState('');
    const [toCoin, setToCoin] = useState('');
    const [amount, setAmount] = useState('');




    const coinListSelect = () => {// dropdown list of coins
        return props.coinList.map((e, index) => { return <option key={index} value={e.name}>{e.name}</option> })
    }

    let makeExchange = (from, to, num) => {
        let coinVal = (coin) => {
            for (let index = 0; index < props.coinList.length; index++) {
                if (props.coinList[index].name === coin) {
                    return props.coinList[index].val
                }
            }
        }
        let fromCoinVal = coinVal(from)
        let toCoinVal = coinVal(to)
        let result = ((toCoinVal / fromCoinVal) * num)
        props.pushExList({ from: from, to: to, amount: num, result: result });

    }

    const disableExBtn = () => {

        if (fromCoin === '' || toCoin === '' || amount === 0) {
            return true
        }
        else {
            return false
        }
    }

    const showResult = () => {

        if (props.exResult) {

            return (
                <ResultBox exResult={props.exResult} exResultHandler={props.exResultHandler} />
            )
        }
    }



    return (
        <div>
            <h1 className="headTitle">Exchange App</h1>
            <br />
            <div className="fromToExBox">

                <div className="mainPageBodyTitle">
                    <p>All exchange rates are updated regularly by Exchangeratesapi.</p>
                    <p>For more information please visit <a href="https://exchangeratesapi.io/" target="blank">https://exchangeratesapi.io</a></p>
                </div>


                <h3 className="fromToHeaders">from:</h3>

                <select className="exDropdowns" name="fromCoin" id="fromCoin" onChange={(e) => { setFromCoin(e.target.value) }}>
                    <option value="">Select Currency</option>
                    {coinListSelect()}
                </select>
                <input className="exInputs" type="number" id="startExBtn" onChange={(e) => { setAmount(e.target.value) }} />
                <br />
                <h3 className="fromToHeaders">to:</h3>
                <select className="exDropdowns" name="toCoin" id="toCoin" onChange={(e) => { setToCoin(e.target.value) }}>
                    <option value="">Select Currency</option>
                    {coinListSelect()}
                </select>
                <br />
                <button className="exMainBtn" disabled={disableExBtn()} onClick={() => { makeExchange(fromCoin, toCoin, amount) }} > = </button>
                {showResult()}

            </div>

            <Link to={'/update'}><Button variant="warning" >Update</Button>{' '}</Link>
            <a href="http://www.facebook.com" target="_blank"><Button variant="primary">Share on FaceBook</Button>{' '}</a>
            <Button variant="warning" onClick={() => { props.setTheFlag() }}>View Your Exchange List</Button>{' '}
        </div>
    )
}
