import React from 'react';
import Title from './Title';
import DataCard from './DataCard';
import objectsData from '../services/objectsData';

class Data extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Tamanhos e Distâncias" />
        <section className="container">
          { objectsData.map(({ name, size, distance }, i) => (
              <DataCard
                key={ i }
                objectName={ name }
                objectSize={ size }
                objectDistance={ distance }
              />
            )) }
        </section>
      </div>
    );
  }
}

export default Data;
