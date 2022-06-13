import React from 'react';
import Title from './Title';
import ObjectCard from './ObjectCard';
import objectsImages from '../services/objectsImages';

class Objects extends React.Component {
  state = {
    isScaled: false,
  }

  handleToScale = () => {
    this.setState((prevState) => ({ isScaled: !prevState.isScaled }));
  }

  render() {
    const { isScaled } = this.state;
    return (
      <div>
        <Title headline="Corpos Celestes" />
        <section className={ (isScaled) ? "container scaled-container" : "container" }>
          { 
            objectsImages.map(({ name, image }, i) => (
              <ObjectCard
                key={ i }
                objectName={ name }
                objectImage={ image }
                isScaled={ isScaled }
              />
            ))
          }
        </section>
        {
          (isScaled)
            ? (  
                <p className="sagan-quote">
                  "Consider again that dot. That's here, that's home, that's us." (Carl Sagan, em "Pálido Ponto Azul", sobre uma fotografia do Planeta Terra tirada pela sonda Voyager 1, a uma distância de 6 bilhões de km).
                </p>
            )
            : null
        }
        <button
          type="button"
          onClick={ this.handleToScale }
          className="btn-to-scale"
        >
          { (isScaled) ? 'Remover a Escala' : 'Colocar em Escala' }
        </button>
        <p className="obs-to-scale">
          Observação: a escala é apenas em tamanho. A escala em distância é inviável.
        </p>
      </div>
    );
  }
}

export default Objects;
