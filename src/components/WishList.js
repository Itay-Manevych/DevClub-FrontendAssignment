import React,{useState, useEffect} from 'react';

const WishList = () => {
    
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("Wishlist")))
        setLoading(false)
    },[])

    const handleWishlistClick = (item) =>
    {
        let list = JSON.parse(localStorage.getItem("Wishlist"))
        list.filter((listItem)=> listItem.title !== item.title)
        localStorage.setItem("Wishlist", JSON.stringify(list))
    }

    if(loading) return
    return(
        <div >
             {
            data.map((item, index)=>{
    
                return(
                    <div key={index}>
                    <br></br>
                    <button style={{display : "block"}} key={item} onClick = {() => setIsOpen(!isOpen)}> {item.title}</button>
                    {isOpen && ( 
                    <div>
                        Subtitle: {item.subtitle ? item.subtitle : "No subtitle"}
                        <br></br>
                        Published date: {item.publishedDate}
                        <br></br>
            
                        Author/s:
                        {
                            item.authors && item.authors.map((author, index) =>{
                                return <div key={index}> {author} </div>
                        })}
                        <br></br>
                        Publisher: {item.publisher}
                        <br></br>
            
                        <button onClick={()=> handleWishlistClick(item)}> Remove from wishlist </button>
                     
                    </div>
                    )}
                    </div>
                )
            })
        }
        </div>
    )
}
 
export default WishList;