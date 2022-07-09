import { styled } from '@stitches/react';

const Item  = styled('div', {    
    borderRadius: '5px',
    border: '1px solid',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '5px',
    width: '500px',
    height: '50px',
    display: 'table',
    verticalAlign: 'middle',
    '&:hover': {
        backgroundColor: 'lightgray',
        fontSize: '16px',
    },
});

export default Item;