import styled from "styled-components";

export const JobsContainer = styled.div`
  width: 70%;
  margin: 3em auto;
`;

export const JobsSection = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 30px;

  .sidebar {
    background-color: #f3f3f3;
    height: 10em;
  }

  .jobs {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
