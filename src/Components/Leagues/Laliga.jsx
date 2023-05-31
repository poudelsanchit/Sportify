import React from 'react'
import '../Main/Main.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TeamRow from '../Main/TeamRow.jsx'
const Laliga = () => {
    const [team, setTeams] = useState([]);
    const fetchTable = async () => {
        const teams = await axios.get('https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b');
        setTeams(teams.data);
    }
    useEffect(() => {
        fetchTable();
    }, []);

    {
        team.map(({ team_name }) => {
            console.log(team_name)
        })
    }


    return (
        <div className='middle'>
            <div className="table">
                <div className="table-header">
                    <div className="standings active">Standings</div>
                    <div className="fixtures">Fixtures</div>
                    <div className="stats">Stats</div>
                    <div className="players">Players</div>

                </div>
                <div className="league">
                    <div className="league-icon">
                        <img src="https://cdn.dribbble.com/userupload/7392476/file/original-eea45c727891089045c9faac5850b850.png?compress=1&resize=752x" alt="" height={60} className='league-image' />
                    </div>
                    <div className="league-text">
                        <span className='league-name'>LaLiga </span><br />
                        <span className='league-location'>Spain</span>

                    </div>

                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Club</th>
                            <th scope="col">MP</th>
                            <th scope="col">W</th>
                            <th scope="col">D</th>
                            <th scope="col">L</th>
                            <th scope="col">GF</th>
                            <th scope="col">GA</th>
                            <th scope="col">GD</th>
                            <th scope="col">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.map(({ overall_league_position, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_league_GF, overall_league_GA, overall_league_PTS }) => {
                                return <TeamRow position={overall_league_position} name={team_name} MP={overall_league_payed} W={overall_league_W} D={overall_league_D} L={overall_league_L} GF={overall_league_GF} GA={overall_league_GA} PTS={overall_league_PTS} />
                            })
                        }


                    </tbody>
                </table>

            </div >
        </div >
    )
}

export default Laliga