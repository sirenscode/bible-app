import { useState } from "react";
import Chapters from "./Chapters";

interface Props{
    book: string;
}

interface VersesProps{
    books: Props[];
}

const Verses: React.FC<VersesProps> = (props) =>{
    const [bookVerses, setBookVerses] = useState([]);
    const [chapters, setchapters] = useState([]);
    const [showChapters, setShowChapters] = useState(false);
    function goToBook(item){
        console.log(item.nr)
        fetch(`https://api.getbible.net/v2/kjv/${item.nr}/1.json`)
        .then(response=>response.json())
        .then(data=>{
            setBookVerses(data.verses);
            document.getElementById("header")!.innerText=data.book_name;
        });
        console.log(bookVerses);
        setShowChapters(true);
        getChapters(item.nr)
        document.getElementById("books")!.style.display="none";
        
    }
    function getChapters(id: number){
        fetch(`https://api.getbible.net/v2/kjv/${id}/chapters.json`)
        .then(response=>response.json())
        .then(data=>setchapters(Object.values(data)));
    }
    return(
        <div className="flex flex-col items-center gap-[20px] justify-center p-3">
            <h1 id="header" className="text-3xl">All books</h1>
            <div id="books" className="w-full flex flex-row flex-wrap gap-[20px] justify-center">
            
                {Object.values(props.books).map((book,index)=>(
                <div key={index} className="flex flex-col  bg-[red] items-center justify-center w-[150px] text-[1em] cursor-pointer rounded-lg h-[40px]" onClick={()=>goToBook(book)}>
                    <h1 className="w-full text-center">{book.name}</h1>
                </div>
                ))}
            </div>
        
            <div className="flex flex-row flex-wrap">
                {showChapters && <Chapters  chapters={chapters}/>}
            </div>
        </div>
    )
}
export default Verses;