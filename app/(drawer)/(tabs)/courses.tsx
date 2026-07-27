import { Text, View } from "react-native";

const courses = [
  { code: 'DCIT 308', title: 'Data Structures', creditHours: 3 },
  { code: 'DCIT 324', title: 'Mobile Application Development', creditHours: 3 },
  { code: 'MATH 354', title: 'Abstract Algebra', creditHours: 3 },
  { code: 'DCIT 316', title: 'Human-Computer Interaction', creditHours: 3 },
  { code: 'DCIT 306', title: 'Distributed Computing', creditHours: 3 },
];


export default function Courses() {
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 20, gap:10 }}>
        {
            courses.map((course) => (
                <View key={course.code}>
                    <Text style={{ fontWeight: 'bold'}}>{course.code}</Text>
                    <Text>{course.title}</Text>
                    <Text>{course.creditHours}</Text>
                </View>
                
            ))
        }
    </View>
  );
}