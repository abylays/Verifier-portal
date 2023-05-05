import React, {useContext, useState} from 'react'
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap'
import ApiService from 'utils/apiService';
import AppContext from 'context/app';
import {useHistory} from 'react-router-dom';
import {routes} from 'constants/routes';

/**
 * Stateful component responsible for user login.
 * It renders a simple form with "username" and "password" fields.
 * */
const UserLogin = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {appState, setAppState} = useContext(AppContext);
    const [shareCredRequestToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNyZWRlbnRpYWxSZXF1aXJlbWVudHMiOlt7InR5cGUiOlsiTm9yd2VnaWFuTmF2Y2VydGlmaWNhdGUiXSwiY29uc3RyYWludHMiOltdfSx7InR5cGUiOlsiRW1wbG95bWVudENyZWRlbnRpYWxQZXJzb25WMSJdLCJjb25zdHJhaW50cyI6W119LHsidHlwZSI6WyJOb3J3ZWdpYW5CYW5rSURWMyJdLCJjb25zdHJhaW50cyI6W119XSwiY2FsbGJhY2tVUkwiOiIifSwiZXhwIjoxNjUxMzUyMzE5NTg2LCJ0eXAiOiJjcmVkZW50aWFsUmVxdWVzdCIsImp0aSI6ImQyZDdhOTJkMTM1MTM3MTEiLCJpc3MiOiJkaWQ6ZWxlbTpFaUIwQk5kTlNDOTV4cUFkYjdRb1RvX3ZTYXcyWlU3dVpodjdEWmdGdEthdUl3O2VsZW06aW5pdGlhbC1zdGF0ZT1leUp3Y205MFpXTjBaV1FpT2lKbGVVcDJZMGRXZVZsWVVuQmlNalJwVDJsS2FtTnRWbWhrUjFWcFRFTktjbUZYVVdsUGFVbHFZMGhLY0dKWFJubGxVMGx6U1cxR2MxcDVTVFpKYTFaVVRXcFZNbE41U2praUxDSndZWGxzYjJGa0lqb2laWGxLUVZreU9YVmtSMVkwWkVOSk5rbHRhREJrU0VKNlQyazRkbVI2VG5CYVF6VjJZMjFqZG1NeVZtcGtXRXB3WkVocmRtUnFTV2xNUTBwM1pGZEtjMkZYVGt4YVdHdHBUMngwTjBsdGJHdEphbTlwU1ROQ2VXRlhNV2hqYm10cFRFTktNV015Um01YVUwazJTVzVPY0ZveU5YQmliV05wVEVOS01HVllRbXhKYW05cFZUSldhbU5FU1RGT2JYTjRWbTFXZVdGWFduQlpNa1l3WVZjNWRWTXlWalZOYWtGNFQwTkpjMGx1UWpGWmJYaHdXVEIwYkdWVmFHeGxRMGsyU1dwQmVWbFVUbXRPZWswMFRXMVdiVnB0VlRSWmFrazBXa1JHYkU1RWFHeFpWR1JwV2tSWk1GbFVRVEZOZWxGM1dXcHJlRnBIV21oT1ZHTXdUbFJDYWxsNmJHaE5WMDB3VGtSbk5VMXFhM3BPYlVWNVdXMVJNMDlEU2psTVNITnBZVmRSYVU5cFNXcGpiVlpxWWpOYWJHTnVhMmxNUTBveFl6SkdibHBUU1RaSmJrcHNXVEk1TWxwWVNqVkphWGRwWkVoc2QxcFRTVFpKYkU1c1dUTkJlVTVVV25KTlZscHNZMjFzYldGWFRtaGtSMngyWW10MGJHVlVTWGROVkdkcFRFTktkMlJYU25OaFYwNU1XbGhzU1ZwWVoybFBhVWwzVFRKU2ExcEhXVEpOVkd0M1RVUk5ORnB0VVRSTmVrWnRXa1JyZWs1RWFHaFplbEY0V21wUk0wNHlUWGRhUkZsNldXcFplRnBVU1hwTk1rMTNUWHBrYkUxSFJYbE5NbFY0VFhwVk1WbDZhR3hPZWxFeFdYcFZhV1pXTUhOSmJVWXhaRWRvYkdKdVVuQlpNa1l3WVZjNWRVbHFjR0pKYVU1M1kyMXNkRmxZU2pWSmJEQnpTVzFHZW1NeVZubGtSMngyWW1zeGJHUkhhSFphUTBrMlYzbEphbU5JU25CaVYwWjVaVk5LWkdaUklpd2ljMmxuYm1GMGRYSmxJam9pZVdGd09XWkRVMVF6VkVsQ05XdzVURUZDU213eVlWWnNlbm96TkdOSmEwNVhObkpPWlRaMk5YbzVOV0oyYmtaUU5rNWtkSFZHUWxaSFFYaHFlREIzUjFacVpsaE5NSFU1ZGtWUE9URjJaM1JVWDFKU1ozY2lmUSIsImtpZCI6ImRpZDplbGVtOkVpQjBCTmROU0M5NXhxQWRiN1FvVG9fdlNhdzJaVTd1Wmh2N0RaZ0Z0S2F1SXcjcHJpbWFyeSJ9.9ffe7c78d0397bbe364cac3fbd37d3fb51a95fca38e377a474c153918a1faf0230728e3dc18c686c629bda021a577c3d822ac4a1d6524eb6b9f82f1672eaa536');
     const[wallet_url]=useState( process.env.REACT_APP_WALLET_URL || 'http://localhost:3001')

    const history = useHistory();

  /**
   * Function executed on valid form submit.
   * If login was successful, it will store access and DID tokens into localstorage,
   * update app state and redirect to "/".
   * */
  const onSubmit = async (event: React.FormEvent) => {
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

      history.push(routes.LOAN_PAGE);

    } catch (error) {
      ApiService.alertWithBrowserConsole(error.message)
    }
  }

  /**
   * Simple form validation function.
   * */
  function validateForm() {
    return username.length > 0 && password.length > 0
  }

  return (
      <div className='Login'>
          <div className='Form'>
              <h1 className='Title'>User Login</h1>
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
                  <p> Please login to access all the services</p>

              </form>
          </div>
      </div>
  )
}

export default UserLogin;
