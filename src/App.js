import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Start from './Pages/Start/Start';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/404Page/404Page';
class App extends React.Component{
  state={
    isLog:false,
    token:""
  }

  handleLogin = (isLog) => this.setState({isLog: isLog})
  updateToken = (id_token) => this.setState({token: id_token})
  render(){
    const {isLog} = this.state;
    return(
      <div>
        <Switch>
          {
            !isLog ?
            <Route exact path='/' render={() => <Start isLogin={this.handleLogin} tokenUpdate={this.updateToken}/>}/>
              :
            <Route path='/' render={() =><Home handleLogged={this.handleLogin} token={this.state.token}/> }/>
          }
        <Route path='*' component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default App;