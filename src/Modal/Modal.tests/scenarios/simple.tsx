import React, { PureComponent, createRef } from 'react';

import { BPage } from '@yandex-lego/components/internal/components/BPage/BPage@desktop';
import { Hermione } from '@yandex-lego/components/internal/components/Hermione/Hermione';
import { Modal } from '@yandex-lego/components/Modal/desktop/bundle';

export class SimpleHermioneCase extends PureComponent {
    state = {
        ref1Visible: false,
    };

    scopeRef = createRef<HTMLDivElement>();

    render() {
        return (
            <BPage innerRef={this.scopeRef}>
                <Hermione>
                    <Hermione element="Trigger" onClick={this.onClick('ref1')}>
                        open modal
                    </Hermione>
                    <Modal
                        onClose={() => this.setState({ ref1Visible: false })}
                        scope={this.scopeRef}
                        theme="normal"
                        visible={this.state.ref1Visible}
                    >
                        Модальное окно
                    </Modal>
                </Hermione>
            </BPage>
        );
    }

    onClick = (id: string) => () => {
        const computedKey = `${id}Visible`;
        // @ts-ignore
        this.setState({ [computedKey]: true });
    };
}
