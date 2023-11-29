import styled from 'styled-components'
import { Button } from '../styles/Button';

const StartGame = ({toggle}) => {
  return (
    <HomeContainer>
    <div>
    <img src='/images/dices.png' alt='ludo here'/>
    </div>
    <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>

    </div>
    </HomeContainer>
  )
}

export default StartGame

const HomeContainer = styled.div`
max-width:1182px;
height: 100vh;
display: flex;
justify-content: center;
align-items:center;
margin: 0 auto;

.content{
  h1{
    font-size:6rem;
    white-space: nowrap;
  }
}
`;




