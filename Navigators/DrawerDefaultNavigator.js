
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";


const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
        );
    }
    
}