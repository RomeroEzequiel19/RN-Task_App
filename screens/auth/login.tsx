import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
    useFonts,
    Raleway_700Bold,
    Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { Fontisto, SimpleLineIcons } from '@expo/vector-icons';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const router = useRouter();

  const validateUsername = (username: string) => {
    return username.length >= 5 && username.length <= 10;
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}$/;
    return regex.test(password);
  };

  const handleSignIn = () => {
    let valid = true;

    if (!validateUsername(username)) {
      setUsernameError('El nombre de usuario debe tener entre 5 y 10 caracteres.');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('La contraseña debe tener al menos 5 caracteres, una letra mayúscula, una letra minúscula y un símbolo.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
        router.replace('home'); 
    }
  };

  return (
    <LinearGradient
    colors={["#E5ECF9", "#F6F7F9"]}
    style={{ flex: 1, paddingTop: 20 }}
    >
        <ScrollView>
            <Image
            style={styles.signInImage}
            source={require("@/assets/images/sign-in/sign_in.png")}
            />
            <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
                ¡Bienvenido!
            </Text>
            <Text style={styles.learningText}>
                Ingresa a tu cuenta de TaskBird
            </Text>
            <View style={styles.inputContainer}>
                <View>
                    <TextInput
                        style={[styles.input_form, { paddingLeft: 40 }]}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Fontisto
                        style={{ position: "absolute", left: 26, top: 17.8 }}
                        name="email"
                        size={20}
                        color={"#A1A1A1"}
                    />
                    {usernameError ? <Text style={styles.errorContainer}>{usernameError}</Text> : null}
                    <View style={{ marginTop: 15 }}>
                        <TextInput
                            style={styles.input_form}
                            keyboardType="default"
                            placeholder="******"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <SimpleLineIcons
                            style={styles.icon2}
                            name="lock"
                            size={20}
                            color={"#A1A1A1"}
                        />
                        {passwordError ? <Text style={styles.errorContainer}>{passwordError}</Text> : null}
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push("/(routes)/forgot-password")}
                    >
                        <Text
                            style={[
                            styles.forgotSection,
                            { fontFamily: "Nunito_600SemiBold" },
                            ]}
                        >
                            ¿Te olvidaste tu contraseña?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            padding: 16,
                            borderRadius: 8,
                            marginHorizontal: 16,
                            backgroundColor: "#2467EC",
                            marginTop: 15,
                        }}
                        onPress={handleSignIn}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: 16,
                                    fontFamily: "Raleway_700Bold",
                                }}
                                >
                                Sign In
                            </Text>
                    </TouchableOpacity>                    
                </View>
                <View style={styles.signupRedirect}>
                    <Text style={{ fontSize: 18, fontFamily: "Raleway_600SemiBold" }}>
                        ¿No tienes una cuenta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push("/(routes)/sign-up")}
                    >
                        <Text
                        style={{
                            fontSize: 18,
                            fontFamily: "Raleway_600SemiBold",
                            color: "#2467EC",
                            marginLeft: 5,
                        }}
                        >
                        Registrarse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    </LinearGradient>
  )
}

export default LoginScreen


const styles = StyleSheet.create({
    signInImage: {
      width: "60%",
      height: 250,
      alignSelf: "center",
      marginTop: 50,
    },
    welcomeText: {
      textAlign: "center",
      fontSize: 24,
    },
    learningText: {
      textAlign: "center",
      color: "#575757",
      fontSize: 15,
      marginTop: 5,
    },
    inputContainer: {
      marginHorizontal: 16,
      marginTop: 30,
      rowGap: 30,
    },
    icon2: {
      position: "absolute",
      left: 23,
      top: 17.8,
      marginTop: -2,
    },
    forgotSection: {
      marginHorizontal: 16,
      textAlign: "right",
      fontSize: 16,
      marginTop: 10,
    },
    signupRedirect: {
      flexDirection: "row",
      marginHorizontal: 16,
      justifyContent: "center",
      marginBottom: 20,
      marginTop: 20,
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
    },
    input_form: {
        height: 55,
        marginHorizontal: 16,
        borderRadius: 8,
        paddingLeft: 35,
        fontSize: 16,
        backgroundColor: "white",
        color: "#A1A1A1",
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});
  