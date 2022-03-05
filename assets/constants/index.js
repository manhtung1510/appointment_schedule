import { Platform } from 'react-native';

export const STATUS_CARD = {
    passed: 'passed',
    pending: 'pending',
    approved: 'approved',
};

// eslint-disable-next-line global-require
export const DEFAULT_AVATAR = require('../images/avatarAnynomousMale.jpg');

export const FORMAT_DATE = 'YYYY-MM-DD hh:mm:ss';

export const START_WORK = '8:00';

export const END_WORK = '17:00';

export const DEFAULT_HEIGHT_HEADER = Platform.select({ ios: 90, android: 56 });

export const TIME_JUMP = {
    value: 1,
    unit: 'h',
};
