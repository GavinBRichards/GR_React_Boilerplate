import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { GlobalStyle } from '../../global-styles';

const AppWrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  min-width: 100%;
  min-height: 100%;
  margin: none;
  padding: none;
`;

export default function App() {
  return (
    <>
      <AppWrapper>
        <Helmet titleTemplate="asdf" defaultTitle="asdf">
          <meta name="asdf" content="asdf" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
      <GlobalStyle />
    </>
  );
}
