"use client"
import { useEffect, useState } from "react";

const DailyVerse: React.FC = () =>{
    const [books, setBooks] = useState([]);
    const [bookNumbers, setBookNumbers] = useState([]);

    useEffect(()=>{
        fetch("https://api.getbible.net/v2/kjv/books.json")
        .then(response=>response.json())
        .then(data=>{
            setBooks(data);
        });
    },[])
    
    return(
        <div className="">
            <p className="">{}</p>
        </div>
    )
}

export default DailyVerse;