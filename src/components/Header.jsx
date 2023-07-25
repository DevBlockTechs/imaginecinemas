import { useEffect } from "react"

const Header =()=> {

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 150){
                document.getElementById('logo').style.opacity = 0
            }
            
            if(window.scrollY < 150){
                document.getElementById('logo').style.opacity = 1
            }
        })
    })


  return (
    <header>
        <div id="logo">
            IMAGINE CINEMAS
        </div>
        <div className="menu">
            <div className="jsline top"></div>
            <div className="jsline middle"></div>
            <div className="jsline bottom"></div>
        </div>
    </header>
  )
}

export default Header