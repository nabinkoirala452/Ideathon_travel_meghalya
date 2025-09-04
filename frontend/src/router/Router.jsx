import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import SearchResultList from '../pages/SearchResultList'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Booked from '../pages/Booked'
import MyAccount from '../Dashboard/UserAccount/MyAccount'
import Bookings from '../Dashboard/AdminPanel/Bookings'
import AdminTours from '../Dashboard/AdminPanel/AdminTours'
import CreateTours from '../Dashboard/AdminPanel/CreateTours'
import UpdateTours from '../Dashboard/AdminPanel/UpdateTour'
import HotelBooking from "../pages/HotelBooking";
import PlacesToVisit from "../pages/PlacesToVisit";
import BusBooking from "../pages/BusBooking";
import PriceTracker from '../components/PriceTracker/PriceTracker';
import PriceTrack from '../pages/PriceTracker';
import PlaceDetails from "../pages/PlaceDetails"; 



const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/all-booking' element={<Bookings />} />
        <Route path='/all-tours' element={<AdminTours />} />
        <Route path='/update-tour/:id' element={<UpdateTours />} />
        <Route path='/create' element={<CreateTours />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/booked' element={<Booked />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tours/search' element={<SearchResultList />} />

        <Route path='/hotel-booking' element={<HotelBooking />} />
         <Route path='/places-to-visit/:tourId' element={<PlacesToVisit />} />
        <Route path='/bus-booking' element=       {<BusBooking />} />

        <Route path="/price" element={<PriceTracker />} />
        <Route path="/price-tracker" element={<PriceTrack />} />
        <Route path="/tours/:tourId" element={<PlacesToVisit />} />
        <Route path="/place/:id" element={<PlaceDetails />} />

        
    </Routes>
  )
}

export default Router

