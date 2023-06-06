import React from 'react'
import GroupA from './GroupA'
import GroupB from './GroupB'
import GroupC from './GroupC'
import GroupD from './GroupD'
import GroupE from './GroupE'
import GroupF from './GroupF'
import GroupG from './GroupG'
import GroupH from './GroupH'
import axios from 'axios'
import './UCL.css'
import { useState, useEffect } from 'react'
import Fixtures from '../Fixtures/Fixtures'
import Stats from '../Stats/Stats'
import Players from '../Players/Players'
const UCL = () => {
    const [toggleState, setToggleState] = useState(1);
    const league_id = 3;
    const togglePage = (index) => {
        setToggleState(index);
    }
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [team, setGroupA] = useState([]);

    const fetchTable = async () => {
        const teams = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=${league_id}&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setGroupA(teams.data);
        setIsLoaded(true);
    }
    useEffect(() => {
        fetchTable();
    }, [shouldRefresh]);


    return (

        <div className='middle'>

            <div className="table">
                <div className="table-header">
                    <div className={toggleState === 1 ? 'standings active' : 'standings'} onClick={() => togglePage(1)}>Standings</div >
                    <div className={toggleState === 2 ? 'fixtures active' : 'fixtures '} onClick={() => togglePage(2)}>Fixtures</div>
                    <div className={toggleState === 3 ? 'stats active' : 'stats'} onClick={() => togglePage(3)}>Stats</div>
                </div>
                <div className="league">
                    <div className="league-icon">
                        <img src="https://cdn.dribbble.com/userupload/7392558/file/original-bfb0684da7ec221a630a4c6fdff9bd96.png?compress=1&resize=1200x1140" alt="" height={60} className='league-image' />
                    </div>
                    <div className="league-text">
                        <span className='league-name'>UEFA Champions League</span><br />
                        <span className='league-location'>Europe</span>
                    </div>
                </div>
                {(isLoaded && toggleState == 1) ?
                    <>
                        <GroupA groupA={team} />
                        <GroupB groupB={team} />
                        <GroupC groupC={team} />
                        <GroupD groupD={team} />
                        <GroupE groupE={team} />
                        <GroupF groupF={team} />
                        <GroupG groupG={team} />
                        <GroupH groupH={team} />
                    </> : null}

                {toggleState == 2 ? <Fixtures league_id={league_id}/> : null}
                {toggleState == 3 ? <Stats league_id={league_id}/> : null}



            </div>

        </div >
    )
}

export default UCL