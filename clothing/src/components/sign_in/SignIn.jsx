import React from 'react';
import FormInput from '../form_input/FormInput';
import CustomButton from  '../customButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';
import './Signin.scss';


class SignIn extends React.Component {
    constructor(props) {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState(
                {
                    email: '',
                    password: ''
                }
            );
        } catch (error) {
            console.log(error)
        }
    }

    handleChage = (event) => {
        const {value, name} = event.target;
        
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="Sign_in">
                <h2>I alreaady have an account</h2>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    handleChange={this.handleChage}
                    value={this.state.email} 
                    label="email"
                    required 
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    label="password"
                    handleChange={this.handleChage}
                    required 
                    />
                <div className="button">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SignIn with Google</CustomButton>
                </div>                
            </form>
            
            </div>
        )
    }
}
export default SignIn;