import { Link } from "@tanstack/react-router";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  index?: number;
}

export default function ProductCard({
  image,
  name,
  description,
  index = 1,
}: ProductCardProps) {
  return (
    <div
      className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
      data-ocid={`products.item.${index}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-foreground mb-2">{name}</h3>
        <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-3">
          {description}
        </p>
        <p
          className="text-xs font-sans font-medium mb-4 py-2 px-3 rounded-lg"
          style={{
            backgroundColor: "oklch(0.93 0.025 145)",
            color: "oklch(0.40 0.060 145)",
          }}
        >
          MOQ: 25 kg | Pack Sizes: 1 kg, 5 kg, 10 kg
        </p>
        <Link
          to="/bulk-orders"
          className="btn-primary w-full justify-center text-sm"
          data-ocid={`products.button.${index}`}
        >
          Request Inquiry
        </Link>
      </div>
    </div>
  );
}
