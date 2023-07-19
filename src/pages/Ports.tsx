import React from 'react';
import {Header} from "../components";

const Ports: React.FC = () => {
  return (
    <main className="flex flex-col items-center h-screen w-full">
      <Header title="Занятые порты"/>
      <p className="text-2xl">Ports</p>
    </main>
  );
}

export default Ports;
