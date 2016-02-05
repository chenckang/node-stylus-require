var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('../app/routes.jsx');
var should = require('should');
var utils = require('./utils.js');

describe('Level 3 application:', function () {
  var main;
  var mainDOM;
  var mainStyle;

  before(function () {
    var container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    main = ReactDOM.render(Routes, document.getElementById('container'));
    mainDOM = ReactDOM.findDOMNode(main);
    mainStyle = getComputedStyle(mainDOM);
  });

  after(function () {
    var containerDOM = document.getElementById('container');
    containerDOM.parentNode.removeChild(containerDOM);
  })

  it('Loads should have no problems:', function () {
    main = ReactDOM.render(Routes, document.getElementById('container'));
    mainDOM = ReactDOM.findDOMNode(main);
    mainStyle = getComputedStyle(mainDOM);

  });

  it('All elements style should be okay:', function () {
    mainStyle.color.should.be.eql('rgb(255, 0, 0)');

    var exampleBtn = document.getElementById('exampleBtn');
    exampleBtn.click();

    var h1DOMs = mainDOM.getElementsByTagName('h1');

    Array.prototype.slice.apply(h1DOMs).forEach(function (item) {
      var itemStyle = getComputedStyle(item);

      itemStyle.fontSize.should.be.eql('80px');

      if (item.getAttribute('class') === 'example-title') {
        itemStyle.color.should.be.eql('rgb(255, 0, 255)');
      }
      else {
        itemStyle.color.should.be.eql('rgb(255, 255, 0)');
      }

    })
  });

  it('Interactivity should be okay:', function () {
    var inputDOM = document.getElementById('input');

    inputDOM.value = 'awesomeaaa';

    utils.change(inputDOM);

    document.getElementById('outputText').innerHTML.should.be.eql('awesomeaaa');
  });

});
