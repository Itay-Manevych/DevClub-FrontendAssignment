import React from 'react';
import App from '../App';

const Home = (props) => {
    
    const handleInputChange = (event) =>{
        props.setData(event.target.value)
    }

    const handleClick = () =>
    {
        localStorage.setItem("username", props.data)
        window.location = "/search"
    }
    
    const shouldDisplayButton = props.data.length > 0

    return (<div>
        Please enter your username:
        <input type = "text" value={props.data} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClick}>submit</button>}
        
    </div>)
}
 
export default Home;