import styled from "styled-components";

export const Button = styled.button`
  border: none;
  display: inline-block;
  border-radius: 0.4rem;
  color: #ffffff;
  font-family: "IranSANS";
  font-weight: 500;
  transition: all 0.2s;

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  &.btn-large {
    padding: 1rem 9rem;
    font-size: 1.6rem;
  }

  &.btn-small {
    padding: 1rem 2.5rem;
    font-size: 1.6rem;
  }

  &.btn-tiny {
    padding: 0.8rem 1.6rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
  }

  &.btn-plain {
    box-shadow: none;

    :hover {
      box-shadow: none;
    }
  }

  &.btn-blue {
    :active {
      /* transform: translateY(-0.1rem); */
      box-shadow: 0 0.2rem 0.7rem rgba(0, 188, 212, 0.43);
      outline: none;
    }
  }

  :hover {
    /* transform: translateY(-0.3rem); */
    box-shadow: 0 0.5rem 1rem rgba(0, 188, 212, 0.43);
    opacity: 0.8;
  }

  &.btn-orange {
    :active {
      /* transform: translateY(-0.1rem); */
      box-shadow: 0 0.2rem 0.7rem rgba(243, 153, 0, 0.43);
      outline: none;
    }
  }

  &.btn-fill {
    &.btn-blue {
      background: linear-gradient(
          99.6deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        rgba(0, 188, 212, 0.9);
    }

    &.btn-orange {
      background: linear-gradient(
          110.27deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        #f39900;
      box-shadow: 0px 0px 10px rgba(243, 153, 0, 0.43);
    }
  }

  &.btn-outline {
    border: 2px solid;
    background: transparent;
    &.btn-orange {
      border-color: #f39900;
      color: #f39900;
    }

    &.btn-blue {
      border-color: #00bcd4;
      color: #00bcd4;
    }

    &.btn-gray {
      border-color: #b6b7b8;
      color: #676d73;

      &:disabled {
        color: #b6b7b8;
      }
    }
  }

  &.btn-rounded {
    border-radius: 50px;
    border-width: 2px;
    color: #2f3033;
  }
`;
