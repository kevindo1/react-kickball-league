import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/teams';
import TeamDetails from '../../components/TeamDetails';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(id);
      setTeam(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <TeamDetails team={team} />
    </div>
  );
}
