import { type } from "os"
import { CardType } from "./App"
import s from './card.style.module.css'


export type CardPropsType={
    cards: CardType[]
}

export const Card=({cards}: CardPropsType)=>{
      
    const clickCardHandler=()=>{
        console.log('dbcidjbcoiw' )
    
      }
    

    return(
        <div className={s.item}>
            {cards.map((card) => ( 
                <div key={card.id} className={s.cardDiv} onClick={clickCardHandler}>{card.color}</div>
            ))}
        </div>
    )
}