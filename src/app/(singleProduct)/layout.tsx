import Categories from "@/components/shared/categories";
import Location from "@/components/shared/location";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-6 md:px-10">
      {children}
      <Categories />
      <Location />
    </div>
  );
};

export default layout;
