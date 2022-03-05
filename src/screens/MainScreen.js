import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, StatusRound } from '@component';
import CalendarSchedule from '@component/CalendarSchedule';
import { Radius, Spacing } from '@assets/styles';
import { STATUS_CARD } from '@assets/constants';
import colors from '@assets/colors';

const data = require('@assets/data/calendar.json');

const MainScreen = () => {
    const [dataCalendar, setDataCalendar] = useState({});
    const [title, setTitle] = useState('Lịch khám hôm nay');

    useEffect(() => {
        setDataCalendar(data);
    }, []);

    const renderMapStatus = (status, index) => {
        return (
            <StatusRound
                key={`status_${index}`}
                style={styles.marginHorizontal}
                status={status}
                desc={status}
            />
        );
    };

    return (
        <View style={styles.flex1}>
            <Header title={title} />
            <CalendarSchedule style={styles.listSchedule} data={dataCalendar} />
            <View style={styles.bottomContainer}>
                <View style={styles.viewStatus}>
                    {Object.keys(STATUS_CARD).map(renderMapStatus)}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flex1: { flex: 1 },
    listSchedule: { margin: Spacing.M, paddingBottom: 100 },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderColor: colors.line,
        shadowColor: colors.line,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    viewStatus: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: Spacing.L,
        borderWidth: 1,
        borderColor: colors.green,
        padding: Spacing.M,
        borderRadius: Radius.XL,
    },
    marginHorizontal: { marginHorizontal: Spacing.XS },
});

export default MainScreen;
