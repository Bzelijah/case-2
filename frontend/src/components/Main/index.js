import React from 'react';
import { withRouter, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { Footer } from '../Footer';
import { Header } from '../Header';
import ScrollToTop from './ScrollToTop';

import * as S from './styles';
import { ThemeProvider } from 'styled-components';
import { colors } from '../../theme/theme';

const Routing = withRouter(function Routing({ match }) {
	return (
		<Switch>
			<Route exact path={`${match.url}`} component={HomePage} />
			<Redirect from={''} to={'/'} />
		</Switch>
	);
});

export default function Main() {
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
}
