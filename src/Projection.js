import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "f0397f5d636d6705";

function Notebook() {
  const projection_primeRef = useRef();
  const modelsRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    const m = runtime.module(notebook, name => {
      if (name === "projection_prime") return new Inspector(projection_primeRef.current);
      if (name === "models") return new Inspector(modelsRef.current);
    });
    m.value("models").then(models => {
      m.redefine("models", [...models, {x:n=>n, y:n=>n,dy:n=>n,compressed:n=>true}])
    })
    //console.log(t)
    
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={projection_primeRef} />
      <div ref={modelsRef} />
      <p>Credit: <a href="https://observablehq.com/d/f0397f5d636d6705@622">calculang bouncing ball model ⚽🏀🥎 by Declan Naughton</a></p>
    </>
  );
}

export default Notebook;