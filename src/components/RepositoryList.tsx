import '../styles/repositories.scss';

import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  /**
   * useEffect Will trigger a function as soon as something happens in the app, 
   * such as changing the value of a variable.
   * 
   * It receives TWO parameters: 
   *  1. The function to be executed 
   *  2. When it will be executed
   *   ↳ Also known as dependencies;
   *   ↳ If an empty array is passed in, the function within useEffect will be executed only once
   *     as soon as the component is displayed;
  */
  useEffect((): void => {
    /* first param */
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, /* second param */[]);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {
          repositories.map((repository: Repository) => {
            return (
              <RepositoryItem
                key={repository.name}
                repository={repository}
              />
            );
          })
        }
      </ul>
    </section>
  );
}