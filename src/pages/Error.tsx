import React from 'react';
import { useRouteError } from "react-router-dom";
const Error = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Технические шоколадки</h1>
      <p>Неизвестная ошибка..что вы наделали боже..</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
