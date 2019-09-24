import React, {Component} from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import {Button,Text, Form, Item, Container} from 'native-base';

export default class Login extends Component{
  static navigationOptions = {
    header: null
  }
    _register = () => {
      this.props.navigation.navigate('Register');
    };

    render(){
        return(
          <View style={styles.mainscreen}>
            <View style={styles.container}>
              <View style={styles.logoWrapper}>
                <Text style={styles.logo}>LOGO</Text>
              </View>
              <View>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder='Email'
                  style={styles.input}
                />
                <View style={{marginTop: 10}}></View>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder='Password'
                  style={styles.input}
                />
              </View>
              <View style={{marginTop: 25}}>
                <Button style={styles.btn}>
                  <Text style={styles.btnTeks}>Login</Text>
                </Button>
              </View>
              <View style={{alignItems: 'center', marginTop: 10}}>
                  <Text onPress={this._register} style={styles.btnTeksReg}>REGISTER</Text>
              </View>
            </View>
          </View>
          



        )
    }
}


const styles = StyleSheet.create({
  mainscreen:{
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  container:{
    marginHorizontal: 20,
  },
  logoWrapper:{
    alignItems: 'center'
  },
  logo:{
    fontSize: 50,
    marginTop: 100,
    marginBottom: 100
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingLeft: 15
  },
  btn:{
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#87CAFE',
    marginBottom: 5
  },
  btnTeksReg: {
    color: '#87CAFE'
  },
  btnTeks:{
    fontWeight: '500',
    fontSize: 15
  }
})