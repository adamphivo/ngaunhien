"use client";

import { useState } from "react";
import { sayClientGreetings } from "@/lib/clientPossible";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  sayClientGreetings();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
