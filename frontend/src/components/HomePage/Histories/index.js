import React from 'react';

import * as S from './styles';

import men1 from '../../../assets/men_1.svg';
import men2 from '../../../assets/men_2.svg';
import men3 from '../../../assets/men_3.svg';
import men4 from '../../../assets/men_4.svg';
import dots from '../../../assets/dots.svg';

export const Histories = () => {
	return (
		<S.Histories>
			<div className='title'>Истории людей, которым мы помогли</div>
			<S.CardContainer>
				<div className='card'>
					<img src={men1} alt='' />
					<div className='content'>
						<div>Ольга Арсеньева</div>
						<div>О поддержке приютов и как на сегодняшний день волонтерам Москвы удалось собрать денег на передержку</div>
					</div>
				</div>
				<div className='card'>
					<img src={men2} alt='' />
					<div className='content'>
						<div>Владимир Плеханов</div>
						<div>О поддержке приютов и как на сегодняшний день волонтерам Москвы удалось собрать денег на передержку</div>
					</div>
				</div>
				<div className='card'>
					<img src={men3} alt='' />
					<div className='content'>
						<div>Олег Малодвижев</div>
						<div>О поддержке приютов и как на сегодняшний день волонтерам Москвы удалось собрать денег на передержку</div>
					</div>
				</div>
				<div className='card'>
					<img src={men4} alt='' />
					<div className='content'>
						<div>Артемий Волончук</div>
						<div>О поддержке приютов и как на сегодняшний день волонтерам Москвы удалось собрать денег на передержку</div>
					</div>
				</div>
			</S.CardContainer>
			<img src={dots} className='dots' alt='' />
		</S.Histories>
	);
};
