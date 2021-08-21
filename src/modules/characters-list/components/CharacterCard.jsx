import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import { Episode } from './Episode';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        marginTop: '0.75rem',
        marginBottom: '0.75rem',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12)',
        borderRadius: '4px',
        padding: '1rem 1rem'
    },
    fontWeightBold: {
        fontWeight: '700'
    },
    fieldTitle: {
        marginLeft: '0.25rem',
        marginRight: '0.25rem'
    },
    cardActionsSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    episodesListSection: {
        marginTop: '2rem'
    }
}));

const getLastThreeEpisodes = (episodes) => {
    const totalEpisodes = episodes.length;

    if (!!!totalEpisodes) {
        return [];
    }

    const recentEpisodes = [episodes[totalEpisodes - 1], episodes[totalEpisodes - 2], episodes[totalEpisodes - 3]];
    return recentEpisodes;
}

export const CharacterCard = ({ id, name, status, species, gender, image, origin, episode, isExpanded, onCardExpandClick }) => {
    const classes = useStyles();
    const originText = origin.type ? `[${origin.type}] ${origin.name}` : origin.name;
    const recentEpisodes = getLastThreeEpisodes(episode);

    return (
        <Grid container key={id} className={classes.container}>
            <Grid container>
                <Grid item xs={4}>
                    <img src={image} />
                </Grid>
                <Grid item xs={6}>
                    <Box display='flex'>
                        <Typography variant='body1' className={`${classes.fontWeightBold} ${classes.fieldTitle}`}>
                            Name:
                        </Typography>
                        <Typography variant='body1'>
                            {name}
                        </Typography>
                    </Box>
                    <Box mt={2} display='flex'>
                        <Typography variant='body1' className={`${classes.fontWeightBold} ${classes.fieldTitle}`}>
                            Species:
                        </Typography>
                        <Typography variant='body1'>
                            {species}
                        </Typography>
                    </Box>
                    <Box mt={2} display='flex'>
                        <Typography variant='body1' className={`${classes.fontWeightBold} ${classes.fieldTitle}`}>
                            Gender:
                        </Typography>
                        <Typography variant='body1'>
                            {gender}
                        </Typography>
                    </Box>
                    <Box mt={2} display='flex'>
                        <Typography variant='body1' className={`${classes.fontWeightBold} ${classes.fieldTitle}`}>
                            Origin:
                        </Typography>
                        <Typography variant='body1'>
                            {originText}
                        </Typography>
                    </Box>
                    <Box mt={2} display='flex'>
                        <Typography variant='body1' className={`${classes.fontWeightBold} ${classes.fieldTitle}`}>
                            Dimension:
                        </Typography>
                        <Typography variant='body1'>
                            {origin.dimension}
                        </Typography>
                    </Box>
                    <Box mt={2} display='flex'>
                        <Typography variant='body1' className={`${classes.fontWeightBold} ${classes.fieldTitle}`}>
                            Status:
                        </Typography>
                        <Typography variant='body1'>
                            {status}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} className={classes.cardActionsSection}>
                    <Button>
                        <FavoriteBorderIcon />
                    </Button>
                    {
                        !isExpanded && (
                            <Button onClick={() => onCardExpandClick(id)}>
                                <Typography variant='body1'>
                                    More
                                </Typography>
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
            {
                isExpanded && (
                    <Grid container className={classes.episodesListSection}>
                        <br />
                        <Grid item xs={12}>
                            <Typography variant='body1'>
                                Latest episodes:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <ul>
                                {
                                    recentEpisodes.map((recentEpisode, index) => {
                                        return recentEpisode ? (
                                            <li key={index}>
                                                <Episode name={recentEpisode.name} air_date={recentEpisode.air_date} />
                                            </li>
                                        ) : null;
                                    })
                                }
                            </ul>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={() => onCardExpandClick(null)}>
                                <Typography variant='body1'>
                                    Less
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    );
}