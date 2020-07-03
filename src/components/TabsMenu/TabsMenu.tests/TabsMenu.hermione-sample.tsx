import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { TabsMenu as TabsMenuBase } from '../TabsMenu';
import { withLayoutHoriz } from '../_layout/TabsMenu_layout_horiz';
import { withThemeNormal } from '../_theme/TabsMenu_theme_normal@desktop';
import { withViewDefault } from '../_view/TabsMenu_view_default@desktop';
import { withSizeS } from '../_size/TabsMenu_size_s';
import { withSizeM } from '../_size/TabsMenu_size_m';

configureRootTheme({ theme: themeDefault });

const TabsMenu = compose(
    withLayoutHoriz,
    withThemeNormal,
    withViewDefault,
    composeU(withSizeS, withSizeM),
)(TabsMenuBase);

const themes = [themeDefault, themeInverse, themeBrand];

const TabsExample = class TabsBase extends PureComponent {
    state = {
        activeTab: 'tab1',
    };

    render() {
        const tabs = [
            { id: 'tab1', onClick: this.onTabClick('tab1'), content: 'Поиск' },
            { id: 'tab2', onClick: this.onTabClick('tab2'), content: 'Картинки' },
            { id: 'tab3', onClick: this.onTabClick('tab3'), disabled: true, content: 'Видео' },
            { id: 'tab4', onClick: this.onTabClick('tab4'), content: 'Карты' },
            { id: 'tab5', onClick: this.onTabClick('tab5'), content: 'Музыка' },
        ];

        return (
            <BPage>
                <Hermione className="Classic">
                    {['s', 'm'].map((size: any) => (
                        <Hermione key={size} element="Item" modifiers={{ size }}>
                            <TabsMenu
                                theme="normal"
                                layout="horiz"
                                size={size}
                                activeTab={this.state.activeTab}
                                tabs={tabs}
                            />
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione className="New">
                    {themes.map((theme, index) => (
                        <div key={index} className={cnTheme(theme)}>
                            {['m', 's'].map((size: any) => (
                                <Hermione key={size} element="Item" modifiers={{ size, color: theme.color }}>
                                    <TabsMenu
                                        view="default"
                                        layout="horiz"
                                        size={size}
                                        activeTab={this.state.activeTab}
                                        tabs={tabs}
                                    />
                                </Hermione>
                            ))}
                        </div>
                    ))}
                </Hermione>
            </BPage>
        );
    }

    onTabClick = (tabId: string) => () => {
        this.setState({ activeTab: tabId });
    };
};

render(<TabsExample />, document.getElementById('root'));
