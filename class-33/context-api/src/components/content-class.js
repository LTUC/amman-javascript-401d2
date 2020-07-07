import React from 'react';
import { SettingsContext } from '../context/settings';
import { ThemeContext } from '../context/theme';
export default class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Rendered Via Class Component</h2>
        <SettingsContext.Consumer>
          {(siteContext) => (
            <>
              <h1>{siteContext.title}</h1>
              <a href={`https://www.twitter.com/${siteContext.twitter}`}>
                @{siteContext.twitter}
              </a>
            </>
          )}
        </SettingsContext.Consumer>
        <ThemeContext.Consumer>
          {(themeContext) => <h2>Current Mode:{themeContext.mode}</h2>}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
