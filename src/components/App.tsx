import React, { ReactElement, PureComponent } from 'react';
import { MainWrapper } from 'components/Common';
import { Footer } from 'components/Footer';
import { SearchPage, MoviePage, NotFoundPage } from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends PureComponent {
  render(): ReactElement {
    return (
      <Router>
        <MainWrapper>
          <Switch>
            <Route path={['/', '/search', '/search:query']} component={SearchPage} exact />
            <Route path="/movie/:id" component={MoviePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </MainWrapper>
      </Router>
    );
  }
}

export default App;
