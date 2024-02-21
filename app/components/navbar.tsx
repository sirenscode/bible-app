const NavBar: React.FC = () =>{
    return(
        <div className="w-full fixed top-[0] bg-[#2196F3] p-3 z-[20]">
            <a href="#" className=""><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#0038B8" d="M5.81 2H7v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v16c0 1.05-.95 2-2 2H6c-1.05 0-2-.95-2-2V4c0-1 .83-1.91 1.81-2M13 10v3h-3v2h3v5h2v-5h3v-2h-3v-3z"/></svg></a>

        </div>
    )
}

export default NavBar;