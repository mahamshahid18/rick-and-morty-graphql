const express = require('express');
const axios = require('axios');

const connectToDb = require('./dbConnector');
const rickAndMortyModel = require('./models/RickAndMortyModel');
const favoritesModel = require('./models/RickAndMortyModel');

const app = express();

const startServer = async () => {
    await connectToDb();
    
    app.listen(3000, async () => {
        console.log('application started -- listening on port 3000');
        console.log('connected to db');

        const apiBaseUrl = 'https://rickandmortyapi.com/graphql';
        const dataQuery = `query {
            characters {
                results {
                    id
                    name
                    status
                    species
                    gender
                    image
                    location {
                        name
                        type
                        dimension
                    }
                    origin {
                        name
                    }
                    episode {
                        name
                        air_date
                    }
                }
            }
        }`;

        try {            
            const response = await axios({
                method: 'post',
                url: apiBaseUrl,
                data: JSON.stringify({query: dataQuery}),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const resultsFromApi = response.data.data.characters.results;

            try {
                const deletionOperationResult = await rickAndMortyModel.deleteMany({});
                const dbOperationResult = await rickAndMortyModel.insertMany(resultsFromApi);
            } catch (error) {
                console.log(error)
            }

        } catch (err) {
            console.log(err);
        }        
    });
}

startServer();

