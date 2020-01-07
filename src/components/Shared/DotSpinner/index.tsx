import React, { FC } from 'react';

import { SpinnerContainer } from './styled';

type Props = {
  color: string;
  size: string;
  className?: string;
};

export const DotSpinner: FC<Props> = (props: Props) => {
  return (
    <SpinnerContainer {...props}>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </SpinnerContainer>
  );
};
