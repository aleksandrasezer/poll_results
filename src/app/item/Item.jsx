import React from "react";
import s from './Item.module.css'

export const Item = (props) => {

    //share of each item's votes in total votes
    const flavourShare = (props.votes / props.totalVotes * 100).toFixed(1)

    return <div className={s.itemContainer}>
        <span>
            <span className={s.itemName}>{props.itemName}</span>
        </span>
        <span>
            {props.scale > 40
            && <span className={s.itemVotes} style={{backgroundImage: `linear-gradient(rgba(${props.color},0.5), rgba(${props.color})`, width: `${props.scale}%`}}>
            <span>{props.votes} votes</span>
            <span>{flavourShare}%</span>
            </span>
            }
            {(props.scale <= 40 && props.scale > 20)
            && <span className={s.less40itemVoteContainer}>
            <span className={s.less40ItemVotes}
                  style={{backgroundImage: `linear-gradient(rgba(${props.color},0.5), rgba(${props.color})`, width: `${props.scale}%`}}>{props.votes} votes</span>
            <span className={s.less40ItemsShare}>{flavourShare}%</span>
            </span>
            }
            {props.scale <=20
            && <span className={s.less10itemVoteContainer}>
            <span className={s.less10ItemVotes}
                  style={{backgroundImage: `linear-gradient(rgba(${props.color},0.5), rgba(${props.color})`, width: `${props.scale}%`}}> </span>
                <span className={s.less10ItemsShare}>{props.votes} votes</span>
            <span className={s.less10ItemsShare}>{flavourShare}%</span>
            </span>}
        </span>
    </div>
}
