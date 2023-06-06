import React from 'react'
import './Main.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Standings from '../Leagues/Standings/Standings'
import Fixtures from '../Leagues/Fixtures/Fixtures'
import Stats from '../Leagues/Stats/Stats'
import Players from '../Leagues/Players/Players'

const Main = () => {
    const league_id = 152;

    const [toggleState, setToggleState] = useState(1);
    const togglePage = (index) => {
        setToggleState(index);
    }
    const [team, setTeams] = useState([]);
    const fetchTable = async () => {
        const teams = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=${league_id}&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setTeams(teams.data);
    }
    useEffect(() => {
        fetchTable();
    }, []);



    return (
        <div className='middle'>
            <div className="table">
                <div className="table-header">
                    <div className={toggleState === 1 ? 'standings active' : 'standings'} onClick={() => togglePage(1)}>Standings</div >
                    <div className={toggleState === 2 ? 'fixtures active' : 'fixtures '} onClick={() => togglePage(2)}>Fixtures</div>
                    <div className={toggleState === 3 ? 'stats active' : 'stats'} onClick={() => togglePage(3)}>Stats</div>
                    <div className={toggleState === 4 ? 'players active' : 'players'} onClick={() => togglePage(4)}>Players</div>

                </div>
                <div className="league">
                    <div className="league-icon">
                        <img src="https://cdn.dribbble.com/userupload/7392521/file/original-44cccb0f45835867c3ee3696638ad161.png?compress=1&resize=850x1029" alt="" height={60} className='league-image' />
                    </div>
                    <div className="league-text">
                        <span className='league-name'>Premier League</span><br />
                        <span className='league-location'>England</span>

                    </div>

                </div>
                <table className='table'>
                    {toggleState == 1 ? <thead>
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
                    </thead> : null}
                    <tbody>
                        {toggleState === 1 ? team.map(({ overall_league_position, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_league_GF, overall_league_GA, overall_league_PTS }) => {
                            return <Standings position={overall_league_position} name={team_name} MP={overall_league_payed} W={overall_league_W} D={overall_league_D} L={overall_league_L} GF={overall_league_GF} GA={overall_league_GA} PTS={overall_league_PTS} />
                        }) : null}

                        {toggleState === 2 ? <Fixtures /> : null}

                        {toggleState === 3 ? <Stats league_id={league_id}/> : null}
                        {toggleState === 4 ? <Players /> : null}


                    </tbody>
                </table>

            </div >
        </div >
    )
}

export default Main