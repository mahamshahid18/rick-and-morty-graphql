import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';

import "./CharactersList.css";

import { CharacterCard } from "./CharacterCard";
import { CHARACTERS_LIST_QUERY } from '../../../Queries';


export const CharactersList = () => {
    const [expandedCharacterCard, setExpandedCharacterCard] = React.useState(null);
    const { loading, error, data } = useQuery(CHARACTERS_LIST_QUERY);

    const onCardExpandClick = (id) => {
        setExpandedCharacterCard(id);
    }

    if (loading)
        return <p>Loading...</p>;

    if (error || !data || !data.charactersList || !data.charactersList.results.length > 0)
        return <p>Error :(</p>;

    const { charactersList: { results } } = data;

    return results.map((character) => {
        const { id, name, status, species, gender, image, origin, episode } = character;

        return <CharacterCard
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin}
            episode={episode}
            isExpanded={expandedCharacterCard === id}
            onCardExpandClick={onCardExpandClick}
        />;
    });
}
