import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({currentTemp, currentCond, futureTemp, futureCond}) => {
    console.log(currentTemp, currentCond, futureTemp, futureCond)
    console.log(weatherConditions[currentCond].icon)
    return (
        <View style={styles.weather}>
          
            <View style={styles.morning}>
                <Text style={styles.time}>now:</Text>
                <MaterialCommunityIcons
                    size={55}
                    name={weatherConditions[currentCond].icon}
                    color={'#F25116'}
                    style={styles.icon}
                />
                <Text style={styles.temp}>{Math.round(currentTemp)}˚</Text> 
               
            </View>
            
            <View style={styles.afternoon}>
                <Text style={styles.time}>later:</Text>
                <MaterialCommunityIcons
                    size={55}
                    name={weatherConditions[currentCond].icon}
                    color={'#F25116'}
                    style={styles.icon}
                />
                <Text style={styles.temp}>{Math.round(futureTemp)}˚</Text>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weather: {
        padding: 5,
    },
    morning: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#403FE8'

    },
    time:{
        width: 100,
        fontSize: 40,
        marginLeft: '5%',
        color:'#448C30',
        fontFamily:'Chalkboard SE'
    },
    temp:{
        width: 100,
        fontSize: 40,
        top:10,
        borderStyle:'solid',
        borderColor:'white',
        color:'#048ABF'
    },
    icon:{
        width:100,
        top:5
    },

    afternoon: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        borderBottomWidth: 1,
        borderColor: '#403FE8'   

    }

  }
);
  

export default Weather;