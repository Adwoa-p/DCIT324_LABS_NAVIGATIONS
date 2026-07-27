import { Text, View } from "react-native";

const timetable = [
  { day: 'Monday', time: '8:00 AM - 10:00 AM', course: 'DCIT 308 - Data Structures', venue: 'JQB Auditorium' },
  { day: 'Tuesday', time: '10:00 AM - 12:00 PM', course: 'DCIT 324 - Mobile App Development', venue: 'Computer Science Dept, Room 2' },
  { day: 'Wednesday', time: '2:00 PM - 4:00 PM', course: 'MATH 354 - Abstract Algebra', venue: 'Math Dept Lecture Theatre' },
  { day: 'Thursday', time: '8:00 AM - 10:00 AM', course: 'DCIT 316 - Human-Computer Interaction', venue: 'JQB Annex' },
  { day: 'Friday', time: '12:00 PM - 2:00 PM', course: 'DCIT 306 - Distributed Computing', venue: 'Computer Science Dept, Room 1' },
];

export default function Courses() {
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 20, gap:10 }}>
        {
            timetable.map((lesson) => (
                <View key={lesson.day}>
                    <Text style={{ fontWeight: 'bold'}}>{lesson.day}</Text>
                    <Text>{lesson.time}</Text>
                    <Text>{lesson.venue}</Text>
                    <Text>{lesson.course}</Text>
                </View>
                
            ))
        }
    </View>
  );
}