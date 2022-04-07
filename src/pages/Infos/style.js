import styled from 'styled-components';

export const Container = styled.View`

    flex: 1;
    padding-top: 10px;

`;

export const Titulo = styled.Text`

    color: #FFF;
    font-weight: bold;
    font-size: 36px;
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 5px;

`;

export const InfosContainer = styled.View`

    background-color: #FFF;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 55%;
    position: relative;
    bottom: -32%;

`;

export const Imagem = styled.Image`

    width: 250px;
    height: 250px;
    margin-top: -210px;

`;

export const ContainerTipos = styled.View`

    flex-direction: row;
    padding-left: 20px;
    
`;

export const Tipos = styled.View`

    height: 25px;
    margin-right: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgba(255, 250, 250, 0.4);
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;

export const TextoTipos = styled.Text`

    color: #FFF;
    font-size: 18px;
    font-weight: bold;

`;

export const StatsPokemon = styled.Text`

    font-size: 20px;
    font-weight: bold;
    width: 70%;

`;

export const ViewStats = styled.View`

    padding: 10px;
    width: 100%;

`;

export const LineStats = styled.View`

    flex-direction: row;
    margin-left: 60px;

`;

export const EvolucoesContainer = styled.View`

    flex-direction: row;
    height: 120px;
    margin-top: 45px;
    margin-left: 2.5%;
    width: 95%;  
    align-items: center;
    justify-content: center;
    
`;

export const ImageView = styled.View`

    width: 29%;
    align-items: center;
    justify-content: center;

`;


export const ImageEvolucao = styled.Image`

    width: 100px;
    height: 110px;

`;

export const Vazio = styled.View`

    height: 1px;

`;