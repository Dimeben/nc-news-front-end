import React from "react";

export const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>API starting up. This may take a minute.</p>
    </div>
  );
};
