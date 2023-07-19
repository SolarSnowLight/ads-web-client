import React from 'react';
import {Header} from "../components";

const Hosts: React.FC = () => {
  return (
    <main className="flex flex-col items-center h-screen w-full">
      <Header title="Хосты: Активные сервисы"/>
      <p className="text-2xl">Hosts</p>
    </main>
  );
}

export default Hosts;
