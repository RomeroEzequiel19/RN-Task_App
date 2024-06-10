import { StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    firstContainer: {
        alignItems: "center",
    },
    logo: {
        width: wp("20%"),
        height: hp("20%")
    },
    titleWrapper: {
        flexDirection: "row"
    },
    titleTextShape1: {
        position: "absolute",
        left: -28,
        top: 20
    },
    titleText: {
        fontSize: hp("3%"),
        textAlign: "center"
    },
    titleTextShape2: {
        position: "absolute",
        right: -20,
        top: -20
    },
    titleShape3: {
        position: "absolute",
        left: 60
    },
    dscpWrapper: {
        marginTop: 30
    },
    dscpText: {
        textAlign: "center",
        color: "#575757",
        fontSize: hp("2%")
    },
    buttonWrapper: {
        backgroundColor: "#2467EC",
        width: wp("92%"),
        paddingVertical: 18,
        borderRadius: 4,
        marginTop: 40,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    }
})