import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayersById } from '../../services/players';
import PlayerDetails from '../../components/PlayerDetails';

export default function Player(props) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersById(props.match.params.id);
      setPlayer(data);
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <div>
      <PlayerDetails player={player} />
    </div>
  );
}
