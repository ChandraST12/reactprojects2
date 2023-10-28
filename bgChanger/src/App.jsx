import { useState } from "react"


function App() {
  const [color,setColor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={ ()=> setColor('red')}
         className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"red"}}>
          Red
        </button>
        <button 
        onClick={()=>setColor('lightgreen')}
        className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"lightgreen"}}>
          Light green
        </button>
        <button 
        onClick={()=>setColor('blue')}
        className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"blue"}}>
         Blue
        </button>
        <button 
        onClick={()=>setColor('cyan')}
        className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"cyan"}}>
         Cyan
        </button>
        <button 
        onClick={()=>setColor('grey')}
        className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"grey"}}>
          Grey
        </button>
        <button 
        onClick={()=>setColor('magenta')}
        className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"magenta"}}>
        Magenta
        </button>
        <button 
        onClick={()=>setColor('lime')}
        className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"lime"}}>
       Lime
        </button>
        
        <button 
        onClick={()=>setColor('teal')}
        className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"teal"}}>
        Teal
        </button>
        

      </div>
     </div>
    </div>
  )
}

export default App
