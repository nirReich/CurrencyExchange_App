import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Exchange from './Componants/Exchange';
import Update from './Componants/Update';
import Footer from './Componants/Footer';
import axios from 'axios';
import ExListComp from './Componants/ExListComp';

function App() {

  const [coinList, setCoinList] = useState([]);
  const [exList, setExList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [allCoins, setAllCoins] = useState([]);
  const [exResult, setExResult] = useState('');

  const pushExList = (obj) => {
    setExList([...exList, obj])
  }

  const removeExList = (index) => {
    setExList(exList.filter((element, i) => (i !== index)));
  }

  const showExList = () => {
    if (flag === true) {
      return <ExListComp setTheFlag={setTheFlag} exList={exList} removeExList={removeExList}/>
    }
  }
  //flag for showing the exchange list
  const setTheFlag = () => {
    setFlag(!flag)
  }

  const coinExsit = (name) => {
    for (let i = 0; i < coinList.length; i++) {
      if (coinList[i].name === name) {
        return i
        
      }
      break
    }
  }

  const updateCoinList = (name, val) => {
    let index=coinExsit(name)
    if (!isNaN(index)) {
      coinList[index].val=val
      setCoinList([...coinList])
    }
    else{
      setCoinList([...coinList, { name: name, val: val }])
    }
  }

  useEffect(()=>{
    handelCoinRequest()
    handelAllCoinsReq()

  },[])
  

  useEffect(()=>{
    if (exList.length!==0) {
      
      setExResult(exList[exList.length-1].result)
    }

  },[exList])

  const exResultHandler=()=>{
    setExResult('')
  }


  const handelCoinRequest = ()=>{
    
    axios
      .get('http://api.exchangeratesapi.io/v1/latest?access_key=0f68db3395a02354ca91823bea46077a&symbols=USD,ILS,EUR')
      .then((response)=>{
        console.log("API latest USD,ILS,EUR get request success " + response.data.success);
        return (
          setCoinList([{ name: 'USD', val: response.data.rates.USD }, { name: 'EUR', val: response.data.rates.EUR }, { name: 'ILS', val: response.data.rates.ILS }])
          
        )
      }
      )
      .catch((error)=>{
        return console.log(error.code);
      })
  }

  const handelAllCoinsReq = async ()=>{
    let newCoinsArr=[];

    await axios
    .get('http://api.exchangeratesapi.io/v1/symbols?access_key=0f68db3395a02354ca91823bea46077a')
    .then((res) => {
      console.log("API symbols get request success " + res.data.success);
      let coinsObj=res.data.symbols
      let coinsArr= Object.entries(coinsObj)
      for (let index = 0; index < coinsArr.length; index++) {
        newCoinsArr.push(coinsArr[index][0])
        
      } 
    })
    .then(setAllCoins(newCoinsArr))
    .catch((error)=>{
        return console.error(error.code);
    })
  }

  //-----------------------------------------------------------------------------------
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path={'/'} component={() => { return <Exchange exResultHandler={exResultHandler} exResult={exResult}  coinList={coinList} pushExList={pushExList} setTheFlag={setTheFlag} /> }} />
          <Route exact path={'/update'} component={() => { return <Update allCoins={allCoins} coinList={coinList} updateCoinList={updateCoinList} /> }} />
          
          <br />

        </Switch>
      </Router>
      <br/>
      {showExList()}
      <Footer/>
      

    </div>
    

  );
}

export default App;
