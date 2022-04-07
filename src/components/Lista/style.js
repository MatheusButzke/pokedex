import styled from 'styled-components';

export const Container = styled.TouchableOpacity`

    background-color: #FFE4C4;
    width: 47%;
    height: 140px;
    padding: 20px 10px 10px 20px;
    margin-bottom: 10px;
    margin-left: 2%;
    border-radius: 25px;

`;

export const Texto = styled.Text`

    font-size: 19px;
    color: #000;
    font-weight: bold;
    margin-bottom: 5px;

`;

export const TextoTipo = styled.Text`

    font-size: 16px;
    color: #000;
    font-weight: bold;

`;
export const TipoView = styled.View`

    background-color: rgba(255, 250, 250, 0.4);
    padding: 5px;
    padding-horizontal: 10px;
    min-width: 60px;
    max-width: 80px;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    border-radius: 50px;

`;

export const RowItems = styled.View`

    flex-direction: row;

`;

export const ImagemPoke = styled.Image`

    width: 80px;
    height: 90px;
    bottom: 20px;
    left: 8px;

`;