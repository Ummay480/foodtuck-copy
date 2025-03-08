import Searchbar from "@/components/Searchbar";

const foodTrucks = ["Spicy Bites", "Taco Express", "Cheesy Grill", "BBQ King", "Vegan Delight"];

export default function SearchPage() {
    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Food Truck Search</h2>
            <Searchbar foodTrucks={foodTrucks} />
        </div>
    );
}
