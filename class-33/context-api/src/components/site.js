import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings';

export default function SettingsEditor(props) {
  const context = useContext(SettingsContext);
  return (
    <>
      <h2>Site Settings</h2>
      <label>
        <span>Site Title</span>
        <input
          placeholder="Site Title"
          name="title"
          onChange={(e) => context.changeTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Twitter Handle</span>
        <input
          placeholder="Twitter Handle"
          name="twitter"
          onChange={(e) => context.changeTwitter(e.target.value)}
        />
      </label>
    </>
  );
}
