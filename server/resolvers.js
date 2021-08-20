// const CharactersList = require('./models/RickAndMortyModel');
const CharactersList = require('./models/RickAndMortyModel');

const resolvers = {
  Query: {
    charactersList: async () => {
        const results = await CharactersList.find({});
        return {
            "results": results
        };
    }
  },
//   Mutation: {
//     createCat: async (_, { name }) => {
//       const kitty = new Cat({ name });
//       await kitty.save();
//       return kitty;
//     }
//   }
};

module.exports = resolvers;
