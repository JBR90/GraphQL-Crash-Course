import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const ANIMALS_QUERY = gql`
  {
    animals {
      id
      slug
      image
      title
      rating
      price
      description
      stock
      onSale
    }
  }
`;
function LandingPage() {
  const { loading, error, data } = useQuery(ANIMALS_QUERY);
  console.log(ANIMALS_QUERY);
  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error...{data.error}</div>;
  }
  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      {!loading && <CardDisplay animals={data.animals} />}
    </div>
  );
}

export default LandingPage;
