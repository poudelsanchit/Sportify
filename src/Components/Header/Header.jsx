import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Football from "@mui/icons-material/SportsSoccer";
import Baseball from "@mui/icons-material/SportsBaseball";
import Cricket from "@mui/icons-material/SportsCricket";
import Volleyball from "@mui/icons-material/SportsVolleyball";
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
const Header = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: "transparent",
        borderRadius: 20,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: "#aaaaaa10",
        },
    }));
    const MoneyButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#1f1f1f",
        borderRadius: 20,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#3d57d1',
        },
    }));
    return (

        //     <Navbar className='navbar' sticky='top'>
        //         <div className="childs mainheadertitle">
        //             <Box sx={{ "& > :not(style)": { m: 0 } }}>
        //                 <Fab color="primary" aria-label="add">
        //                     <Football />
        //                 </Fab>

        //             </Box>
        //             <span>Sportism</span>
        //         </div>
        //         <ColorButton startIcon={<Football />} variant="contained" sx={{ m: 2, ml: 8, px: 4, py: 2, fontSize: 15, fontWeight: 500, fontFamily: "'Roboto Mono', monospace" }}>
        //             Football
        //         </ColorButton>
        //         <ColorButton startIcon={<Baseball />} variant="contained" sx={{ m: 2, px: 4, py: 2, fontSize: 15, fontWeight: 500, fontFamily: "'Roboto Mono', monospace" }}>
        //             Baseball
        //         </ColorButton>
        //         <ColorButton startIcon={<Cricket />} variant="contained" sx={{ m: 2, px: 4, py: 2, fontSize: 15, fontWeight: 500, fontFamily: "'Roboto Mono', monospace" }}>
        //             Cricket
        //         </ColorButton>

        //         <ColorButton startIcon={<Volleyball />} variant="contained" sx={{ m: 2, px: 4, py: 2, fontSize: 15, fontWeight: 500, fontFamily: "'Roboto Mono', monospace" }}>
        //             Volleyball
        //         </ColorButton>


        //         <MoneyButton  variant="contained" sx={{ mr: 2, px: 2, py: 1.8, fontSize: '1rem', fontWeight: 500, fontFamily: "'Roboto Mono', monospace" }}>
        //             1500Usd
        //         </MoneyButton>
        //         <button>
        //             <svg height="24" width="24" viewBox="0 0 24 24" >
        //                 <path d="M0 0h24v24H0z" fill="none"></path>
        //                 <path d="M19.7555474,18.6065254 L16.3181544,15.2458256 L16.3181544,15.2458256 L16.2375905,15.1233001 C16.0877892,14.9741632 15.8829641,14.8901502 15.6691675,14.8901502 C15.4553709,14.8901502 15.2505458,14.9741632 15.1007444,15.1233001 L15.1007444,15.1233001 C12.1794834,17.8033337 7.6781476,17.94901 4.58200492,15.4637171 C1.48586224,12.9784243 0.75566836,8.63336673 2.87568494,5.31016931 C4.99570152,1.9869719 9.30807195,0.716847023 12.9528494,2.34213643 C16.5976268,3.96742583 18.4438102,7.98379036 17.2670181,11.7275931 C17.182269,11.9980548 17.25154,12.2921761 17.4487374,12.4991642 C17.6459348,12.7061524 17.9410995,12.794561 18.223046,12.7310875 C18.5049924,12.667614 18.7308862,12.4619014 18.8156353,12.1914397 L18.8156353,12.1914397 C20.2223941,7.74864367 18.0977423,2.96755391 13.8161172,0.941057725 C9.53449216,-1.08543846 4.38083811,0.250823958 1.68905427,4.08541671 C-1.00272957,7.92000947 -0.424820906,13.1021457 3.0489311,16.2795011 C6.5226831,19.4568565 11.8497823,19.6758854 15.5841278,16.7948982 L18.6276529,19.7705177 C18.9419864,20.0764941 19.4501654,20.0764941 19.764499,19.7705177 C20.0785003,19.4602048 20.0785003,18.9605974 19.764499,18.6502845 L19.764499,18.6502845 L19.7555474,18.6065254 Z" fill="#3d57d1"></path>
        //             </svg>
        //         </button>

        //         <button>
        //             <svg height="24" width="24" viewBox="0 0 24 24" >
        //                 <path d="M0 0h24v24H0z" fill="none"></path>
        //                 <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z" fill="#3d57d1"></path>
        //             </svg>
        //         </button>
        //         <button>
        //             <svg height="30" width="30" viewBox="0 0 24 24" >
        //                 <path d="M0 0h24v24H0z" fill="none"></path>
        //                 <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" fill="#3d57d1"></path>
        //             </svg>
        //         </button><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        //   <span class="navbar-toggler-icon"></span>
        // </button>

        //     </Navbar >

        <>
            <header >
                <nav>
                    <div className="nav">
                        <div href="#" class="nav__logo">
                            <div className="logo">
                                <Box sx={{ "& > :not(style)": { m: 0 } }}>
                                    <Fab color="primary" aria-label="add">
                                        <Football />
                                    </Fab>

                                </Box>
                            </div>
                            <div className="text">Sportism</div>


                        </div>
                        <div className="header-icons football">Football</div>
                        <div className="header-icons cricket">Cricket</div>
                        <div className="header-icons basketball">Baseketball</div>
                        <div className="header-icons Volleyball">Volleyball</div>
                        <button className='button1'>
                            <svg height="24" width="24" viewBox="0 0 24 24" >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19.7555474,18.6065254 L16.3181544,15.2458256 L16.3181544,15.2458256 L16.2375905,15.1233001 C16.0877892,14.9741632 15.8829641,14.8901502 15.6691675,14.8901502 C15.4553709,14.8901502 15.2505458,14.9741632 15.1007444,15.1233001 L15.1007444,15.1233001 C12.1794834,17.8033337 7.6781476,17.94901 4.58200492,15.4637171 C1.48586224,12.9784243 0.75566836,8.63336673 2.87568494,5.31016931 C4.99570152,1.9869719 9.30807195,0.716847023 12.9528494,2.34213643 C16.5976268,3.96742583 18.4438102,7.98379036 17.2670181,11.7275931 C17.182269,11.9980548 17.25154,12.2921761 17.4487374,12.4991642 C17.6459348,12.7061524 17.9410995,12.794561 18.223046,12.7310875 C18.5049924,12.667614 18.7308862,12.4619014 18.8156353,12.1914397 L18.8156353,12.1914397 C20.2223941,7.74864367 18.0977423,2.96755391 13.8161172,0.941057725 C9.53449216,-1.08543846 4.38083811,0.250823958 1.68905427,4.08541671 C-1.00272957,7.92000947 -0.424820906,13.1021457 3.0489311,16.2795011 C6.5226831,19.4568565 11.8497823,19.6758854 15.5841278,16.7948982 L18.6276529,19.7705177 C18.9419864,20.0764941 19.4501654,20.0764941 19.764499,19.7705177 C20.0785003,19.4602048 20.0785003,18.9605974 19.764499,18.6502845 L19.764499,18.6502845 L19.7555474,18.6065254 Z" fill="#3d57d1"></path>
                            </svg>
                        </button>

                        <button className='button1'>
                            <svg height="24" width="24" viewBox="0 0 24 24" >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z" fill="#3d57d1"></path>
                            </svg>
                        </button>
                        <button className='button1'>
                            <svg height="30" width="30" viewBox="0 0 24 24" >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" fill="#3d57d1"></path>
                            </svg>
                        </button>
                        <div className="menu">
                            <button>
                                <svg height="30" width="30" viewBox="0 0 24 24" >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z" fill="#3d57d1"></path>
                                </svg>
                            </button>
                        </div>
                    </div>


                </nav>
            </header>
        </>
    )
}

export default Header