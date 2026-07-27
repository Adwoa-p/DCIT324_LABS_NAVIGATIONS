import { View, Text} from 'react-native';

const faqs = [
    {
        question: "How do I register for courses?",
        ans: "Log in to the Student Portal and go to the Registration tab.",
    },
    {
        question: "How do I contact my academic advisor?",
        ans: "Advisor contact details are listed under your Programme page.",
    },
    {
        question: "Where can I report a technical issue?",
        ans: "Email ict-support@ug.edu.gh or visit the ICT helpdesk.",
    },
]

export default function Help() {
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 20, gap:10}}>
      {
        faqs.map((faq) => (
            <View key={faq.question}>
                <Text style={{ fontWeight: 'bold'}}>{ `Question: ${faq.question}`}</Text>
                <Text style={{ fontStyle: 'italic'}}>{`Answer: ${faq.ans}`}</Text>
            </View>
        ))
      }
    </View>
  );
}