import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import VideoItem from './components/videoItem'
import data from './data.json'
export default class App extends Component {
  // clickMe = () =>{
  //   console.log('Ola !!!');
  //   Alert.alert('Modal has been closed.');
  // } 
  render(){
    
    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
          <Image source={require('./assets/logo.png')} style={{ width:98, height: 22 }}/>
          <View style={styles.rightNavbar}>
            <TouchableOpacity>
                <Icon style={styles.navIcon} name="search" size={25}/>
            </TouchableOpacity>
              <TouchableOpacity>
                <Icon style={styles.navIcon} name="account-circle" size={25}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          {/* <VideoItem video={data.items[0]} /> */}
          <FlatList data={data.items}
          renderItem={(video)=><VideoItem video={video.item}/>}
          keyExtractor={(item)=>item.id}
          ItemSeparatorComponent={()=><View style={{ height:1, backgroundColor:'#cccc'}}/>}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity  style={styles.tabItem}>
            <Icon style={styles.tabIcons} name="home" size={25}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.tabItem}>
            <Icon style={styles.tabIcons} name="whatshot" size={25}/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.tabItem}>
            <Icon style={styles.tabIcons} name="subscriptions" size={25}/>
            <Text style={styles.tabTitle}>subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.tabItem}>
            <Icon style={styles.tabIcons} name="folder" size={25}/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>

      {/* <Image source={ require('./assets/abc.jpg') } /> 
      <Text style={{ fontSize: 36}}> FIRST APP</Text>
      <Image style={{ width:300, height: 300 }} source={{ uri:'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' }} />
        <Text style={styles.textStyle}>this is a app for testing</Text>
        <Button onPress={this.clickMe} title="click me" color="orange"/> */}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  navBar:{
    height:65,
    elevation:3,
    backgroundColor:'white',
    paddingHorizontal: 15,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  rightNavbar:{
    flexDirection:'row',
  },
  navIcon:{
    marginLeft: 25,
  },
  body:{
    flex:1,
  },
  tabBar:{
    backgroundColor:'white',
    height:60,
    borderTopWidth:.5,
    borderColor:'#e5e5e5',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  tabItem:{
    alignItems:'center',
    justifyContent:'center',
  },
  tabTitle:{
    fontSize:11,
    color:'#3c3c3c',
    paddingTop: 3,
  }
});
