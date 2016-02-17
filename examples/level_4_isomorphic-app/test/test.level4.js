var React = require('react');
var should = require('should');
var ReactDOM = require('react-dom');
var Routes = require('./routes.test.jsx');

describe('Level 4 application browser:', function () {
  var main;
  var mainDOM;
  var mainStyle;

  before(function () {
    var container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    main = ReactDOM.render(Routes, document.getElementById('container'));
    mainDOM = ReactDOM.findDOMNode(main);
  });

  after(function () {
    var containerDOM = document.getElementById('container');
    containerDOM.parentNode.removeChild(containerDOM);
  });

  it('Style of list page should be exactly right:', function () {
    var listDOM = document.getElementById('list');
    var listDOMStyle = getComputedStyle(listDOM);
    var lisDOM0 = listDOM.getElementsByTagName('li')[0];
    var lisDOM0Style = getComputedStyle(lisDOM0);

    listDOMStyle.backgroundColor.should.be.eql('rgb(255, 255, 255)');
    listDOMStyle.color.should.be.eql('rgb(255, 255, 0)');
    lisDOM0Style.border.should.be.eql('5px solid rgb(255, 255, 255)');
  });

  it('Style of detail page should be exactly right:', function () {
    var listDOM = document.getElementById('list');
    var lisDOM0 = listDOM.getElementsByTagName('li')[0];
    lisDOM0.getElementsByTagName('img')[0].click();
    var detailDOM = document.getElementById('detail');
    var detailDOMStyle = getComputedStyle(detailDOM);
    detailDOMStyle.fontSize.should.be.eql('48px');
  });
});
