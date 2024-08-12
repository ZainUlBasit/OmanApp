import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  image:
    "https://i0.wp.com/deohoman.org/wp-content/uploads/2019/10/MOH-best-LOGO.png?fit=290%2C300&ssl=1",
  dotsOptions: {
    color: "#000000", // Fallback color if the gradient doesn't work
    gradient: {
      type: "linear",
      rotation: 0, // 0 degrees, left to right
      colorStops: [
        { offset: 0, color: "red" }, // End color
        { offset: 1, color: "black" }, // Start color
      ],
    },
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
  qrOptions: {
    typeNumber: 10,
  },
  cornersSquareOptions: {
    type: "extra-rounded",
  },
});

export default function QrCode() {
  const [url, setUrl] = useState("https://www.appspot.com.pk");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <div className="App">
      <div ref={ref} />
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
  },
};
