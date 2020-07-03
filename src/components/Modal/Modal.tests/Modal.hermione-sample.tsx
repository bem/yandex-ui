import React, { PureComponent, createRef } from 'react';
import { render } from 'react-dom';
import { compose } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { Modal as ModalPresenter } from '../Modal@desktop';
import { withThemeNormal } from '../_theme/Modal_theme_normal@desktop';
import { withZIndex } from '../../../hocs/withZIndex/withZIndex';

import '../../../internal/components/BPage/BPage@test.css';
import './Hermione.components/BPage/BPage.css';

const Modal = compose(
    withThemeNormal,
    withZIndex,
)(ModalPresenter);

class ModalHermioneSample extends PureComponent {
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
                        zIndexGroupLevel={20}
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

render(<ModalHermioneSample />, document.getElementById('root'));
