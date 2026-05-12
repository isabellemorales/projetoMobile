import React, {useState} from "react";
import { Card } from "react-native-paper";
import { Modal, View, TouchableOpacity, Image} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import TextoPadrao from "../../componentes/TextoPadrao";
import Styles from "../../telas/Produtos/estilosProdutos";

export default function Produtos({ item: { id, nome, descricao, imagem, imagemModal } }: any) {
    
    {/* Hook para ação de abrir e fechar do Card */}
    const [statusModal, acaoAbreFecha] = useState(false);

    return <View>
            <Card mode="elevated">
                <Card.Content>
                    <TextoPadrao>{nome}</TextoPadrao>
                    <TextoPadrao>{descricao}</TextoPadrao>
                </Card.Content>
                {/* Imagem do Card */}
                <Card.Cover source={imagem}></Card.Cover>

                {/* Chama as ações do Card para abrir o Modal */}
                <Card.Actions>
                     {/* Botão que abre o Modal */}
                    <TouchableOpacity style={Styles.botao} onPress={()=>acaoAbreFecha(true)}>
                        <TextoPadrao style={Styles.textoBotao}>
                            <Ionicons name="list" size={12} color="white"/>
                        </TextoPadrao>
                    </TouchableOpacity>
                </Card.Actions>
            </Card>
            {/* Modal de imagem */}
            <Modal animationType="slide" transparent={true} visible={statusModal}>  
                <View style={Styles.modalContainer}>
                    <View style={Styles.modal}>
                        <TextoPadrao style={Styles.nomeProduto}>{nome} </TextoPadrao>
                        <TextoPadrao style={Styles.descProduto}> {descricao} </TextoPadrao>
                        
                        {/* Imagem do Modal */}
                        <Image source={imagemModal} />
                        
                        {/* Botão que fecha o Modal */}
                        <TouchableOpacity onPress={()=> acaoAbreFecha(false)} style={Styles.botaoModal}>
                            <Ionicons name="close" size={30} color="purple" />
                        </TouchableOpacity>
                    </View>
                </View>
        </Modal>
    </View>
}
