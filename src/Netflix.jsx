import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Netflix = () => 
{
    let netarr = [0,2,4];
    return (
    <>
        { netarr.map((cval) => {
            return ( <Card 
                        key = {Sdata[cval].id}     
                        imgsrc = {Sdata[cval].imgsrc} 
                        title = {Sdata[cval].title} 
                        sname = {Sdata[cval].sname} 
                        link = {Sdata[cval].link} 
                    />
            );
        })}
    </>)
}

export default Netflix;