import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Feed(){
  return (
    <View>
      <Text>Test Feed View</Text>
    </View>
  )
}

function Comment(){
  return (
    <View>
      <Text>Test Comment View</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
         <Drawer.Screen name="Feed" component={Feed} />
         <Drawer.Screen name="Comment" component={Comment} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}