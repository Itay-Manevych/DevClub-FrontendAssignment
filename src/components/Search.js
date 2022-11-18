import React, {useState} from 'react';
import DialogBox from './DialogBox';
import Home from './Home';

const Search = (props) => {
    console.log(props.products)
    const [searchValue, setSearchValue] = useState("")
    
    const handleInputChange = (event) =>{
        setSearchValue(event.target.value)
    }

    const handleClearClick = () =>
    {
        setSearchValue("")
    }
    
    const shouldDisplayButton = searchValue.length > 0
    
    const filteredProducts = props.products.filter((product) =>{
        return product.title.includes(searchValue)
    })
   
    if(searchValue.length > 0 && filteredProducts.length > 20)
        filteredProducts.length = filteredProducts.length - (filteredProducts.length - 20) 

    return (
    <div>
        Welcome {localStorage.getItem("username")}!
        <br></br>
        <input type = "text" value={searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
        
        <br></br>

        {filteredProducts.map((product,index) =>{
              return <DialogBox key={index} data={product} />
          })}
    </div>
    ) 
}
 
export default Search;