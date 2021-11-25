import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const CATEGORY_QUERY = gql`
  query ($slug: String!) {
    category(slug: $slug) {
      animals {
        title
        slug
        id
        price
        image
      }
    }
  }
`;

function CategoryPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(CATEGORY_QUERY, {
    variables: {
      slug,
    },
  });
  console.log(data);

  if (loading) {
    return <div>Laodin....</div>;
  }

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {slug}
          <CardDisplay animals={data.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
