import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

function HotWear(props) {
    return (<View style={styles.clothingContainer}>
                <View style={styles.clothingItem}>
                    <Text style={styles.weatherMessage}>It is very warm right now so wear: </Text>
                 </View>
                <View style={styles.clothingItem}>
                    <Image source={require('../assets/clothing-icons/tank.png')} />
                </View>
                <View style={styles.clothingItem}>
                    <Image source={require('../assets/clothing-icons/shorts.png')} />
                </View>
                <View style={styles.clothingItem}>
                    <Text style={styles.weatherMessage}>Have a great day!</Text>
                 </View>
            </View>)
  }

function WarmWear(props) {
    return (<View style={styles.clothingContainer}>
                <View style={styles.clothingItem}>
                    <Text style={styles.weatherMessage}>It is warm right now so wear: </Text>
                 </View>
                <View style={styles.clothingItem}>
                    <Image source={require('../assets/clothing-icons/shirt.png')} />
                </View>
                <View style={styles.clothingItem}>
                    <Image source={require('../assets/clothing-icons/pants.png')} />
                </View>
                <View style={styles.clothingItem}>
                    <Text style={styles.weatherMessage}>Have a great day!</Text>
                 </View>
            </View>)
  }

function CoolWear(props) {
    console.log('coolWear', props)
    return (<View style={styles.clothingContainer}>
                <View style={styles.messageContainer}>
                    <Text style={styles.weatherMessage}>It is cool right so wear: </Text>
                 </View>
                <View style={styles.clothingItem1}>
                    <Image source={require('../assets/clothing-icons/shirt.png')} />
                </View>
                <View style={styles.clothingItem2}>
                    <Image source={require('../assets/clothing-icons/pants.png')} />
                </View>
                <View style={styles.clothingItem3}>
                    <Image source={require('../assets/clothing-icons/jacket.png')} />
                </View>
            </View>)
  }

function ColdWear(props) {
    return (<View style={styles.clothingContainer}>
                <View style={styles.messageContainer}>
                    <Text style={styles.weatherMessage}>It is cold right now so wear: </Text>
                 </View>
                <View style={styles.clothingItem1}>
                    <Image source={require('../assets/clothing-icons/sweater.png')} />
                </View>
                <View style={styles.clothingItem2}>
                    <Image source={require('../assets/clothing-icons/pants.png')} />
                </View>
                <View style={styles.clothingItem3}>
                    <Image source={require('../assets/clothing-icons/coat.png')} />
                </View>
                <View style={styles.clothingItem4}>
                    <Image source={require('../assets/clothing-icons/beanie.png')} />
                </View>
                <View style={styles.clothingItem5}>
                    <Image source={require('../assets/clothing-icons/gloves.png')} />
                </View>
               
            </View>)
}

function Jacket(props) {
    if (props.wearJacket){ 
        return (    
        <View>
            <Text>Bring a jacket</Text>
       </View>
   
        )
    } else {return(<View style={styles.clothingContainer}></View>)
    }
}

function Coat(props) {
    if (props.wearCoat){ 
        return (    
        <View>
            <Text>Bring a coat</Text>
       </View>
   
        )
    }else {return(<View style={styles.clothingContainer}></View>)
    }
}

function RainWear(props) {
    if (props.weatherCondition){
    return (
            <View style={styles.clothingContainer}>
                 <View style={styles.messageContainer}>
                    <Text style={styles.weatherMessage}>It may rain so bring raingear</Text>
                 </View>
                <View style={styles.clothingItem1}>
                    <Image source={require('../assets/clothing-icons/umbrella.png')} />
                </View>
            </View>
    )} else {return(<View style={styles.clothingContainer}></View>)
    }
}
function Clothing(props)  {
    let weatherType = props.weatherType;
    if (weatherType === 'Hot') {return <HotWear/>}
    if (weatherType === 'Warm') {return <WarmWear/>}
    if (weatherType === 'Cool') {return <CoolWear/>}
    if (weatherType === 'Cold') {return <ColdWear/>}
  }


const Wear = ({currentTemp, currentCond, futureTemp, futureCond}) => {
    let weather = '';
    let isRaining = false;
    let wearJacket = false;
    let wearCoat = false;
    
    if(currentTemp > 80) {weather = 'Hot'}
    if(currentTemp <= 80 && currentTemp >= 70) {weather = 'Warm'}
    if(currentTemp < 70 && currentTemp >= 58 ) {weather = 'Cool'}
    if(currentTemp < 58 ) {weather = 'Cold'}

  
    if(currentTemp === 'Hot' || currentTemp === 'Warm' && futureTemp === 'Cool'){
        wearJacket = true;
    } 

    if(currentTemp === 'Hot' || currentTemp === 'Warm' || currentTemp === 'Cool' && futureTemp === 'Cold'){
        wearCoat = true;
    }

    if(currentCond === 'Rain' || futureCond === 'Rain' ){isRaining = true}


    return (
        
            <View>
                <Clothing weatherType={weather}/>
                <Jacket wearJacket={wearJacket}/>
                <Coat wearCoat={wearCoat}/>
                <RainWear weatherCondition={isRaining}/>                          
            </View>
      
       
    )
}

const styles = StyleSheet.create({
    clothingContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        margin: 'auto'
        // backgroundColor:'#024873'
    },
    clothingItem1:{
        width: '48%',
        height: 200,
        marginLeft: '2%',
        marginTop: '2%',
        // borderWidth: 4,
        // borderColor: '#024873',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#B5E892',
        borderRadius:0,
      
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
           
    },
    clothingItem2:{
        width: '48%',
        height: 200,
        marginLeft: '1%',
        marginTop: '2%',
        // borderWidth: 4,
        // borderColor: '#024873',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#C592E8',
        borderRadius:0,

        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
       
    },
    clothingItem3:{
        width: '48%',
        height: 200,
        marginLeft: '2%',
        marginTop: '2%',
        // borderWidth: 4,
        // borderColor: '#024873',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:0,
        backgroundColor:'#F2EFBD',

        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
    },
    clothingItem4:{
        width: '48%',
        height: 200,
        marginLeft: '1%',
        marginTop: '2%',
        // borderWidth: 4,
        // borderColor: '#024873',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#E8BEA9',
        borderRadius:0,
       
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
    },
    clothingItem5:{
        width: '48%',
        height: 200,
        marginLeft: '2%',
        marginTop: '2%',
        // borderWidth: 4,
        // borderColor: '#024873',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#B0CAFE',

        borderRadius:0,
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
       
    },
    messageContainer:{
        width: '48%',
        height: 200,
        marginLeft: '1%', 
        marginTop: '2%',
        // borderWidth: 4,
        // borderColor: '#024873',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCA70',
        // borderRadius:0,

        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
    },
    weatherMessage:{
        fontSize: 25,
        textAlign: 'center',
        fontFamily:'Chalkboard SE'
    }
    
  });

export default Wear;