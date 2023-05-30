import React from 'react'
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import { NavLink } from 'react-router-dom';
const About = () => {
    const activeButton = 'btn btn-primary';
    const normalButton = '';
    return (
        <>
            <div className='middle'>
                <NavLink to='/' className={({ isAccordionItemSelected }) => isAccordionItemSelected ? activeButton : normalButton}><button>Hello</button></NavLink>
                <NavLink to='/about' className={({ isAccordionItemSelected }) => isAccordionItemSelected ? activeButton : normalButton}><button>hi</button></NavLink>
            </div>

        </>
    )
}

export default About