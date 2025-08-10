import { PeopleTableProps } from '../../types/PeopleTableProps';
import PersonLink from '../PersonLink';
import React from 'react';

export const PeopleTable: React.FC<PeopleTableProps> = ({
  people,
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
          key={person.slug}
          data-cy="person"
          className={
            person.slug === highlightedSlug ? 'has-background-warning' : ''
          }
        >
          <td>
            <PersonLink personName={person.name} people={people} />
          </td>

          <td>{person.sex}</td>
          <td>{person.born}</td>
          <td>{person.died}</td>
          <td>
            <PersonLink personName={person.motherName} people={people} />
          </td>

          <td>
            <PersonLink personName={person.fatherName} people={people} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
