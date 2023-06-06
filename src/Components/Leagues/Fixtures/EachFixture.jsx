import React from 'react'
import './Fixtures.css'
const EachFixture = ({ match_hometeam_name, match_awayteam_name,match_status,match_hometeam_score,match_awayteam_score,match_date }) => {
    return (
        <div className='Eachfixtures' style={{padding:'25px'}}>
            <div className="fixture-left">
                <div className="team1" style={{fontSize:'16px'}}>{match_hometeam_name}</div>
                <div className="team2" style={{fontSize:'16px'}}>{match_awayteam_name}</div>
            </div>
            <div className="fixture-right">
                <div className="score">
                    <div className="hometeamscore">{match_hometeam_score}</div>
                    <div className="awayteamscore">{match_awayteam_score}</div>
                </div>
                <div className="matchdate">
                    <div className="time">{match_status}</div>
                    <div className="matchdatechild">{match_date}</div>
                     </div>

            </div>

          

        </div>

    )
}

export default EachFixture