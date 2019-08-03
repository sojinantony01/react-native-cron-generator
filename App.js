import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Cron from './lib'

export default class App extends React.Component {
  state = {
  };
  
 
  render() {
    return (
      <Cron  showResultText={true} showResultCron={true} value={false} onChange={(e) => console.log()}/>
    );
  }
}
 
