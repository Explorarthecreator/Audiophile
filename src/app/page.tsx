import Categories from "@/components/shared/categories";
import Location from "@/components/shared/location";

export default function Home() {
  return (
    <div className="px-6 md:px-10 py-10 ">
      <Categories />
      <Location />
    </div>
  );
}
