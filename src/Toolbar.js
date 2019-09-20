import React from 'react';
import styled from 'styled-components';

import ToolbarItem from './ToolbarItem';

const StyledToolbar = styled.div`
    min-height: 200px;
    border: 1px solid lightgray;
    border-radius: 5px;
    min-width: 3rem;
    padding: 0.4rem;
`;

const Toolbar = () => {
    return (
        <StyledToolbar>
            <ToolbarItem></ToolbarItem>
        </StyledToolbar>
    );
};

export default Toolbar;
