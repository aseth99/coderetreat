import React from 'react';
import { Container } from '@material-ui/core';
import AppHeader from './AppHeader';
const Layout = (props: { children: JSX.Element }) => {
  return (
    <div>
      <AppHeader />
      <Container>{props.children}</Container>
    </div>
  );
};
export default Layout;
