import { styled } from '@stitches/react';

const Button = styled('button', {
    backgroundColor: 'DarkGreen',
    borderRadius: '10px',
    border: 0,
    cursor: 'pointer',
    fontSize: '13px',
    padding: '10px 15px',
    color: '#FFF',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: 'LightGreen',
        boxShadow: '0 0 0 3px DarkGreen',
        color: '#000',        
    },
});

export const ButtonDiv = styled('div', {
    width: 'fit-content',
    float: 'right'
});

export default Button;