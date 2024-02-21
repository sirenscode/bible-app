import { useState } from "react";
import DisplayVerses from "./DisplayVerses";

interface Props{
    chapter: number;
    verse: number;
    name: string;
    text: string;
}
interface ChapterProps{
    verses: Props[];
    chapters: [];
}

const Chapters: React.FC<ChapterProps> = ({chapters}) =>{
    const [currentChapter, setCurrentChapter] = useState("");
    const [displayVerse, setDisplayVerse] = useState(false);
    const [verses, setVerses] = useState([]);

    function displayVerses(chapter: string){
        setDisplayVerse(true);
        fetch(chapter)
        .then(response=>response.json())
        .then(data=>{
            console.log(data.verses)
            setVerses(data.verses);
            document.getElementById("header")!.innerText+=` ${data.chapter}`
        });
        document.getElementById("chapters")!.style.display="none";
    }

    return(
        <div>
            <div id="chapters" className="w-full flex flex-row flex-wrap gap-[20px] items-center justify-center">
                {Object.values(chapters).map(chapter=>(
                    <div className="w-[100px] bg-[indigo] flex flex-col items-center h-[30px] rounded-lg justify-center cursor-pointer" onClick={()=>displayVerses(chapter.url)}>
                        <h1>{chapter.chapter}</h1>
                    </div>

                    
                ))}
            </div>
            {displayVerse && <DisplayVerses verses={verses}/>}
            <div>
            </div>
        </div>
        
    )
}

export default Chapters;