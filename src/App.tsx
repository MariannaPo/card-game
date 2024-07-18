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

    
  return (
    <div>
        <Card
        cards={cards}
        />
    </div>
  )
}

export default App;
