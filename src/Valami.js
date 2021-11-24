import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Valami(){

    const spaceClick = (e) => {
        //console.log(e)
        if(e.keyCode === 32)
            setValue(value.toUpperCase())
        if(e.keyCode === 27)
            setValue(value.toLowerCase())
    }

    const [value, setValue] = useState("Ide kell írni!!!");
    const [value2, setValue2] = useState("");

    
  
    useEffect(() => {
      console.log('valtozik a value');
  
      return function(){console.log("bye");};
    }, [value2])

    return(
        <>
            <Link to="/">Alma</Link>
            <input value={value} onChange={(e) => setValue(e.target.value.trim())} onMouseEnter={() => setValue("")} onKeyDown={(e) => spaceClick(e)}/>
            <input value={value2} onClick={() => setValue2("Ide kell írni!!!")} onChange={(e) => setValue2(e.target.value)}/>
        </>   
    )
}  

export class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentDidUpdate() {
      document.title = `${this.state.date.toLocaleTimeString()}`;
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Helló, világ!</h1>
          <h2>Az idő {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }