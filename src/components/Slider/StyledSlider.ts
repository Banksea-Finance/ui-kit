import { SliderUnstyled, sliderUnstyledClasses } from '@mui/base'
import styled from 'styled-components'
import { StyledSliderProps } from './types'
import { getOverridableStyle } from '../../utils'

export const StyledSlider = styled(SliderUnstyled)<StyledSliderProps>`
  width: 100%;
  padding: 12px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  opacity: ${getOverridableStyle('Slider', 'opacity', '1')};

  &:hover {
    opacity: 1;
  }

  & .${sliderUnstyledClasses.disabled} {
    pointer-events: none;
    cursor: default;
    color: #bdbdbd;
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;

    height: ${getOverridableStyle('Slider', 'railHeight', '4px')};
    border-radius: ${getOverridableStyle('Slider', 'railBorderRadius', '2px')};
    opacity: ${getOverridableStyle('Slider', 'railOpacity', '0.38')};
    background-color: ${getOverridableStyle('Slider', 'railColor', ({ theme }) => theme.colors.disabled)};
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;

    height: ${getOverridableStyle('Slider', 'trackHeight', '4px')};
    border-radius: ${getOverridableStyle('Slider', 'trackBorderRadius', '2px')};
    background-color: ${getOverridableStyle('Slider', 'trackColor', ({ theme, variant = 'primary' }) => theme.colors[variant])};
  }

  & .${sliderUnstyledClasses.mark} {
    position: absolute;
    top: 50%;
    transform: translateX(-50%);

    width: ${getOverridableStyle('Slider', 'markSize', '4px')};
    height: ${getOverridableStyle('Slider', 'markSize', '4px')};
    border-radius: ${getOverridableStyle('Slider', 'markBorderRadius', '2px')};
    background-color: ${getOverridableStyle('Slider', 'markColor', '#ffffff99')};
    opacity: ${getOverridableStyle('Slider', 'markOpacity', '0.7')};
  }

  & .${sliderUnstyledClasses.markActive} {
    background-color: ${getOverridableStyle('Slider', 'markActiveColor', '#fff')};
  }

  & .${sliderUnstyledClasses.valueLabel} {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    line-height: 1.2;
    width: 32px;
    height: 32px;
    bottom: 40px;
    right: 10px;
    border-radius: 4px;

    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.text};
    transform-origin: bottom left;
    opacity: 0;

    transition: opacity 0.38s;

    &:before {
      display: none;
    }

    &.MuiSlider-valueLabelOpen {
      opacity: ${({ tooltip = true }) => tooltip ? '1' : '0'};
    }
  }

  & .${sliderUnstyledClasses.markLabel} {
    position: absolute;
    transform: translateX(-50%);

    top: ${getOverridableStyle('Slider', 'markLabelTop', '24px')};
    color: ${getOverridableStyle('Slider', 'markLabelColor', ({ theme }) => theme.colors.textDisabled)};
    font-size: ${getOverridableStyle('Slider', 'markLabelFontSize', '12px')};
  }

  & .${sliderUnstyledClasses.markLabelActive} {
    color: ${getOverridableStyle('Slider', 'markLabelActiveColor', ({ theme }) => theme.colors.text)};
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    margin-left: -6px;
    margin-top: -6px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    cursor: grab;
    border: ${getOverridableStyle('Slider', 'thumbBorder', ({ theme, variant = 'primary' }) => `1px solid ${theme.colors[variant]}`)};
    background-color: ${getOverridableStyle('Slider', 'thumbBackgroundColor', ({ theme }) => theme.colors.text)};
  }
`
