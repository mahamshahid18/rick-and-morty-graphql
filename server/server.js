const express = require('express');
const axios = require('axios');
const { ApolloServer, gql } = require('apollo-server-express');

const connectToDb = require('./dbConnector');
const rickAndMortyModel = require('./models/RickAndMortyModel');
const favoritesModel = require('./models/FavoritesModel');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const startServer = async () => {
    const app = express();
    
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    await server.start();
    
    server.applyMiddleware({ app });

    await connectToDb();
    
    app.listen(3600, async () => {
        console.log(`application started -- listening on port http://localhost:3600${server.graphqlPath}`);
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
                        type
                        dimension
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
                const insertOperationResult = await rickAndMortyModel.insertMany(resultsFromApi);
                // const findOperationResult = await rickAndMortyModel.find();
                // console.log(findOperationResult);
            } catch (error) {
                console.log(error)
            }

        } catch (err) {
            console.log(err);
        }        
    });
}

startServer();

