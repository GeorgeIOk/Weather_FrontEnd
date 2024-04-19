import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { getExchangeRate } from "../api/actions";

const ExchangeCard: React.FC = () => {
  const [data, setData] = useState<ExchangeRate>();
  const [loadingState, setLoadingState] = useState(false);
  const [currency, setCurrency] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching  Data...");
    console.log(currency);
    setLoadingState(true);
    getExchangeRate(currency)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-2 space-y-4">
            <Input
              id="currencyname"
              type="text"
              label="Currency"
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Exchange Rate
            </Button>
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{data.currency}</h1>
           
            <p className="text-lg">Bangladesh: {data.BDT} TK</p>
            <p className="text-lg">India: {data.IRS} Rupee </p>
            <p className="text-lg">Pakistan: {data.PKR} Rupee</p>
            <p className="text-lg">Canada: {data.CAD} $ </p>
          </div>
        </CardBody>
      ) : (
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter currency name to get exchange rate</p>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExchangeCard;
