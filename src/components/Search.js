import React, {useState} from 'react';
import Home from './Home';

const Search = (props) => {
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
        return product.includes(searchValue)
    })

    return <div>
        Welcome {localStorage.getItem("username")}!
        <input type = "text" value={searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
        
        <ul>
          {filteredProducts.map((product) =>{
              return <li key={product}> {product}</li>
          })}
        </ul>

    </div>
        
    
}
 
export default Search;