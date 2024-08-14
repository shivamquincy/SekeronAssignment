import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function LoginScreen() {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <View style={styles.loginPage}>
            <View style={styles.loginForm}>
                <Text style={styles.loginHeader}>Log In</Text>

                <View style={styles.inputContainer}>
                    <AntDesign name="user" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        style={[styles.input, styles.placeholderText]}
                        placeholder="Username"
                        placeholderTextColor="gray"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.icon} />
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

            
                <View style={styles.rememberContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#eb3755"
                        unFillColor="#23233c"
                        text="Remember Me"
                        iconStyle={{ borderColor: "#eb3755", borderRadius: 0 }} // Square shape
                        innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular", color: 'white' }}
                        onPress={(isChecked) => { console.log(isChecked) }}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                
                <View style={styles.bottomSection}>
                    <Text style={styles.orText}>Or Sign in with</Text>

                    <View style={styles.iconRow}>
                        <AntDesign name="facebook-square" size={30} color="#eb3755" />
                        <FontAwesome6 name="x-twitter" size={30} color="#eb3755" />
                        <AntDesign name="google" size={30} color="#eb3755" />
                        <AntDesign name="instagram" size={30} color="#eb3755" />
                    </View>

                    <View style={styles.signUpPromptContainer}>
                        <Text style={styles.signUpPromptText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.push('Signup')}>
                            <Text style={styles.signUpLink}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginPage: {
        backgroundColor: "#23233c",
        height: "100%",
        justifyContent: 'flex-start', 
    },
    loginForm: {
        padding: 20,
        paddingTop: 100,
        width: '100%', 
    },
    loginHeader: {
        color: "lightgray",
        fontSize: 30,
        textAlign: "left",
        fontWeight: "bold",
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        height: 40,
        borderColor: '#eb3755',
        borderRadius: 18,
        marginBottom: 15,
        paddingLeft: 10,
        width: '100%', 
    },
    input: {
        flex: 1, 
        color: 'white',
    },
    icon: {
        marginRight: 10, 
    },
    placeholderText: {
        fontSize: 18, 
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    forgotPasswordText: {
        color: '#eb3755',
        marginLeft: -115,
    },
    showHideText: {
        color: 'lightgray',
        padding: 6,
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#eb3755',
        borderRadius: 18,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%', 
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomSection: {
        alignItems: 'center',
        marginTop: 400,
        marginBottom: 20,
    },
    orText: {
        color: 'lightgray',
        fontSize: 22,
        marginBottom: 20,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 20,
    },
    signUpPromptContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
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
