'use strict';

// __test__/react.js
require('./dom')('<html><body></body></html>');

var should = require('should');
var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');

describe('react', function () {
  var inst = require('../../index.js');
  var Style = require('../../Style.js');

  var simple;

  before(function () {
    inst.register();
    simple = require('../assets/simple.styl');
  });

  after(function () {
    inst.remove();
  });

  it('->Style.js', function () {
    var sty = TestUtils.renderIntoDocument(React.createElement(Style, { style: simple }));

    var styDOM = ReactDOM.findDOMNode(sty);

    styDOM.innerHTML.should.be.eql(simple.css);
    styDOM.getAttribute('id').should.be.eql(simple.id);

    document.head.children.should.have.property('0');
    styDOM.innerHTML.should.be.eql(document.head.children['0'].innerHTML);
    should(styDOM.getAttribute('id') + '-style').be.eql(document.head.children['0'].getAttribute('id'));
  });
});
