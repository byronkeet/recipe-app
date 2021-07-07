import React from 'react';
import { Platform } from 'react-native'
import{ createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: {
            screen: CategoryMealScreen
        },
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                            name='ios-restaurant'
                            size={25}
                            color={tabInfo.tintColor}
                        />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            // tabBarLabel: 'Favorites!',
            tabBarIcon: tabInfo => {
                return <Ionicons
                            name='ios-star'
                            size={25}
                            color={tabInfo.tintColor}
                        />
            },
            tabBarColor: Colors.accentColor
        }
    }
}


const MealsFavTabNavigator = Platform.OS == 'android'
?  createMaterialBottomTabNavigator(tabScreenConfig,
    {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
: createBottomTabNavigator(
    tabScreenConfig,
    {
        tabBarOtions: {
            activeTintColor: Colors.accentColor
        }
    }
)

export default createAppContainer(MealsFavTabNavigator);
