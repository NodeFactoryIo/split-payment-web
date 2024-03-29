import React from 'react';
import blockies from 'ethereum-blockies';
import MaterialAvatar from '@material-ui/core/Avatar';
import { getAssetURL } from '../utils/ipfs';

export class Avatar extends React.Component {
  getOpts() {
    return {
      seed: this.props.address || 'foo',
      // color: this.props.color || '#dfe',
      // bgcolor: this.props.bgcolor || '#aaa',
      size: this.props.size || 15,
      scale: this.props.scale || 3,
      // spotcolor: this.props.spotcolor || '#000',
      className: this.props.className || '',
    };
  }

  componentDidMount() {
    const { imageHash } = this.props;
    if (!imageHash) {
      this.draw();
    }
  }

  draw() {
    blockies.render(this.getOpts(), this.canvas);
  }

  render() {
    const { imageHash } = this.props;
    const blockie = React.createElement('canvas', {
      ref: canvas => (this.canvas = canvas),
    });


    return (
        <div className="avatar-container">
          <MaterialAvatar>
            {!imageHash ? blockie : null}

            {imageHash ? <img className="avatar" src={getAssetURL(imageHash)} /> : null}
          </MaterialAvatar>
        </div>
    );
  }
}
