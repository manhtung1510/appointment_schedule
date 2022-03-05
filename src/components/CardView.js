import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';
import { Radius, Spacing, ImageSize, FontSize } from '@assets/styles';
import colors from '@assets/colors';
import { getImageSource } from '@util';
import StatusRound from './StatusRound';

const CardView = ({ style, avatar, colorCode = colors.yellow, name, statusCard, desc }) => {
    const AvatarComp = useMemo(
        () => (
            <Image
                style={ImageSize.imageRound40}
                resizeMode={Image.resizeMode.contain}
                source={getImageSource(avatar)}
            />
        ),
        [avatar]
    );

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: colorCode }, style]}>
            <View style={styles.body}>
                {AvatarComp}
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>
                <StatusRound status={statusCard} desc={desc} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: Radius.M,
        overflow: 'hidden',
    },
    body: {
        backgroundColor: 'white',
        marginVertical: 1,
        padding: Spacing.XS,
        marginLeft: Spacing.L,
        marginRight: 1,
        borderBottomRightRadius: Radius.M,
        borderTopRightRadius: Radius.M,
    },
    name: {
        marginVertical: Spacing.XS,
        color: colors.grey,
        fontWeight: 'bold',
        fontSize: FontSize.XL,
    },
});

export default CardView;
