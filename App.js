import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './App/Pages/ChatScreen';
import HomeScreen from './App/Pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './App/Navigation/HomeNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatScreen/> */}
      <NavigationContainer>
          <HomeNavigation/>
      </NavigationContainer>
      {/* <HomeScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
