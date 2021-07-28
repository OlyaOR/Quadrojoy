import React from 'react';
import { Main } from '../components/Main';
import { CartOfGood } from '../components/CartOfGood';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import air from '../assets/air.png';
import mavic from '../assets/mavic.png';
import matrice from '../assets/matrice.png';

export const Home =() => {
  const dataBtns = [
    {label: 'All', id: 1, fil: 'all'},
    {label: 'Cheap', id: 2, fil: 'cheap'},
    {label: 'Best', id: 3, fil: 'best'},
    {label: 'Fast', id: 4, fil: 'fast'}
  ];
  const dataGoods = [
    {id: 5, img: air, name: 'DJI Air 2S', price: 1424, stars: 4.2, fast: 'false'},
    {id: 6,img: mavic, name: 'DJI Mavic Mini', price: 990.90, stars: 4.5, fast: 'false'},
    {id: 7, img: matrice, name: 'DJI’s Matrice 200', price: 2780.30, stars: 3.8, fast: 'true'}
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Main' >
          {props => <Main {...props} title='Quadrojoy' dataBtns={dataBtns} dataGoods={dataGoods} />}
        </Stack.Screen>
        <Stack.Screen name="CartOfGood" options={{headerTitle: ' ', headerTransparent: true }}>{props => <CartOfGood {...props} dataGoods={dataGoods}/>}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> 
  )
};
