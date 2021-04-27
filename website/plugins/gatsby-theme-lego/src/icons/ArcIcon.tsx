import React, { FC } from 'react';

import { Icon } from './Icon';

export const ArcIcon: FC<{ className?: string }> = ({ className }) => {
    return (
        <Icon className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                <mask id="a" width="16" height="10" x="8" y="14" maskUnits="userSpaceOnUse">
                    <path
                        fill="#fff"
                        d="M17.184 14.995l3.507.76 1.733 1.639.577 1.36c.689 2.96-.315 4.452-3.012 4.479-2.227 0-3.424-2.08-3.961-2.92-.743-1.2-4.54-4.398-7.73-.48.174-.932.715-1.932 1.623-2.998l7.263-1.84z"
                    />
                </mask>
                <g mask="url(#a)">
                    <path
                        fill="url(#paint0_radial)"
                        d="M17.184 14.995l3.507.76 1.733 1.639.577 1.36c.689 2.96-.315 4.452-3.012 4.479-2.227 0-3.424-2.08-3.961-2.92-.743-1.2-4.54-4.398-7.73-.48.174-.932.715-1.932 1.623-2.998l7.263-1.84z"
                    />
                    <path
                        fill="#3A3897"
                        fillRule="evenodd"
                        d="M17.184 14.995l3.508.76 1.732 1.639.578 1.36c-.99-.853-2.53-1.28-4.622-1.28-3.135 0-5.475 3.12-11.43 3.12-.88.4.11-.854 2.972-3.76l7.262-1.84z"
                        clipRule="evenodd"
                        opacity=".1"
                    />
                </g>
                <mask id="b" width="11" height="8" x="9" y="3" maskUnits="userSpaceOnUse">
                    <path
                        fill="#fff"
                        d="M9.703 6.478c.533-.942.936-1.501 1.21-1.68.271-.177 1.261-.59 2.97-1.24 1.393.146 2.341.307 2.847.48.505.175.987.508 1.444 1 1.32 2.08 1.403 3.705.248 4.88-2.022 1.358-3.714-.36-4.168-1.24-1.32-2.906-2.837-3.64-4.55-2.2z"
                    />
                </mask>
                <g mask="url(#b)">
                    <path
                        fill="url(#paint1_radial)"
                        d="M9.703 6.478c.533-.942.936-1.501 1.21-1.68.271-.177 1.261-.59 2.97-1.24 1.393.146 2.341.307 2.847.48.505.175.987.508 1.444 1 1.32 2.08 1.403 3.705.248 4.88-2.022 1.358-3.714-.36-4.168-1.24-1.32-2.906-2.837-3.64-4.55-2.2z"
                    />
                    <path
                        fill="#3A3897"
                        fillRule="evenodd"
                        d="M9.426 6.598c.717-1.022 1.213-1.621 1.486-1.8.272-.177 1.262-.59 2.97-1.24 1.394.146 2.342.307 2.848.48.505.175.987.508 1.444 1-2.641-.88-4.471-.453-5.49 1.28-.786.097-1.872.19-3.26.28h.002z"
                        clipRule="evenodd"
                        opacity=".1"
                    />
                </g>
                <path
                    fill="url(#paint2_radial)"
                    fillRule="evenodd"
                    d="M11.283 0c2.503 0 4.8 1.68 6.89 5.038-2.282-1.626-4.676-1.572-7.18.16-1.526 1.2-2.021 2.36-2.434 3.52-.412 1.159-1.65 5.158 1.857 5.518 2.393.12 3.631-1.88 6.272-2.28 1.975-.229 3.095.76 3.384 1.16 1.43 1.732 2.407 3.612 2.93 5.639-.496-.907-1.211-1.64-2.146-2.2-1.403-.84-2.518-.92-3.879-.92-1.692 0-4.044.52-5.983 1.72-1.94 1.2-2.105 1.599-3.095 3.079-.447.667-1.155 1.52-2.022 2.12-.867.519-1.155.519-2.559.519-1.773 0-3.795-1.72-3.217-4.039C5.422.44 8.847 0 11.28 0h.002z"
                    clipRule="evenodd"
                />
                <defs>
                    <radialGradient
                        id="paint0_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(37.502 -22.37 21.1) scale(28.8258 21.4033)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#3A3897" />
                        <stop offset="1" stopColor="#A3A1FF" />
                    </radialGradient>
                    <radialGradient
                        id="paint1_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(7.78185 10.10873 -7.0555 5.43142 10.699 5.563)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#3A3897" />
                        <stop offset="1" stopColor="#A3A1FF" />
                    </radialGradient>
                    <radialGradient
                        id="paint2_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(23.00118 -27.54856 27.64973 23.08565 17.148 14.969)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#3A3897" />
                        <stop offset="1" stopColor="#A3A1FF" />
                    </radialGradient>
                </defs>
            </svg>
        </Icon>
    );
};
