import { useCallback } from "react";

const UseHttp = () => {
  const sendRequest = useCallback(async (reqConfiq, applyData) => {
    try {
      const response = await fetch(reqConfiq.url, {
        method: reqConfiq.method ? reqConfiq.method : "GET",
        body: reqConfiq.body ? JSON.stringify(reqConfiq.body) : null,
        headers: reqConfiq.headers ? reqConfiq.headers : {},
      });
      if (!response.ok) {
        throw new Error("something went wrong!!");
      }
      const data = await response.json();
      applyData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return {
    sendRequest: sendRequest,
  };
};

export default UseHttp;
