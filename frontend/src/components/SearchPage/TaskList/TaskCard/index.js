import React, { useMemo }  from 'react';
import { useHistory } from 'react-router-dom';

import testTaskImage from '../../../../assets/testTaskImage.png';
import geolocation from '../../../../assets/geolocation.svg';

import * as S from './styles';

/**
 * Для карточки нужен клик, для переход на страницу карточки задачи*
 * Контролы карточки:
 * 1. клик по геометке - открывает карту с метками заданного фильтра и выбрана точка с которой перешли
 * 2. кнопка "хочу участвовать" - если логин, добавляется автоматически, если нет, то заполянется форма
 * 3(?). кнопка "подписать" - получать рассылку про мероприятия от организации укаазанной на карте
 * 		(также есть возмонжсть подписать в блоке фильтров на набор фильтров)
 */
export const TaskCard = ({data}) => {
	// @todo
	const openMap = () => {
		console.log('map');
	};
	const {
		companyName,
		age,
		// array
		conditions,
		email,
		// array
		motivation,
		skills,
		sphere,
		// array
		tasks,
		vacancyName,
	} = data;

	return (
		<S.Root>
			<div className="imageContainer" >
				<img src={testTaskImage} alt="task-image" />
			</div>
			<S.Content>
				<span className="title">{vacancyName}</span>
				<span className="promoter">ориганизатор: {companyName}</span>
				<div className="taskDescription">
					{tasks && tasks.map((task, index) => (
						<span key={index}>{task} </span>)
					)}
				</div>
				<span className="dateAndTime">Дата и время помощи: 10 мая в 13:00</span>
				<span className="level">Возраст волонтера: {age}</span>
				<div className="controls">
					<img onClick={openMap} className='logo' src={geolocation} alt='geolocation' />
					<S.StyledButton>хочу участвовать</S.StyledButton>
				</div>
			</S.Content>
		</S.Root>
	);
};
