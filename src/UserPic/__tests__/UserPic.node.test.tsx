/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { UserPic, withCamera } from '../desktop';

const UserPicCamera = withCamera(UserPic);

describe('UserPic (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<UserPicCamera className="mix" hasCamera />);
        }).not.toThrowError();
    });
});
