import React, { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";


const Search: React.FC= () => {
    const [search, setSearch] = useState<string>("");

    return (
        <form
            className="text-[14px] mt-9 flex flex-row items-center justify-center"
        >
            <input
                type="text"
                className="py-[8px] pl-[20px] pr-[36px]  rounded outline-none w-[280px] shadow-md transition-all duration-300 text-[#666] focus:bg-[#ffffff] bg-[#fdfdfd] font-medium dark:bg-[#302d3a] dark:text-primary dark:focus:bg-[#474550]"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder={`search Movies`}
            />
            <button
                type="submit"
                className={`text-[18px] -ml-[32px] text-[#C6C6C6] z-[1]`}
            >
                <AiOutlineFilter />
            </button>
        </form>
    );
};

export default Search;