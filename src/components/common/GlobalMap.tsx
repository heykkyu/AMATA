import styled from 'styled-components'

const GlobalMapWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: coral;
`

const GlobalNav = () => {
  return (
    <>
      <GlobalMapWrap>
        <p>B</p>
      </GlobalMapWrap>
    </>
  );
}

export default GlobalNav;
 