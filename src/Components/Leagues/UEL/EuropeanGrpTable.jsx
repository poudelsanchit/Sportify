import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import EachGroupTable from './EachGroupTable';
const EuropeanGrpTable = () => {
    const [team, setTeams] = useState([]);
    const groupA = [];
    const groupB = [];
    const groupC = [];
    const groupD = [];
    const groupE = [];
    const groupF = [];
    const groupG = [];
    const groupH = [];

    const fetchTable = async () => {
        const teams = await axios.get('https://apiv3.apifootball.com/?action=get_standings&league_id=3&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b');
        setTeams(teams.data);
    }
    useEffect(() => {
        fetchTable();
    }, []);
    groupA.push(team[0], team[1], team[2], team[3]);
    groupB.push(team[4], team[5], team[6], team[7]);
    groupC.push(team[8], team[9], team[10], team[11]);
    groupD.push(team[12], team[13], team[14], team[15]);
    groupE.push(team[16], team[17], team[18], team[19]);
    groupF.push(team[20], team[21], team[22], team[23]);
    groupG.push(team[24], team[25], team[26], team[27]);
    groupH.push(team[28], team[29], team[30], team[31]);


    return (
        <div className="groupa">
            <div className="groupheader">Group A</div>
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




                </tbody>
            </table>
        </div>
    )
}

export default EuropeanGrpTable