import React from 'react';
import ReactDOM from 'react-dom';

const ce = React.createElement;

const sampFunc = function (props) {
  return ce(
    'div',
    null, ce('h1', { style: { color: props.color } }, props.title),
  );
};
// const myFirstComponent = function () {
//   return (
//     ce('div', {className: 'grid'},
//       ce(sampFunc, {red: 'green'}),
//       ce(sampFunc, {red: 'blue'}),
//     )
//   );
// }
const myFirstComponent = () => (
  ce(
    'div', null,
    ce(sampFunc, { title: 'mario', color: 'green' }),
    ce(sampFunc, { title: 'frank', color: 'yellow' }),
  )
);

ReactDOM.render(ce(myFirstComponent), document.getElementById('app'));
