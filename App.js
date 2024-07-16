// Importamos React para poder utilizar JSX y React components.
import React from 'react';

// Importamos NavigationContainer de @react-navigation/native para envolver nuestra estructura de navegación.
import { NavigationContainer } from '@react-navigation/native';

// Importamos createNativeStackNavigator de @react-navigation/native-stack para crear un stack de navegación.
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos las pantallas que utilizaremos en nuestra aplicación.
import Login from './src/screens/login';
import Navigation from './src/navigation/navigation';
import Signup from './src/screens/signUp'

export default function App() {

    // Creamos una instancia del stack de navegación.
    const Stack = createNativeStackNavigator();

    return (
        // NavigationContainer envuelve toda la estructura de navegación para proporcionar el contexto necesario.
        <NavigationContainer>
            {/* Definimos el Stack Navigator con las pantallas de la aplicación */}
            <Stack.Navigator
                // Definimos la pantalla inicial de la aplicación.
                initialRouteName='Login'
                // Opciones globales para las pantallas, en este caso desactivamos el header.
                screenOptions={{
                    headerShown: false
                }}>
                {/* Definimos cada pantalla en el Stack Navigator */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="navigation" component={Navigation} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}