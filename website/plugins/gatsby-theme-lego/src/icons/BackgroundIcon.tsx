import React, { FC } from 'react';

export const BackgroundIcon: FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18">
        <circle cx="9" cy="9" r="8.5" stroke="#111" />
        <circle cx="9" cy="9" r="8" fill="url(#pattern0)" />
        <circle cx="9" cy="9" r="8" fill="white" fillOpacity="0.86" />
        <path
            d="M14.6569 14.6569C13.1566 16.1571 11.1217 17 9 17C6.87827 17 4.84344 16.1571 3.34315 14.6569C1.84286 13.1566 1 11.1217 1 9C0.999999 6.87827 1.84285 4.84344 3.34314 3.34315L9 9L14.6569 14.6569Z"
            fill="#F7F8FA"
        />
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0" transform="scale(0.015625)" />
            </pattern>
            <image
                id="image0"
                width="64"
                height="64"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA40lEQVR4Xu3bQQ6EQAhEUbj/oXsO8Sdh4XOvJAi/qkF3Zt6E6710++xuiD6T40uACtACqYlzD2IACFKBkoHcgmSQDJJBMngKIT6ADygF6DSYfcCLTzg/z0eGrASogDbT0gKxB2MB5pkiBoBgrEEMwIBjLx9fAAiCIAhygmkkRgYjhWMHditsL2AvYC+QIHjdwzk+BmAABmBAWc1kCF0bKRAEQRAEQRAMGaACbaCUz/P5BRiKxhQaiV07uRjfYgQDMKDpGAhGCMUCzD4CBEEw1iAGYIBPZMJh+g8/P8cKpAJfV4EfMee/sLtaEFIAAAAASUVORK5CYII="
            />
        </defs>
    </svg>
);
