import React,  { useEffect, useState} from 'react';

import {FlatList,ActivityIndicator, View} from 'react-native';

import {Container, Titulo, BotaoBusca, HeaderArea, InputBusca, ImgLoading } from './style.js';

import api from '../../services/api';
import apiEvolution from '../../services/apiEvolution';

import Lista from '../../components/Lista/index';
import * as Animatable from 'react-native-animatable';

import Feather from 'react-native-vector-icons/Feather';

export default function Home(){

    const [dataPoke, setDataPoke] = useState([]);
    const [dataEvolution, setDataEvolution] = useState([]);
    const [boxBusca, setBoxbusca] = useState(false); 
    const [txtBusca, setTxtBusca] = useState('');
    const [listaFiltrada, setListaFiltrada] = useState([]);
    const [listaBusca, setListaBusca] = useState([]);
    const [loading, setLoading] = useState(false);

    const ImgAnimada = Animatable.createAnimatableComponent(ImgLoading)

    var listaDataPoke = [];
    var listaEvolution = [];
    var listaNova = [];

    useEffect(()=>{
        async function getApiNome(){
            try{
                setLoading(true);
                let count = 1;
                for(count = 1; count <= 151; count++){
                    const response = await api.get('pokemon/'+count.toString());
                    const dados = response.data;  
                    const nome = dados.name; 
                    const tipo = dados.types.map(typeInfo => typeInfo.type.name);
                    const statusNome = dados.stats.map(statsName => statsName.stat.name);  
                    const status = dados.stats.map(statsInfo => statsInfo.base_stat);
                    const bgColor = '#FFF';
                    if(tipo[0] == 'water'){
                        bgColor= '#ADD8E6'
                    }   
                    if(tipo[0] == 'grass'){
                        bgColor= '#00FF7F'
                    }
                    if(tipo[0] == 'fire'){
                        bgColor= '#FF7F50'
                    }
                    if(tipo[0] == 'bug'){
                        bgColor='#9ACD32'
                    }
                    if(tipo[0] == 'rock'){
                        bgColor='#BEBEBE'
                    }
                    if(tipo[0] == 'electric'){
                        bgColor='#FFD700'
                    }
                    if(tipo[0] == 'normal'){
                        bgColor='#EEE8AA'
                    }
                    if(tipo[0] == 'poison'){
                        bgColor='#FF00FF'
                    }
                    if(tipo[0] == 'ground'){
                        bgColor='#DEB887'
                    }
                    if(tipo[0] == 'fighting'){
                        bgColor='#8FBC8F'
                    }
                    if(tipo[0] == 'ghost'){
                        bgColor='#BA55D3'
                    }
                    if(tipo[0] == 'fairy'){
                        bgColor='#FFE4E1'
                    }
                    if(tipo[0] == 'psychic'){
                        bgColor='#A020F0' 
                    }
                    if(tipo[0] == 'ice'){
                        bgColor='#AFEEEE'
                    }
                    if(tipo[0] == 'dragon'){
                        bgColor='#E6E6FA'
                    }
                    listaDataPoke.push(({
                        name: nome,
                        type: tipo,
                        contador: count,
                        statusName: statusNome,
                        status: status,
                        bgColor: bgColor
                    }))
                }
            
            }catch(err){
                console.log('error: ', err);
            }

            setDataPoke(listaDataPoke); 
            setLoading(false);         
        }

        async function getEvolution(){
            try{
                const response = await apiEvolution.get();
                const nextEvolution = response.data.pokemon.map(nxtEvol => nxtEvol.next_evolution);
                const prevEvolution = response.data.pokemon.map(prevEvol => prevEvol.prev_evolution);
    
                let count = 0;

                for(count = 0; count <= 151; count++){

                    listaEvolution.push({
                        next: nextEvolution[count],
                        prev: prevEvolution[count]
                    })
                }


            }catch(err){
                console.log('error: ', err);
            }

            setDataEvolution(listaEvolution);
        
        }

        getApiNome();
        getEvolution();
        
    },[])
    
    useEffect(()=>{
        if(txtBusca === ''){
            listaNova = [];

        }

        try{
            let listaNomes = dataPoke.map(nome => nome.name);
            setListaFiltrada(listaNomes.filter((name)=> {
                return name.toLowerCase().indexOf(txtBusca.toLowerCase()) > -1;
            }));
            
            try{
                let l = 0;
                let count = 0;
                dataPoke.forEach((nomes) => {
                    
                    if(nomes.name.toString() == listaFiltrada[l].toString()){
                        listaNova.push(dataPoke[count]);
                        l++;
                        count++;
                    }
                    else{
                        count++
                    }

                })
                
            }catch(err){
                console.log(err);
            }

        setListaBusca(listaNova);
        
        } catch(err){
            console.log(err);
            console.log(txtBusca);
        }
        
    },[txtBusca]);

    if(loading){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ImgAnimada animation='pulse' iterationCount={16} source={require('../../assets/pokedex.png')} />
                <ActivityIndicator size={40} color='#000' />
            </View>
        )
    } else{
        return(     
            <Container>
                <HeaderArea>
                    {
                        boxBusca === true ? (
                            <InputBusca
                                onChangeText={(text) => setTxtBusca(text)}
                                value={txtBusca}
                                placeholder='Qual Pokemon deseja encontrar?'
                            />
                        ):(
                            <Titulo>
                                Pokédex
                            </Titulo>
                        )
                    }
                    
                    <BotaoBusca onPress={() => setBoxbusca(!boxBusca)}>
                        <Feather name='search' size={30} color='#000'/>
                    </BotaoBusca>
                </HeaderArea>
                {
                    txtBusca === '' ? (
                        <FlatList
                            data={dataPoke}
                            numColumns={2}
                            renderItem={({item}) => <Lista nome={item.name} types={item.type} contador={item.contador} statusName={item.statusName} status={item.status} evolucoes={dataEvolution} bgColor={item.bgColor}/>}
                        /> 
                    ) : (
                        <FlatList
                            data={listaBusca}
                            numColumns={2}
                            renderItem={({item}) => <Lista nome={item.name} types={item.type} contador={item.contador} statusName={item.statusName} status={item.status} evolucoes={dataEvolution} bgColor={item.bgColor}/>}
                        /> 
                        )
                }
                      
            </Container>
        )
    } 
}
