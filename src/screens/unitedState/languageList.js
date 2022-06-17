import { View, Text,StyleSheet,Image,TextInput } from 'react-native'
import React from 'react'

const LanguageList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>SELECT YOUR LANGUAGE</Text>
            </View>
            <View style={styles.viewOne}>

            </View>
            <View>
                <View style={styles.viewTwo}>
                    <Image resizeMode={'cover'}style={styles.image}source={require('../../assets/images/search.png.png')} />
                    <View>
                   <TextInput style={styles.textInput}
                    placeholder='Search'>
                    
                    </TextInput>
                    </View> 
                </View>
            </View>
            <View style={styles.viewOne}>

            </View>
        </View>
    )
}

export default LanguageList;
const styles=StyleSheet.create({
container:{
    flex:1
},
viewOne:{
    borderBottomWidth:0.4,
  marginTop:10  
},
text:{
    fontSize:25,
    marginLeft:10
},
viewTwo:{
    flexDirection:'row'
},
textInput:{
 fontSize:25,
marginTop:5, 
marginLeft:8   
},
image:{
    marginLeft:10,
    marginTop:13,
    height:35,
    width:35,
}

})