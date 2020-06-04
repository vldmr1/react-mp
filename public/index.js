/* eslint-disable react/prop-types */
window.onload = function() {
  class ReactComponent extends React.Component {
    constructor({text}) {
      super();
      this.text = text;
    }

    render() {
      return React.createElement('h1', null, this.text);
    }
  }

  class PureComponent extends React.PureComponent {
    constructor({text}) {
      super();
      this.text = text;
    }

    render() {
      return React.createElement('h1', null, this.text);
    }
  }

  const helloElement = React.createElement('h1', {}, 'Hello from React.createElement!');

  const functionalComponent = ({text}) => React.createElement('h1', null, text);

  const allElements = [
    React.createElement(ReactComponent, {text: 'Hello from ReactComponent!'}),
    React.createElement(PureComponent, {text: 'Hello from ReactComponent!'}),
    React.createElement(functionalComponent, {text: 'Hello from Functional Component!'}),
    helloElement,
  ]

  ReactDOM.render(
    React.createElement('div', null, ...allElements),
    document.getElementById('root')
  );
}
