import { Person } from '../types/Person';

export interface PeopleTableProps {
  people: Person[];
  highlightedSlug?: string;
}
