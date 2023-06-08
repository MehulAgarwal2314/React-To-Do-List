import './App.css';
import { useState } from 'react';
import React from 'react';   

function SearchBar({inputValue,setInputValue,handleClick}) {
  return (
  <>
  <div class="input-group">
  <input type="search" class="form-control rounded " placeholder="Add Item" aria-label="Search" aria-describedby="search-addon" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
  <button type="button" class="btn btn-success" onClick={handleClick} >Add</button>
  </div>
  </>
  );
}

function Nayafunc({item}){
  return(
    <div className='badgenew'>
      {item}
      </div>
  )
}

function Box(){
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [id, setId] = useState(0);
  const [isShown, setIsShown] = useState(false);
  
  const handleClick = () => {
    setId(id => id + 1);
    const newItem = {
      itemName: inputValue,
      quantity: 1,
    };

	  setInputValue('');
    setItems(item => [...items, inputValue]);

    // if( items.length!==0){
      setIsShown(true);
      return false;

    // }
    
    // else if(items.length >0 ){
    //   setIsShown(true);
    // }
    
   
    }

    const deleteAllItems = () => {
        items.splice(0, items.length);
        setItems([...items]);
        setIsShown(false);
       
          // setIsShown(false);  
        // Update the state with the modified array
  };

  return(
    <>
    <h1 style={{color:"white"}}>TODO LIST</h1>
    <SearchBar inputValue={inputValue}  handleClick={handleClick} setInputValue={setInputValue}/>
    <p className="w-50"><b>Here is your list :)</b></p>
    <div>
    {items.map((item) => {
      const handleRemoveClick = () => {
        setItems(items => items.filter((entry) => entry !== item));
      };
      return (
        <>
      <div className="naya">  
       <Nayafunc item={item} />
        <button class="button-3" onClick={handleRemoveClick}>remove(-)</button>
               
      </div>
        </>
    );
  })}
  {isShown && (
      <div className='naya1'>
        <button class="button-4" onClick={deleteAllItems}>Remove<br/>All</button>
      </div>                 
    )}
    </div>
   
   </>
   );
  }

function EntireApp() {
  return (
    <div className="Box">
      <Box/>
    </div>
  );
  }

export default function App() {
  return(
    <div className="EntireApp">
    <EntireApp/>
    </div>
  )
}