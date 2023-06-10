import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavLink to={`/ucl`} style={{ textDecoration: 'none', color: 'white' }} >
                <SideBarIcon icon={<img src="https://cdn.dribbble.com/userupload/7392558/file/original-bfb0684da7ec221a630a4c6fdff9bd96.png?compress=1&resize=1200x1140" alt="" height={24} className='league-image' />
                } />
            </NavLink>
            <Divider />
            <NavLink to={`/uel`} style={{ textDecoration: 'none', color: 'white' }} >

                <SideBarIcon icon={<img src="https://cdn.dribbble.com/userupload/7392568/file/original-7d629e7dfa3f8e15c1a2aa343d69dd52.png?compress=1&resize=1200x1718" alt="" height={24} className='league-image' />
                } />
            </NavLink>

            <Divider />
            <NavLink to={`/`} style={{ textDecoration: 'none', color: 'white' }} >

                <SideBarIcon icon={<img src="https://cdn.dribbble.com/userupload/7392521/file/original-44cccb0f45835867c3ee3696638ad161.png?compress=1&resize=850x1029" alt="" height={24} className='league-image' />
                } />
            </NavLink>

            <Divider />
            <NavLink to={`/laliga`} style={{ textDecoration: 'none', color: 'white' }} >

                <SideBarIcon icon={<img src="https://cdn.dribbble.com/userupload/7392476/file/original-eea45c727891089045c9faac5850b850.png?compress=1&resize=752x" alt="" height={24} className='league-image' />
                } />
            </NavLink>

            <Divider />
            <NavLink to={`/seriea`} style={{ textDecoration: 'none', color: 'white' }} >

                <SideBarIcon icon={<img src="https://cdn.dribbble.com/userupload/7392604/file/original-9a0dca5a129cddac6aa0e63cd5ade7dc.png?compress=1&resize=722x1024" alt="" height={24} className='league-image' />
                } />
            </NavLink>

            <Divider />
            <NavLink to={`/bundesliga`} style={{ textDecoration: 'none', color: 'white' }} >

                <SideBarIcon icon={<img src="https://cdn.dribbble.com/userupload/7392618/file/original-1806f83f17d2490fa67ed4a8ae99ff5e.png?compress=1&resize=1024x1022" alt="" height={24} className='league-image' />

                } />
            </NavLink>

            <Divider />
            <NavLink to={`/ligue1`} style={{ textDecoration: 'none', color: 'white' }} >

                <SideBarIcon icon={<img src="https://cdn.dribbble.com/userupload/7392640/file/original-a398aac37ebe5f8b077824bbc4bf65e8.png?compress=1&resize=1200x1670" alt="" height={24} className='league-image' />
                } />
            </NavLink>

            <Divider />

        </div >
    )
}
const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}

    </div>
);
const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar