import React from 'react';
import {useDrag} from 'react-dnd';
import styled from 'styled-components';
import {Instagram} from 'react-feather';

const StyledDiv = styled.div`
    height: 32px;
    width: 32px;
    opacity: ${props => (props.isDragging ? '0.5' : 1)};
`;

const ToolbarItem = () => {
    const [{isDragging}, drag] = useDrag({
        item: {id: 'instagram', type: 'item'},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });
    console.log(`is it dragging? ${isDragging}`);
    return (
        <StyledDiv isDragging={isDragging} ref={drag}>
            <Instagram size="32" />
        </StyledDiv>
    );
};

export default ToolbarItem;
