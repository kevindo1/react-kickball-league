import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/teams';
import TeamDetails from '../../components/TeamDetails';

export default function Team(props) {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(props.match.params.id);
      setTeam(data);
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <div>
      <TeamDetails team={team} />
    </div>
  );
}
