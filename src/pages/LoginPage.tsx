import { FC, useEffect } from "react";
import { useGoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const LoginPage: FC = () => {
  const { signIn, loaded } = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
    onSuccess(response) {
      console.log(response);
    }
  });

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    });
  }, []);

  return (
    <div className="login">
      <h2>Log in</h2>
      <button onClick={signIn}>Google click</button>
    </div>
  )
}

export default LoginPage;