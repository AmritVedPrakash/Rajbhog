import heroBanner from "../../assets/brand/banner.png";

export default function HeroBrand() {
  return (
    <section className="w-full overflow-hidden bg-[#f8f8ef] pt-[76px] sm:pt-[82px]">
      {/* Hero Image */}
      <div className="relative w-full">
        <img
          src={heroBanner}
          alt="Our Rice Brands"
          className="block h-auto w-full object-cover object-center"
        />
      </div>
    </section>
  );
}