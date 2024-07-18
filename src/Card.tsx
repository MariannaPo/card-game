import { type } from "os"
import { CardType } from "./App"
import s from './card.style.module.css'
import { useEffect, useState } from "react"
import { idText } from "typescript"


export type CardPropsType={
    cards: CardType[],
}

export const Card=({cards}: CardPropsType)=>{

    const [selectedCardsIds, setSelectedCardsIds] = useState<number[]>([])
    const [guessesCards, setGuessesCards] = useState<number[]>([])


    const clickCardHandler = (id: number) => {
        if (selectedCardsIds.includes(id)) {
            const filteredIds = selectedCardsIds.filter((selectedId) => selectedId !== id);
            setSelectedCardsIds(filteredIds);
        } else {
            setSelectedCardsIds([...selectedCardsIds, id]);
        }
        
        // const winCard=()=>{
        //     if(selectedCardsIds)
        
        //         console.log(id)
        //     }
        //     winCard()
    };

//    const winCard=(id: number)=>{
//     if(cards.id === id)
//         console.log(id)
//     }


    const colorChange=(a: any, id: number, color: string)=>{
    if(selectedCardsIds.includes(a.id)){
        return  a.color 
    }
    }


    return(
        <div className={s.item}>
            {cards.map((card) => ( 
                <div key={card.id} 
                style={{ backgroundColor: colorChange(card, card.id, card.color)}}
                className={s.cardDiv} 
                onClick={()=>clickCardHandler(card.id)}>
                    {card.color}
                    </div>
            ))}
        </div>
    )
}