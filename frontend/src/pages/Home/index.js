import React from 'react';

import { Hands } from '../../components/HomePage/Hands';
import { Facts } from '../../components/HomePage/Facts';
import { Support } from '../../components/HomePage/Support';
import { Histories } from '../../components/HomePage/Histories';
import { Partners } from '../../components/HomePage/Partners';
import { Events } from '../../components/HomePage/Events';

export const Home = () => {
	return (
		<>
			<Hands />
			<Facts />
			<Support />
			<Events />
			<Histories />
			<Partners />
		</>
	);
};
