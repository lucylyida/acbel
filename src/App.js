import React from 'react';
import "jquery/dist/jquery.js"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { MediaQueryProvider } from 'react-media-query-hoc';
import AppRoute from "./AppRoute"

const kmQuery = {
  mobile: 'screen and (max-width: 640px)',
  desktop: 'screen and (min-width: 641px)',
};

const App = () => {
  return (
    <MediaQueryProvider queries={kmQuery}>
      <AppRoute />
    </MediaQueryProvider>
  )
}

export default App;
