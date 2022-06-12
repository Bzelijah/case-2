import React from 'react';
import {
	Route,
	Switch,
	Redirect,
	withRouter,
	BrowserRouter as Router,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


// pages
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';

// components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CreateTaskPage } from '../pages/CreateTask';

// features
import ScrollToTop from './ScrollToTop';

// styles
import * as S from './styles';
import { colors } from '../theme/theme';

const Routing = withRouter(function Routing({ match }) {
	return (
		<Switch>
			<Route exact path={`${match.url}`} component={Home} />
			<Route exact path={`${match.url}search`} component={Search} />
			<Route exact path={`${match.url}create`} component={CreateTaskPage} />
			<Redirect from={''} to={'/'} />
		</Switch>
	);
});

export default () => {
	return (
		<ThemeProvider theme={colors}>
			<S.Wrapper>
				<Router basename='/'>
					<ScrollToTop />
					<Header />
					<S.RouterContainer>
						<Routing />
					</S.RouterContainer>
					<Footer />
					<ScrollToTop />
				</Router>
			</S.Wrapper>
		</ThemeProvider>
	);
};
