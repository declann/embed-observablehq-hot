import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "1b4b9efd5b629785";

import alphabet from './alphabet.js';

function Notebook() {
  const myBarChartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    const m = runtime.module(notebook, name => {
      if (name === "myBarChart") return new Inspector(myBarChartRef.current);
    });
    m.redefine("data", alphabet);
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={myBarChartRef} />
      <p>Credit: <a href="https://observablehq.com/d/1b4b9efd5b629785@495">Embed a notebook in a Hot React app by Declan Naughton</a></p>
    </>
  );
}

export default Notebook;
