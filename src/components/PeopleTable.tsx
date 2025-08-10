import { PeopleTableProps } from '../types';
import PersonLink from './PersonLink';
import React from 'react';

export const PeopleTable: React.FC<PeopleTableProps> = ({
  people,
  peopleMap,
  highlightedSlug,
}) => (
  <table
    data-cy="peopleTable"
    className="table is-striped is-hoverable is-narrow is-fullwidth"
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>

    <tbody>
      {people.map(person => (
        <tr
          data-cy="person"
          key={person.name}
          className={
            person.slug === highlightedSlug ? 'has-background-warning' : ''
          }
        >
          <td>
            <PersonLink personName={person.name} peopleMap={peopleMap} />
          </td>

          <td>{person.sex}</td>
          <td>{person.born}</td>
          <td>{person.died}</td>
          <td>
            <PersonLink personName={person.motherName} peopleMap={peopleMap} />
          </td>

          <td>
            <PersonLink personName={person.fatherName} peopleMap={peopleMap} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
