import {View, Text, Button, Alert} from 'react-native';
import styles from "../styles";
import axios from 'axios';

export default function ReviewPage({route, navigation}){
    const {formData} = route.params;

    const handleSubmit = async () => {
        try {  
            const respone = await axios.post("http://127.0.0.1:8000/registration/api/register/", formData);
            Alert.alert("Success", "User Registered successful");
            navigation.getBack();

        }catch (error) {
             Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong") );

        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Information</Text>
      
      <Text style={styles.reviewText}>First Name: {formData?.first_name}</Text>
      <Text style={styles.reviewText}>Last Name: {formData?.last_name}</Text>
      <Text style={styles.reviewText}>Email: {formData?.email}</Text>
      <Text style={styles.reviewText}>Password: {formData?.password}</Text>
      <Text style={styles.reviewText}>Gender: {formData?.gender}</Text>
      
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.button}>
          <Button title="Submit" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
}