import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
    border: 1px solid lightgrey;
    border-radius: 5px;
`;

const Editor = () => {
    const iframe = useRef(null);

    useEffect(() => {
        iframe.current.contentDocument.designMode = 'on';
    }, []);

    return (
        <StyledIframe
            ref={iframe}
            src="about:blank"
            title="editable-frame"></StyledIframe>
    );
};

export default Editor;
