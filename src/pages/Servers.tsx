import React from 'react';
import {Header} from "../components";

const Servers: React.FC = () => {
  return (
    <main className="flex flex-col items-center h-screen w-full">
      <Header title="Доступные серверы"/>
      <p className="text-2xl">Servers</p>
    </main>
  );
}

export default Servers;
