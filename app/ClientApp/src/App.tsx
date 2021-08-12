import React from 'react';
import { Route } from 'react-router';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
// import { Layout } from './components/Layout';
import Layout from './components/Layout';
// import { Home } from './components/Home';
import Home from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';
import { GetAppTheme } from './Theme';

// import './custom.css';

// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//       <Layout>
//         <Route exact path="/" component={Home} />
//         {/* <Route path="/counter" component={Counter} />
//         <Route path="/fetch-data" component={FetchData} /> */}
//       </Layout>
//     );
//   }
// }
const App = () => {
  return (
    <ThemeProvider theme={GetAppTheme()}>
      <CssBaseline />
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </ThemeProvider>
  );
};
export default App;
