import React from "react";
import "../css/Delivery.css";
  
const Cancellation = () => {
  return (
    <div>
      <div className="delivery-section">
        <div className="delivery-header">
          <h2>Cancellation and Refund </h2>
        </div>
        <hr className="delivery-hr" />
        <div className="delivery-content">
          <h5
            style={{
              fontFamily: "Poppins",
              color: "#24465f",
              fontWeight: "550",
            }}
          >
            CANCELLATION POLICY
          </h5>
          Orders once placed through the app can be cancelled within 30 minutes
          of placing the order by emailing us at support@noshiboshi.com. The
          tight time frame is set because we usually process, pack and dispatch
          the order within 30 minutes of receiving the order.
          <br />
          <br />
          <h5
            style={{
              fontFamily: "Poppins",
              color: "#24465f",
              fontWeight: "550",
            }}
          >
            RETURN AND REFUND POLICY
          </h5>
          Meal kits once purchased cannot be returned, exchanged or refunded
          unless in the following circumstances:
          <br />
          <br />
          <h6
            style={{
              fontFamily: "Poppins",
              color: "#e77063",
              fontWeight: "550",
              fontSize: "0.9rem",
            }}
          >
            Missing Products
          </h6>
          In case of missing items, we will ensure the missing product(s) are
          delivered to the customer within 24 hours of confirmation. Customers
          are requested to contact us through email at support@noshiboshi.com
          within 2 hours of receiving the product. The missing product(s) will
          be delivered within 24 hours of confirmation. In the rare circumstance
          that this timeline is not met, the customer is eligible for a 100%
          refund or credit as deemed fit.
          <br />
          <br />
          <h6
            style={{
              fontFamily: "Poppins",
              color: "#e77063",
              fontWeight: "550",
              fontSize: "0.9rem",
            }}
          >
            Unfit to use:
          </h6>
          In case of missing items, we will ensure the missing product(s) are
          delivered to the customer within 24 hours of confirmation. Customers
          are requested to contact us through email at support@noshiboshi.com
          within 2 hours of receiving the product. <br />
          The missing product(s) will be delivered within 24 hours of
          confirmation. In the rare circumstance that this timeline is not met,
          the customer is eligible for a 100% refund or credit as deemed fit.
          <br />
          <br />
          <h6
            style={{
              fontFamily: "Poppins",
              color: "#e77063",
              fontWeight: "550",
              fontSize: "0.9rem",
            }}
          >
            Wrong Product:
          </h6>
          In the rare circumstance that a wrong product is delivered to you,
          email us at support@noshiboshi.com with the relevant details and
          photographs. We will verify and initiate a replacement for that
          product.
          <br />
          <br />
          <h6
            style={{
              fontFamily: "Poppins",
              color: "#e77063",
              fontWeight: "550",
              fontSize: "0.9rem",
            }}
          >
            Refunds
          </h6>
          If your refund is approved, a suitable method of refund will be
          discussed with you before initiating the refund.
          <br />
          Please note that it can take some time for your bank or credit card
          company to process and post the refund too.
          <br />
          <br />
          Please contact us at support@noshiboshi.com for any return related
          queries.
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
