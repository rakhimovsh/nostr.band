import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config.js";

function useFetch(url, method = "GET", requestData = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const axiosConfig = { method, url: BASE_URL + url };
      if (requestData) {
        axiosConfig.data = requestData;
      }

      try {
        const response = await axios(axiosConfig);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, requestData]);

  return { data, loading, error };
}

export default useFetch;
