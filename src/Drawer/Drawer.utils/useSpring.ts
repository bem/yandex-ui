import { useCallback, useEffect, useMemo, useState } from 'react';
import { Spring, SpringSystem, Listener } from 'rebound';

export const useSpring = (targetValue: number, tension: number, friction: number, immediate?: boolean) => {
    const [spring, setSpring] = useState<Spring | null>(null);
    const [value, setValue] = useState<number>(targetValue);

    const listener = useMemo<Listener>(
        () => ({
            onSpringUpdate: (currentSpring) => {
                const newValue = currentSpring.getCurrentValue();
                setValue(newValue);
            },
        }),
        [],
    );

    const destroySpring = useCallback(() => {
        if (spring) {
            spring.removeListener(listener);
            setSpring(null);
        }
    }, [spring, listener]);

    useEffect(() => {
        if (immediate) {
            destroySpring();
        } else if (!spring) {
            const newSpring = new SpringSystem().createSpring(tension, friction);
            newSpring.setCurrentValue(targetValue);
            setSpring(newSpring);
            setValue(targetValue);
            newSpring.addListener(listener);
        }

        return destroySpring;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tension, friction, immediate, spring, listener, destroySpring]);

    useEffect(() => {
        if (spring) {
            spring.setEndValue(targetValue);
        }
    }, [spring, targetValue]);

    return immediate ? targetValue : value;
};
