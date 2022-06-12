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
				value: '35-55',
				checked: false,
				disable: false
			},
			{
				id: 'maestro',
				value: '55+',
				checked: false,
				disable: false
			},
		],
	},
	{
		id: 'sphere',
		name: 'сфера',
		icon: sphere,
		values: [
			{
				id: 'eda',
				value: 'общепит',
				checked: false,
				disable: false
			},
			{
				id: 'it',
				value: 'айти',
				checked: false,
				disable: false
			},
		],
	},
];