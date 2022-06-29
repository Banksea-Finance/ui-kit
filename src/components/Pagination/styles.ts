import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  * {
    font-family: ${({ theme }) => theme.fontFamilies.common};
  }
  
  .rc-pagination-item {
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    
    &:not(.rc-pagination-item-active) {
      background: ${({ theme }) => theme.colors.backgroundSecondary};
      transition: all .38s;
      
      &:hover {
        filter: brightness(180%);
      }
    }
    
    &.rc-pagination-item-active {
      background: ${({ theme }) => theme.colors.primary};

    }

    a {
      color: ${({ theme }) => theme.colors.text};
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
  .rc-pagination-prev, .rc-pagination-next {
    button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  .rc-pagination-jump-prev, .rc-pagination-jump-next {
    button {
      color: ${({ theme }) => theme.colors.textDisabled};
    }
  }
  
  .rc-pagination-options-quick-jumper {
    color: ${({ theme }) => theme.colors.textDisabled};
    
    input {
      background: ${({ theme }) => theme.colors.backgroundSecondary};
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
      
      color: ${({ theme }) => theme.colors.text};
      padding: 4px;
    }
  }
  
  .rc-pagination-options {
    display: inline-flex;
    align-items: center;
  }
`
