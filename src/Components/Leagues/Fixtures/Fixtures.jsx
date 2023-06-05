import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { color, margin } from '@mui/system';
import EachFixture from './EachFixture';
import Loader from '../../Loader';
const Fixtures = () => {
    const [isloaded, setIsLoaded] = useState(false);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fulldate = `${year}-${month}-${day}`;
    // const fulldate = `2022-6-1`;

    const [team, setTeams] = useState([]);
    const fetchTable = async () => {
        const teams = await axios.get(`https://apiv2.apifootball.com/?action=get_events&from=2023-05-10&to=${fulldate}&league_id=148&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setTeams(teams.data);
        setIsLoaded(true);
    }
    useEffect(() => {
        fetchTable();
    }, []);
    return (
        <>
            {isloaded == false ? <p style={isloaded == false ? { justifyContent: 'center', display: 'flex', height: '300px', alignItems: 'center' } : null}><Loader /> </p> : null}

            <div className="fixtures-body" style={{ padding: 0 }}>
                {team.map(({ match_hometeam_name, match_awayteam_name, match_round }) => { return ((match_round == "ROUND 38") ? <EachFixture match_hometeam_name={match_hometeam_name} match_awayteam_name={match_awayteam_name} /> : null) }
                )
                }
            </div >

        </>
    )
}

export default Fixtures