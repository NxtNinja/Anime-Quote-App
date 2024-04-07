import RefetchAtom from "@/utils/RefetchAtom";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

const FetchingButton = () => {
  const [fetch, setFetch] = useAtom(RefetchAtom);

  // Access the client
  const queryClient = useQueryClient();

  const handleRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ["quotes"] });
  };

  return (
    <>
      <Button
        isLoading={fetch}
        size="md"
        color="success"
        href="#"
        onPress={handleRefetch}
        className="bg-emerald-600 text-white"
      >
        <span className={`${fetch ? "hidden" : ""}`}>Get quote</span>
      </Button>
    </>
  );
};

export default FetchingButton;
