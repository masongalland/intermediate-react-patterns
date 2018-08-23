import React, { Component } from 'react';
import { Transition, animated, config } from 'react-spring';

import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';

import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          native
          config={config.wobbly}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          {on &&
            (styles => (
              <ModalWrapper>
                <ModalCard style={{ transform: styles.y.interpolate(y => `translate3d(0, ${y}px, 0)`), ...styles }}>
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background onClick={toggle} style={{ opacity: styles.bgOpacity }} />
              </ModalWrapper>
            ))}
        </Transition>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimCard = Card.withComponent(animated.div);

const ModalCard = styled(AnimCard)`
  position: relative;
  z-index: 10;
  min-width: 320px;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  ${absolute({ x: 'right' })} border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled(animated.div)`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
