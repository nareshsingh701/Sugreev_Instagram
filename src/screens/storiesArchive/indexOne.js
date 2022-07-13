import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ViaStories from './viaStories';
import ViaCalendar from './viaCalendar';
import ViaLocation from './viaLocation';

const IndexOne = (props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', image: require('../../assets/images/storySmall.png') },
        { key: 'second', image: require('../../assets/images/storySmall.png') },
        { key: 'third', image: require('../../assets/images/storySmall.png') },
    ]);

    const renderStories = () => {
        return (
            <ViaStories navigation={props.navigation} />
        )
    }
    const renderCalendar = () => {
        return (
            <ViaCalendar navigation={props.navigation} />
        )
    }
    const renderLocation = () => {
        return (
            <ViaLocation navigation={props.navigation} />
        )
    }


    const renderScene = SceneMap({
        first: renderStories,
        second: renderCalendar,
        third: renderLocation,
    });


    const renderTabBar = ({ navigationState, jumpTo }) => (
        <View style={styles.tabbar}>
            {navigationState.routes.map((route, index) => {
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => jumpTo(route.key)}
                    >
                        <Text style={styles.textFollow}>{route.image}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.viewDot}>
                <View style={styles.viewBack}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image resizeMode={'cover'} style={styles.imageBack} source={require('../../assets/images/left.png.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textJoya}>Stories archive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.imageList} source={require('../../assets/images/list.png')} />
                        </TouchableOpacity>
                </View>
                <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.imageDot} source={require('../../assets/images/threeDot.png.png')} />
                </TouchableOpacity>
            </View>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}

            />

        </ScrollView>
    );
}

export default IndexOne;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewBack: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 10
    },
    imageBack: {
        height: 25,
        width: 25,
        marginTop: 5
    },
    textJoya: {
        fontSize: 25,
        fontWeight: '700',
        color: '#000',
        marginLeft: 30
    },
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fafa',
        marginTop: 10
    },
    textFollow: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
        paddingHorizontal: 50
    },
    imageList: {
        height: 16,
        width: 16,
        marginTop: 12,
        marginLeft: 8
    },
    viewDot:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageDot:{
      height:28,
      width:28,
      marginTop:15,
      marginRight:15  
    }
})