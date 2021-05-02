import styles from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const BackgroundContainer = styles.View`
    display: flex;
    background-color: #FCECDD;
    width: ${wp('80%')};
    height: ${hp('50%%')};
    align-self: center;
    margin-top: 10%;
    border-radius: 40px;
    `
export const FotoDePerfil = styles.Image`
    width: 10%;
    height: 10%;
    `
