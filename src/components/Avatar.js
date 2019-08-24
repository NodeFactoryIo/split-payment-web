import React from 'react';
import blockies from 'ethereum-blockies';
import MaterialAvatar from '@material-ui/core/Avatar';

export class Avatar extends React.Component {
  getOpts() {
    return {
      seed: this.props.address || 'foo',
      color: this.props.color || '#dfe',
      bgcolor: this.props.bgcolor || '#aaa',
      size: this.props.size || 15,
      scale: this.props.scale || 3,
      spotcolor: this.props.spotcolor || '#000',
    };
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    blockies.render(this.getOpts(), this.canvas);
  }

  render() {
    const blockie = React.createElement('canvas', {
      ref: canvas => (this.canvas = canvas),
    });

    return (
      <MaterialAvatar>
        {blockie}
      </MaterialAvatar>
    );
  }
}
