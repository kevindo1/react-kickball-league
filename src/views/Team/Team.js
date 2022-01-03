import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/teams';
import TeamDetails from '../../components/TeamDetails';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h3>loading</h3>;
  }

  return (
    <>
      <div>
        <h2>{team.name}</h2>
      </div>
      <div>
        <TeamDetails team={team} />
      </div>
    </>
  );
}
