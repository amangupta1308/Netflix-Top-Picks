import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Amazon = () =>{
    let azonarr = [1,3];
    return (
    <>
        { azonarr.map((cval) => {
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

export default Amazon;
