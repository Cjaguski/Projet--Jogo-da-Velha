import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
export default function index(){
    const nome = "Cauã";

    return <View>
        <View>Jogo da Velha</View>
        <View>Vencedor: </View>
        <View>
            <View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            </View>
            <View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            </View>
            <View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            <View><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
            </View>
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});