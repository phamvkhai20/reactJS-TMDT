import React from 'react';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import PageHome from './Pages/Home';
import Header from '../src/components/shared/Header'
import Footer from '../src/components/shared/Footer'
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Breadcrumb from './components/shared/Breadcrumb';
import '../src/assets/sass/header.scss'
function App() {
  return (
    <>
    <Router >
      <Header />
      <Breadcrumb />
        <Switch >
            <Route path="/" exact>
                <PageHome />
            </Route>
            <Route path="/products" exact>
                <Products />
            </Route>
            <Route path="/product/:id" exact>
                <SingleProduct />
            </Route>
            <Route path="/products/category/:idCategory" exact>
                <Products />
            </Route>
            <Route path="*">
                <h1 className="container" style={{fontSize:"300px",textAlign:"center"}}>404</h1>
            </Route>
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
