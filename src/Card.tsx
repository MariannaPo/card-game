import { type } from "os"
import { CardType } from "./App"
import s from './card.style.module.css'


export type CardPropsType={
    cards: CardType[],
    clickCardHandler: (id: number)=>void
}

export const Card=({cards, clickCardHandler}: CardPropsType)=>{


    return(
        <div className={s.item}>
            {cards.map((card) => ( 
                <div key={card.id} 
                className={s.cardDiv} 
                onClick={()=>clickCardHandler(card.id)}>
                    {card.color}
                    </div>
            ))}
        </div>
    )
}