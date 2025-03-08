import React from "react";

interface CategoryFilterProps {
  onCategoryChange: (category: string, isChecked: boolean) => void;
}

const categories = ["Dinner", "Lunch", "Breakfast", "Dessert","Drink","Snacks","Healthy", "FastFood"];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.id;
    const isChecked = event.target.checked;
    onCategoryChange(category, isChecked); // Call the prop function
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Category</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <input
              type="checkbox"
              id={category}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor={category} className="text-sm">
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
