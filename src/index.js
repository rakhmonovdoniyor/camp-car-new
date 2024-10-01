import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MotorPage from './components/motor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import CaravanPage from './components/caravan';
import TuningPage from './components/tuning';
import UsedCarPage from './components/used-car';
import CampPlace from './components/campPlace';
import { Footer } from './footer/futer';
import { Detail } from './detailItems/motordetail';
import { DetailCaravan } from './detailItems/caravandetail';
import { CarouselComponent } from './homepage/carousel';
import CampingPlace from './components/campPlace/filtr';
import DetailPlace from './components/campPlace/detail';
import Detailnew, { Carusel } from './components/campPlace/details';
import CampingMenu from './components/campPlace/details';
import Campinginfo from './components/campPlace/newdetail';
import MUlti from './components/campPlace/ulti';
import CampingPlaceInfoComponent from './components/campPlace/details';
import Motodetail from './detailItems/motodetail';
import Register from './Signin/register';
import UsedDetail from './detailItems/useddetail';
import TuningDetail from './detailItems/tuningdetail';
import CartComponent from './components/cart/cart';
import CompareComponent from './components/compare/compare';
// import { Register } from './Signin/register';
// import CreateAccountComponent from './Signin/create';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<CarouselComponent/> } />
    <Route path='/motor' element={<MotorPage/> } />
    <Route path='/caravan' element={<CaravanPage/> } />
    <Route path='/tuning' element={<TuningPage/> } />
    <Route path='/used-car' element={<UsedCarPage/> } />
    <Route path='/camping-place' element={<CampingPlace/> } />
    <Route path='/cart' element ={< CartComponent/>}/>
    <Route path='/compare' element ={<CompareComponent/>}/>
    <Route path='/motor/:id' element = {<Motodetail/>}/>
    <Route path='/caravan/:id' element = {<DetailCaravan/>}/>
    <Route path='/used-car/:id' element = {<UsedDetail/>}/>
    <Route path='/tuning/:id' element = {<TuningDetail/>}/>
    <Route path='/camping-place/:id' element = {<CampingPlaceInfoComponent/>}/>
    <Route path='/createaccount' element ={<Register/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

