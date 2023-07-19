import React from 'react';
import Banner from "../components/Banner/Banner.tsx";
import Form from "../components/Form/Form.tsx";

const Authentication: React.FC = () => {
  return (
    <main className="flex w-screen bg-amber-50">
      <section className="flex justify-center items-center h-screen w-[40%] bg-white">
        <Form/>
      </section>
      <Banner/>
    </main>
  );
}

export default Authentication;
