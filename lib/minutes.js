import * as React from 'react';
import { View, StyleSheet, Dimensions, TextInput,Text } from 'react-native';


 
export default class TabViewExample extends React.Component {
  state = {
  };
  
  onChange(e) {
    if((e > 0 && e < 60) || e == '') {
        let val = ['0','*','*','*','*','?','*']
        
        if(e == '') {
            val[1] = '';
        } else {
            val[1] = `0/${e}`;
        }
        this.props.onChange(val)
    } 
  }
  render() {
    this.state.value = this.props.value

    return (
        <View style={styles.minView}>
            <Text style={styles.minText}>Every  </Text> 
             <TextInput 
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width:100}}
                keyboardType='numeric'
                onChangeText={(text)=> this.onChange(text)}
                value={this.state.value[1].split('/')[1]}
                maxLength={2}  //setting limit of input
                />
            <Text style={styles.minText}>minute(s)</Text> 
        </View>

    );
  }
}
 
const styles = StyleSheet.create({
    textInput: {
      flex: 1,
    },
    minView: {
        flexDirection:'row',
        height:50
    },
    minText : {
        paddingTop:10
    }
  });