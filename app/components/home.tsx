"use client"
import { useEffect, useState } from "react";
import DailyVerse from "./Daily";
import Verses from "./Verses";

const HomeComponent: React.FC = () =>{
    const [books, setBooks] = useState([]);
    const [bookNumbers, setBookNumbers] = useState([]);
    const [randomScripture, setRandomScripture] = useState("");
    const [randomVerse, setRandomVerse] = useState("");

    useEffect(()=>{
        fetch("https://api.getbible.net/v2/kjv/books.json")
        .then(response=>response.json())
        .then(data=>{
            setBooks(data);
        });
    },[]);

    function randomIntFromInterval(min: number, max:number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    var randomBook = randomIntFromInterval(1,66);
    useEffect(()=>{
        
        const randomChapter = randomIntFromInterval(1,10);
        console.log("RANDOM",randomBook);
        const url = `https://api.getbible.net/v2/kjv/`+randomBook+`.json`;
        console.log("URLS",url)
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            setRandomScripture(data.chapters[0].verses[0].name)
            setRandomVerse(data.chapters[0].verses[0].text)
            
        });
    },[]);
    

    return(
        <div className="w-full h-full flex flex-col items-center justify-center ">
            <div id="home" className="h-full w-full fixed top-[0] bg-[url('/images/bible.jpg')] bg-cover bg-no-repeat bg-center">
                <div className="flex flex-col items-center p-3 justify-center w-full h-full z-[30] absolute">
                    <div className="relative w-1/2 p-3 flex flex-col">
                        <h1 className="text-[4em] font-bold opacity-[1] z-[40]" style={{fontFamily:"Cormorant Garamond"}}>{randomScripture}</h1>
                        <p className="text-[2em]" style={{fontFamily:"Times New Roman"}}>{randomVerse}</p>
                    </div>
                    
                </div>
                
            </div>
            <div className="z-10 mt-[600px] w-full bg-[#161616] relative flex flex-col items-center">
                <Verses books={books}/>
            </div>
            

        </div>
    )
}

export default HomeComponent;