import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { userLoginAction, userLogoutAction } from '../../actions/auth';
import { getUserInfoAction, removeUserInfoAction } from '../../actions/profile';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const userInfo = {
  firstName: 'Akhilesh',
  lastName: 'Brian',
  emailId: 'akhilesh@gmail.com',
  imageUrl: ''
}
const AuthButtons = () => {

  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
      dispatch(userLoginAction())
      dispatch(getUserInfoAction(userInfo))
    }
  }, [dispatch])


  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      //mocking user info on successful login
      dispatch(getUserInfoAction(userInfo))
      dispatch(userLoginAction())
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('access_token', tokenResponse.access_token)
    },
    onError: response => {
      dispatch(userLogoutAction())
      dispatch(removeUserInfoAction())
      localStorage.removeItem('userInfo')
      localStorage.removeItem('access_token')
    }
  });

  const logout = () => {
    googleLogout()
    dispatch(userLogoutAction())
    dispatch(removeUserInfoAction())
    localStorage.removeItem('userInfo')
    localStorage.removeItem('access_token')
  }
  return (
    <>
      {auth &&
        <>
      <IconButton
        component={Link}
        to="/profile"
        edge="end"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="false"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>

        <IconButton
            aria-label="logout user"
            aria-controls="primary-search-logout-menu"
            aria-haspopup="true"
            color="inherit"
          onClick={() => logout()}
          // disabled={renderProps.disabled}
          >
            <ExitToApp />
          </IconButton>

        </>}

      {!auth &&
          <IconButton
            aria-label="login user"
            aria-controls="primary-search-login-menu"
            aria-haspopup="true"
            color="inherit"
          onClick={() => login()}
            // disabled={renderProps.disabled}
            size="small"
          >
            Login
        </IconButton>}
    </>
  )
};

export default AuthButtons;