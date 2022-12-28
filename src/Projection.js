import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "f0397f5d636d6705";

function Notebook() {
  const projection_primeRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "projection_prime") return new Inspector(projection_primeRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={projection_primeRef} />
      <p>Credit: <a href="https://observablehq.com/d/f0397f5d636d6705@622">calculang bouncing ball model ⚽🏀🥎 by Declan Naughton</a></p>
    </>
  );
}

export default Notebook;