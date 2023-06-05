import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const About = () => {
    const [team, setTeams] = useState([]);
    const fetchTable = async () => {
        const teams = await axios.get('https://apiv2.apifootball.com/?action=get_events&from=2023-05-1&to=2023-05-29&league_id=148&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b');
        setTeams(teams.data);
    }
    useEffect(() => {
        fetchTable();
    }, []);
    console.log(team)



    return (
        <>
            <div className='middle'>
                team1
                {team.map(({ match_hometeam_name, match_awayteam_name }) => {
                    return <p>{match_hometeam_name + match_awayteam_name}</p>
                })}
            </div>



        </>
    )
}

export default About