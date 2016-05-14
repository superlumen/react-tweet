'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Context = require('./Context');

var _Context2 = _interopRequireDefault(_Context);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _Quote = require('./Quote');

var _Quote2 = _interopRequireDefault(_Quote);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var Tweet = (function (_React$Component) {
  _inherits(Tweet, _React$Component);

  function Tweet() {
    _classCallCheck(this, Tweet);

    _React$Component.apply(this, arguments);
  }

  Tweet.prototype.render = function render() {
    var data = this.props.data;var isRT = false;
    var MediaComponent = null,
        QuoteComponent = null;

    // use retweet as data if its a RT
    if (data.retweeted_status) {
      data = data.retweeted_status;
      isRT = true;
    }

    // use Media component if media entities exist
    if (data.entities.media) {
      MediaComponent = _react2['default'].createElement(_Media2['default'], { media: data.entities.media });
    }

    // extended_entities override, these are multi images, videos, gifs
    if (data.extended_entities && data.extended_entities.media) {
      MediaComponent = _react2['default'].createElement(_Media2['default'], { media: data.extended_entities.media });
    }

    // use Quote component if quoted status exists
    if (data.quoted_status) {
      QuoteComponent = _react2['default'].createElement(_Quote2['default'], { data: data.quoted_status });
    }

    return _react2['default'].createElement(
      'div',
      { className: 'tweet', style: _styles2['default'].tweet },
      isRT ? _react2['default'].createElement(_Context2['default'], this.props) : null,
      _react2['default'].createElement(
        'div',
        { className: 'content', style: _styles2['default'].content },
        _react2['default'].createElement(_Header2['default'], { data: data }),
        _react2['default'].createElement(_Text2['default'], { data: data }),
        MediaComponent,
        QuoteComponent
      )
    );
  };

  return Tweet;
})(_react2['default'].Component);

Tweet.propTypes = {
  'data': _react2['default'].PropTypes.object
};

Tweet.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  }
};

exports['default'] = Tweet;
module.exports = exports['default'];