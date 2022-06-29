import styled, { css } from 'styled-components'
import Select from 'rc-select'
import { scales } from '../../types'
import { layout, variant, width } from 'styled-system'
import { StyledSelectProps } from './types'

const variantsByScales = {
  [scales.S]: {
    fontSize: '14px',
    height: '24px',
    borderRadius: '6px',
  },
  [scales.M]: {
    fontSize: '16px',
    height: '32px',
    borderRadius: '8px',
  },
  [scales.L]: {
    fontSize: '18px',
    height: '40px',
    borderRadius: '10px',
  },
}

export const SelectStyleMixin = css`
  * {
    box-sizing: border-box;
  }

  .rc-select {
    &-disabled {
      &,
      & input {
        cursor: not-allowed;
      }

      .rc-select-selector {
        opacity: 0.3;
      }
    }

    &-selector {
      flex: 1;
      max-width: calc(100% - 20px);

    }

    &-selection {
      width: 100%;

      &-item {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 8px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &-placeholder {
        opacity: 0.4;
        pointer-events: none;
      }

      &-search-input {
        appearance: none;
        width: 0;

        &::-webkit-search-cancel-button {
          display: none;
          appearance: none;
        }
      }
    }

    // --------------- Single ----------------
    &-single {
      .rc-select-selector {
        height: 100%;
        padding: 4px;
        font-size: 16px;
        line-height: 100%;
        display: flex;
        position: relative;
        width: 100%;

        .rc-select-selection-search {
          width: 100%;
          position: absolute;

          &-input {
          }
        }

        .rc-select-selection-item,
        .rc-select-selection-placeholder {
        }
      }

      // Not customize
      &:not(.rc-select-customize-input) {
        .rc-select-selector {
          padding: 1px;
        }
      }
    }

    // -------------- Multiple ---------------
    &-multiple .rc-select-selector {
      display: flex;
      flex-wrap: wrap;
      padding: 1px;
      border: 1px solid #000;

      .rc-select-selection-item {
        flex: none;
        background: #bbb;
        border-radius: 4px;
        margin-right: 2px;
        padding: 0 8px;

        &-disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      .rc-select-selection-overflow {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        &-item {
          flex: none;
          max-width: 100%;
        }
      }

      .rc-select-selection-search {
        position: relative;
        max-width: 100%;

        &-input,
        &-mirror {
          padding: 1px;
          font-family: system-ui;
        }

        &-mirror {
          position: absolute;
          z-index: 999;
          white-space: nowrap;
          left: 0;
          top: 0;
          visibility: hidden;
        }
      }

      .search-input-without-border();
    }

    // ================ Icons ================
    &-allow-clear {
      &.rc-select-multiple .rc-select-selector {
        padding-right: 20px;
      }

      .rc-select-clear {
        position: absolute;
        right: 20px;
        top: 0;
      }
    }

    // =============== Focused ===============
    &-focused {
      .rc-select-selector {
      }
    }

    // ============== rc-select-dropdown ===============
    &-dropdown {
      font-family: ${({ theme }) => theme.fontFamilies.common};
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;

      min-height: 100px;
      position: absolute;
      background: ${({ theme }) => theme.colors.backgroundSecondary};

      &.rc-select-item-option-selected {
        background: ${({ theme }) => theme.colors.backgroundSecondary};
      }

      &-hidden {
        display: none;
      }
    }

    // =============== rc-select-item ================
    &-item {
      font-size: 16px;
      line-height: 1.5;
      padding: 4px 16px;
      transition: background-color .18s;

      // >>> Group
      &-group {
        color: #999;
        font-weight: bold;
        font-size: 80%;
      }

      // >>> Option
      &-option {
        position: relative;
        font-weight: 500;
        margin-bottom: 2px;
        cursor: pointer;

        &-grouped {
          padding-left: 24px;
        }

        .rc-select-item-option-state {
          position: absolute;
          right: 0;
          top: 4px;
          pointer-events: none;
        }

        // ------- Active -------
        &-selected {
          background: ${({ theme }) => theme.colors.primary};
        }

        // ------ Disabled ------
        &-disabled {
          color: #999;
          cursor: not-allowed;
        }
      }

      // >>> Empty
      &-empty {
        text-align: center;
        color: #999;
      }

      &:not(.rc-select-item-option-selected, .rc-select-item-option-disabled) {
        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }

  .rc-select-dropdown {
    .rc-select-item-option-state-icon {
      display: none;
    }
  }

  .rc-select-selection__choice-zoom {
    transition: all 0.3s;
  }

  .rc-select-selection__choice-zoom-appear {
    opacity: 0;
    transform: scale(0.5);

    &-active {
      opacity: 1;
      transform: scale(1);
    }
  }

  .rc-select-selection__choice-zoom-leave {
    opacity: 1;
    transform: scale(1);

    &&-active {
      opacity: 0;
      transform: scale(0.5);
    }
  }
`

export const StyledSelect = styled(Select)<StyledSelectProps<any>>`
  &.rc-select {
    display: flex;
    align-items: center;
    position: relative;
    min-width: 100px;
    font-family: ${({ theme }) => theme.fontFamilies.common};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    
    ${width};
    ${layout};
    ${variant({ prop: 'scale', variants: variantsByScales })};

    input {
      height: 100%;
      border: none;
      outline: none;
    }
  }

  // suffix arrow
  &.rc-select {
    &.rc-select-show-arrow {
      &.rc-select-multiple .rc-select-selector {
        padding-right: 20px;
      }

      .rc-select-arrow {
        height: 100%;
        display: flex;
        align-items: center;
        
        pointer-events: none;
        margin: 0 5px;

        &-icon::after {
          content: '';
          border: 5px solid transparent;
          width: 0;
          height: 0;
          display: inline-block;
          border-top-color: #999;
          transform: translateY(5px);
        }
      }
    }

    &.rc-select-show-arrow.rc-select-open {
      .rc-select-arrow {
        &-icon::after {
          transform: rotate(180deg);
        }
      }
    }
  }
`

StyledSelect.defaultProps = {
  scale: scales.M,
  width: 'fit-content'
}
