import React from 'react';
import { Button, Typography } from '@material-ui/core';
import useApi from '../api/ApiHook';

const Home = () => {
  const { ping } = useApi();
  const callPing = async () => {
    const response = await ping();
    alert(response.message);
  };
  return (
    <div>
      <Typography variant="h1">Hello, bigworld!</Typography>
      <div>
        <Button variant="contained" color="primary" onClick={callPing}>
          PING ME
        </Button>
      </div>
    </div>
  );
};
export default Home;
