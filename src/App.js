import React from 'react';
import styled from 'styled-components';

import Toolbar from './Toolbar';
import Editor from './Editor';

const AppContainer = styled.div`
    background-color: white;
`;

const AppContent = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 10% 90%;
    margin: 30px;
`;

const Header = styled.header`
    background-color: white;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`;

function App() {
    return (
        <AppContainer>
            <Header>A simple editor</Header>
            <AppContent>
                <Toolbar />
                <Editor />
            </AppContent>
        </AppContainer>
    );
}

export default App;
