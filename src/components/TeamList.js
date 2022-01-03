import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamList({ teams }) {
  return (
    <section>
      <h3>Teams</h3>
      {teams.map((team) => (
        <Link key={team.id} to={`/teams/${team.id}`}>
          {team.name}
        </Link>
      ))}
    </section>
  );
}
