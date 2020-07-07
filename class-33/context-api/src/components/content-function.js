import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings';
import { ThemeContext } from '../context/theme';
export default function Content() {
  const siteContext = useContext(SettingsContext);
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <h2>Rendered Via Functional Component</h2>
      <h1>{siteContext.title}</h1>
      <a href={`https://www.twitter.com/${siteContext.twitter}`}>
        @{siteContext.twitter}
      </a>
      <h2>Current Mode: {themeContext.mode}</h2>
    </div>
  );
}
