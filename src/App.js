import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, removeFeature, newTotal } from './actions';
import { featureReducer } from './reducers';
import { createStore } from 'redux';
import { connect } from 'react-redux';

export const store = createStore(featureReducer);

const App = props => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    props.removeFeature(item);
    props.newTotal(-item.price);
  };

  const buyItem = item => {
    props.addFeature(item);
    props.newTotal(item.price);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header 
          car={props.car}
          additionalFeatures={props.additionalPrice0} 
        />
        <AddedFeatures 
          car={props.car}
          removeFeature={removeFeature} 
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={props.additionalFeatures} 
          buyItem={buyItem} 
        />
        <Total 
          car={props.car} 
          additionalPrice={props.additionalPrice} 
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps, 
  { addFeature, removeFeature, newTotal }
  )(App);

