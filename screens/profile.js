import React,{ Component} from 'react';
import {Text, View,Image, ScrollView,StyleSheet, touchableHeightLight, TochableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient';
import FonAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
class Profile extends Component{
        render(){
            return(
                <View style={styles.container}>
                    <ScrollView>
                        <LinearGradient colors={['#CF7500', '#F0A500']} style={styles.profileImage} >
                            <TouchableOpacity>
                                <FonAwesome
                                    name={"edit"}
                                    size={40}
                                    color="#f4f4f4"
                                    style={styles.edit}
                                    />
                                </TouchableOpacity>
                    </LinearGradient>
                    
                        <View>
                            {/* <Icon name="account-circle" size={150 } style={{color: 'blue', marginTop:-85, padding:10,}}  /> */}
                            <Image source={require('../assets/images/w.jpeg')}  style={{ width:140,height:140,borderRadius: 150, marginTop:-70, padding:10, marginLeft:20}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                                    <Text style={{color:"#1a1c20",fontWeight:'bold',fontSize:25}}>Prasad Desai</Text>
                                    <Text style={{color:"grey",fontSize:15}}>25, Male</Text>
                        </View>
                        <View style={styles.profileDetails}>
                                  <Icon size={30} name={'account-settings'}/> 
                                  <Text>Moble No. 8884515968</Text>
                        </View>
                          <View style={styles.profileDetails}>
                                  <Icon size={30} name={'account-settings'}/> 
                                  <Text>Adhar No. 8884515968</Text>
                        </View>
                          <View style={styles.profileDetails}>
                                  <Icon size={30} name={'account-settings'}/> 
                                  <Text>Moble No. 8884515968</Text>
                        </View>
                    </ScrollView>
                </View>
            );
        }
}

export default Profile;

const styles = StyleSheet.create({  
    container: {
         backgroundColor:'#f4f4f4',
         flex: 1,
    },
    profileImage:{
        height: 120,
        borderBottomRightRadius: 180,
    },
    profileDetails:{
        flexDirection:'row',
        justifyContent:'center',
        alignSelf: 'center',
        alignItems: "center",
        backgroundColor:"#fff",
        width:'90%',
        padding:10,
        borderRadius:10,
        shadowOpacity:10,
        elevation:0,
        marginTop: 20,
        
    },
    edit: {
        alignSelf: "flex-end",
        marginTop: 70,
        marginRight: 80
    }
})