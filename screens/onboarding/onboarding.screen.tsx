import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Raleway_700Bold } from '@expo-google-fonts/raleway'
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '@/styles/onboarding/onBoard'
import { router } from 'expo-router'

export default function OnBoardingScreen() {
    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold
    });

    if(!fontsLoaded && !fontError) {
        return null
    }

  return (

      <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} 
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={styles.firstContainer}>
            <View>
                <Image
                source={require("@/assets/images/onboarding/logo.png")}
                style={styles.logo}
                />
                <Image source={require("@/assets/images/onboarding/shape_9.png")}/>
            </View>
            <View style={styles.titleWrapper}>
                <Image 
                style={styles.titleTextShape1} 
                source={require("@/assets/images/onboarding/shape_3.png")}
                />
                <Text style={[styles.titleText, {fontFamily: "Raleway_700Bold"}]}>
                    Vuela a través de tus tareas con
                </Text>
                <Image 
                style={styles.titleTextShape2}
                source={require("@/assets/images/onboarding/shape_2.png")}
                />
            </View>
            <View>
                <Image 
                source={require("@/assets/images/onboarding/shape_6.png")}
                style={styles.titleShape3}
                />
                <Text style={[styles.titleText, {fontFamily:"Raleway_700Bold"}]}>
                    TASKBIRD
                </Text>
            </View>
            <View style={styles.dscpWrapper}>
                <Text style={[styles.dscpText, {fontFamily: "Nunito_400Regular"}]}>
                    Explora las distintas funcionalidades
                </Text>
                <Text style={[styles.dscpText, {fontFamily: "Nunito_400Regular"}]}>
                    !Empieza Aquí!
                </Text>
            </View>
            <TouchableOpacity
            onPress={() => router.push("/(routes)/welcome-intro")}
            style={styles.buttonWrapper}
            >
                <Text style={[styles.buttonText, {fontFamily: "Nunito_700Bold"}]}>
                    Iniciar
                </Text>
            </TouchableOpacity>
        </View>
      </LinearGradient>
  )
}
