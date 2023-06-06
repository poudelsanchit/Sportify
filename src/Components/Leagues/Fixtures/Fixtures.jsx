import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { color, margin } from '@mui/system';
import EachFixture from './EachFixture';
import Loader from '../../Loader';
import DatePicker from "react-datepicker";
import './Fixtures.css'

import "react-datepicker/dist/react-datepicker.css";
const Fixtures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
    const [startDate, setStartDate] = useState(new Date("2023/5/10"));

    const [isloaded, setIsLoaded] = useState(false);
   const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();
    const selectedDate
     = `${year}-${month}-${day}`;
    const currentdate= new Date();

    const currentyear = currentdate.getFullYear();
    const currentmonth = currentdate.getMonth() + 1;
    const currentday = currentdate.getDate();
    const currentDate = `${currentyear}-${currentmonth}-${currentday}`;
    const [team, setTeams] = useState([]);
    const fetchTable = async () => {
      setIsLoaded(false);
      const teams = await axios.get(`https://apiv2.apifootball.com/?action=get_events&from=${selectedDate}&to=${currentDate}&league_id=148&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
      setTeams(teams.data);
      setIsLoaded(true);
    }
    useEffect(() => {
        fetchTable();

    }, [selectedDate]);
    console.log(selectedDate)
    console.log(currentDate)
    return (
        <>
      <button className="example-custom-input btn btn-primary" onClick={handleClick}>
        Filter fixtures
      </button>
      {selectedDate} {'---->'} {currentDate}

      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
            {isloaded == false ? <p style={isloaded == false ? { justifyContent: 'center', display: 'flex', height: '300px', alignItems: 'center' } : null}><Loader /> </p> : null}

            <div className="fixtures-body" style={{ padding: 0 }}>
                {isloaded==true?team.map(({ match_hometeam_name, match_awayteam_name, match_round,match_hometeam_score,match_awayteam_score,match_status,match_date }) => { return (<EachFixture match_hometeam_name={match_hometeam_name} match_awayteam_name={match_awayteam_name} match_hometeam_score={match_hometeam_score} match_awayteam_score={match_awayteam_score} match_status={match_status} match_date={match_date}/> ) }
                )
                :null}
            </div >

        </>
    )
}

export default Fixtures