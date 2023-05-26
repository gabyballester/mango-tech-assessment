import styled from '@emotion/styled';

export const CustomSlider = styled('input')({
  top: '-1px',
  position: 'absolute',
  width: '100%',
  appearance: 'none',
  background: 'none',
  pointerEvents: 'none',
  '&::-webkit-slider-thumb': {
    backgroundColor: 'black',
    appearance: 'none',
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    webkitBorderRadius: '50%',
    oBorderRadius: '50%',
    mozBorderRadius: '50%',
    msBorderRadius: '50%',
    cursor: 'pointer',
    pointerEvents: 'auto',
  }
});
