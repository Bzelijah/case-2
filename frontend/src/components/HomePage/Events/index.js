import React, { useEffect } from 'react';
import { useStore } from 'effector-react';

import { Loader } from '../../common/Loader';

import { $tasks, fetchTasks } from '../../../models/task';

import * as S from './styles';

import test from '../../../assets/test-card-home.png';
import geolocation from '../../../assets/geolocation.svg';

export const Events = () => {

	const { data, loading } = useStore($tasks);

	useEffect(() => fetchTasks(), []);

	return (
		<>
			{loading ?
				<Loader />
				:
				data &&
				<S.Events>
					<div className='title'>все события и мероприятия</div>
					<S.CardsContainer>
						{data.map(el =>
							<S.Card key={el.id}>
								<img src={test} alt='' />
								<div className='content'>
									<div>
										<div className='title'>Уборка территории питомника ЮАО</div>
										<div className='summary'>Помощь в уборке частного питомника на юге Москвы</div>
									</div>
									<div>
										<div className='location'>
											<img src={geolocation} alt='' />
											<div>Коломенский проезд д.24</div>
										</div>
										<div className='low-container'>
											<div>Уровень волонтера: 4/10</div>
											<S.StyledButton>Подробнее</S.StyledButton>
										</div>
									</div>
								</div>
							</S.Card>
						)}
					</S.CardsContainer>
				</S.Events>
			}
		</>
	);
};
