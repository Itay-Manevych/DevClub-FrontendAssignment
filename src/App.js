import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import WishList from './components/WishList';

function App() {
  const [searchValue, setSearchValue] = useState("")

  const [productsState, setProductsState] = useState([])

  useEffect(()=>{

    fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
      .then(res=>res.json())
      .then((productsArray)=> {
        console.log(productsArray)
        const newProudctsState = productsArray.items.map((product)=>{
          return product.volumeInfo.title
        })
        setProductsState(newProudctsState)
      })

  },[])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/search" element={<Search products = {productsState}/>}>
          </Route>
          <Route path="/wishlist" element={<WishList/>}>
          </Route>
          <Route path="/" element={<Home data={searchValue} setData={setSearchValue}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
