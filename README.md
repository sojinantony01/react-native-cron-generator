# react-native-cron-generator

React-native component to generate cron expression

## Getting Started

Package helps to build linux scheduler cron expression.

```
data = '* * * * * * *'
```
```
npm install react-native-cron-generator

```
![alt text](https://raw.githubusercontent.com/sojinantony01/react-native-cron-generator/master/images/Screenshot_20190803-182207.png)

![alt text](https://raw.githubusercontent.com/sojinantony01/react-native-cron-generator/master/images/Screenshot_20190803-182149.png)


```
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Cron from 'react-native-cron-generator'

export default class App extends React.Component {
  state = {
    value:false
  };
  
 
  render() {
    return (
      <Cron  
        showResultText={true}
        showResultCron={true}
        value={this.state.value}
        onChange={(e) => console.log(e)}/>
    );
  }
}
 
```
## props

| Prop | Description | Default
| --- | --- | -- |
| value | cron expression  |  |
| onChange |  |  |
| showResultText | show in readable text format | false |
| showResultCron | show cron expression | false | 
## Acknowledgments
*cronstrue
*viswanath lekshmanan
