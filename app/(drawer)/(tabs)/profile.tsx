import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useProfile } from '../../../context/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text>Name: {profile.name}</Text>
      <Text>Index Number: {profile.indexNumber}</Text>
      <Text>Programme: {profile.programme}</Text>
      <Text>Level: {profile.level}</Text>
      <Text>Bio: {profile.bio}</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Edit Profile"
          onPress={() =>
            router.push({
              pathname: '/edit-profile',
              params: { name: profile.name, bio: profile.bio, programme: profile.programme },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
});