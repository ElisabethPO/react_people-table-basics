import React from 'react';
import { PersonLinkProps } from '../types/PersonLinkProps';
import { Link } from 'react-router-dom';

const PersonLink: React.FC<PersonLinkProps> = ({ personName, people }) => {
  if (!personName) {
    return <>-</>;
  }

  const person = people.find(p => p.name === personName);

  if (!person) {
    return <>{personName}</>;
  }

  const className = person.sex === 'f' ? 'has-text-danger' : '';

  return (
    <Link to={`/people/${person.slug}`} className={className}>
      {person.name}
    </Link>
  );
};

export default PersonLink;
