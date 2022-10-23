import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../store.context';
import { Dialog, TextField, Button } from '@mui/material';

import './auth.styles.css';

const AuthView: React.FC = () => {
  const { authStore } = useContext(storeContext);
  const isAuth = authStore.getIsAuthenticated();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Dialog open={!isAuth}>
        <div className='container'>
          <TextField
            className='text-field'
            label='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className='text-field'
            label='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => authStore.login({ email, password })}>
            Login
          </Button>
        </div>
      </Dialog>
    </>
  );
};

const Auth = observer(AuthView);
export { Auth };
