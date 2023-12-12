import styled from 'styled-components';

export const Container = styled.div`
background-color:#4682B4;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`;
export const Content = styled.div`
background-color: white;
border-radius: 10px;
width: 500px;
height:550px;
padding: 20px;


`;
export const CalendarTitle = styled.div`
color: #04111e;
font-weight: bold;
padding: 20px;
padding-bottom: 0;
font-size: larger;

`;
export const ContentDoMesAnoEButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const ContentDoMesEAno = styled.div`
display: flex;


`;
export const ContentDoAno = styled.div`
display: flex;
padding-left: 30px;
`;
export const ButtonContent = styled.div`

`;
export const Button = styled.button`
 background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
   
  }

`;

export const Weeks = styled.div`

ul {
    list-style-type: none;
        padding: 20px;
        margin: 0;
        color: #0f2740;
        display: flex;
        justify-content: space-between;
        
       }
li {
                
            font-weight: 600;
           
    }

`;
export const Days = styled.div`
ul {
        list-style-type: none;
        padding: 0 2px 20px ;
        margin: 0;
        color: #0f2740;
        display: grid;
        justify-content: start;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        max-height: 370px;
        
       

}
li {
            margin-bottom: 10px;
            padding: 10px;
            font-weight: 400;
            display: flex;
            justify-content: center;
            cursor: pointer;
           
    }
    .inactive {
    color: #ccc; /* Cor para os dias do mês atual inativos */
  }

  .previousMonth {
    color: #f00; /* Cor para os dias do mês anterior */
  }
  .clicked, li.current-day {
    background-color: #f0f0f0; 
    color: #0080ff; 
    font-weight: bold;
    border-radius:50%;
    transition: background-color 0.3s ease;
   

}

`;

