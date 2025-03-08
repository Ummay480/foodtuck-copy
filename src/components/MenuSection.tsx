interface MenuItemProps {
    title: string;
    description: string;
    price: string;
    calories: string;
  }
  
  const MenuItem = ({ title, description, price, calories }: MenuItemProps) => (
    <div className="flex justify-between items-start py-4 border-b">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-400">{calories} CAL</p>
      </div>
      <span className="font-bold">{price}</span>
    </div>
  );
  
  interface MenuSectionProps {
    title: string;
    items: MenuItemProps[];
  }
  
  const MenuSection = ({ title, items }: MenuSectionProps) => (
    <section className="py-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>
        {items.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
  
  export default MenuSection;
  