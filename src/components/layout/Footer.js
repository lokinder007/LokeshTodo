const Footer = () => {
  return (
    <div id="Footer"
      style={{
        textAlign: "center",
        fontSize: "1.5em",
        color:"blue",
        backgroundColor:"rgb(152, 130, 230)",
        // marginBottom: 10,
        height:"3em",
        padding:"1em 0",
      }}
    >
       Copyright  &copy; {new Date().getFullYear()} LokeshApp |
      Made by{" "}
      <a
        href="https://www.google.com/" target="_blank" rel="noopener noreferrer"
        style={{ cursor: "pointer", color:'blue' }}
      >
        Lokinder007
      </a>
    </div>
  );
};

export default Footer;