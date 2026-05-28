"use client";

import { useEffect, useState } from "react";

import getArrays from "../actions";

export default function useArrays(){

    
    const [arrays, setArrays] = useState<number[]>([]);

    useEffect(()=>{

        const arr = getArrays();
        setArrays(arr);
    },[]);

    

    return(arrays);
}