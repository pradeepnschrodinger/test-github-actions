var ReactTestUtils = require('react-dom/test-utils');
const React = require('react');
const ReactDOM = require('react-dom/client');
const { act } = require('react-dom/test-utils');

const { JSDOM } = require("jsdom");
const expect = require('chai').expect
const Counter = require('../src/Counter').default;
console.log("Counter = ", Counter);

let container;

describe('Counter', function () {
  beforeEach(() => {
    global.window = (new JSDOM('', { runScripts: "dangerously" })).window;
    global.document = window.document;
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render and update a counter', () => {
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.createRoot(container).render(<Counter />);
    });
    const button = container.querySelector('button');
    const label = container.querySelector('p');
    expect(label.textContent).to.be.equal('You clicked 0 times');
    expect(document.title).to.be.equal('You clicked 0 times');

    // Test subsequent renders and componentDidUpdate calls
    act(() => {
      button.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
      button.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
      button.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
    });

    expect(label.textContent).to.be.equal('You clicked 3 times');
    expect(document.title).to.be.equal('You clicked 3 times');
  });
});
