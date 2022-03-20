import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--very-dark-cyan);
  color: var(--white);
  padding: 10rem 0 3rem 0;
  /* z-index: -10; */
  font-size: 1.4rem;

  .footLogo {
    width: 20rem;
    
    @media (max-width: 48em) {
       display: flex;
       justify-content: center;

        }
  }

  .foot-p li{
    margin-bottom: 2rem;
 
   }

 ul, div {
    flex: 1;
    margin-bottom: 3rem;
    
    
  @media (max-width: 48em) {
    margin-bottom: 1rem;
    width: 100%;
      
  }
 .flex-mobile{
     li, .foot-p li{
        margin-bottom: 2rem;

     }

    @media (max-width: 48em) {
   display: flex;
   justify-content: space-around;
   border-bottom: 1px solid  #6d6c6c;
   padding: 3rem 0;


}

 ul li {
	margin-bottom: 2rem;
}

  p {
    text-align: right;

    @media (max-width: 48em) {
    text-align: center;
  }


  li, .copy{
    @media (max-width: 48em) {
    text-align: center;
  }
  
`;
