import React from 'react';

import * as ScrollLocker from '@yandex-lego/components/lib/scroll-locker';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const styles = `
    .scrollable {
        overflow: auto;
        height: 200px;
        border: 1px solid #e5e5e5;
        padding: 12px;
        border-radius: 4px;
        margin-top: 16px;
    }

    .skeleton {
        height: 20px;
        border-radius: 1px;
        background-color: rgb(240, 240, 240);
    }

    .skeleton + .skeleton {
        margin-top: 8px;
    }
`;

export class Default extends React.Component {
    state = {
        enabled: false,
    };

    containerRef = React.createRef<HTMLDivElement>();

    componentWillUnmount() {
        if (this.state.enabled) {
            ScrollLocker.unlock(this.containerRef.current);
        }
    }

    toggle = () => {
        this.setState(
            {
                enabled: !this.state.enabled,
            },
            this.toggleScrollLock,
        );
    };

    toggleScrollLock = () => {
        if (this.state.enabled) {
            ScrollLocker.lock(this.containerRef.current);
        } else {
            ScrollLocker.unlock(this.containerRef.current);
        }
    };

    render() {
        const { enabled } = this.state;

        const content = [];
        for (let i = 0; i <= 50; i++) {
            content.push(<div key={i} className="skeleton" />);
        }

        return (
            <>
                <style>{styles}</style>
                <Button view="default" size="m" onClick={this.toggle}>
                    {enabled ? 'Разблокировать scroll' : 'Заблокировать scroll'}
                </Button>
                <div ref={this.containerRef} className="scrollable">
                    {content}
                </div>
            </>
        );
    }
}
