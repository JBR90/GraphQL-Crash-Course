const Query = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, { animals }) => {
    console.log(args);
    let animalToFind = animals.find((animal) => animal.slug === args.slug);
    console.log(animalToFind);
    return animalToFind;
  },

  categories: () => categories,
  category: (parent, args, { categories }) => {
    return categories.find((category) => category.slug === args.slug);
  },
};

module.exports = Query;
