import { Text, StyleSheet } from "react-native";

//children conteudo 
export default function TextoPadrao({children, estiloEspecifico}: any){
    return <Text style={[estilos.padrao, estiloEspecifico]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao: {
        fontSize: 12,
        textAlign: 'justify',
        lineHeight: 20,
    }
})