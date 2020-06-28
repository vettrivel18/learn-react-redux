import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props)=>{
   
    const average =(data)=>{
        return _.round(_.sum(data)/data.length)
    }
   
   return( <div><Sparklines data={props.data} width={150} height={100}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
   <div>{average(props.data)} {props.units}</div>
            </div>
    );
}   
