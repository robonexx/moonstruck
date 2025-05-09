'use client';

/* import React, { createContext, useState } from "react";

export type CursorContextType = {
  projectTitle: string;
  setProjectTitle: (value: string) => void;
};

export const CursorContext = createContext<CursorContextType>({
  projectTitle: "",
  setProjectTitle: () => {},
});

type Props = {
  children: JSX.Element;
};
export default function CursorProvider({ children }: Props) {
  const [projectTitle, setProjectTitle] = useState<string>("");

  const handleSetProjectTitle = (value: string) => setProjectTitle(value);
  return (
    <CursorContext.Provider
      value={{ projectTitle, setProjectTitle: handleSetProjectTitle }}
    >
      {children}
    </CursorContext.Provider>
  );
} */

import React, { createContext, useState, ReactNode } from "react";



export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
});


const CursorProvider = (props) => {
  const [size, setSize] = useState("small");

  const updateSize = (newSize) => {
    setSize(newSize);
  };

  const contextValue = {
    size,
    setSize: updateSize,
  };

  return (
    <CursorContext.Provider value={contextValue}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
