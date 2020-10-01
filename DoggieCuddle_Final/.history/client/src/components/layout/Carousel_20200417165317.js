import React from 'react';
import Carousel from 'react-material-ui-carousel'

import {Paper} from '@material-ui/core'
 
export function Carousels(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
 
    return (<div>
         <Carousel>
            {
                items.map( item => {
                   <h1>{item.name}</h1>
                })
            } 
        </Carousel>
        </div>
    )
}