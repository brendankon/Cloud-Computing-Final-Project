import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {ReactComponent as HomeLogo} from '../../assets/home-logo.svg';
import {ReactComponent as SearchLogo} from '../../assets/search-logo.svg';
import {ReactComponent as PlaylistsLogo} from '../../assets/playlists-logo.svg';
import './header.css';
const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',margin: '0 auto'}}>
                    <NavLink exact to='/' activeClassName='active'><HomeLogo className='div-svg'/></NavLink>
                    <NavLink exact to='/explore' activeClassName='active'><SearchLogo className='div-svg'/></NavLink>
                    <NavLink exact to='/playlists' activeClassName='active'><PlaylistsLogo className='div-svg-playlist'/></NavLink>
                </div>
                <div>
                    <button className='button-log-out' onClick={handleClick}>Log out</button>    
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header);