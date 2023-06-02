import React from 'react'

const Standings = ({ position, name, MP, W, D, L, GF, GA, PTS }) => {
    const GD = GF - GA;

    return (
        <>


            <tr className='indexs'>
                <th scope="row">{position}</th>
                <td>{name}</td>
                <td>{MP}</td>
                <td>{W}</td>
                <td>{D}</td>
                <td>{L}</td>
                <td>{GF}</td>
                <td>{GA}</td>
                <td>{GD}</td>
                <td>{PTS}</td>



            </tr>

        </>

    )
}

export default Standings