import { type } from "os"
import { CardType } from "./App"
import s from './card.style.module.css'
import { useState } from "react"


export type CardPropsType={
    cards: CardType[],
    // clickCardHandler: (id: number)=>void
}

export const Card=({cards}: CardPropsType)=>{

    const [color, setColor] = useState();
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  
    const clickCardHandler=(id: number)=>{
        const card = cards.find(card => card.id === id);
        if(card){
          setColor(color)
          setSelectedCardId(id)
        }
        }

    return(
        <div className={s.item}>
            {cards.map((card) => ( 
                <div key={card.id} 
                style={{ backgroundColor: card.id === selectedCardId ? card.color : 'white' }}
                className={s.cardDiv} 
                onClick={()=>clickCardHandler(card.id)}>
                    {card.color}
                    </div>
            ))}
        </div>
    )
}