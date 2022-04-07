import React, {useState, useEffect} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';

import {

    Container,
    Titulo,
    InfosContainer,
    Imagem,
    ContainerTipos,
    Tipos,
    TextoTipos,
    ViewStats,
    StatsPokemon,
    LineStats,
    EvolucoesContainer,
    ImageEvolucao,
    ImageView,

} from './style';

export default function Infos({route}){

    const navigation = useNavigation();

    const [evolucoes, setEvolucoes] = useState([]);
    const listaEvolucoes = [];
    
    useEffect(()=>{

        function getEvolucao(){
            try{
                const namesNext = route.params.evolucoes[route.params.contador-1].next.map(nxt => nxt.name);
                const namesPrev = route.params.evolucoes[route.params.contador-1].prev.map(prev => prev.name);
                listaEvolucoes.push({
                    next: namesNext[0][0].toLowerCase() + namesNext[0].substr(1),
                    prev: namesPrev[0][0].toLowerCase() + namesPrev[0].substr(1)
            
                }) 

            } catch(error){
                try{
                    if(route.params.evolucoes[route.params.contador-1].prev === undefined){
                        const namesNext = route.params.evolucoes[route.params.contador-1].next.map(nxt => nxt.name);
                        if(namesNext[1]){
                            listaEvolucoes.push({
                                next: namesNext[0][0].toLowerCase() + namesNext[0].substr(1),
                                next2: namesNext[1][0].toLowerCase() + namesNext[1].substr(1)
                            })
                        } else (
                            listaEvolucoes.push({
                                next: namesNext[0][0].toLowerCase() + namesNext[0].substr(1)
                            })
                        )
                        
                    }
    
                    if(route.params.evolucoes[route.params.contador-1].next === undefined){
                        const namesPrev = route.params.evolucoes[route.params.contador-1].prev.map(prev => prev.name);
    
                        if(namesPrev[1]){
                            listaEvolucoes.push({
                                prev: namesPrev[0][0].toLowerCase() + namesPrev[0].substr(1),
                                prev2: namesPrev[1][0].toLowerCase() + namesPrev[1].substr(1)
                            })
                        } else {
                            listaEvolucoes.push({
                                prev: namesPrev[0][0].toLowerCase() + namesPrev[0].substr(1),
                            })
                        }
                        
                    }
                } catch{
                    if(route.params.evolucoes[route.params.contador-1].prev === undefined && route.params.evolucoes[route.params.contador-1].next === undefined){
                        return
                    }
                }  
            }
            setEvolucoes(listaEvolucoes);
            
        }            
        
        getEvolucao();
        
        
    },[]);

    return(
        <Container style={{backgroundColor: route.params.bgColor}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{paddingLeft: 10}}>
                <Feather name='arrow-left' color='#FFF' size={36} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between'}}>
                <Titulo>{route.params.nome[0].toUpperCase() + route.params.nome.substr(1)}</Titulo>
                <Text style={{color: '#FFF', fontSize: 22, fontWeight: 'bold', marginTop: 10, paddingRight: 20}}># {route.params.contador}</Text>
            </View>
            <ContainerTipos>
                <Tipos>
                    <TextoTipos>{route.params.types[0][0].toUpperCase() + route.params.types[0].substr(1)}</TextoTipos>
                </Tipos>
                {route.params.types[1] ? (
                        <Tipos>
                            <TextoTipos>{route.params.types[1][0].toUpperCase() + route.params.types[1].substr(1)}</TextoTipos>
                        </Tipos>
                    ):(<TextoTipos></TextoTipos>)}
            </ContainerTipos>
            <InfosContainer>
                <View style={{alignItems: 'center'}}>
                    <Imagem source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ route.params.contador +'.png'}}
                    />
                </View>
                <ViewStats>
                    <LineStats>
                        <StatsPokemon>
                            {route.params.statusName[0].toUpperCase()}
                        </StatsPokemon>
                        <StatsPokemon>
                            {route.params.status[0]}
                        </StatsPokemon>
                    </LineStats>
                    <LineStats>
                        <StatsPokemon>
                            {route.params.statusName[1][0].toUpperCase() + route.params.statusName[1].substr(1)}
                        </StatsPokemon>
                        <StatsPokemon>
                            {route.params.status[1]}
                        </StatsPokemon>
                    </LineStats>
                    <LineStats>
                        <StatsPokemon>
                            {route.params.statusName[2][0].toUpperCase() + route.params.statusName[2].substr(1)}
                        </StatsPokemon>
                        <StatsPokemon>
                            {route.params.status[2]}
                        </StatsPokemon>
                    </LineStats>
                    <LineStats>
                        <StatsPokemon>
                            {route.params.statusName[3][0].toUpperCase() + route.params.statusName[3].substr(1)}
                        </StatsPokemon>
                        <StatsPokemon>
                            {route.params.status[3]}
                        </StatsPokemon>
                    </LineStats>
                    <LineStats>
                        <StatsPokemon>
                            {route.params.statusName[4][0].toUpperCase() + route.params.statusName[4].substr(1)}
                        </StatsPokemon>
                        <StatsPokemon>
                            {route.params.status[4]}
                        </StatsPokemon>
                    </LineStats>
                    <LineStats>
                        <StatsPokemon>
                            {route.params.statusName[5][0].toUpperCase() + route.params.statusName[5].substr(1)}
                        </StatsPokemon>
                        <StatsPokemon>
                            {route.params.status[5]}
                        </StatsPokemon>
                    </LineStats>
                </ViewStats>
            </InfosContainer>
            
                {
                    evolucoes.map(prev => prev.prev).toString() == '' && evolucoes.map(next => next.next2).toString() ? (
                        <EvolucoesContainer>
                            <ImageView>
                                <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador)).toString()+'.png'}}/>
                            </ImageView>
                            <Feather name='arrow-right' color='#000' size={25} />
                            <ImageView>
                                <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador+1)).toString()+'.png'}}/>
                            </ImageView>
                            <Feather name='arrow-right' color='#000' size={25} />
                            <ImageView>
                                <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador+2)).toString()+'.png'}}/>
                            </ImageView>
                        </EvolucoesContainer>
                    ) : (
                        evolucoes.map(next => next.next).toString() !== '' & evolucoes.map(prev => prev.prev).toString() !== '' ? (
                            <EvolucoesContainer>
                                <ImageView>
                                    <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador-1)).toString()+'.png'}}/>
                                </ImageView>
                                <Feather name='arrow-right' color='#000' size={25} />
                                <ImageView>
                                    <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador)).toString()+'.png'}}/>
                                </ImageView>
                                <Feather name='arrow-right' color='#000' size={25} />
                                <ImageView>
                                    <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador+1)).toString()+'.png'}}/>
                                </ImageView>
                            </EvolucoesContainer>
                        ) : (
                            evolucoes.map(next => next.next).toString() == '' && evolucoes.map(prev => prev.prev2).toString() ? (
                                <EvolucoesContainer>
                                    <ImageView>
                                        <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador-2)).toString()+'.png'}}/>
                                    </ImageView>
                                    <Feather name='arrow-right' color='#000' size={25} />
                                    <ImageView>
                                        <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador-1)).toString()+'.png'}}/>
                                    </ImageView>
                                    <Feather name='arrow-right' color='#000' size={25} />
                                    <ImageView>
                                        <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador)).toString()+'.png'}}/>
                                    </ImageView>
                                </EvolucoesContainer>
                            ) : (
                                evolucoes.map(prev => prev.prev).toString() !== '' && evolucoes.map(next => next).toString() ? (
                                    <EvolucoesContainer>
                                        <ImageView>
                                            <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador-1)).toString()+'.png'}}/>
                                        </ImageView>
                                        <Feather name='arrow-right' color='#000' size={25} />
                                        <ImageView>
                                            <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador)).toString()+'.png'}}/>
                                        </ImageView>
                                    </EvolucoesContainer>
                                ) : (
                                    evolucoes.map(next => next.next).toString() !== '' && evolucoes.map(prev => prev.prev).toString() == '' ? (
                                        <EvolucoesContainer>
                                            <ImageView>
                                                <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador)).toString()+'.png'}}/>
                                            </ImageView>
                                            <Feather name='arrow-right' color='#000' size={25} />
                                            <ImageView>
                                                <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador+1)).toString()+'.png'}}/>
                                            </ImageView>
                                        </EvolucoesContainer>
                                    ) : (
                                        evolucoes.map(next => next.next).toString() == '' && evolucoes.map(prev => prev.prev).toString() == '' ? (
                                            <EvolucoesContainer>
                                                <ImageView>
                                                    <ImageEvolucao source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+ (parseInt(route.params.contador)).toString()+'.png'}}/>
                                                </ImageView>
                                            </EvolucoesContainer>
                                        ) : (<View></View>)
                                    )
                                )
                            )
                        )
                    )
                    
                }
           
        </Container>
        
    )
}