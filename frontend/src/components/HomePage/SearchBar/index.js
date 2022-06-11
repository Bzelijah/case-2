import React from 'react';
import { useHistory } from 'react-router'


export const SearchBar = () => {
    const goToSearch = useHistory()
    return (
        <div onClick={() => goToSearch.push('/search')}>Поиск того рот</div>
    );
};
