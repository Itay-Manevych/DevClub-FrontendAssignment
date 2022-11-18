import React from 'react';
import App from '../App';

const Home = (props) => {
    
    const handleInputChange = (event) =>{
        props.setData(event.target.value)
    }

    const handleClick = () =>
    {
        localStorage.setItem("username", props.data)
        localStorage.setItem("Wishlist", JSON.stringify([]))
        window.location = "/search"
    }
    
    const shouldDisplayButton = props.data.length > 0

    return (<div>
        Please enter your username:
        <br></br>
        <input type = "text" value={props.data} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClick}>submit</button>}
        
    </div>)
}
 
export default Home;