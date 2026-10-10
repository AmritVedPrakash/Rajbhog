import { ArrowUpRight } from "lucide-react";

export default function RelatedBrandProducts({
  products,
  selectedProduct,
  brandName,
  onSelect,
}) {
  const relatedProducts = products
    .filter((product) => product.name !== selectedProduct.name)
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="border-t border-[#c5aa4c]/25 bg-white/35 px-6 py-7 sm:px-10 sm:py-9 lg:px-12">
      <div className="mb-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#947522]">
          Explore the range
        </p>
        <h3 className="mt-1 font-serif text-2xl font-semibold text-[#30452e] sm:text-3xl">
          Related Products from {brandName}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product) => (
          <button
            key={product.name}
            type="button"
            onClick={() => onSelect(product)}
            aria-label={`View ${product.fullName} details`}
            className="
              group flex min-w-0 items-center gap-3 rounded-2xl
              border border-[#c5aa4c]/25 bg-[#f8f8ef] p-3 text-left
              transition-all duration-300 hover:-translate-y-1
              hover:border-[#a18328]/50 hover:shadow-lg
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-[#55764f]
            "
          >
            <span className="flex h-20 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#eef0c9] to-[#d5dd8a] p-2">
              <img
                src={product.image}
                alt=""
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#947522]">
                {product.tag}
              </span>
              <span className="mt-1 block font-serif text-base font-semibold leading-tight text-[#30452e] sm:text-lg">
                {product.name}
              </span>
              <span className="mt-1 block text-xs text-[#536053]">
                View product details
              </span>
            </span>
            <ArrowUpRight
              size={17}
              className="ml-auto shrink-0 text-[#947522] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
