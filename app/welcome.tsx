import { View, Text, Button} from 'react-native';
import { Link, router } from 'expo-router';

export default function Welcome() {
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 60 }}>
      <Text>Campus Connect</Text>
      <Link href={`/about`} asChild><Text>Get Started</Text></Link>
       <Button title="Get Started" onPress={() => router.replace('/home')} />
    </View>
  );
}