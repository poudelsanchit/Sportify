import React from 'react'

const EachFixture = ({ match_hometeam_name, match_awayteam_name }) => {
    return (
        <div>
            <span style={{ fontSize: 12 }}>{match_hometeam_name}             vs
            </span>
            <span style={{ fontSize: 12 }}>{match_awayteam_name}</span>

        </div>

    )
}

export default EachFixture