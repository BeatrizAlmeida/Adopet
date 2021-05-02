import React, {Component} from 'react';
import {ImageBackground, View, Image, StyleSheet, Text, TouchableOpacity,} from 'react-native';
import { BackgroundContainer, FotoDePerfil } from './styles';

export default function PostCard() {

    return(
            
        <View>
            <FotoDePerfil source={require('../../../assets/default-user.png')}></FotoDePerfil>
            <Text>Bernardo</Text>
        
            <BackgroundContainer>
                

                <View>
                    <Image source={require('../../../assets/golden_retriever-p.jpg')}></Image>
                    
                    <Text>Thor</Text>
                    <Text>3 anos</Text>
                    <Text>Copacabana</Text>

                    <View>
                        <TouchableOpacity>
                            <Text>Ver mais</Text>
                        </TouchableOpacity>

                        <Image source={require('../../../assets/patinha 1.png')}></Image>
                    </View>
                    

                </View>

            </BackgroundContainer   >
        </View>
    )
}