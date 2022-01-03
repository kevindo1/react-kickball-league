import React from 'react';

export default function PlayerDetails({ player }) {
  return (
    <div>
      <h3>Player Details</h3>
      <p>{player.name}</p>
      <p>Position: {player.position}</p>
    </div>
  );
}
