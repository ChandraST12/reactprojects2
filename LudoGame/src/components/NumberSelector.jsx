
import styled from "styled-components";

const NumberSelector = ({error,setError,selectedNum,setSelectedNum}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  
  const errorHandler=(value)=>{
    setSelectedNum(value)
    setError("")
  }
  
  return (
    <NumberContainer > 
    <p className="error">{error}</p>
    <div className="Numflex">{arr.map((value, i) => (
        <Box
          isSelected ={value == selectedNum}
          key={i}
          onClick={(value) => errorHandler(value)}
        >
          {value}
        </Box>
      ))}</div>
      <p className="text">Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;


const NumberContainer = styled.div`
.Numflex{
display: flex;
flex-direction: row;
gap: 24px;
}

.text{
    font-size: 24px;
    font-weight:700;
}
.error{
  color: red;
}
`;
const Box = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
 background-color:${(props)=>(props.isSelected? "black" : "white")};
 color:${(props)=>(!props.isSelected? "black" : "white")};
`;
