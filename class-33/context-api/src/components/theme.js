import React from 'react';
import { ThemeContext } from '../context/theme';
// 2 ways of consuming context in class components
/* 
<ThemeContext.Consumer>
{
  (themeContext)=>{
    <h2>themeContext.mode</h2>
  }
}
</ThemeContext.Consumer>
*/
class Content extends React.Component {
  // YOU CAN USE THIS ONLY IF YOU ARE CONSUMING 1 CONTEXT
  static contextType = ThemeContext; //magical line
  // by doing that line this.context will have all the data in the "value" of the provider
  render() {
    return (
      <>
        <h2>Design Settings</h2>
        <button onClick={this.context.toggleMode}>
          {this.context.mode === 'dark' ? 'light' : 'dark'}
        </button>
      </>
    );
  }
}
export default Content;
