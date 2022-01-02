import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetails({ team }) {
  return (
    <section>
      <h3>Players</h3>
      {team.players.map((player) => (
        <Link key={player.id} to={`/players/${player.id}`}>
          {player.name}
        </Link>
      ))}
    </section>
  );
}
