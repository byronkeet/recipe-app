import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
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
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}

export default MealList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});
