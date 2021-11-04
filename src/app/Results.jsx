import React from "react";
import {Item} from "./item/Item";
import s from './Results.module.css'

export const Results = () => {

    const pollResults = {
        "Vanilla": 17,
        "Chocolate": 47,
        "Caramel": 32,
        "Banana": 28,
        "Strawberry": 2,
    }

    //obj into array
    let sortedResults = []
    for (let flavour in pollResults) {
        sortedResults.push([flavour, pollResults[flavour]])
    }
    sortedResults.sort((a, b) => b[1] - a[1])

    //scales of each item compared to the most voted one
    let scales = [100]
    for (let i=1;i<sortedResults.length;i++) {
        scales.push(Math.round(sortedResults[i][1]/sortedResults[0][1]*100))
    }

    const totalVotes = pollResults.Vanilla + pollResults.Banana + pollResults.Caramel + pollResults.Chocolate
    const colors = ['28,17,186','233,7,7','12,156,55','209,204,51','252,90,192']

    return <div className={s.resultsContainer}>
        {sortedResults.map((item,i) => <Item key={i}
                                             itemName={item[0]}
                                             votes={item[1]}
                                             color={colors[i]}
                                             totalVotes={totalVotes}
                                             scale={scales[i]}/>) }
    </div>
}