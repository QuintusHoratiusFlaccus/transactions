import React, {ReactElement} from 'react';
import Form from './Components/Form/Form';
import { StyledApp } from './StyledApp';

const App = (): ReactElement => {
  return (
    <StyledApp>
        <Form/>
    </StyledApp>
  );
}

export default App;
