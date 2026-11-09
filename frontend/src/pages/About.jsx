const About = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "40px",
    background: "#18181b",
    borderRadius: "16px",
    border: "1px solid #27272a",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  };

  const socialBtnStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "10px 20px",
    background: "#27272a",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "1px solid #27272a",
  };

  return (
    <div style={containerStyle}>
      <img
        src="/dp.jpg"
        alt="@ajit"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "1px solid #dabc85",
          marginBottom: "10px",
          boxShadow: "0 10px 40px rgba(215, 114, 114, 0.5)",
        }}
      />

      <h2
        style={{
          fontSize: "2.5rem",
          color: "#fff",
          marginBottom: "10px",
        }}
      >
        About Me
      </h2>

      <h3
        style={{
          fontSize: "1.5rem",
          color: "#cd943e",
          marginBottom: "15px",
        }}
      >
        Ajit Dhivar (@ajitdhivar)
      </h3>

      <p
        style={{
          color: "#d4d4f1",
          fontSize: "1.2rem",
          lineHeight: "1.8",
          maxWidth: "600px",
          margin: "0 auto 25px",
        }}
      >
        <strong>Join the Community and grow together!</strong>
        <br />
        Welcome to my community, where we can learn, share, explore new
        technologies, and grow together.
      </p>

      {/* Social Media Buttons */}
      <div style={{ marginTop: "25px" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBtnStyle}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBtnStyle}
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBtnStyle}
        >
          Instagram
        </a>
      </div>

      <p
        style={{
          color: "#71717a",
          fontSize: "0.9rem",
          marginTop: "30px",
        }}
      >
        © {new Date().getFullYear()} Ajit Dhivar. All rights reserved.
      </p>
    </div>
  );
};

export default About;
