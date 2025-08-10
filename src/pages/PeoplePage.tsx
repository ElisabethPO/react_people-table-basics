import React, { useEffect, useState } from 'react';
import { Person } from '../types/Person';
import { PeopleTable } from '../components/Loader/PeopleTable';
import { Loader } from '../components/Loader';
import { getPeople } from '../api';

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [highlightedSlug, setHighlightedSlug] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    getPeople()
      .then(data => {
        // eslint-disable-next-line no-console
        console.log('Fetched people:', data);
        setPeople(data);
        setLoading(false);

        if (data.length) {
          setHighlightedSlug(data[0].slug);
        }
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title">People Page</h1>
          <Loader />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title">People Page</h1>
          <p data-cy="peopleLoadingError" className="has-text-danger">
            Something went wrong
          </p>
        </div>
      </main>
    );
  }

  if (!people.length) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title">People Page</h1>
          <p data-cy="noPeopleMessage">There are no people on the server</p>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <h1 className="title">People Page</h1>

        {people.length ? (
          <PeopleTable people={people} highlightedSlug={highlightedSlug} />
        ) : (
          <p data-cy="noPeopleMessage">There are no people on the server</p>
        )}
      </div>
    </main>
  );
};
