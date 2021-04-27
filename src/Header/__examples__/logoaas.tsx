import React from 'react';

import { Text } from '@yandex-lego/components/Text/desktop/bundle';
import { Logoaas } from '@yandex-lego/components/Header/desktop';

export const logoaas = () => (
    <Text typography="body-short-m">
        <style>{`
            .YandexHeader-Logoaas {--header-logo-height: auto}
            .YandexHeader-Logoaas .YandexHeader-Image { margin: 0 }
        `}
        </style>
        <table>
            <thead>
                <td>1. Отображение по умолчанию</td>
                <td>2. Передано rebranding=true</td>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Logoaas />
                        <br />
                        <Logoaas circle size={32} />
                        <br />
                        <Logoaas size={35} color="000000" />
                        <br />
                        <Logoaas first="fff" circle />
                        <br />
                        <Logoaas first="000" circle name="YandexDoc" />
                    </td>
                    <td>
                        <Logoaas rebranding single />
                        <br />
                        <Logoaas rebranding first="white" circle="red" size={32} />
                        <br />
                        <Logoaas rebranding size={35} color="000000" />
                        <br />
                        <Logoaas rebranding first="red" circle="white" size={25} />
                        <br />
                        <Logoaas rebranding first="white" circle="black" name="Yandex Doc" />
                    </td>
                </tr>
            </tbody>
        </table>
    </Text>
);
