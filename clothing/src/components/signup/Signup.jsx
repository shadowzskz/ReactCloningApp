import React from 'react';

import FormInput from '../form_input/FormInput'
import CustomButton from '../customButton/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase-utils'
import './Signup.scss';

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password dont match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName});
            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            )

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState(
        { 
                [name]: value
            }
        )
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="signup">
                <h2 className="title">I dont have any account</h2>
                <span>Sign Up with email and Password</span>
                <form  className="signupform" onSubmit={this.handleSubmit}>
                    <FormInput
                        type =  'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display Name'
                        required 
                    />

                    <FormInput
                        type =  'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required 
                    />

                    <FormInput
                        type =  'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required 
                    />
                    
                    <FormInput
                        type =  'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required 
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        )
    }

}

export default SignUp;