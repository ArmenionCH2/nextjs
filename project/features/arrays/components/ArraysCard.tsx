"use client";

import useArrays from "../hooks/useArrays";

export default function ArraysCard(){

    const a = useArrays();
    return(
        <div>{a}</div>
    );
}