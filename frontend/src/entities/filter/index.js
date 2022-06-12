import age from '../../assets/age.svg';
import sphere from '../../assets/sphere.svg';

export const filters = [
	{
		id: 'age',
		name: 'возраст',
		icon: age,
		values: [
			{
				id: 'junior',
				value: '18-25',
				checked: false,
				disable: false
			},
			{
				id: 'middle',
				value: '26-35',
				checked: false,
				disable: false
			},
			{
				id: 'senior',
				value: '36-55',
				checked: false,
				disable: false
			},
			{
				id: 'maestro',
				value: '55+',
				checked: false,
				disable: true
			},
		],
	},
	{
		id: 'sphere',
		name: 'сфера',
		icon: sphere,
		values: [
			{
				id: 'social',
				value: 'Социальное волонтерство',
				checked: false,
				disable: false
			},
			{
				id: 'eco',
				value: 'Экологическое волонтерство',
				checked: false,
				disable: false
			},
			{
				id: 'culture',
				value: 'Культурное волонтерство',
				checked: false,
				disable: false
			},
		],
	},
];