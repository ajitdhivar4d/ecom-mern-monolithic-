const ReturnPolicy = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "40px",
    background: "#18181b",
    borderRadius: "16px",
    border: "1px solid #27272a",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
    color: "#d4d4f1",
    lineHeight: "1.8",
  };

  const headingStyle = {
    color: "#cd943e",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "10px",
        }}
      >
        Return & Refund Policy
      </h1>

      <p style={{ textAlign: "center", color: "#a1a1aa" }}>
        Last Updated: November 2026
      </p>

      <p>
        Welcome to <strong>ShopNest</strong>. Customer satisfaction is important
        to us. This Return & Refund Policy explains how returns, replacements,
        and refunds work when you purchase products from our website.
      </p>

      <h3 style={headingStyle}>1. Return Eligibility</h3>
      <p>
        Products may be eligible for return if they are damaged, defective,
        incorrect, or significantly different from their description.
      </p>

      <p>
        To qualify for a return, products should generally be unused and
        returned with their original packaging, accessories, and invoice, where
        applicable.
      </p>

      <h3 style={headingStyle}>2. Return Request Period</h3>
      <p>
        Customers should contact our support team within 7 days of receiving
        their order to request a return or replacement. The applicable return
        period and eligibility may vary by product category.
      </p>

      <h3 style={headingStyle}>3. Non-Returnable Products</h3>
      <p>
        Certain products may not be eligible for return due to hygiene, safety,
        personalization, or other applicable restrictions. Any such restrictions
        will be communicated before purchase.
      </p>

      <h3 style={headingStyle}>4. Damaged or Incorrect Products</h3>
      <p>
        If you receive a damaged, defective, or incorrect product, please
        contact us with your order details and supporting photographs. Our
        support team will review your request and guide you through the process.
      </p>

      <h3 style={headingStyle}>5. Refund Process</h3>
      <p>
        Once an eligible returned product has been received and inspected, we
        will notify you about the approval or rejection of your refund.
      </p>

      <p>
        Approved refunds will generally be processed to the original payment
        method. Processing time may depend on your bank or payment provider.
      </p>

      <h3 style={headingStyle}>6. Replacement Policy</h3>
      <p>
        Depending on product availability and eligibility, we may offer a
        replacement instead of a refund. Replacement requests will be reviewed
        by our support team.
      </p>

      <h3 style={headingStyle}>7. Shipping Charges</h3>
      <p>
        Return shipping charges will be handled according to the reason for
        return and applicable consumer protection requirements. Customers will
        be informed of any applicable charges before proceeding.
      </p>

      <h3 style={headingStyle}>8. Cancellation Policy</h3>
      <p>
        Orders may be eligible for cancellation before shipment. Once an order
        has been shipped, customers may need to follow the applicable return
        process.
      </p>

      <h3 style={headingStyle}>9. Contact Us</h3>
      <p>
        If you have questions about returns, replacements, or refunds, please
        contact the ShopNest support team through our Contact Us page.
      </p>

      <div
        style={{
          borderTop: "1px solid #27272a",
          marginTop: "30px",
          paddingTop: "20px",
          textAlign: "center",
          color: "#71717a",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} ShopNest. All rights reserved.
      </div>
    </div>
  );
};

export default ReturnPolicy;
