import React,  { useEffect, useState, useRef } from 'react';

import {FlatList, TextInput, Text} from 'react-native';

import {Container, Titulo, BotaoBusca, HeaderArea, InputBusca } from './style.js';

import api from '../../services/api';
import apiEvolution from '../../services/apiEvolution';

import Lista from '../../components/Lista/index';

import Feather from 'react-native-vector-icons/Feather';

export default function Home(){

    const [dataPoke, setDataPoke] = useState([]);
    const [dataEvolution, setDataEvolution] = useState([]);
    const [boxBusca, setBoxbusca] = useState(false); 
    const [txtBusca, setTxtBusca] = useState('');
    const [listaFiltrada, setListaFiltrada] = useState([]);
    const [listaBusca, setListaBusca] = useState([]);

    const listaDataPoke = [];
    const listaEvolution = [];
    var listaNova = [];

    useEffect(()=>{
        async function getApiNome(){
            try{
                let count = 1;
                for(count = 1; count <= 151; count++){
                    const response = await api.get('pokemon/'+count.toString());
                    const dados = response.data;  
                    const nome = dados.name; 
                    const tipo = dados.types.map(typeInfo => typeInfo.type.name);
                    const statusNome = dados.stats.map(statsName => statsName.stat.name);  
                    const status = dados.stats.map(statsInfo => statsInfo.base_stat);
                    listaDataPoke.push(({
                        name: nome,
                        type: tipo,
                        contador: count,
                        statusName: statusNome,
                        status: status
                    }))
                }
            }catch(err){
                console.log('error: ', err);
            }
            
            setDataPoke(listaDataPoke);           
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

    return(
        <Container>
            <HeaderArea>
                {
                    boxBusca === true ? (
                        <InputBusca
                            animation = "bounceInRight"
                            onChangeText={(text) => setTxtBusca(text)}
                            value={txtBusca}
                            placeholder='Qual Pokemon deseja encontrar?'
                        />
                    ):(
                        <Titulo>
                            Pokedex
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
                        renderItem={({item}) => <Lista nome={item.name} types={item.type} contador={item.contador} statusName={item.statusName} status={item.status} evolucoes={dataEvolution}/>}
                    /> 
                ) : (
                    <FlatList
                        data={listaBusca}
                        numColumns={2}
                        renderItem={({item}) => <Lista nome={item.name} types={item.type} contador={item.contador} statusName={item.statusName} status={item.status} evolucoes={dataEvolution}/>}
                    /> 
                    )
            }
               
                  
        </Container>
    )
}