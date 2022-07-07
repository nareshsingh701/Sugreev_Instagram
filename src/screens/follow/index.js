import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ViaFollowing from './viaFollowings';
import ViaFollowers from './viaFollowers';

const Index = (props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Followers' },
        { key: 'second', title: 'Following' },
    ]);

    const renderFollowing = () => {
        return (
            <ViaFollowing navigation={props.navigation} />
        )
    }
    const renderFollowers = () => {
        return (
            <ViaFollowers navigation={props.navigation} />
        )
    }

    const renderScene = SceneMap({
        first: renderFollowers,
        second: renderFollowing,
    });


    const renderTabBar = ({ navigationState, jumpTo }) => (
        <View style={styles.tabbar}>
            {navigationState.routes.map((route, index) => {
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => jumpTo(route.key)}
                    >
                        <Text style={styles.textFollow}>{route.title}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.viewBack}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.imageBack} source={require('../../assets/images/left.png.png')} />
                </TouchableOpacity>
                <Text style={styles.textJoya}>joyasingh12345678</Text>
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

export default Index;

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
        marginTop: 2
    },
    textJoya: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginLeft: 30
    },
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       // backgroundColor: '#fafafa',
        marginTop:10
    },
    textFollow:{
        fontSize:16,
       color:'#000',
       fontWeight:'500',
    paddingHorizontal:50 
    }
})