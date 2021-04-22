import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

import { StarIcon } from './StarIcon';

type RatingProps = {
    value: number;
    onChange: (value: number) => void;
};

export const Rating: FC<RatingProps> = (props) => {
    const { value, onChange } = props;
    const [hoveredIndex, setHoveredIndex] = useState<number | void>();

    const isSelected = (rating: number) => {
        if (hoveredIndex !== undefined) {
            return hoveredIndex >= rating;
        }
        return value >= rating;
    };

    return (
        <Container onMouseLeave={() => setHoveredIndex()}>
            {Array.from({ length: 5 }, (_, index) => index + 1).map((rating) => (
                <StarIcon
                    selected={isSelected(rating)}
                    onMouseEnter={() => setHoveredIndex(rating)}
                    onClick={() => onChange(rating)}
                    key={rating}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;

    .SvgIcon {
        cursor: pointer;
    }

    .SvgIcon + .SvgIcon {
        margin-left: 8px;
    }
`;
