import moment from 'moment';
import { DEFAULT_AVATAR, FORMAT_DATE } from '@assets/constants';

export const convertDate = date => {
    return typeof date === 'number' ? moment.unix(date) : moment(date, FORMAT_DATE) || 0;
};

export const getImageSource = source => {
    if (source && typeof source === 'string' && source.startsWith('http')) return { uri: source };
    if (
        source &&
        (typeof source === 'number' ||
            (typeof source === 'object' &&
                typeof source?.uri === 'string' &&
                source?.uri?.startsWith('http')))
    ) {
        return source;
    }
    return { uri: DEFAULT_AVATAR };
};
