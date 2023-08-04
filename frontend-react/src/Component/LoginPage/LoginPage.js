import React, { Component } from 'react';
import './LoginPage.css'
import { Grid, Paper} from '@mui/material';
import firebase from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import logo from '../../images/logo.png'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signIn: true,
            //signin
            signin_email:null,
            signin_password:null,
            //singUp
             signup_name:null,
             signup_email:null,
             signup_password:null
         }
    }

    switchPanel=()=>{
        if(this.state.signIn)
            this.setState({signIn: false});
        else    
            this.setState({signIn: true});
    }
    signUp=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.signup_email, this.state.signup_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    let payload = {
        "userId":user.uid,
        "userName": this.state.signup_name,
        "userImage":"https://scontent-bom1-2"

    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf8' },
        body: JSON.stringify(payload),
      };
      fetch("http://localhost:8080/api/userService/save", requestOptions)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data));
        //this.setState({ savedUser: data });
        window.location.reload();
      })
      .catch(error =>{
        console.error(error);
      })
  })
  .catch((error) => {
    console.error(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

    signInMethod=()=>{
        const auth = getAuth();
signInWithEmailAndPassword(auth,this.state.signin_email, this.state.signin_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    fetch("http://localhost:8080/api/userService/getAllUsers/"+user.userId)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data));
        //this.setState({ savedUser: data }); 
        window.location.reload();
      })
      .catch(error =>{
        console.error(error);
      })
    
    // ...
  })
  .catch((error) => {
    console.error(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
  });
    }

    render() { 
        return ( 
           <div className='main_container'>
            <Grid className='main_content' container>
                <Grid item xs={7}>
                    <div className='loginPage_logo'>
                        <img src={logo}  />
                    </div>
                    <div className='loginPage_text'>
                        <h1>Facebook</h1>
                        <p> Helps you to connect and share with the people in your life</p>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper  className='loginCard_container'>
                        {
                            this.state.signIn === true?
                            <div cl ='login_panel'>
                                <div>
                                    <input onChange={(event)=>{this.state.signin_email= event.currentTarget.value}} type='text' className='login_input' placeholder='EmailAddress'/>
                                </div>
                                <div>
                                    <input onChange={(event)=>{this.state.signin_password = event.currentTarget.value}} type='password' className='login_input' placeholder='Password'/>
                                </div>
                                <div>
                                    <button onClick={this.signInMethod} className='login_button'>Log in</button>
                                </div>
                                <div>
                                    <div className='forget_text'>Forgotten password</div>
                                </div>
                                <div className='divisor'></div>
                                <div>
                                    <button className='login_createnew' onClick={this.switchPanel}>Create New Account</button>
                                </div>
                            </div>
                            :
                            <div container='login_panel'>
                                <div>
                                    <input onChange={(event)=>{this.state.signup_name = event.currentTarget.value}} type='text' className='login_input' placeholder='name' />
                                </div>
                                <div>
                                    <input onChange={(event)=>{this.state.signup_email = event.currentTarget.value}} type='text' className='login_input' placeholder='email' />
                                </div>
                                <div>
                                    <input onChange={(event)=>{this.state.signup_password = event.currentTarget.value}} type='password' className='login_input' placeholder='password' />
                                </div>
                                <div>
                                    <button onClick={this.signUp} className='login_button'>sign up</button>
                                </div>
                                <div>
                                    <div onClick={this.switchPanel} className='forget_Text'>Already have a account</div>
                                </div>
                            </div>
                       }
                    </Paper>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>

           </div>
                
         );
    }
}
 
export default LoginPage;