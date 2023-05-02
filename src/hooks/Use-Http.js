import { useCallback, useState } from "react";

const UseHttp = () => {
  const [isloading, setIsloading] = useState(false);
  const sendRequest = useCallback(async (reqConfiq, applyData) => {
    setIsloading(true);
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
      setIsloading(false);
      applyData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return {
    sendRequest: sendRequest,
    loading: isloading,
  };
};

export default UseHttp;
