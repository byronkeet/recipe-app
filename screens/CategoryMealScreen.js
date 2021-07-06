import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = itemData => {
        const {title, imageUrl, duration, complexity, affordability, id} = itemData.item;
        return (
            <MealItem
                title={title}
                image={imageUrl}
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: id
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%'}}
            />
        </View>
    )
};

CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});
