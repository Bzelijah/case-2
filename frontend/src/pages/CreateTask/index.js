import React from 'react';

import * as S from './styles';

import attach from '../../assets/attach.svg';

export const CreateTaskPage = () => {
	return (
		<S.CreateTaskPage>
			<S.Title>Анкета для оформления волонтерской деятельности</S.Title>
			<form>
				<S.Step>
					<div className='step'>ШАГ 1</div>
					<div className='step-title'>ПЕРСОНАЛЬНЫЕ ДАННЫЕ</div>
					<div className='summary'>Заполняются автоматически из Личного кабинета. Если хотите изменить данные, отредактируйте профиль.</div>
					<S.Label>
						Заявитель
					</S.Label>
					<S.Input placeholder={'Иван Иванович Иванов'} type={'text'} name={'name'} />
					<S.Checkbox>
						<input type={'radio'} name={'face'} id={'individual'} value={'individual'} />
						<label htmlFor={'individual'}>Физическое лицо</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'face'} id={'entity'} value={'entity'} />
						<label htmlFor={'entity'}>Юридическое лицо</label>
					</S.Checkbox>
					<S.Input noLabel={true} placeholder={'Наименование организации заявителя'} type={'text'} name={'companyName'} />
					<S.Label>
						Контактные данные
					</S.Label>
					<S.Input placeholder={'example@example.com'} name={'email'} id={'email'} />
				</S.Step>
				<S.Step>
					<div className='step'>ШАГ 2</div>
					<div className='step-title'>ОФОРМЛЕНИЕ ЗАЯВКИ</div>
					<S.Label>
						Вакансия
					</S.Label>
					<S.Textarea placeholder={'Опишите тему мероприятия и причину его проведения'} name={'vacancyName'} id={'vacancyName'} />
					<S.Label>
						Формат мероприятия
					</S.Label>
					<S.Checkbox>
						<input type={'radio'} name={'online'} id={'offline'} value={'offline'} />
						<label htmlFor={'offline'}>Оффлайн</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'online'} id={'online'} value={'online'} />
						<label htmlFor={'online'}>Онлайн</label>
					</S.Checkbox>
					<S.Label>
						Направление
					</S.Label>
					<S.Checkbox>
						<input type={'radio'} name={'type'} id={'sport'} value={'sport'} />
						<label htmlFor={'sport'}>Спортивная</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'type'} id={'social'} value={'social'} />
						<label htmlFor={'social'}>Социальная</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'type'} id={'culture'} value={'culture'} />
						<label htmlFor={'culture'}>Культурная</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'type'} id={'sphere-different'} value={'sphere-different'} />
						<label htmlFor={'sphere-different'}>Другое</label>
					</S.Checkbox>
					<S.Textarea placeholder={'Тип направления  волонтерской деятельности'} type={'text'} name={'sphere'} />
					<S.Label>
						Необходимые навыки
					</S.Label>
					<S.Checkbox>
						<input type={'radio'} name={'role'} id={'volunteer'} value={'volunteer'} />
						<label htmlFor={'volunteer'}>Волонтёр</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'role'} id={'organizer'} value={'organizer'} />
						<label htmlFor={'organizer'}>Организатор</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'role'} id={'manager'} value={'manager'} />
						<label htmlFor={'manager'}>Менеджер</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'role'} id={'skills-different'} value={'skills-different'} />
						<label htmlFor={'skills-different'}>Другое</label>
					</S.Checkbox>
					<S.Textarea placeholder={'Какие навыки необходимы для участия в мероприятии'} type={'text'} name={'sphere'} />
					<S.Label>
						Сервисы для волонтёров
					</S.Label>
					<S.Textarea placeholder={'Напишите какие сервисы (удобства) будут предоставлены волонтерам'} type={'text'} name={'conditions'} />
					<S.Label>
						Мотивации для волонтёров
					</S.Label>
					<S.Textarea placeholder={'Напишите какие сервисы (удобства) будут предоставлены волонтерам'} type={'text'} name={'motivation'} />
					<S.Label>
						Возраст участников
					</S.Label>
					<S.Checkbox>
						<input type={'radio'} name={'age'} id={'age-0'} value={'18-25'} />
						<label htmlFor={'age-0'}>18-25</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'age'} id={'age-1'} value={'26-35'} />
						<label htmlFor={'age-1'}>26-35</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'age'} id={'age-2'} value={'35-55'} />
						<label htmlFor={'age-2'}>35-55</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'age'} id={'age-3'} value={'55+'} />
						<label htmlFor={'age-3'}>55+</label>
					</S.Checkbox>
					<S.Label>
						Даты проведения
					</S.Label>
					<S.Checkbox>
						<input type={'radio'} name={'date'} id={'date-0'} value={'Срочно'} />
						<label htmlFor={'date-0'}>Срочно</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'date'} id={'date-1'} value={'Текущий месяц'} />
						<label htmlFor={'date-1'}>Текущий месяц</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'radio'} name={'date'} id={'date-2'} value={'В ближайшее время'} />
						<label htmlFor={'date-2'}>В ближайшее время</label>
					</S.Checkbox>
					<S.Input noLabel={true} date={true} placeholder={'ДД.ММ.ГГГГ'} type={'text'} name={'date-3'} id={'date-3'} />
					<S.Label>
						Материал для публикации
					</S.Label>
					<S.Textarea placeholder={'Здесь вы можете написать сопроводительное письмо к приложенным материалам'} type={'text'} name={'date-3'} id={'date-3'} />
					<S.DownloadButton>
						<img src={attach} />
						Добавить файл
					</S.DownloadButton>
					<S.Summary>Вы можете добавить до 10 файлов PNG, PDF, JPEG, JPG, BMP, DOC, DOCX, RTF, XLS, XLSX, TXT, размер одного — до 5 МБ.</S.Summary>
				</S.Step>
				<S.ConfirmButton>Отправить заявку</S.ConfirmButton>
			</form>
		</S.CreateTaskPage >
	);
};
