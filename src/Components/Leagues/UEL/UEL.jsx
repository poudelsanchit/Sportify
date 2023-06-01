import React from 'react'
import GroupA from './GroupA'
import GroupB from './GroupB'
import GroupC from './GroupC'
import GroupD from './GroupD'
import GroupE from './GroupE'
import GroupF from './GroupF'
import GroupG from './GroupG'
import GroupH from './GroupH'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './UEL.css'
const UEL = () => {
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [team, setGroupA] = useState([]);
    const [groupB, setGroupB] = useState([]);



    const fetchTable = async () => {
        const teams = await axios.get('https://apiv3.apifootball.com/?action=get_standings&league_id=4&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b');
        setGroupA(teams.data);
        setIsLoaded(true);
    }
    useEffect(() => {
        fetchTable();
    }, [shouldRefresh]);

    return (
        <>
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
                            <img src="https://cdn.dribbble.com/userupload/7392568/file/original-7d629e7dfa3f8e15c1a2aa343d69dd52.png?compress=1&resize=1200x1718" alt="Europa League" height={60} className='league-image' />
                        </div>
                        <div className="league-text">
                            <span className='league-name'>UEFA Europa League</span><br />
                            <span className='league-location'>Europe</span>

                        </div>

                    </div>
                    {
                        isLoaded ? <>
                            <GroupA groupA={team} />
                            <GroupB groupB={team} />
                            <GroupC groupC={team} />
                            <GroupD groupD={team} />
                            <GroupE groupE={team} />
                            <GroupF groupF={team} />
                            <GroupG groupG={team} />
                            <GroupH groupH={team} />
                        </> : null
                    }



                </div>

            </div>
        </>
    )
}

export default UEL