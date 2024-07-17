import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './Card';
import { type } from 'os';

export type CardType ={
  id: number, 
  color: string
}

function App() {

  const cards: Array<CardType> = [
    {id: 1, color: 'red'},
    {id: 2, color: 'yellow'},
    {id: 3, color: 'yellow'},
    {id: 4, color: 'black'},
    {id: 5, color: 'red'},
    {id: 6, color: 'black'},
  ];

  const [color, setColor] = useState('white')
  
      
    const clickCardHandler=(id: number)=>{
      const card = cards.find(card => card.id === id);
      if(card){
        setColor(card.color)
        console.log(`Изменяем цвет элемента с id ${id} на цвет: ${card.color}`);
      }
      }
    
  return (
    <div>
        <Card
        cards={cards}
        clickCardHandler={clickCardHandler}
        />
    </div>
  )
}

export default App;
