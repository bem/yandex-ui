import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Icon } from '@yandex-lego/components/Icon/Icon.bundle/desktop';

import './example.css';
const view = ['default', 'action', 'pseudo', 'link', 'clear', 'raised'];
const rPins = ['round-round', 'round-clear', 'clear-round', 'round-brick', 'brick-round'];
const cPins = ['circle-circle', 'circle-clear', 'clear-circle', 'circle-brick', 'brick-circle'];
const qPins = ['brick-brick', 'brick-clear', 'clear-brick'];

export const All = () => (
    <>
        {view.map((view: any) => {
            return (
                <>
                    <div className="Showcase-Item">
                        <Button view={view} size="l" title={`Button view ${view} size l`}>
                            Button
                        </Button>
                        <Button view={view} size="m" title={`Button view ${view} size m`}>
                            Button
                        </Button>
                        <Button view={view} size="s" title={`Button view ${view} size s`}>
                            Button
                        </Button>
                        <Button view={view} size="s" disabled title={`Button view ${view} disabled`}>
                            Button
                        </Button>
                        <Button view={view} size="s" checked title={`Button view ${view} checked`}>
                            Button
                        </Button>
                        <Button view={view} size="s" progress title={`Button view ${view} progress`}>
                            Button
                        </Button>
                        <Button
                            view={view}
                            size="s"
                            iconLeft={(className: string) => (
                                <Icon size="s" type="arrow" direction="left" className={className} />
                            )}
                            iconRight={(className: string) => (
                                <Icon size="s" type="arrow" direction="left" className={className} />
                            )}
                            title={`Button with icon view ${view} size s`}
                        >
                            Button
                        </Button>
                        <Button
                            view={view}
                            size="s"
                            icon={(className: string) => (
                                <Icon size="s" type="arrow" direction="left" className={className} />
                            )}
                            title={`Button with icon view ${view} size s`}
                        />
                    </div>
                </>
            );
        })}

        {view.map((view: any) => {
            return (
                <>
                    <div className="Showcase-Item">
                        {rPins.map((pin: any) => (
                            <>
                                <Button title={`Button view ${view} pin ${pin}`} key={pin} pin={pin} view={view} size="m">
                                    Button
                                </Button>
                                <Button
                                    title={`Button view ${view} pin ${pin}`}
                                    icon={(className: string) => (
                                        <Icon size="s" type="arrow" direction="left" className={className} />
                                    )} key={pin} pin={pin} view={view} size="m" />
                            </>
                        ))}
                        <br />
                        {cPins.map((pin: any) => (
                            <>
                                <Button title={`Button view ${view} pin ${pin}`} key={pin} pin={pin} view={view} size="m">
                                    Button
                                </Button>
                                <Button
                                    title={`Button view ${view} pin ${pin}`}
                                    icon={(className: string) => (
                                        <Icon size="s" type="arrow" direction="left" className={className} />
                                    )} key={pin} pin={pin} view={view} size="m" />
                            </>
                        ))}
                        <br />
                        {qPins.map((pin: any) => (
                            <>
                                <Button title={`Button view ${view} pin ${pin}`} key={pin} pin={pin} view={view} size="m">
                                    Button
                                </Button>
                                <Button
                                    title={`Button view ${view} pin ${pin}`}
                                    icon={(className: string) => (
                                        <Icon size="s" type="arrow" direction="left" className={className} />
                                    )} key={pin} pin={pin} view={view} size="m" />
                            </>
                        ))}
                        <Button title={`Button view ${view} pin clear-clear`} pin="clear-clear" view={view} size="m">
                            Button
                        </Button>
                    </div>
                </>
            );
        })}
    </>
);
