import React from "react";
import { Helmet } from "react-helmet";

const Redirect = () => {
  return (
    <div>
      <Helmet>
        <meta
          http-equiv="refresh"
          content="0; url='https://play.google.com/store/apps/details?id=com.noshiboshi.noshiboshi'"
        />
      </Helmet>
      <h4 style={{ margin: "5% 4%", color: "#e77063" }}>
        Redirecting to the Noshi Boshi Android App...
      </h4>
    </div>
  );
};

export default Redirect;
