interface verse{
    chapter: number;
    verse: number;
    name: string;
    text: string;
}

interface VerseProps{
    verses: verse[]
}
const DisplayVerses: React.FC<VerseProps> = ({verses}) =>{
    return(
        <div className="w-full flex flex-col gap-[20px] text-[#000] p-3">
            {verses.map(data=>(
                <div className="w-full bg-[#EEE] p-2 rounded-lg cursor-pointer ease-in-out duration-500 hover:scale-110">
                    <h1 className="font-semibold text-[1.5em]" style={{fontFamily:"Cormorant Garamond",fontWeight:"bold"}}>{`${data.name}`}</h1>
                    <p className="">{data.text}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayVerses;