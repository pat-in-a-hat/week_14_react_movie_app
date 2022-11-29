import React from 'react'

export default function Stars (props){
    let stars = ''
    for (let i = props.stars; i > 0; i --){
        stars += '\u2605'
    }
    
    return(
        stars
    )
}