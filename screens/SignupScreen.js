import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function SignUpScreen() {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.SignUpPage}>
            <View style={styles.SignupForm}>
                <Text style={styles.SignUpHeader}>Sign Up</Text>

                <View style={styles.nameContainer}>
                    <View style={[styles.inputContainer, styles.halfInput]}>
                        <TextInput
                            style={[styles.input, styles.placeholderText]}
                            placeholder="First Name"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={[styles.inputContainer, styles.halfInput]}>
                        <TextInput
                            style={[styles.input, styles.placeholderText]}
                            placeholder="Last Name"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, styles.placeholderText]}
                        placeholder="Email"
                        placeholderTextColor="gray"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, styles.placeholderText]}
                        placeholder="Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Text style={styles.showHideText}>
                            {passwordVisible ? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, styles.placeholderText]}
                        placeholder="Confirm Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Text style={styles.showHideText}>
                            {passwordVisible ? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Privacy}>
                <BouncyCheckbox
    size={25}
    fillColor="#eb3755"
    unFillColor="#23233c"
    iconStyle={{ borderColor: "#eb3755", borderRadius: 0 }} // Square shape
    innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
    textStyle={{ fontFamily: "JosefinSans-Regular" }}
    onPress={(isChecked) => { console.log(isChecked) }}
    textComponent={
        <Text style={{ color: 'white',marginLeft: 7,fontSize:16 }}>
         I agree with{' '}
            <Text style={{ color: '#eb3755' }}>privacy 
                <Text style={{ color: "lightgray" }}> and </Text>
                policy</Text>
        </Text>
    }
/>
                </View>

                <TouchableOpacity style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
           

            <View style={styles.bottomSection}>
                <View style={styles.signUpPromptContainer}>
                    <Text style={styles.signUpPromptText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('Login')}>
                        <Text style={styles.signUpLink}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    SignUpPage: {
        backgroundColor: "#23233c",
        height: "100%",
        justifyContent: 'space-between',
    },
   SignupForm: {
        padding: 20,
        paddingTop: 100,
        width: '100%',
    },
    SignUpHeader: {
        color: "lightgray",
        fontSize: 30,
        textAlign: "left",
        fontWeight: "bold",
        marginBottom: 30,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    halfInput: {
        width: '48%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        height: 40,
        borderColor: '#eb3755',
        borderRadius: 18,
        paddingLeft: 10,
        width: '100%',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        color: 'white',
    },
    placeholderText: {
        fontSize: 18,
    },
    showHideText: {
        color: 'lightgray',
        padding: 6,
        fontSize: 16,
    },
    SignUpButton: {
        backgroundColor: '#eb3755',
        borderRadius: 18,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    SignUpButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    signUpPromptContainer: {
        flexDirection: 'row',
    },
    signUpPromptText: {
        color: 'lightgray',
        fontSize: 16,
    },
    signUpLink: {
        color: '#eb3755',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

