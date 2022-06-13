import React from 'react';
import PropTypes from 'prop-types';

class ObjectCard extends React.Component {
  render() {
    const { objectName, objectImage, isScaled } = this.props;
    return (
      <div className={ (isScaled) ? "scaled-object-card" : "object-card" }>
        <h3>{ objectName }</h3>
        <img
          src={ objectImage }
          alt={ objectName }
          className={ (isScaled) ? "scaled-object-image" : "object-image" }
        />
      </div>
    );
  }
}

ObjectCard.propTypes = {
  objectName: PropTypes.string.isRequired,
  objectImage: PropTypes.string.isRequired,
  isScaled: PropTypes.bool.isRequired,
};

export default ObjectCard;
