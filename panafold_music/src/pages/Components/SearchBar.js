import * as React from "react";
export default function SearchBar({search,albumData,setCurrentAlbums}) {

    const [searchTerm, setSearchTerm] = React.useState("");
    
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        setCurrentAlbums(search(searchTerm,albumData));
    };
    
    return (
        <form className="w-full ml-10 mr-5" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            className='w-full border-2 border-gray-300 bg-white h-16 px-5 pr-16 rounded-lg text-sm focus:outline-none'
            />
        </form>
    );
}