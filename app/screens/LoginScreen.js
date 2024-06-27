import React, {useState} from "react"
import { Text, View } from "react-native";

import AppTextInput from "../components/TextInput";
import AppButton from "../components/Button";


function LoginScreen({navigation}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
 <Text>This is the login screen</Text>
        <AppTextInput name="username" icon="account" onChangeText={newText => setUsername(newText)}/>
        <AppTextInput name="password" icon="lock" secureTextEntry onChangeText={newText => setPassword(newText)} />
        <AppButton title={"Log In"} onPress={() => console.log("username is " + username + " password is " + password)} />

        </View>
       
    )
}

export default LoginScreen;