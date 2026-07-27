import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function EventDetails() {
  const { title, date, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Back to Feed" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  date: { fontStyle: 'italic', marginBottom: 12 },
  description: { fontSize: 16 },
});