import { Box, Container, CssBaseline } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { storeContext } from '../../store.context';
import { Auth } from '../auth/auth.component';

const AppView: React.FC = () => {
  const { authStore } = useContext(storeContext);
  const isAuth = authStore.getIsAuthenticated();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>{isAuth && 'Welcome User'}</h1>
      </Box>
      {!isAuth && <Auth />}
    </Container>
  );
};
const App = observer(AppView);
export { App };
