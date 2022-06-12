import React from 'react';

import { Hands } from '../../components/HomePage/Hands';
import { Facts } from '../../components/HomePage/Facts';
import { Support } from '../../components/HomePage/Support';
import { Histories } from '../../components/HomePage/Histories';
import { SearchBar } from '../../components/common/SearchBar';
import { Partners } from '../../components/HomePage/Partners';
import { Events } from '../../components/HomePage/Events';

export const Home = () => {
	return (
		<>
			<SearchBar />
			<Hands />
			<Facts />
			<Support />
			<Events />
			<Histories />
			<Partners />
		</>
	);
};
