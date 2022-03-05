import React, { useCallback } from 'react';
import colors from '@assets/colors';
import { FlatList, View, Text } from 'react-native';
import { useCalendar } from '@hook';
import CardView from './CardView';
import LineCurrent from './LineCurrent';

const CalendarSchedule = ({ style, data }) => {
    const { listSchedule } = useCalendar(data);

    const getStyle = useCallback(index => {
        if (index === 0) return {};
        return { position: 'absolute', top: 0, left: index * 50, right: 0, bottom: 0 };
    }, []);

    const renderSchedule = (item, index) => {
        const { appointment_id, avatar, color_code, requester, status, symptom } = item;

        return (
            <CardView
                key={`schedule_${appointment_id}`}
                style={getStyle(index)}
                avatar={avatar}
                desc={symptom}
                name={requester}
                statusCard={status}
                colorCode={color_code}
            />
        );
    };

    const renderItem = ({ item }) => {
        const { name: nameOfHour, startTime, endTime } = item;
        return (
            <>
                <View style={styles.separator}>
                    <Text style={styles.textHour}>{nameOfHour}</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.viewSchedule}>{item.listSchedules?.map?.(renderSchedule)}</View>
                <LineCurrent startTime={startTime} endTime={endTime} />
            </>
        );
    };

    return (
        <FlatList
            contentContainerStyle={[style]}
            data={listSchedule}
            renderItem={renderItem}
            bounces={false}
        />
    );
};

const styles = {
    textHour: { color: colors.light_grey, fontWeight: 'bold', width: 45 },
    line: {
        backgroundColor: colors.line,
        height: 1,
        flex: 1,
    },
    viewSchedule: {
        flexDirection: 'row',
        width: '100%',
        minHeight: 80,
        marginLeft: 60,
    },
    separator: { flexDirection: 'row', alignItems: 'center' },
};

export default CalendarSchedule;
