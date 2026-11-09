const Disclaimer = () => {
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
        Disclaimer
      </h1>

      <p style={{ textAlign: "center", color: "#a1a1aa" }}>
        Last Updated: November 2026
      </p>

      <p>
        Welcome to <strong>ShopNest</strong>. The information provided on this
        website is for general shopping and informational purposes only. By
        using our website, you agree to this disclaimer.
      </p>

      <h3 style={headingStyle}>1. Product Information</h3>
      <p>
        We try our best to provide accurate product descriptions, images,
        prices, and availability. However, errors or inaccuracies may
        occasionally occur. Product appearance may also vary slightly from the
        images displayed.
      </p>

      <h3 style={headingStyle}>2. Pricing and Availability</h3>
      <p>
        Product prices and availability may change without prior notice.
        ShopNest reserves the right to correct pricing errors, update product
        information, and modify product availability.
      </p>

      <h3 style={headingStyle}>3. Payments and Transactions</h3>
      <p>
        Online payments may be processed through third-party payment providers.
        ShopNest does not guarantee uninterrupted availability of third-party
        payment services.
      </p>

      <h3 style={headingStyle}>4. External Links</h3>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the content, policies, or services provided by external
        websites.
      </p>

      <h3 style={headingStyle}>5. Limitation of Liability</h3>
      <p>
        ShopNest will not be responsible for losses or damages arising from the
        use of information on this website, subject to applicable laws and
        consumer rights.
      </p>

      <h3 style={headingStyle}>6. Changes to This Disclaimer</h3>
      <p>
        We may update this disclaimer from time to time. Any changes will be
        published on this page.
      </p>

      <h3 style={headingStyle}>7. Contact Us</h3>
      <p>
        If you have any questions regarding this disclaimer, please contact the
        ShopNest support team through our Contact Us page.
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

export default Disclaimer;
