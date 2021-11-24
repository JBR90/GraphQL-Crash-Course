const Animal = {
  category: (parent, args, { categories }) => {
    console.log(parent);
    return categories.find((category) => category.id === parent.id);
  },
};

module.exports = Animal;
