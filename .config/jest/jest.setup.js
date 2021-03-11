require('@testing-library/jest-dom/extend-expect');

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};
