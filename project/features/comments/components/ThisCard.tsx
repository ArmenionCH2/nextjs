"use client";

import useThis from '../hooks/useThis';

export default function ThisCard(){

    const thisT = useThis();
    
    return(
        <p>{thisT}</p>
    );
}