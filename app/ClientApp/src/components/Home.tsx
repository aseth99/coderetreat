import React from 'react';
import { Button, Typography } from '@material-ui/core';
const Home = () => {
  return (
    <div>
      <Typography variant="h1">Hello, bigworld!</Typography>
      <div>
        <Button variant="contained" color="primary">
          CLICK ME
        </Button>
      </div>
    </div>
  );
};
export default Home;
