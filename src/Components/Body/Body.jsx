import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Body.css'
import PopularLeagues from '../PopularLeagues/PopularLeagues'
import Main from '../Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Laliga from '../Leagues/Laliga'
import About from '../../About'
import UCL from '../Leagues/UCL/UCL.jsx'
import UEL from '../Leagues/UEL/UEL.jsx'
import SerieA from '../Leagues/SerieA.jsx'
import Bundesliga from '../Leagues/Bundesliga'
import Ligue1 from '../Leagues/Ligue1'
import PopularLiveMatches from '../LiveMatches/Legends'
import Sidebar from '../../Sidebar/Sidebar'
const Body = () => {

    return (
        <>
         <div className="body-main">
            <Sidebar/>
                <PopularLeagues />
                <Routes>
                    <Route index element={<Main />} />
                    <Route path='/ucl' element={<UCL />} />
                    <Route path='/uel' element={<UEL />} />
                    <Route path='/laliga' element={<Laliga />} />
                    <Route path='/premier' element={<Main />} />
                    <Route path='/seriea' element={<SerieA />} />
                    <Route path='/bundesliga' element={<Bundesliga />} />
                    <Route path='/ligue1' element={<Ligue1 />} />
                    <Route path='/about' element={<About />} />

                </Routes>
                <PopularLiveMatches/>
            </div>
        </>
    )
}


export default Body