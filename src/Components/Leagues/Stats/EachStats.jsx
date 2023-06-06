import React from 'react'

const EachStats = ({player_place,player,goals,team_name}) => {
    return (
        <tr className='indexs'>
            <td><div className='eachstats-player'>{player_place} <div className='stats-player-club'> <div className='player'>{player}</div> <div>{team_name}</div></div>  </div> 
            
            </td>
            <td style={{float:'right',paddingRight: '20px'}}>{goals}</td>
        </tr>)
}

export default EachStats