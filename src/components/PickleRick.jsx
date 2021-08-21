import React, { Component } from "react";
import { useQuery } from '@apollo/client';
import { CharactersListQuery } from '../Queries';

import "./PickleRick.css";

const PickleRick = () => {
  const { loading, error, data } = useQuery(CharactersListQuery);

  if (loading) 
    return <p>Loading...</p>;

  if (error || !data || !data.charactersList || !data.charactersList.results.length > 0)
    return <p>Error :(</p>;

  const { charactersList: { results } } = data
  const { name, image } = results[0];

  return <div className='PickleRick'>
    <div className="container">
      <img className='avatar' src={image} />
      <h2 className='name'>{name}!</h2>
    </div>
  </div>;
}

export default PickleRick;
