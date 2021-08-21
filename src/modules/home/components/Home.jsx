import React from 'react';
import { CharactersList } from '../../characters-list/components/CharactersList';

import './Home.css';

export const Home = () => {
    return (
        <div className="home-root">
            <div>Top bar</div>
            <div>Display favorites button</div>
            <div className="character-list-container">
                <CharactersList />
            </div>
        </div>
    );
}