import React, {useContext, useState} from 'react'
import AppContext, {appContextDefaultValue} from 'context/app';
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import ApiService from "../../../utils/apiService";
import {routes} from "../../../constants/routes";
import {useHistory} from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {appState, setAppState} = useContext(AppContext);

    const history = useHistory();



    function validateForm() {
        return username.length > 0 && password.length > 0
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const {accessToken, did} = await ApiService.logIn(username, password)

            ApiService.clientSideLogIn(accessToken, did);

            setAppState({
                ...appState,
                isAuthenticated: true,
                accessToken,
                didToken: did,
                username
            })

            history.push(routes.ROOT);

        } catch (error) {
            ApiService.alertWithBrowserConsole(error.message)
        }
    };


    return(
            <div className='Login'>
                <div className='Form'>
                    <h1 className='Title'>Admin Login</h1>
                    <p className='Info'>
                        Login in order to continue
                    </p>
                    <form className='login-form'>
                        <FormGroup controlId='username'>
                            <FormLabel className='label'>Username</FormLabel>
                            <FormControl
                                autoFocus
                                className='input'
                                type='text'
                                value={username}
                                onChange={ event => setUsername(event.target.value) }
                            />
                        </FormGroup>
                        <FormGroup controlId='password'>
                            <FormLabel className='label'>Password</FormLabel>
                            <FormControl
                                className='input'
                                type='password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </FormGroup>
                        <Button className='button' block  onClick={onSubmit} disabled={!validateForm()} type='submit'>
                            Log in
                        </Button>

                    </form>
                </div>
            </div>

    )


}
export default AdminLogin
