import React from 'react';

import { YandexLogo as Logo } from '@yandex-lego/components/Header/desktop';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';

export const YandexLogo = () => (
    <Text typography="body-short-m">
        <table>
            <thead>
                <tr>
                    <td>1. Отображение по умолчанию</td>
                    <td>2. Передано rebranding=true</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Logo /> <Logo circle />
                    </td>
                    <td>
                        <Logo rebranding /> <Logo circle rebranding />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Logo lang="en" /> <Logo circle lang="en" />
                    </td>
                    <td>
                        <Logo lang="en" rebranding /> <Logo circle lang="en" rebranding />
                    </td>
                </tr>
            </tbody>
        </table>
    </Text>
);
