import React,{ useState, useEffect } from 'react';

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

export default function Lista({nome, types, contador, statusName, status, evolucoes}){

    const [bgColor, setBgColor] = useState('#FFF' );
    const navigation = useNavigation();

    useEffect(() => {

        function corBG(){
            if(types[0] == 'water'){
                setBgColor('#ADD8E6');
                return
            }   
            if(types[0] == 'grass'){
                setBgColor('#00FF7F');
                return
            }
            if(types[0] == 'fire'){
                setBgColor('#FF7F50');
                return
            }
            if(types[0] == 'bug'){
                setBgColor('#9ACD32');
                return
            }
            if(types[0] == 'rock'){
                setBgColor('#BEBEBE');
                return
            }
            if(types[0] == 'electric'){
                setBgColor('#FFD700');
                return
            }
            if(types[0] == 'normal'){
                setBgColor('#EEE8AA');
                return
            }
            if(types[0] == 'poison'){
                setBgColor('#FF00FF');
                return
            }
            if(types[0] == 'ground'){
                setBgColor('#DEB887');
                return
            }
            if(types[0] == 'fighting'){
                setBgColor('#8FBC8F');
                return
            }
            if(types[0] == 'ghost'){
                setBgColor('#BA55D3');
                return
            }
            if(types[0] == 'fairy'){
                setBgColor('#FFE4E1');
                return
            }
            if(types[0] == 'psychic'){
                setBgColor('#A020F0');
                return
            }
            if(types[0] == 'ice'){
                setBgColor('#AFEEEE');
                return
            }
            if(types[0] == 'dragon'){
                setBgColor('#E6E6FA');
                return
            }

        }

        corBG();

    },[])
      
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