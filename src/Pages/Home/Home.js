import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore'
import Playlists from '../Playlists/Playlists'
import './home.css';
const Home = props => {
    console.log(props.token);
    return(
        <div>
            <Header isLogged={props.handleLogged}/>
            <Switch>
                <Route exact path='/' component={() => (<NewHome token={props.token} />)}/>
                <Route exact path='/explore' component={() => (<Explore token={props.token} />)}/>
                <Route exact path='/playlists' component={() => (<Playlists token={props.token} />)}/>
            </Switch>
        </div>
    )
}

export default Home;