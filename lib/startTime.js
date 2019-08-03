import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
// import Picker from 'react-native-picker-select';

export default class Cron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour:0,
            minute:0
        };

       }
       componentWillMount() {
            this.state.hours = this.getHours();
            this.state.minutes = this.getMinutes();
       }

    render() {
        return (<View style={{ flexDirection:'row', width:'80%',paddingTop:10, marginLeft:'10%', marginRight:'10%'}} >
                    <Text style={{width:'20%', height:40, padding:'3%'}}>At</Text>
                    <View style={{width:'30%',marginLeft:2, borderWidth:2, borderColor:'grey'}}>
                        <Picker 
                            selectedValue={this.props.hrValue}
                            style={{width:'100%', height:40}}
                            onValueChange={this.props.onAtHourChange}
                            itemStyle={styles.itemStyle}
                        >
                        {this.state.hours}
                        </Picker>
                    </View>
                    <View style={{width:'30%',marginLeft:2, borderWidth:2, borderColor:'grey'}}>

                    <Picker 
                        selectedValue={this.props.minValue}
                        style={{width:'100%', height:40}}
                        onValueChange={this.props.onAtMinuteChange}
                        itemStyle={styles.itemStyle}

                    >
                        {this.state.minutes}
                    </Picker>
                    </View>
                   
                </View>)
    }
    getHours() {
        let hours = []
        for(let i = 0 ; i<24 ; i++) {
            hours.push(<Picker.Item value={i < 10 ? `0${i}` : `${i}`} label={i < 10 ? `0${i}` : `${i}`} />)
        }
        return hours;
    }
    getMinutes() {
        let minutes = []
        for(let i = 0 ; i<60 ; i++) {
            minutes.push(<Picker.Item value={i < 10 ? `0${i}` : `${i}`} label={i < 10 ? `0${i}` : `${i}`} />)
        }
        return minutes;
    }
}

const styles = StyleSheet.create({
    itemStyle: {
      width: '100%',
    },
});