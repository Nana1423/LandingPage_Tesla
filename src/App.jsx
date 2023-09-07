import Header from "./assets/components/Header"
import Hero from "./assets/components/Hero"
import Model from "./assets/components/Model"
import Accesory from "./assets/components/Accesory"
import "./App.css"

import ModeloS from "../public/model-s.avif"
import Modelo3 from "../public/model-3.avif"
import ModeloX from "../public/model-x.avif"
import ModeloY from "../public/model-y.avif"
import Powerwall from "../public/powerwall.avif"
import Charger from "../public/charger.avif"


function App() {

  return (
    <>
      <Header 
      />
      <main className="slider">
        <div id="home" className="slider-element">
          <Hero />
        </div>
        <div id="modelS" className="slider-element">
          <Model 
            model="Modelo S"
            image={ModeloS}
            headerColor = "black"
           /> 
        </div>
        <div id="model3" className="slider-element">
          <Model
            model="Modelo 3"
            image={Modelo3}
            headerColor = "black"
           /> 
        </div>
        <div id="modelX" className="slider-element">
          <Model
            model="Modelo X"
            image={ModeloX}
            headerColor = "black"
           /> 
        </div>
        <div id="modelY" className="slider-element">
          <Model
            model="Modelo Y"
            image={ModeloY}
            headerColor = "black"
          />
        </div>
        <div id="powerwall" className="slider-element">
          <Accesory
            accesory= "Powerwall" 
            image= {Powerwall} 
            headerColor= "black"
          />
        </div>
        <div id="accessories" className="slider-element">
          <Accesory
            accesory= "Accessories" 
            image= {Charger} 
            headerColor= "black"
          />
        </div>
        
      </main>
      
    </>
  )
}

export default App
