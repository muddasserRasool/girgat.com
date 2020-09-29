
import React from 'react';
import Typist from 'react-typist';



export default function TypistAnimate() {
    const cursor = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
    }
    // let counter=0
    
    
    // const [Printit, setPrintit] = useState("")
  
        // let Message = ["grow your business.", "look sexy online.", "outrank the competition.", "create badass content.", "generate more leads.", "optimize conversions."]
        
       

  
        
            
          

 function Typing() {
       

        return (
            <div>
                <Typist className="Animate" cursor={cursor}>
                    <span>Home look cool.</span>
                    <Typist.Backspace count={19} delay={1200} />
                    <span>TV wall, A decent look.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>boundary wall different.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>Front Elevation fancy.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>Lawn beautiful.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>Walls a long lasting look.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>Home look cool.</span>
                    <Typist.Backspace count={19} delay={1200} />
                    <span>TV wall, A decent look.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>boundary wall different.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>Front Elevation fancy.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>Lawn beautiful.</span>
                    <Typist.Backspace count={34} delay={1200} />
                    <span>Walls a long lasting look.</span>
                </Typist>
            </div>
        )
    
    }



    return (
        <Typing />
    );
}