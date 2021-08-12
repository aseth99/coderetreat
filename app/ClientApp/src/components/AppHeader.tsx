import * as React from 'react';
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core';
const AppHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h5">Feedr</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;
