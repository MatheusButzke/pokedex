import styled from 'styled-components';

export const Container = styled.SafeAreaView`

    flex: 1;

`;

export const Titulo = styled.Text`

    font-size: 36px;
    color: #000;
    font-weight: bold;
    font-family: 'Cooperplate';
    
`;

export const BotaoBusca = styled.TouchableOpacity`

    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;

`;

export const HeaderArea = styled.View`

    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin-bottom: 15px;
    justify-content: space-between;
`;

export const InputBusca = styled.TextInput`

    border: 2px solid #000;
    border-radius: 4px;
    height: 40px;
    width: 85% ;
    padding-left: 10px;
    font-size: 18px;
    color: #000;
    padding-top: 10px;

`;