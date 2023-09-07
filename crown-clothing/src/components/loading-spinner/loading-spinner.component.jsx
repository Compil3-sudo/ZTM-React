import React from "react";
import "./loading-spinner.styles";
import { SpinnerContainer, SpinnerOverlay } from "./loading-spinner.styles";

const LoadingSpinner = () => {
  return (
    <SpinnerOverlay data-testid="spinner">
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
