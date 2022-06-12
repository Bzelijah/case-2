import React, { useMemo }  from 'react';

import testTaskImage from '../../../../assets/testTaskImage.png';

import * as S from './styles';

export const TaskCard = ({data}) => {
	console.log(data,'data');
	const {
		companyName,
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
	// фотку добавить в таску;
	return (
		<S.Root>
			<S.Image>
				<img src={testTaskImage} alt="taskImage" />
			</S.Image>
			<S.Content>
				<span className="title">{vacancyName}</span>
				<span className="promoter">ориганизатор: {companyName}</span>
			</S.Content>
		</S.Root>
	);
};
