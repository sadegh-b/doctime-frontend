import { centers } from "../../data/centers"
import CenterCard from "./CenterCard"

export default function CentersGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {centers.map((center) => (
        <CenterCard key={center.id} center={center} />
      ))}
    </div>
  )
}
