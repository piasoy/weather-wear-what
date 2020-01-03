import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/Header'
import Weather from './components/Weather'
import Wear from './components/Wear'
import { API_KEY } from './utils/Key';


export default class App extends React.Component {
  
  state = {
    isLoading: true,
    city: null,
    currentTemp: 0,
    currentCond: null,
    futureTemp: 0,
    futureCond: null,
    error: null
  };

  componentDidMount() {
    console.log('mount')
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('position', position)
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      }
    );
  }

  fetchWeather(lat, lon) {
    console.log('lat & lon', lat, lon)
    const urlCurrent = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
    const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`

    const currentWeatherAPICall = fetch(urlCurrent)
    const forecastWeatherAPICall = fetch(urlForecast)

    Promise.all([currentWeatherAPICall, forecastWeatherAPICall])
    .then(values => Promise.all(values.map(value => value.json())))
    .then(finalVals => {
      let currentWeatherAPIResp = finalVals[0];
      let forecastWeatherAPIResp = finalVals[1];

      console.log('city', currentWeatherAPIResp.name)
      console.log('time', currentWeatherAPIResp.dt)
      console.log('current temp', currentWeatherAPIResp.main.temp)
      console.log('current condition', currentWeatherAPIResp.weather[0].main)

      console.log('forecase times', forecastWeatherAPIResp.list)
      console.log('forecast time', forecastWeatherAPIResp.list[1].dt)
      console.log('forecast temp', forecastWeatherAPIResp.list[1].main.temp)
      console.log('forecast condition', forecastWeatherAPIResp.list[1].weather[0].main)

      let city = currentWeatherAPIResp.name
      let currentTemp = currentWeatherAPIResp.main.temp
      let currentCond = currentWeatherAPIResp.weather[0].main
      let futureTemp = forecastWeatherAPIResp.list[1].main.temp
      let futureCond = forecastWeatherAPIResp.list[1].weather[0].main
      this.setState({
        city: city,
        currentTemp: currentTemp,
        currentCond: currentCond,
        futureTemp: futureTemp,
        futureCond: futureCond,
        isLoading: false
      });
    })

  }

  render() {
    const { isLoading, currentCond, currentTemp, futureCond, futureTemp, city} = this.state;
    return (
     
        <View style={styles.container}>
          <AppHeader city={city} />
        <ScrollView>
        {isLoading ? (
          <View>
            <Text>Fetching The Weather</Text>
          </View>
        ) : (
        <View>
            <View style={styles.weather}>
              <Weather 
                currentTemp={currentTemp} 
                currentCond={currentCond} 
                futureTemp={futureTemp} 
                futureCond={futureCond} />
            </View>
            <View style={styles.wear}>
              <Wear
                currentTemp={currentTemp} 
                currentCond={currentCond} 
                futureTemp={futureTemp} 
                futureCond={futureCond} />
            </View>
        </View>
        )
      }
       </ScrollView>
      </View>
     
     

    );
  }



}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }

});
