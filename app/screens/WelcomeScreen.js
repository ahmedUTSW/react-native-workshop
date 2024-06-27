import React from "react"
import { Text, View } from "react-native";
import AppButton from "../components/Button";

function WelcomeScreen({navigation}) {
    return (
        <View>


<Text>This is the welcome screen</Text>

       <AppButton title={"Log In"} onPress={() => navigation.navigate("Login")}/>
       <AppButton title={"Register"}/>


        </View>
        
    )
}

export default WelcomeScreen;