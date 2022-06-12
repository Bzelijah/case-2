import React from 'react';

import { Hands } from '../../components/HomePage/Hands';
import { Facts } from '../../components/HomePage/Facts';
import { Support } from '../../components/HomePage/Support';
import { SearchBar } from '../../components/common/SearchBar';

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
