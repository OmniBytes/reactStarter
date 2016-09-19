import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/style.css'

var App = React.createClass({
   render: function () {
       return (
           <div> Hello World </div>
       )
   }
});

ReactDOM.render(<App/>, document.getElementById('app'));