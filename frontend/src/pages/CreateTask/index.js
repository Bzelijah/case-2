import React from 'react';

import * as S from './styles';

export const CreateTaskPage = () => {
	return (
		<S.CreateTaskPage>
			<h1>Анкета для оформления волонтерской деятельности</h1>
			<form>
				<S.Step>
					<h4>ШАГ 1</h4>
					<h4>ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h4>
					<p>Заполняются автоматически из Личного кабинета. Если хотите изменить данные, отредактируйте профиль.</p>
				</S.Step>
				<S.Label>
					Заявитель
					<input placeholder={'Иван Иванович Иванов'} type={'text'} name={'name'}/>
					<S.Checkbox>
						<input type={'checkbox'} name={'individual'} id={'individual'} value={'individual'}/>
						<label htmlFor={'individual'}>Физическое лицо</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'entity'} id={'entity'} value={'entity'}/>
						<label htmlFor={'entity'}>Юридическое лицо</label>
					</S.Checkbox>
					<input placeholder={'Наименование организации заявителя'} type={'text'} name={'companyName'}/>
				</S.Label>
				<S.Label>
					Контактные данные
					<input placeholder={'example@example.com'} name={'email'} id={'email'}/>
				</S.Label>
				<S.Step>
					<h4>ШАГ 2</h4>
					<h4>ОФОРМЛЕНИЕ ЗАЯВКИ</h4>
				</S.Step>
				<S.Label>
					Вакансия
					<input placeholder={'Опишите тему мероприятия и причину его проведения'} name={'vacancyName'} id={'vacancyName'}/>
				</S.Label>
				<S.Label>
					Формат мероприятия
					<S.Checkbox>
						<input type={'checkbox'} name={'offline'} id={'offline'} value={'offline'}/>
						<label htmlFor={'offline'}>Оффлайн</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'online'} id={'online'} value={'online'}/>
						<label htmlFor={'online'}>Онлайн</label>
					</S.Checkbox>
				</S.Label>
				<S.Label>
					Направление
					<S.Checkbox>
						<input type={'checkbox'} name={'sport'} id={'sport'} value={'sport'}/>
						<label htmlFor={'sport'}>Спортивная</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'social'} id={'social'} value={'social'}/>
						<label htmlFor={'social'}>Социальная</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'culture'} id={'culture'} value={'culture'}/>
						<label htmlFor={'culture'}>Культурная</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'sphere-different'} id={'sphere-different'} value={'sphere-different'}/>
						<label htmlFor={'sphere-different'}>Другое</label>
					</S.Checkbox>
					<input placeholder={'Тип направления  волонтерской деятельности'} type={'text'} name={'sphere'}/>
				</S.Label>
				<S.Label>
					Необходимые навыки
					<S.Checkbox>
						<input type={'checkbox'} name={'volunteer'} id={'volunteer'} value={'volunteer'}/>
						<label htmlFor={'volunteer'}>Волонтёр</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'organizer'} id={'organizer'} value={'organizer'}/>
						<label htmlFor={'organizer'}>Организатор</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'manager'} id={'manager'} value={'manager'}/>
						<label htmlFor={'manager'}>Менеджер</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'skills-different'} id={'skills-different'} value={'skills-different'}/>
						<label htmlFor={'skills-different'}>Другое</label>
					</S.Checkbox>
				</S.Label>
				<S.Label>
					Сервисы для волонтёров
					<input placeholder={'Напишите какие сервисы (удобства) будут предоставлены волонтерам'} type={'text'} name={'conditions'}/>
				</S.Label>
				<S.Label>
					Мотивации для волонтёров
					<input placeholder={'Напишите какие сервисы (удобства) будут предоставлены волонтерам'} type={'text'} name={'motivation'}/>
				</S.Label>
				<S.Label>
					Возраст участников
					<S.Checkbox>
						<input type={'checkbox'} name={'age-0'} id={'age-0'} value={'18-25'}/>
						<label htmlFor={'age-0'}>18-25</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'age-1'} id={'age-1'} value={'26-35'}/>
						<label htmlFor={'age-1'}>26-35</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'age-2'} id={'age-2'} value={'35-55'}/>
						<label htmlFor={'age-2'}>35-55</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'age-3'} id={'age-3'} value={'55+'}/>
						<label htmlFor={'age-3'}>55+</label>
					</S.Checkbox>
				</S.Label>
				<S.Label>
					Даты проведения
					<S.Checkbox>
						<input type={'checkbox'} name={'date-0'} id={'date-0'} value={'Срочно'}/>
						<label htmlFor={'date-0'}>Срочно</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'date-1'} id={'date-1'} value={'Текущий месяц'}/>
						<label htmlFor={'date-1'}>Текущий месяц</label>
					</S.Checkbox>
					<S.Checkbox>
						<input type={'checkbox'} name={'date-2'} id={'date-2'} value={'В ближайшее время'}/>
						<label htmlFor={'date-2'}>В ближайшее время</label>
					</S.Checkbox>
					<input placeholder={'ДД.ММ.ГГГГ'} type={'text'} name={'date-3'} id={'date-3'}/>
				</S.Label>
				<S.Label>
					Материал для публикации
					<input placeholder={'Здесь вы можете написать сопроводительное письмо к приложенным материалам'} type={'text'} name={'date-3'} id={'date-3'}/>
					<button>Добавить файл</button>
					<p>Вы можете добавить до 10 файлов PNG, PDF, JPEG, JPG, BMP, DOC, DOCX, RTF, XLS, XLSX, TXT, размер одного — до 5 МБ.</p>
				</S.Label>
				<button>Отправить заявку</button>
			</form>
		</S.CreateTaskPage>
	);
};
