import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const feed = [
  { id: '1', title: 'UG Hosts Annual Career Fair', date: 'August 3, 2026', description: 'The annual career fair brings top employers to campus for networking and interviews.' },
  { id: '2', title: 'Student Union Elections Announced', date: 'August 5, 2026', description: 'Nominations open for SRC executive positions next week.' },
  { id: '3', title: 'Library Extends Hours for Exam Period', date: 'August 8, 2026', description: 'Balme Library will remain open until midnight during exams.' },
  { id: '4', title: 'Tech Community Hosts Guest Speaker Series', date: 'August 12, 2026', description: 'Industry professionals will speak on careers in tech.' },
  { id: '5', title: 'Campus Wi-Fi Upgrade Completed', date: 'August 15, 2026', description: 'Wi-Fi speeds across campus have been significantly improved.' },
];

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Feed</Text>
      {feed.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() =>
            router.push({
              pathname: '/(drawer)/(tabs)/home/[id]',
              params: { id: item.id, title: item.title, date: item.date, description: item.description },
            })
          }
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  item: { marginBottom: 14, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 8 },
  title: { fontWeight: '600' },
  date: { fontStyle: 'italic' },
});