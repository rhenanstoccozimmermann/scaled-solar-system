import React from 'react';
import PropTypes from 'prop-types';

class DataCard extends React.Component {
  render() {
    const { objectName, objectSize, objectDistance } = this.props;
    return (
      <div className="data-card">
        <h3>{ objectName }</h3>
        <p>{`Diâmetro (km): ${ objectSize }`}</p>
        <p>{`Distância do Sol (km): ${ objectDistance }`}</p>
      </div>
    );
  }
}

DataCard.propTypes = {
  objectName: PropTypes.string.isRequired,
  objectSize: PropTypes.string.isRequired,
  objectDistance: PropTypes.string.isRequired,
};

export default DataCard;
