import axios, { AxiosError } from "axios";

const API_URL = "https://stunning-robot-5g5j7x5rjpqcw9p-3000.app.github.dev/api";

export const getExchangeRate = async (currency: string): Promise<ExchangeRate> => {
  return new Promise<ExchangeRate>((resolve, reject) => {
    axios
      .get(`${API_URL}/${currency}`)
      .then((res) => {
        resolve({
          currency: res.data.Exchange,
          BDT: res.data.BDT,
          IRS: res.data.IRS,
          PKR: res.data.PKR,
          CAD: res.data.CAD,
        
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Currency not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
