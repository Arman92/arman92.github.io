import React, { FC } from "react";

import { Container } from "./styled";
import { DotSpinner } from "../DotSpinner";
import { Button } from "../Button";

type Props = {
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
};

export const LoadingAnimation: FC<Props> = (props: Props) => {
  const { isLoading, error, timedOut, retry } = props;

  return (
    <Container>
      {isLoading ? (
        <>
          {/* <img src={logo} /> */}
          <DotSpinner className="spinner" color="#47bdd4" size="12px" />{" "}
        </>
      ) : null}

      {error || timedOut ? (
        <div className="error-container">
          <label>Sorry, something went wrong, please try again.</label>
          <Button onClick={retry} className="btn btn-large btn-blue btn-fill">
            Try Again
          </Button>
        </div>
      ) : null}
    </Container>
  );
};
