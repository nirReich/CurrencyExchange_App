import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function Update(props) {

    const [newType, setNewType] = useState('');
    const [newVal, setNewVal] = useState('')

    useEffect(() => {

        if (newType) {
            axios
                .get(`http://api.exchangeratesapi.io/v1/latest?access_key=0f68db3395a02354ca91823bea46077a&symbols=${newType}`)
                .then((response) => { setNewVal(response.data.rates[newType]) })
                .then(console.log(newVal))
                .catch((error) => {
                    return console.log(error.code);
                })
        }

    }, [newType])

    const coinListTable = () => {
        return (
            props.coinList.map((e, i) => {
                return (

                    <tr key={i} >
                        <td>{e.name}</td>

                        <td>{e.val}</td>
                    </tr>
                )
            })
        )
    }



    const setTheNewType = (e) => {
        if ((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z')) {
            setNewType(e)
        }
    }

    const coinsOptions = () => {

        if (props.allCoins !== []) {

            return (

                <select className="exDropdowns" name="coinsSel" id="coinsSel" onChange={(e) => { setTheNewType(e.target.value) }}>
                    <option value={''}>select coin to add</option>
                    {props.allCoins.map((e, i) => {
                        return (
                            <option key={i} value={e}>{e}</option>
                        )
                    })}
                </select>

            )
        }
        else {
            return <p>no coins to add</p>
        }

    }

    const showNewVal = (newVal !== '') ? newVal : "Pick coin"



    //----------------------------------------------------
    return (
        <div className="UpdatePage">
            <h1 className="updTitle">Update</h1>

            <div className="bodyUpdPage">
                <table className="excListDiv">
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                    {coinListTable()}
                </table>

                <br />
                <h4 className="updateTitles">Coin Type</h4>
                <br />

                {coinsOptions()}
                <h4 className="updateTitles">New Value</h4>
                <div className="newValDiv">
                    {showNewVal}
                </div>
                <br />
                <br />
                <Link to={'/'}> <Button className="updBtn" variant="danger">Back</Button></Link>
                <Button variant="success" className="updBtn" onClick={() => { return props.updateCoinList(newType, newVal) }}>Add coin</Button>
            </div>
        </div>
    )
}
