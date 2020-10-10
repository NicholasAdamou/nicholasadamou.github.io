import { useState, useEffect } from 'react';

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const useGitHub = (repositoryName) => {
  const [repository, setRepository] = useState({});

  useEffect(() => {
    function fetchRepository() {
      fetch(`https://api.github.com/repos/nicholasadamou/${repositoryName}`, {
			headers: {
				'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
			}
		})
		  .then(response => response.json())
		  .then((response) => {
			  const {
				name,
				description,
				html_url,
				stargazers_count,
				forks_count,
				updated_at,
			  } = response;

				fetch(`https://api.github.com/repos/nicholasadamou/${repositoryName}/branches/master`, {
					headers: {
						'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
					}
				})
				.then(response => response.json())
				.then(response => {
					setRepository({
						name: name.toLowerCase(),
						description,
						link: html_url,
						stars: stargazers_count,
						forks: forks_count,
						lastUpdated: updated_at,
						commit: {
							link: response.commit.html_url
						}
					});
				});
        });
    }

    fetchRepository();
  }, [repositoryName]);

  return repository;
};

export default useGitHub;

export { round };
