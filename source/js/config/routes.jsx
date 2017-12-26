import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'views/Home';
import About from 'views/About';
import Gallery from 'views/Gallery';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  ABOUT: `${ publicPath }about`,
  GALLERY: `${ publicPath }gallery`
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Home } />
    <Route path={ routeCodes.ABOUT } component={ About } />
    <Route path={ routeCodes.GALLERY } component={ Gallery } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
