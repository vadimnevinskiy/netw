import React from "react";
import {Form, Field} from 'react-final-form'
import classes from './Login.module.css';

const Login = (props) => {

    let onSubmit = (values) => {
        let successLogin = props.login(values.email, values.password, values.rememberMe, values.captcha)
        return successLogin;
        debugger
    }


    return (

        <div className={classes.Login}>
            <h1>Login</h1>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors
                }}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className={classes.loginForm}>
                        <div className={classes.formField}>
                            <Field name="email">
                                {({input, meta}) => (
                                    <div>
                                        <label>Email</label>
                                        <input {...input} type="text" placeholder="Email"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.formField}>
                            <Field name="password">
                                {({input, meta}) => (
                                    <div>
                                        <label>Password</label>
                                        <input {...input} type="password" placeholder="Password"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.loginCheckbox}>
                            <Field
                                name="rememberMe"
                                component="input"
                                type="checkbox"
                            />
                            Remember Me
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        </div>
    )
}

export default Login;
