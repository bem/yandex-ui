import { PrismTheme } from 'prism-react-renderer';

export const theme: PrismTheme = {
    plain: {
        backgroundColor: '#161616',
        color: 'rgb(255, 255, 255, 0.9)',
    },
    styles: [
        {
            style: { color: 'rgba(255, 255, 255, 0.75)' },
            types: ['comment'],
        },
        {
            style: { color: '#9df0f0' },
            types: ['string', 'url'],
        },
        {
            types: ['punctuation'],
            style: { color: '#2bbac5' },
        },
        {
            types: ['class-name', 'function'],
            style: { color: '#e5c07b' },
        },
        {
            types: ['attr-name'],
            style: { color: '#d19a66' },
        },
        {
            types: ['attr-value'],
            style: { color: '#89ca78' },
        },
        {
            style: { color: '#77a9fe' },
            types: ['keyword', 'atrule'],
        },
        {
            style: { color: 'rgb(255, 255, 255, 0.9)' },
            types: ['constant'],
        },
    ],
};
