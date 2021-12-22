import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const btn = document.querySelector(".btn");

  if (show) {
    btn.textContent = "Hide";
  } else {
    btn.textContent = "Show";
  }
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show
      </button>
      {show && <Item></Item>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // cleanup function
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ maginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </div>
  );
};

export default ShowHide;
