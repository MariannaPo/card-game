
import { CardType } from "./App"
import s from './card.style.module.css'
import {useEffect, useState } from "react"



export type CardPropsType={
    cards: CardType[],
}

export const Card=({cards}: CardPropsType)=>{

    const [selectedCardsIds, setSelectedCardsIds] = useState<number[]>([])
    const [colorCard, setColorCard] = useState<any>()

    const clickCardHandler = (id: number) => {
        if (selectedCardsIds.includes(id)) {
            const filteredIds = selectedCardsIds.filter((selectedId) => selectedId !== id);
            setSelectedCardsIds(filteredIds);
        } else {
            setSelectedCardsIds([...selectedCardsIds, id]);
        }
    };

    const colorChange=(a: any)=>{
    if(selectedCardsIds.includes(a.id)){
        return  a.color
    }
    }

  
    return(
        <div className={s.item}>
            {cards.map((card) => ( 
                <div key={card.id} 
                style={{ backgroundColor: colorChange(card)}}
                className={s.cardDiv} 
                onClick={()=>clickCardHandler(card.id)}>
                    {card.color}
                    </div>
            ))}
        </div>
    )
}