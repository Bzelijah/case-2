import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import logo from '../../assets/logo.svg';
import eye from '../../assets/eye.svg';
import hamburger from '../../assets/hamburger.svg';


export const Header = () => {
	const redirectToHome = useHistory();
	return (
		<S.Wrapper>
			<img onClick={() => redirectToHome.push('/')} className='logo' src={logo} alt='' />
			<div className='buttons-container'>
				<S.MenuButton>о нас</S.MenuButton>
				<S.MenuButton>волонтерам</S.MenuButton>
				<S.MenuButton>бизнесу</S.MenuButton>
				<S.MenuButton>проекты</S.MenuButton>
			</div>
			<div className='right-container'>
				<S.StyledButton>Войти</S.StyledButton>
				<img src={eye} alt='' />
				<img src={hamburger} alt='' />
			</div>
		</S.Wrapper>
	);
};
