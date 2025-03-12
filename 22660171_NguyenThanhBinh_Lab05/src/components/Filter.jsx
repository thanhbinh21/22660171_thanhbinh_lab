import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

const filterOptions = {
    type: ["Pan-fried", "Grilled", "Sauteed", "Steamed", "Stir-fried", "Roasted", "Baked", "Stewed"],
    rating: [1, 2, 3, 4, 5],
};



const Filter = () => {
    const [filters, setFilters] = useState({
        type: [],
        time: 50,
        rating: [],
    });
    const [expanded, setExpanded] = useState({ type: true, time: true, rating: true });

    const toggleFilter = (category) => {
        setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
    };
    return (
        <div>
            <div className="p-4 border rounded-lg bg-white shadow-md w-64">
                <h3 className="text-lg font-semibold flex items-center justify-between">FILTERS</h3>

                {/* Type Filter */}
                <div className="mt-4">
                    <h4 className="font-medium flex justify-between items-center cursor-pointer" onClick={() => toggleFilter("type")}>
                        Type {expanded.type ? <ChevronUp /> : <ChevronDown />}
                    </h4>
                    {expanded.type && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {filterOptions.type.map((type, index) => (
                                <div key={type} className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500" />
                                    <span>{type}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Time Filter */}
                <div className="mt-4">
                    <h4 className="font-medium flex justify-between items-center cursor-pointer" onClick={() => toggleFilter("time")}>
                        Time {expanded.time ? <ChevronUp /> : <ChevronDown />}
                    </h4>
                    {expanded.time && (
                        <input type="range" min="0" max="50" defaultValue={filters.time} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500 mt-2" />
                    )}
                </div>

                {/* Rating Filter */}
                <div className="mt-4">
                    <h4 className="font-medium flex justify-between items-center cursor-pointer" onClick={() => toggleFilter("rating")}>
                        Rating {expanded.rating ? <ChevronUp /> : <ChevronDown />}
                    </h4>
                    {expanded.rating && (
                        <div className="grid grid-cols-5 gap-2 mt-2">
                            {filterOptions.rating.map((star) => (
                                <Star
                                    key={star}
                                    className={`h-5 w-5 cursor-pointer ${filters.rating.includes(star) ? "text-pink-500" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <button className="mt-4 w-full px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white">Apply</button>
            </div>
        </div>
    )

}

export default Filter

