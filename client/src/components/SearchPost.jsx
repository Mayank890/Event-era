import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "../services/api"; // Import axios for making API requests
import { Link } from "react-router-dom";

const SearchPost = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    fetchSearchResults(e.target.value); // Fetch search results whenever input changes
  };

  const fetchSearchResults = async (search) => {
    if (search === "" || search === undefined) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await axios.get(
        `/events/fetch-event?eventTitle=${search && search}`
      );
      console.log(response);
      setSearchResults(response.data); // Update search results state with response data
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [search]);

  return (
    <div className="flex flex-col w-full mx-auto relative">
      <div className="flex w-full h-12 border border-grey-400 relative px-4 py-2 rounded-3xl items-center focus-within:border-black">
        <CiSearch size={17.5} className="text-grey-400" />
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search"
          className="outline-none bg-transparent pl-2 w-full"
        />
      </div>
      {searchResults.length > 0 && search.length > 0 && (
        <div className="mt-4 absolute top-8 w-full">
          {/* <h2 className="text-lg font-medium">Search Results:</h2> */}
          <ul className="mt-2">
            {searchResults.map((result) => (
              <li
                key={result.id}
                className="border bg-white border-gray-300 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                {/* Display search result content */}
                <Link to={`/events/${result.id}`}>
                  {" "}
                  <h3 className="text-black font-medium">{result.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPost;