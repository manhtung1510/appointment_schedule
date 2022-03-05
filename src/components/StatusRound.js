import React from 'react';
import { View, Text } from 'react-native';
import colors from '@assets/colors';
import { ImageSize, Spacing } from '@assets/styles';
import { STATUS_CARD } from '@assets/constants';

const STATUS_COLOR = {
    [STATUS_CARD.approved]: colors.green,
    [STATUS_CARD.pending]: colors.pink,
    [STATUS_CARD.passed]: colors.grey,
};

const StatusRound = ({ status, style, styleRoundInside, desc }) => {
    const statusColor = STATUS_COLOR[status] || STATUS_COLOR[STATUS_CARD.pending];

    return (
        <View style={[styles.container, style]}>
            <View
                style={[
                    ImageSize.imageRoundSmall,
                    styles.roundOutSide,
                    { backgroundColor: statusColor },
                ]}
            >
                <View style={[ImageSize.imageRoundTiny, styles.roundInside, styleRoundInside]} />
            </View>
            {!!desc && (
                <Text numberOfLines={1} style={{ color: colors.grey }}>
                    {desc}
                </Text>
            )}
        </View>
    );
};

const styles = {
    container: { flexDirection: 'row', alignItems: 'center' },
    roundOutSide: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.XS,
    },
    roundInside: { backgroundColor: 'white' },
};

export default StatusRound;
