const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      console.log(args);
      let animalToFind = animals.find((animal) => animal.slug === args.slug);
      console.log(animalToFind);
      return animalToFind;
    },

    categories: () => categories,
    category: (parent, args) => {
      return categories.find((category) => category.slug === args.slug);
    },
  },

  Category: {
    animals: (parent, args, ctx) => {
      return animals.filter((animal) => animal.category === parent.id);
    },
  },
  Animal: {
    category: (parent, arts, ctx) => {
      console.log(parent);
      return categories.find((category) => category.id === parent.id);
    },
  },
};

module.exports = resolvers;
