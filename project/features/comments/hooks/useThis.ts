"use client";

import { useState, useEffect } from "react";
import getThis from "../actions";

export default function useThis(){

    const [thisT, setThis] = useState("");

    useEffect(()=>{

        const data = getThis();
        setThis(data);

    }, []);

    return(thisT);
}