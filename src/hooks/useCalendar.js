import { useEffect, useState } from 'react';
import { get, set } from 'lodash';
import moment from 'moment';
import { END_WORK, START_WORK, TIME_JUMP } from '@assets/constants';
import { convertDate } from '@util';

export const formatCalendar = dataCalendar => {
    let listSchedule = [];
    const { data = [] } = dataCalendar || {};
    data?.forEach?.(item => {
        const listItem = get(item, 'appoitment_calendar', []);
        if (listItem?.length > 0) listSchedule = [...listSchedule, ...listItem];
    });
    const listTimeWorkInDate = getTimeWork(listSchedule[0]?.start_time);

    listTimeWorkInDate?.map?.(item => {
        const schedules = listSchedule?.filter?.(schedule => {
            const scheduleStart = convertDate(schedule.start_time).unix();
            return scheduleStart >= item.startTime && scheduleStart <= item.endTime;
        });
        set(item, 'listSchedules', schedules);
        return item;
    });
    return listTimeWorkInDate;
};

export const getTimeWork = data => {
    const listResult = [];
    const timeStartWork = moment(START_WORK, 'HH:mm');
    const timeEndWork = moment(END_WORK, 'HH:mm');
    const timeToStartWorking = convertDate(data);
    timeToStartWorking.set({
        hour: timeStartWork.get('hour'),
        minute: timeStartWork.get('minute'),
        second: timeStartWork.get('second'),
    });
    const timeToEndWorking = convertDate(data);
    timeToEndWorking.set({
        hour: timeEndWork.get('hour'),
        minute: timeEndWork.get('minute'),
        second: timeEndWork.get('second'),
    });

    do {
        const timeTemp = timeToStartWorking.clone();
        const nameOfHour = `${timeTemp.format('HH')}:${timeTemp.format('mm')}`;
        listResult.push({
            name: nameOfHour,
            startTime: timeTemp.startOf('h').unix(),
            endTime: timeTemp.endOf('h').unix(),
        });
        timeToStartWorking.add(TIME_JUMP.value, TIME_JUMP.unit);
    } while (timeToStartWorking <= timeToEndWorking);
    return listResult;
};

const useCalendar = data => {
    const [listSchedule, setListSchedule] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    useEffect(() => {
        setListSchedule(formatCalendar(data));
    }, [data]);

    return {
        listSchedule,
    };
};

export default useCalendar;
