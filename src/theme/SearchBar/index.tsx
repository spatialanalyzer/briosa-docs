import React from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SearchBar(): React.JSX.Element | null {
  const {siteConfig} = useDocusaurusContext();
  if (!siteConfig.themeConfig.algolia) return null;

  return (
    <OriginalSearchBar
      getMissingResultsUrl={({query}: {query: string}) =>
        `/mp-command-catalog/commands?q=${encodeURIComponent(query)}`
      }
      translations={{
        button: {buttonText: 'Search', buttonAriaLabel: 'Search All Documentation'},
        modal: {
          noResultsScreen: {
            noResultsText: 'No results for',
            suggestedQueryText: 'Try a shorter phrase or an MP command label.',
            reportMissingResultsText: 'Looking for an MP command?',
            reportMissingResultsLinkText: 'Browse the Command Index',
          },
        },
      }}
    />
  );
}
