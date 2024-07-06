import React from 'react'
import { CamperComponents, CamperIcons, Camperh1, Camperh1Wrap, ConWrap } from '../components/style/styles';
import shop from "../assets/navbar-images/shop-icon.png"
import account from "../assets/navbar-images/acoount.png"
import { Link } from 'react-router-dom';
import SideBar from '../assets/sidebar';
import { Sidebar1 } from './style';

const Navbar = () => {
  return (
    <ConWrap>
        <Sidebar1>
            <SideBar/>
        </Sidebar1>

        <Camperh1Wrap>
            <Link to="/" style={{textDecoration:'none'}}>
            <Camperh1>Camper</Camperh1>
            </Link>
            </Camperh1Wrap>
        <CamperComponents>
            <Link to="/motor" style={{textDecoration: 'none'}}>
            <h2>Motor <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
                </svg>
            </h2>
            </Link>

            <Link to="/caravan" style={{textDecoration: 'none'}}>
            <h2 style={{textDecoration: 'none'}}>Caravan <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
                </svg> 
                </h2>
            </Link>
            
            <Link to="/tuning" style={{textDecoration: 'none'}}>
            <h2>Tuning <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
                </svg> 
                </h2>
            </Link>

            <Link to="/used-car" style={{textDecoration: 'none'}}>
            <h2>Used-Car <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                 <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
                 </svg>
                  </h2>
                </Link>

                <Link to="/camping-place" style={{textDecoration: 'none'}}>
            <h2>Camping-Place <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                     <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
                     </svg> 
                     </h2>
                 </Link>
        </CamperComponents>
        <CamperIcons>
            <img src={shop} alt="shoop" />
            <img src={account} alt="" />
            <h3>Eng</h3>
        </CamperIcons>
        
    </ConWrap>
  )
}

export default Navbar;