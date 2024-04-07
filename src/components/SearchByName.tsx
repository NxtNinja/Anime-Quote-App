import { Input } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";

const SearchByName = () => {
    return (
        <>
            <div className="">
                <Input
                startContent={
                    <BiSearch size={25} color="grey"/>
                } 
                    className="max-w-full"
                    type="text"
                    placeholder="Enter character name"
                    size="sm"
                />
            </div>
        </>
    );
}

export default SearchByName;