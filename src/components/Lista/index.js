import React from 'react';

import {
    Container,
    Texto,
    TipoView,
    TextoTipo,
    RowItems,
    ImagemPoke,
    
} from './style';

import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Lista({nome, types, contador, statusName, status, evolucoes, bgColor}){

    const navigation = useNavigation();
      
    return(
        <Container onPress={()=>(navigation.navigate('Infos', { bgColor, nome, contador, types, statusName, status, evolucoes }))}style={{backgroundColor: bgColor}}>
            <Texto>{nome[0].toUpperCase() + nome.substr(1)}</Texto> 
            <RowItems>
                <View>
                    <TipoView> 
                        <TextoTipo>{types[0][0].toUpperCase()+types[0].substr(1)}</TextoTipo>
                    </TipoView>
                    {types[1] != undefined ? (
                        <TipoView>
                            <TextoTipo>{types[1][0].toUpperCase() + types[1].substr(1)}</TextoTipo>
                        </TipoView>
                    ):
                    (
                    <TextoTipo></TextoTipo>)
                    }
                </View>
                <ImagemPoke source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+contador+'.png' }}/>
            </RowItems>
        </Container>
    )
}
