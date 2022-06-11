import React from 'react';

import { SearchBar } from '../../components/HomePage/SearchBar';
import { Hands } from '../../components/HomePage/Hands';
import { Facts } from '../../components/HomePage/Facts';
import { Support } from '../../components/HomePage/Support';

export const Home = () => {
	return (
		<>
			<SearchBar />
			<Hands />
			<Facts />
			<Support />
		</>
	);
};
