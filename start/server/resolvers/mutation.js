const { v4 } = require("uuid");
const Mutation = {
  addAnimal: (
    parent,
    { slug, image, title, rating, price, description, stock, onSale, category },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      slug: slug,
      image: image,
      title: title,
      rating: rating,
      description: description,
      stock: stock,
      onsale: onSale,
      category: category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => {
      return animal.id == id;
    });

    animals.splice(index, 1);

    return true;
  },

  updateAnimal: (
    parent,
    {
      id,
      slug,
      image,
      title,
      rating,
      price,
      description,
      stock,
      onSale,
      category,
    },
    { animals }
  ) => {
    let index = animals.findIndex((animal) => {
      return animal.id == id;
    });
    console.log(slug);
    console.log(index);
    slug ? (animals[index].slug = slug) : slug;
    image ? (animals[index].image = image) : slug;
    return true;
  },
};

module.exports = Mutation;

// type Animal {
//     id: ID!
//     slug: String!
//     image: String!
//     title: String
//     rating: Float!
//     price: String!
//     description: [String!]!
//     stock: Int!
//     onSale: Boolean
//     category: Category!
//   }
