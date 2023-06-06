import React, { useEffect, useState } from 'react'
import './Stats.css'
import axios from 'axios';
import EachStats from './EachStats';

const Stats = ({league_id}) => {

    const[topScorers,setTopScorers]= useState([]);

    const fetchData= async()=>{
        const topscorers= await axios.get(`https://apiv3.apifootball.com/?action=get_topscorers&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b&league_id=${league_id}`);
        setTopScorers(topscorers.data);
    }

    useEffect(()=>{
fetchData();
    },[])
    return (
        <>
        <div className="Stats">
            <div className="Goals fs-5">
                Goals
            </div>

            <table className='table' >
                        <tr >
                            <th scope="col" style={{paddingLeft:'10px',float:''}}>Player</th>
                            <th scope="col" style={{float:'right',paddingRight: '20px'}}>Goals</th>
                        </tr>   
                       <tbody>
                        {topScorers.map(({player_place,player_name,goals,team_name})=>{
                            return <EachStats player_place={player_place} player={player_name} goals={goals} team_name={team_name}/>

                        })}
                       </tbody>
                        

                </table>
        </div>

        </>
    )
}

export default Stats