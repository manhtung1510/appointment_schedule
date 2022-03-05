import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@assets/colors';
import { FontSize } from '@assets/styles';
import { DEFAULT_HEIGHT_HEADER } from '@assets/constants';

const Header = ({ title, style, styleTitle }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[Colors.green, Colors.blue]}
            style={[styles.container, style]}
        >
            <Text style={[styles.header, styleTitle]}>{title}</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: { top: 0, height: DEFAULT_HEIGHT_HEADER, justifyContent: 'center', alignItems: 'center' },
    header: {
        fontWeight: 'bold',
        fontSize: FontSize.XL,
        position: 'absolute',
        bottom: 15,
        color: '#ffffff',
    },
});

export default memo(Header);
