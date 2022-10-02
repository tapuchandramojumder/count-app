import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ButtonComponent, InputComponet, ParaComponent, DivComponent } from './components/All.style';

function App() {

const [unitValue,setUnitValue]= useState(null)
const [priceValue,setPriceValue]= useState(null)
const [total,setTotal]=useState(0)


  const clickHandler = (unit,price)=>{
   const result = unit*price
   setTotal(result)
  
  }

  return (
    <DivComponent>
       
        <InputComponet  onChange={(e)=>setUnitValue(e.target.value)} type='number' placeholder = 'unit'  />
        <InputComponet  onChange={(e)=>setPriceValue(e.target.value)} type='number' placeholder = ' price'  />
        <ButtonComponent onClick ={()=>clickHandler(unitValue,priceValue)} >Click Me</ButtonComponent>
        {/* <ButtonComponent>click me</ButtonComponent>
        <InputComponet className='top' type = 'number' placeholder='product-price' /> */}
        <ParaComponent>TotalPrice : {total} </ParaComponent>
    
    </DivComponent>
  );
}

export default App;
