import React from 'react'
import TeamRow from '../../Main/TeamRow'

const GroupE = ({ groupE }) => {
    return (
        <>
            <div className="group-header">Group E</div>

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
                    {groupE.slice(16, 20).map(({ overall_league_position, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_league_GF, overall_league_GA, overall_league_PTS }) => {

                        return <TeamRow position={overall_league_position} name={team_name} MP={overall_league_payed} W={overall_league_W} D={overall_league_D} L={overall_league_L} GF={overall_league_GF} GA={overall_league_GA} PTS={overall_league_PTS} />
                    })}

                </tbody>
            </table>
        </>)
}

export default GroupE