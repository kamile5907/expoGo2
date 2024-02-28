import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import { styles } from './src/style/StyleSheet';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}


