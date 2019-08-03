import React, { Component } from 'react';

import { View, StyleSheet, CheckBox, Text,TouchableOpacity } from 'react-native';
import StartTime from './startTime';

export default class Cron extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onAtHourChange = this.onAtHourChange.bind(this);
        this.onAtMinuteChange = this.onAtMinuteChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }
    

    onAtHourChange(e) {
        let val = this.state.value;
        val[0] = '0';
        val[2] = `${e}`;
        this.props.onChange(val)
    }
    onAtMinuteChange(e) {
        let val = this.state.value;
        val[0] = '0';
        val[1] = `${e}`;
        this.props.onChange(val)
    }

    onCheck(value, e) {
        console.log(e)
        let val = this.state.value;
        val[0] = '0';
        if(e) {
            val[2] = (`${val[2]}`.split('/').length > 1) ? '0' : val[2].toString(); 
            val[3] = '?';
            val[4] = '*';
            if(val[5] === '*' || val[5] === '?' || val[5] === 'MON-FRI') {
                val[5] = value;
            } else {
                val[5] = val[5] + '!'+ value;
            }
        } else {
            val[5] = val[5].split('!');
            if(val[5].length > 1) {
                val[5].splice(val[5].indexOf(value), 1)
                val[5] = val[5].toString().replace(/,/g,'!')  
            }else  {
                val[5] = '*';
            }           
        }
       
        this.props.onChange(val)
    }
    render() {
        this.state.value = this.props.value;
        return (<View >
            <View style={styles.schedule}>
                <View style={{width:'50%'}}>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox  onValueChange={(e)=>this.onCheck("MON",e)} value={(this.state.value[5].search('MON') !== -1 ) ? true : false} /><Text style={styles.text}>Monday</Text> 
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox  onValueChange={(e)=>this.onCheck("WED",e)} value={this.state.value[5].search('WED') !== -1 ? true : false}  /><Text style={styles.text}>Wednesday</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox  onValueChange={(e)=>this.onCheck("FRI",e)} value={(this.state.value[5].search('FRI') !== -1 ) ? true : false}/><Text style={styles.text}>Friday</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox  onValueChange={(e)=>this.onCheck("SUN",e)} value={this.state.value[5].search('SUN') !== -1 ? true : false}/><Text style={styles.text}>Sunday</Text>
                    </View>
                        
                </View>
                <View style={{width:'50%'}}>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox  onValueChange={(e)=>this.onCheck("TUE",e)} value={(this.state.value[5].search('TUE') !== -1 ) ? true : false} /><Text style={styles.text}>Tuesday</Text> 
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox  onValueChange={(e)=>this.onCheck("THU",e)} value={this.state.value[5].search('THU') !== -1 ? true : false}  /><Text style={styles.text}>Thursday</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox  onValueChange={(e)=>this.onCheck("SAT",e)} value={(this.state.value[5].search('SAT') !== -1 ) ? true : false}/><Text style={styles.text}>Saturday</Text>
                    </View>
                    
                        
                </View>

            </View>
            <View style={{backgroundColor:'white', height:60, marginTop:10}}>
                <StartTime minValue={this.state.value[1]} hrValue={this.state.value[2]}  onAtHourChange={this.onAtHourChange} onAtMinuteChange={this.onAtMinuteChange} />
            </View>
        </View>)
    }
   
}

const styles = StyleSheet.create({
    textInput: {
      flex: 1,
    },
    text: {
        paddingTop:6
    },

    schedule : {
        backgroundColor:'white',
        width:'100%',
        flexDirection:'row',
        elevation:2,
        padding:20,
    },

});
