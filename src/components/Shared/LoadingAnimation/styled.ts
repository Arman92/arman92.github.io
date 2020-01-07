import styled from 'styled-components';

export const Container = styled.div`
  grid-column: col-start 4 / col-end 9;
  margin: 20vh 0;

  img {
    display: block;
    margin: 0 auto;
    animation: bounce 1s infinite;
  }

  .spinner {
    margin: 1.2rem auto;
    display: block;
    width: max-content;
  }

  div.error-container {
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      margin-top: 3.2rem;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;
