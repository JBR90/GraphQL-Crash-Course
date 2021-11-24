const Mutation = {
  addAnimal: (
    parent,
    { slug, image, title, rating, price, description, stock, onSale, category },
    ctx
  ) => {
    let newAnimal = {
      slug: slug,
      image: image,
      title: title,
      rating: rating,
      description: description,
      stock: stock,
      onsale: onSale,
      category: category,
    };
    console.log(title);
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
