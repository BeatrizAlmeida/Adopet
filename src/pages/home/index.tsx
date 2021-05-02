import React, {Component} from 'react';
import {ImageBackground, View, Image, StyleSheet, Text, TouchableOpacity,} from 'react-native';
import PostCard from '../../components/Post-card'
import { BackgroundColorView } from './styles';

export default function Home() {

    return(
            <BackgroundColorView>
                <PostCard></PostCard>
            </BackgroundColorView>
    
    )
}