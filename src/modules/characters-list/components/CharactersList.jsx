import React, { useState, useContext, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "./CharactersList.css";

import { CharacterCard } from "./CharacterCard";
import { CHARACTERS_LIST_QUERY, GET_FAVORITES_QUERY } from '../../../Queries';

import { userAuthContext } from '../../../pages/utils/userAuthContext';

const useStyles = makeStyles(() => ({
    displayButton: {
        marginRight: '1rem'
    }
}));

export const CharactersList = () => {
    const classes = useStyles();

    const { username } = useContext(userAuthContext);

    const [characters, setCharacters] = useState([]);
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const [expandedCharacterCard, setExpandedCharacterCard] = useState(null);

    const { loading: charactersListLoading, error: charactersListError, data: charactersListData } = useQuery(CHARACTERS_LIST_QUERY);
    const { loading: favoritesLoading, error: favoritesError, data: favoritesData } = useQuery(GET_FAVORITES_QUERY, {
        variables: {
            username: username
        }
    });

    const onCardExpandClick = (id) => {
        setExpandedCharacterCard(id);
    }

    useEffect(() => {
        if (!charactersListLoading && charactersListData) {
            setCharacters(charactersListData.charactersList.results);
        }
    }, [charactersListLoading])

    useEffect(() => {
        if (!favoritesLoading && favoritesData) {
            const favoritesForUser = favoritesData.favoritesList.favorites.map((favorite) => favorite.id);
            setFavoriteCharacters(favoritesForUser);
        }
    }, [favoritesLoading]);

    const onDisplayFavoritesClick = () => {
        const favoriteCharactersList = characters.filter((character) => favoriteCharacters.includes(character.id));
        // console.log(favoriteCharactersList);
        setCharacters(favoriteCharactersList);
    }

    const onDisplayAllClick = () => {
        if (!charactersListLoading && charactersListData) {
            setCharacters(charactersListData.charactersList.results);
        }
    }


    if (charactersListLoading)
        return <p>Loading...</p>;

    if (charactersListError || !charactersListData || !charactersListData.charactersList || !charactersListData.charactersList.results.length > 0)
        return <p>Error :(</p>;

    return (
        <Box>
            <Box my={3} display='flex' justifyContent='end'>
                <Button
                    variant='contained'
                    color='secondary'
                    className={classes.displayButton}
                    onClick={onDisplayAllClick}>
                    Display All
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={onDisplayFavoritesClick}>
                    Display Favorites
                </Button>
            </Box>
            <Box mt={3}>
                {
                    characters.map((character) => {
                        const { id, name, status, species, gender, image, origin, episode } = character;

                        return <CharacterCard
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            image={image}
                            origin={origin}
                            episode={episode}
                            isFavoriteCharacter={favoriteCharacters.includes(id)}
                            isExpanded={expandedCharacterCard === id}
                            onCardExpandClick={onCardExpandClick}
                        />;
                    })
                }
            </Box>
        </Box>
    );
}
