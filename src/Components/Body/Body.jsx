import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Body.css'
import PopularLeagues from '../PopularLeagues/PopularLeagues'
import Main from '../Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Laliga from '../Laliga'
import About from '../../About'
import UCL from '../UCL'
import UEL from '../UEL'
import SerieA from '../SerieA'
import Bundesliga from '../Bundesliga'
import Ligue1 from '../Ligue1'
const Body = () => {
    let users = [
        {
            username: 'Real Madrid',
            image: 'https://cf.shopee.com.my/file/149ead55ea80fdeca6684db87965ba7e?fbclid=IwAR2LGDAt3HiuniVFjkwmbITL2WaaGr-EGenbOMQMIhB8pkBQD2L0I_N9uPQ',
            profilepic: 'https://i.pinimg.com/564x/fa/4f/0d/fa4f0db883d36fbfcfe76c06d9012be0.jpg',
            tweettext: 'Real madrid designer kit',
            commentcounts: 976,
            retweetcounts: 567,
            likecountcounts: 900,
            viewscounts: 6,


        },

        {
            username: 'Cristiano Ronaldo',
            image: 'https://i.pinimg.com/564x/ce/0f/3f/ce0f3f36f9673ac76f8e29b00f7efce7.jpg',
            profilepic: 'https://i.pinimg.com/564x/ce/0f/3f/ce0f3f36f9673ac76f8e29b00f7efce7.jpg',
            tweettext: 'Siuuuuuuu',
            commentcounts: 6765,
            retweetcounts: 232,
            likecountcounts: 600,
            viewscounts: 6,



        },

        {
            username: 'Sanchit Poudel',
            image: 'https://sanchitpoudel.com.np/assets/image4.jpg',
            profilepic: 'https://pbs.twimg.com/profile_images/1526927042033250304/TJqo3n55_400x400.jpg',
            tweettext: 'wassuppp.',
            commentcounts: 6001,
            retweetcounts: 442,
            likecountcounts: 86,
            viewscounts: 6,

        },
        {
            username: 'Mia Khalifa',
            image: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg',
            profilepic: 'https://pbs.twimg.com/media/DVpKRidVoAAJ5Tb.jpg:large',
            tweettext: 'Feeling Good (You know what I am talking about Daddy)',
            commentcounts: 8765,
            retweetcounts: 654,
            likecountcounts: 342,
            viewscounts: 9,

        }
    ];



    return (
        <>
            <div className="container-fluid d-xxl-flex justify-content-between ">
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
                <div className=' right'></div>
            </div>
        </>
    )
}


export default Body