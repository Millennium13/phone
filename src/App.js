// import React from 'react';

// const App = () => {

//   var arr = [
//     {
//       name: "Abror",
//       age: 25,
//       tel: "1234678999"
//     },
//     {
//       name: "Asror",
//       age: 15,
//       tel: "53251354239"
//     },
//   ]

//   return (
//     <div>
//       {arr.map((value,index) => {
//         return <h1 key={index}> Ismi: {value.name}<br/> Yoshi: {value.age}<br/> Telefon nomer: {value.tel}</h1>
//       })}      
//     </div>
//   );
// };

// export default App;





// import React,{useState} from 'react';

// const App = () => {

//   const [name,setName] = useState("Ism!")
  
//   const shoh = (a) => {
//     setName(a)
//   }

//   return (
//     <div>
//       {name}<br/>
//       <button onClick={() => shoh("Asad")}>Asad</button><br/>
//       <button onClick={() => shoh("Asror")}>Asror</button><br/>
//       <button onClick={() => shoh("Anvar")}>Anvar</button><br/>
//     </div>
//   );
// };

// export default App;






// import React, {useState} from 'react';
// import "./style.css"

// const App = () => {

//   const [color, setColor] = useState("")
//   const [text, setText] = useState("")

//   const shoh = (rang) => {
//     setColor(rang)
//   }

//   const shoh1 = (matn) => {
//     setText(matn)
//   }


//   return (
//     <div style={{background: color, color: text}}>
//       <h1>Salom hammaga</h1>
//         <button className='a1' onClick={() => shoh("Blue")}>Blue</button>      
//         <button className='a2' onClick={() => shoh("Green")}>Green</button>      
//         <button className='a3' onClick={() => shoh("Yellow")}>Yellow</button>      
//         <button className='a4' onClick={() => shoh("Grey")}>Grey</button> <br/>

      
//         <button className='b1' onClick={() => shoh1("Aqua")}>Aqua</button>      
//         <button className='b2' onClick={() => shoh1("Brown")}>Brown</button>      
//         <button className='b3' onClick={() => shoh1("Cornsilk")}>Cornsilk</button>      
//         <button className='b4' onClick={() => shoh1("Salmon")}>Salmon</button> 
//     </div>
//   );
// };

// export default App;





import React, {useState} from 'react';
import './style.css'
import Rasm from './Photo/a1.jpg'

const App = () => {
  
  const [number,setNumber] = useState('+')

  const updateCalc = value =>{
    setNumber(number+value);
  }

  const deleteLast = () =>{
    if (number == ""){
      return;
    }
    const value = number.slice(0,-1);
    setNumber(value);
  }

  const shoh = (raqam) => {
    setNumber(raqam)
  }

  return (
    <div className='phone' style={{background: number}}>
      <p className='enter' style={{textAlign:'center'}}>{number}</p>
      <button className='a1' onClick={() => updateCalc("1")}>1</button>      
      <button className='a2' onClick={() => updateCalc("2")}>2</button>      
      <button className='a3' onClick={() => updateCalc("3")}>3</button>      
      <button className='a4' onClick={() => updateCalc("4")}>4</button>      
      <button className='a5' onClick={() => updateCalc("5")}>5</button>      
      <button className='a6' onClick={() => updateCalc("6")}>6</button>     
      <button className='a7' onClick={() => updateCalc("7")}>7</button>      
      <button className='a8' onClick={() => updateCalc("8")}>8</button>      
      <button className='a9' onClick={() => updateCalc("9")}>9</button>     
      <button className='star' onClick={() => updateCalc("*")}>*</button>      
      <button className='null' onClick={() => updateCalc("0")}>0</button>      
      <button className='grating' onClick={() => updateCalc("#")}>#</button>
      <div className='all'>
        <button className='list' onClick={() => shoh("Call history")}>=</button>      
        <button className='call' onClick={() => shoh("Calling...")}> <img src={Rasm}></img> </button>      
        <button className='remove' onClick={() => deleteLast("")}> -- </button>
      </div>
    </div>
  );
};

export default App;