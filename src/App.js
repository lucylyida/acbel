import React from 'react';
import "jquery/dist/jquery.js"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { MediaQueryProvider } from 'react-media-query-hoc';
import AppRoute from "./AppRoute"

const kmQuery = {
  mobile: 'screen and (max-width: 640px)',
  tablet: 'screen and (min-width: 1440px)',
  desktop: 'screen and (min-width: 1441px)',
};

// const kmQuery = {
//   mobile: 'screen and (max-width: 640px)',
//   tablet: "screen and (min-width: 641px) and (max-width: 1440px)",
//   desktop: 'screen and (min-width: 1441px)',
// };

const App = () => {
  return (
    <MediaQueryProvider queries={kmQuery}>
      <AppRoute />
    </MediaQueryProvider>   
  )
}

export default App;
