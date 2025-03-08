"use client"
import { useState } from "react";

const Searchbar = ({ foodTrucks }: { foodTrucks: string[] }) => {
    const [query, setQuery] = useState("");

    const filteredTrucks = foodTrucks.filter(truck =>
        truck.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search food trucks..."
                className="w-full p-2 border rounded"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="mt-2">
                {filteredTrucks.map((truck, index) => (
                    <li key={index} className="p-2 bg-gray-100 rounded mt-1">
                        {truck}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Searchbar;
