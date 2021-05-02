import styles from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Logo = styles.Image `    
    display: flex;
    width: 300px;
    height: 105px;
    align-self: center;
    margin-top: 10px;
    `

export const LogIn = styles.Text `
    font-size: 37px;
    color: #FCECDD;
    margin-left: 7%;
    margin-top: 7%;
`

export const Label = styles.Text `
    font-size: 22px;
    background-color: rgba(252, 236, 221, 0.6);
    color: #646464;
    width: ${wp('80%')};
    height: ${hp('8.5%')};
    border-radius: 30px;
    margin-left: 9%;
    padding-left:8%;
    padding-top:12px;
    margin-top: 4%;

    `

export const EsquecerSenha = styles.Text `
    color: #FCECDD;
    font-size: 16px;
    margin-top:2%;
    margin-left:60%;    
    `
export const EntrarBotao = styles.TouchableOpacity `
    background-color: #FEA82F;
    border-radius: 30px;
    width: 113px;
    height: 53px;
    display: flex;
    align-self: center;
    margin-top: 3%;
    `

export const EntrarTexto = styles.Text`
    color: #FCECDD;
    font-size:24px;
    display: flex;
    align-self: center;
    margin-top: 6%;
    `
export const PerguntaCadastro = styles.Text`
    color: #FCECDD;
    font-size: 22px;
    margin-top:10%;
    margin-left:7%;
    `
export const IrParaCadastroTexto = styles.Text`
    color:#FCECDD;
    font-size: 20px;
    font-weight: bold;
    margin-left:7%;
    `
