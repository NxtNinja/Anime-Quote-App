import { useQuery } from "@tanstack/react-query";
import Navigation from "./Navigation";
import QuoteCard from "./QuoteCard";
import axios from "axios";
import { useEffect } from "react";
import { useAtom } from "jotai";
import RefetchAtom from "@/utils/RefetchAtom";
import { Spinner } from "@nextui-org/react";

const Display = () => {
  const [fetch, setFetch] = useAtom(RefetchAtom);

  const { data, isFetching, isFetched, isSuccess, isLoading } = useQuery({
    queryKey: ["quotes"],

    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 1500));

      const req = await axios.get("https://animechan.xyz/api/random");
      const rep = req.data;

      return rep;
    },

    refetchOnWindowFocus: false,

    retry: true,
  });

  useEffect(() => {
    if (isLoading || isFetching) {
      setFetch(true);
    } else {
      setFetch(false);
    }
  }, [isLoading, isFetching]);

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center gap-4 h-[70dvh] md:h-[80dvh]">
        <Spinner size="lg" color="success" />
        <div className="">Fetching Quote</div>
      </div>
    );
  } else {
    return (
      <>
        <div className="grid place-items-center h-[70dvh] md:h-[80dvh]">
          <QuoteCard info={data} />
        </div>
      </>
    );
  }
};

export default Display;
