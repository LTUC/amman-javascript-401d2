import React, { useContext } from 'react';
import ContentClass from '../content-class';
import ContentFunction from '../content-function';
import SiteEditor from '../site';
import ThemeEditor from '../theme';
import { ThemeContext } from '../../context/theme';
import './main.scss';
const styles = {
  dark: {
    background: '#111',
    color: 'ivory',
  },
  light: {
    background: '#f5f5f5',
    color: '#525252',
  },
};
export default function Main() {
  const themeContext = useContext(ThemeContext);

  return (
    //  <main style={styles[themeContext.mode]}>
    <main className={themeContext.mode}>
      <section>
        <ContentClass />
        <ContentFunction />
      </section>
      <aside>
        <SiteEditor />
        <ThemeEditor />
      </aside>
    </main>
  );
}
