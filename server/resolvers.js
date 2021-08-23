const CharactersList = require('./models/RickAndMortyModel');
const FavoritesList = require('./models/FavoritesModel');
const User = require('./models/UsersModel');

const resolvers = {
  Query: {
    charactersList: async () => {
      const results = await CharactersList.find({});

      return {
        "results": results
      };
    },
    favoritesList: async (_, { username }) => {
      const results = await FavoritesList.find({ username: username });

      return {
        "favorites": results
      };
    },
    user: async (_, { username }) => {
      const results = await User.findOne({ username: username });

      return results;
    }
  },
  Mutation: {
    addFavoriteCharacter: async (_, { id, username }) => {
      const favorite = await FavoritesList.create({ id, username });

      return favorite;
    },
    addUser: async (_, { username }) => {
      const user = await User.create({ username });

      return user;
    }
  }
};

module.exports = resolvers;
