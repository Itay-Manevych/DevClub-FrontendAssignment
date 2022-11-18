import React, {useState} from "react"
import { json } from "react-router-dom"

const DialogBox = ({data}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [wishlist, setWishlist] = useState([])

    const handleWishlistClick = () =>
    {
        let list = JSON.parse(localStorage.getItem("Wishlist"))
        list.push(data)
        localStorage.setItem("Wishlist", JSON.stringify(list))
    }
    
    return(
        <div>
        <br></br>
        <button style={{display : "block"}} key={data} onClick = {() => setIsOpen(!isOpen)}> {data.title}</button>
        {isOpen && ( 
        <div>
            Subtitle: {data.subtitle ? data.subtitle : "No subtitle"}
            <br></br>
            Published date: {data.publishedDate}
            <br></br>

            Author/s:
            {
                data.authors && data.authors.map((author, index) =>{
                    return <div key={index}> {author} </div>
            })}
            <br></br>
            Publisher: {data.publisher}
            <br></br>

            <button onClick={handleWishlistClick}> Add to wishlist </button>
         
        </div>
        )}
        </div>
    )
}

export default DialogBox;