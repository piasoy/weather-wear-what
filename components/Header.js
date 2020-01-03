import React from 'react';

import { Header } from 'react-native-elements';

const AppHeader = (props) => {
   
    return (
        <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'WeatherWear', style: { color: '#fff', fontSize: 22, fontFamily:'Chalkboard SE'} }}
            rightComponent={{ text: {props}, color: '#fff' }}
        />

  
    )
}


export default AppHeader;