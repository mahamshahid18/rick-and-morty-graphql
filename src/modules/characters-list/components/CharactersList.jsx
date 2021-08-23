import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { GET_CHARACTERS_LIST_QUERY, GET_FAVORITES_QUERY } from '../../../queries';

import { userAuthContext } from '../../shared/contexts';

import { CharacterCard } from './CharacterCard';
import { FeedbackMessage } from '../../shared/components/FeedbackMessage';
import { CardSkeletonLoader } from '../../shared/components/CardSkeletonLoader';


const useStyles = makeStyles(() => ({
    displayAllButton: {
        marginRight: '1rem'
    }
}));

export const CharactersList = () => {
    const classes = useStyles();

    const { username } = useContext(userAuthContext);

    const [characters, setCharacters] = useState([]);
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const [expandedCharacterCard, setExpandedCharacterCard] = useState(null);

    const { loading: charactersListLoading, error: charactersListError, data: charactersListData } = useQuery(GET_CHARACTERS_LIST_QUERY);
    const { loading: favoritesLoading, error: favoritesError, data: favoritesData } = useQuery(GET_FAVORITES_QUERY, {
        variables: {
            username: username
        },
        notifyOnNetworkStatusChange: true
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
        setCharacters(favoriteCharactersList);
    }

    const onDisplayAllClick = () => {
        if (!charactersListLoading && charactersListData) {
            setCharacters(charactersListData.charactersList.results);
        }
    }

    if (charactersListLoading) {
        return (
            <Box mt={4}>
                {
                    [1, 2, 3, 4, 5, 6].map(() => {
                        return (
                            <CardSkeletonLoader />
                        )
                    })

                }
            </Box>
        )
    }

    if (charactersListError || !charactersListData) {
        return (
            <Box mt={4}>
                <FeedbackMessage message='Error fetching data :(' />
            </Box>
        );
    }

    return (
        <Box>
            <Box my={3} display='flex' justifyContent='flex-end'>
                <Button
                    variant='contained'
                    color='secondary'
                    className={classes.displayAllButton}
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
                    characters.length ? (
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
                    ) : (
                        <FeedbackMessage message='No Character Found :(' />
                    )
                }
            </Box>
        </Box>
    );
}
