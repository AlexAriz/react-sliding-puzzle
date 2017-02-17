import React from 'react';

const Slot = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    index: React.PropTypes.number.isRequired,
    content: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      onClick: ()=> {},
      content: null
    };
  },

  selectIndex() {
    this.props.onClick(this.props.index);
  },

  render() {
    var classname = (this.props.content === null) ? "slot empty" : "slot";

    return (
      <div className={classname} onClick={this.selectIndex}>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
});

export default Slot;