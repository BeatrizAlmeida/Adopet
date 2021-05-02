import React, {Component} from 'react';

import { useForm,Controller } from 'react-hook-form';


import {ImageBackground, View, Image, StyleSheet, Text, TouchableOpacity,TextInput} from 'react-native';
import {Logo,LogIn, EsquecerSenha,EntrarBotao, EntrarTexto, PerguntaCadastro,IrParaCadastroTexto,Label} from './styles';

interface FormData {
    email: string;
    senha: string;
}


export default function Login() {

        const { control, register, handleSubmit, watch } = useForm<FormData>();
        const onSubmit = (data: FormData) => {
            console.log(data)
            alert(JSON.stringify(data));
        };
    
        return(
                <ImageBackground style={{flex: 1}} source={require('../../../assets/Login.png')}>
                   
                    <View>
                        <Logo  source={require('../../../assets/adopetLogo.png')}></Logo>
                    </View>
                    
                    <LogIn>Login</LogIn>

                    <Label>Email</Label>
                    <Label>Senha</Label>

                    <EsquecerSenha>Esqueceu a senha?</EsquecerSenha>

                    <EntrarBotao>
                        <EntrarTexto>Entrar</EntrarTexto>
                    </EntrarBotao>

                    <PerguntaCadastro>Ainda não possui uma conta?</PerguntaCadastro>
                    
                    <TouchableOpacity>
                        <IrParaCadastroTexto>Cadastre-se aqui</IrParaCadastroTexto>
                    </TouchableOpacity>

                </ImageBackground>
        
        )
    
}
