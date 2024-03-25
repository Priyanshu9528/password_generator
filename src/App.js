import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from "./data/passChar";


function App() {
  let [uppercase,setUppercase]=useState(false);
  let [lowercase,setLowercase]=useState(false);
  let [number,setNumber]=useState(false);
  let [symbols,setSymbols]=useState(false);
  let [passwordlen,setPasswordLen] = useState(10);
  let [finalpass,setFinalPass] = useState('');

  let createPassword=()=>{
    let finalPass=''
    let charSet='';
    if(uppercase || lowercase ||number || symbols){
      if(uppercase) charSet +=UC;
      if(lowercase) charSet +=LC;
      if(number) charSet += NC;
      if(symbols) charSet +=SC;

      for(let i=0;i<passwordlen;i++){
        finalPass +=charSet.charAt(Math.floor(Math.random()*charSet.length));
      }
      setFinalPass(finalPass);
    }
    else{
      toast("Please select atleast one checked box....");
    }
  } 

  let copyPass =()=>{
    navigator.clipboard.writeText(finalpass);
  }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxin">
          <input type="text" value={finalpass} readOnly /> <button className="copyBtn" onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password length</label>
          <input type="number" max={25} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>
        </div>

        <div className="passLength">
          <label>Include uppercase letters</label>
          <input type="checkbox"  checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>

        <div className="passLength">
          <label>Include lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className="passLength">
          <label>Include number</label>
          <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className="passLength">
          <label>Include symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>

        <button className="btn" onClick={createPassword}>
        Generate Password
        </button>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
