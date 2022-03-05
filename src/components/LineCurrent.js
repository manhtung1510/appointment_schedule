import React, { useState, useMemo } from 'react';
import colors from '@assets/colors';
import { View, Dimensions } from 'react-native';
import { ImageSize } from '@assets/styles';
import moment from 'moment';

const { width } = Dimensions.get('window');

const LineCurrent = ({ startTime, endTime }) => {
    const current = moment().unix();
    const [height, setHeight] = useState(0);

    const isShowLineHorizontal = current >= startTime && current <= endTime;

    const top = useMemo(() => {
        if (!isShowLineHorizontal) return 0;
        const time100Percent = endTime - startTime;
        const timeCurrent = current - startTime;
        const percent = (timeCurrent / time100Percent) * 100;
        return (height * Math.ceil(percent)) / 100;
    }, [height]);

    const onLayout = ({ nativeEvent }) => {
        setHeight(nativeEvent?.layout?.height);
    };

    return (
        <>
            <View style={styles.lineVertical} onLayout={onLayout} />
            {isShowLineHorizontal && (
                <View style={[styles.lineHorizontal, { top }]}>
                    <View style={[ImageSize.imageRoundSmall, styles.roundCurrent]} />
                    <View style={styles.lineCurrent} />
                </View>
            )}
        </>
    );
};

const styles = {
    lineVertical: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 55,
        width: 1,
        backgroundColor: colors.line,
        zIndex: 1,
    },
    lineHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 50,
        right: 0,
        zIndex: 2
    },
    lineCurrent: { height: 4, width, backgroundColor: colors.pink },
    roundCurrent: { backgroundColor: colors.pink },
};

export default LineCurrent;
