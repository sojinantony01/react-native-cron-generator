# react-native-cron-generator

React-native component to generate cron expression

## Getting Started

Package helps to build linux scheduler cron expression.
Make sure you have include bootstrap in your project

```
data = '* * * * * * *'
```
```
npm install react-native-cron-generator

```
![alt text](https://raw.githubusercontent.com/sojinantony01/react-cron-generator/master/public/images/Screenshot%20from%202019-06-08%2000-31-31.png)

![alt text](https://raw.githubusercontent.com/sojinantony01/react-cron-generator/master/public/images/Screenshot%20from%202019-06-08%2000-31-57.png)


```
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Cron from 'react-native-cron-generator'

export default class App extends React.Component {
  state = {
  };
  
 
  render() {
    return (
      <Cron  showResultText={true} showResultCron={true} value={false} onChange={(e) => console.log()}/>
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
