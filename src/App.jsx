import React from 'react'
import AccountContainer from './components/AccountContainer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import styled from 'styled-components'
// import VisualsContainer from './components/VisualsContainer'

const MainWrapper = styled.main`
  width: calc(100% - 18%);
  /* position: relative; */
  margin-left: 18%;
  margin-top: 7rem;
`;

const App = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <MainWrapper>
        <AccountContainer/>
        {/* <VisualsContainer/> */}
      </MainWrapper>
    </>
  )
}

export default App