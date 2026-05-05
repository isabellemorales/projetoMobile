import { Card } from "react-native-paper";

import TextoPadrao from "../../componentes/TextoPadrao";

export default function Produtos({item:{id,nome,descricao,imagem}}:any) {
    console.log(`teste: ${nome}`);

    return <Card mode="elevated">
                <Card.Content>
                    <TextoPadrao>{nome}</TextoPadrao>
                    <TextoPadrao>{descricao}</TextoPadrao>
                </Card.Content>
                <Card.Cover source={imagem}></Card.Cover>
            
    </Card>
}