interface VerseProps{
    book: string;
}

const Verse: React.FC<VerseProps> = (props) =>{
    return(
        <div className="w-full bg-[#EEE] rounded-lg flex">
            <h1>{props.book}</h1>

        </div>
    )
}

export default Verse;