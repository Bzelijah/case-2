import React from 'react';

import * as S from './styles';

import logo from '../../assets/logo.svg';
import topArrow from '../../assets/top-arrow.svg';
import vk from '../../assets/vk.svg';
import telegram from '../../assets/telegram.svg';

export const Footer = () => {

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<S.Wrapper>
			<div className='high-container'>
				<img src={logo} alt='' />
				<S.StyledButton>Версия для слабовидящих</S.StyledButton>
				<S.GoToTopButton onClick={scrollToTop}>
					<img src={topArrow} alt='' />
				</S.GoToTopButton>
			</div>
			<div className='medium-container'>
				<S.EmailContainer>
					<div className='description'>Подписывайся чтобы узнать последние новости и события</div>
					<div className='input-container'>
						<input type='text' placeholder='Email Адрес' />
						<S.EmailButton><img src={topArrow} alt='' /></S.EmailButton>
					</div>
				</S.EmailContainer>
				<S.Phone>
					<div>Горячая линия по вопросам</div>
					<div className='number'>8 (499) 722-69-90</div>
				</S.Phone>
				<S.Social>
					<img src={vk} alt='' />
					<img src={telegram} alt='' />
				</S.Social>
				<div>
					<S.MenuButton>
						Меню
					</S.MenuButton>
					<S.MenuButton>
						О нас
					</S.MenuButton>
					<S.MenuButton>
						Волонтерам
					</S.MenuButton>
					<S.MenuButton>
						Бизнесу
					</S.MenuButton>
					<S.MenuButton>
						Проекты
					</S.MenuButton>
				</div>
			</div>
			<div className='low-container'>
				<div>
					<div>Мосволонтер, 2022</div>
					<div>г. Москва, ул.Комсомольская, 3</div>
				</div>
				<div>
					©2022, Все права защищены.
				</div>
			</div>
		</S.Wrapper>
	);
};
