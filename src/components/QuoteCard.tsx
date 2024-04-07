import { quote } from "@/utils/QuoteType";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const QuoteCard = ({ info }: { info: quote }) => {
  return (
    <>
      <div className="flex flex-col gap-4 md:gap-6 w-full mx-auto items-center">
        <div className=" md:w-[35%] mx-auto text-xl md:text-2xl font-bold">
          Quote by <span className="text-emerald-600"> {info.character}</span>
        </div>

        <Card className="py-4 w-[90%] md:w-[35%]">
          <CardHeader className="pb-0 pt-2 md:text-2xl px-4 flex-col items-start gap-3">
            <div className="flex items-center gap-4">
              <div className="font-bold text-emerald-500">Anime : </div>
              <div className="text-emerald-700 font-semibold">{info.anime}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-bold text-emerald-500">Character : </div>
              <div className="text-emerald-700 font-semibold">
                {info.character}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                <div className="md:w-[20%] w-[30%] font-bold text-emerald-500">
                  Quote :{" "}
                </div>
                <div className="w-full text-emerald-700 font-semibold text-justify">
                  "{info.quote}"
                </div>
              </div>
              {/* {info.quote} */}
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default QuoteCard;
