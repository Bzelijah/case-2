import React from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBar } from '../../components/common/SearchBar';

import * as S from './styles';

import logo from '../../assets/logo.svg';
import eye from '../../assets/eye.svg';
import hamburger from '../../assets/hamburger.svg';


export const Header = () => {
	const redirectToHome = useHistory();
	return (
		<>
			<S.Wrapper>
				<div className='logoContainer'>
					<img onClick={() => redirectToHome.push('/')} className='logo' src={logo} alt='' />
				</div>
				<div className='buttonsContainer'>
					<S.MenuButton>о нас</S.MenuButton>
					<S.MenuButton>волонтерам</S.MenuButton>
					<S.MenuButton>бизнесу</S.MenuButton>
					<S.MenuButton>проекты</S.MenuButton>
				</div>
				<div className='rightContainer'>
					<S.StyledButton>Войти</S.StyledButton>
					<img src={eye} alt='' />
					<img src={hamburger} alt='' />
				</div>
			</S.Wrapper>
			<SearchBar />
		</>
	);
};
