import { PROVINCES_CITIES, type Province } from "../../data/provinces";

export default function SearchBar() {
  return (
    <div dir="rtl">
      {PROVINCES_CITIES.map((province: Province) => (
        <div key={province.name}>{province.name}</div>
      ))}
    </div>
  );
}
