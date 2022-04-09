import React from 'react';
import './start.css';
import queryString from 'query-string';


/*function Authenticate(Start) {
    return function Authenticate (props) {
        const location = useLocation();
        const params = queryString.parse(window.location.hash);
        const token = params.id_token;
        var logged = false;
        if(token != null){
            logged = true;
        }
        return <Start isLogin={logged}/>;
    }
}*/

const Start = props =>{
 
    function HandleSubmit(e){
        e.preventDefault();
        window.location.href = "https://cloudcomputingmusicapp.auth.us-east-1.amazoncognito.com/login?client_id=5mlcifkn3e78vco1olg3ael3v9&response_type=token&scope=phone+email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=http://localhost:3000/smart-tunes?";
    }
    
    const params = queryString.parse(window.location.hash);
    const token = params.id_token;
    if(token != null){     
        props.tokenUpdate(token) 
        props.isLogin(true);
    }

    return(
        <div className='center'>
            <div className='div-login-logo'>
                <h1>Smart Tunes</h1>
            </div>
            <div>
                <form onSubmit = {HandleSubmit}>
                    <button onSubmit={HandleSubmit}>Log In</button>
                </form>
            </div>
        </div>
    )

}

/*class Start extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        window.location.href = "https://cloudcomputingmusicapp.auth.us-east-1.amazoncognito.com/login?client_id=5mlcifkn3e78vco1olg3ael3v9&response_type=token&scope=phone+email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=http://localhost:3000/smart-tunes"
    }
    render(){
        return(
            <div className='center'>
                <div className='div-login-logo'>
                    <h1>Smart Tunes</h1>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}*/

//export default Authenticate(Start);
export default Start;