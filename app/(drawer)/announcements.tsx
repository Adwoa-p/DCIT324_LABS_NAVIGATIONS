import { View, Text} from 'react-native';

const announcements = [
    {
        title: "Mid-Semester Exams Timetable Released",
        date: "20/07/2026",
        info: "Check the SRC portal for your exam schedule and venue assignments."
    },
    {
        title: "Library Closed for Maintenance",
        date: "22/07/2026",
        info: "The Balme Library will be closed this weekend for system upgrades."
    },
    {
        title: "Hall Week Celebrations Begin",
        date: "24/07/2026",
        info: "All halls will host events and competitions throughout the week."
    },
    {
        title: "New Shuttle Bus Routes Introduced",
        date: "26/07/2026",
        info: "Additional shuttle routes now serve North Campus and Legon Hall."
    },
    {
        title: "Scholarship Applications Now Open",
        date: "27/07/2026",
        info: "Apply before the deadline via the Financial Aid office portal."
    },
]

export default function FriendNotes() {
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 20, gap: 10 }}>
      {
        announcements.map((announcement) => (
            <View key={announcement.title}>
                <Text style={{ fontWeight: 'bold'}}>{announcement.title}</Text>
                <Text>{announcement.date}</Text>
                <Text>{announcement.info}</Text>
            </View>
        ))
      }
    </View>
  );
}