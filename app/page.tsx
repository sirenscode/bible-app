import NavBar from "./components/navbar";
import HomeComponent from "./components/home";

export default function Home() {
  const API = require("@glowstudent/youversion");
  async function fetchData(){
    console.log(await API.getVerse("John", "3", "16", "AMP"))
  };
  fetchData();
  
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 w-full relative">
      <NavBar/>
      <HomeComponent/>
      
    </main>
  );
}
