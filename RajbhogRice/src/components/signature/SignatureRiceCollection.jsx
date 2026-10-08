import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Leaf,
  Star,
  Store,
  Users,
  Wheat,
  X,
} from "lucide-react";

// ─────────────────────────────────────────────
// Product Images — Signature Collection
// ─────────────────────────────────────────────
import tulsiDass from "../../assets/signature/tulsi-dass.png";
import sugandh from "../../assets/signature/sugandh.png";
import chakChak from "../../assets/signature/chak-chak.png";
import blueDiamond from "../../assets/signature/blue-diamond.png";
import jagan from "../../assets/signature/jagan.png";
import pyari from "../../assets/signature/pyari.png";
import ammiZan from "../../assets/signature/ammi-zan.png";
import chachiZan from "../../assets/signature/chachi-zan.png";
import abbaHazoor from "../../assets/signature/abba-hazoor.png";
import janeman from "../../assets/signature/janeman.png";
import nagmaBegum from "../../assets/signature/nagma-begum.png";
import chinaGate from "../../assets/signature/china-gate.png";
import fourSixFour from "../../assets/signature/464.png";
import saimaJaan from "../../assets/signature/saima-jaan.png";
import royalDiamond from "../../assets/signature/royal-diamond.png";
import lalGate from "../../assets/signature/lal-gate.png";
import gulzar from "../../assets/signature/gulzar.png";
import surya from "../../assets/signature/surya.png";
import hariBhog from "../../assets/signature/hari-bhog.png";
import prince from "../../assets/signature/prince.png";
import kesariya from "../../assets/signature/kesariya.png";
import rajmukut from "../../assets/signature/rajmukut.png";
import favor from "../../assets/signature/favor.png";
import pyariRice from "../../assets/signature/pyari-rice.png";
import abbuAmmi from "../../assets/signature/abbu-ammi.png";
import goldenDiamond from "../../assets/signature/golden-diamond.png";
import teenAkadda from "../../assets/signature/teen-akadda.png";
import fiveStar from "../../assets/signature/five-star.png";
import baba from "../../assets/signature/baba.png";
import sevenEightSix from "../../assets/signature/786.png";
import rajaHindustani from "../../assets/signature/raja-hindustani.png";
import airIndia from "../../assets/signature/air-india.png";
import chandni from "../../assets/signature/chandni.png";
import rajBhogDehraduni from "../../assets/signature/raj-bhog-dehraduni.png";
import sacchaMoti from "../../assets/signature/saccha-moti.png";
import rajMahal from "../../assets/signature/raj-mahal.png";
import vip from "../../assets/signature/vip.png";

// ─────────────────────────────────────────────
// Product Data
// ─────────────────────────────────────────────
const products = [
  {
    id: 11,
    
    name: "Tulsi Dass",
    description: "Traditional Basmati Rice",
    image: tulsiDass,
  },
  {
    id: 12,
   
    name: "Sugandh",
    description: "Aromatic Basmati Rice",
    image: sugandh,
  },
  {
    id: 13,
    
    name: "Chak Chak",
    description: "Consumer Basmati Rice",
    image: chakChak,
  },
  {
    id: 14,
    
    name: "Blue Diamond",
    description: "Premium Basmati Rice",
    image: blueDiamond,
  },
  {
    id: 15,
    
    name: "Jagan",
    description: "Everyday Basmati Rice",
    image: jagan,
  },
  {
    id: 16,
    
    name: "Pyari",
    description: "Everyday Basmati Rice",
    image: pyari,
  },
  {
    id: 17,
    
    name: "Ammi Zan",
    description: "Traditional Basmati Rice",
    image: ammiZan,
  },
  {
    id: 18,
    
    name: "Chachi Zan",
    description: "Family/Traditional Rice",
    image: chachiZan,
  },
  {
    id: 19,
    
    name: "Abba Hazoor",
    description: "Traditional Premium Rice",
    image: abbaHazoor,
  },
  {
    id: 20,
    
    name: "Janeman",
    description: "Consumer Basmati Rice",
    image: janeman,
  },
  {
    id: 21,
    
    name: "Nagma Begum",
    description: "Traditional Basmati Rice",
    image: nagmaBegum,
  },
  {
    id: 22,
    
    name: "China Gate",
    description: "Premium Basmati Rice",
    image: chinaGate,
  },
  {
    id: 23,
    
    name: "464",
    description: "Premium Basmati Rice",
    image: fourSixFour,
  },
  {
    id: 24,
    
    name: "Saima Jaan",
    description: "Traditional Basmati Rice",
    image: saimaJaan,
  },
  {
    id: 25,
   
    name: "Royal Diamond",
    description: "Premium Basmati Rice",
    image: royalDiamond,
  },
  {
    id: 26,
    
    name: "Lal Gate",
    description: "Everyday Basmati Rice",
    image: lalGate,
  },
  {
    id: 27,
    
    name: "Gulzar",
    description: "Basmati Rice, Biryani & Pulao Rice",
    image: gulzar,
  },
  {
    id: 28,
    
    name: "Surya",
    description: "Everyday Basmati Rice",
    image: surya,
  },
  {
    id: 29,
    
    name: "Hari Bhog",
    description: "Basmati Rice, 1121 Sella Rice",
    image: hariBhog,
  },
  {
    id: 30,
   
    name: "Prince",
    description: "Premium Basmati Rice",
    image: prince,
  },
  {
    id: 31,
    
    name: "Kesariya",
    description: "Extra Long Grain Basmati Rice",
    image: kesariya,
  },
  {
    id: 32,
    
    name: "Rajmukut",
    description: "Premium Basmati Rice",
    image: rajmukut,
  },
  {
    id: 33,
    
    name: "Favor",
    description: "Everyday Basmati Rice",
    image: favor,
  },
  {
    id: 34,
    
    name: "Pyari Rice",
    description: "Everyday Rice",
    image: pyariRice,
  },
  {
    id: 35,
   
    name: "Abbu Ammi",
    description: "Family/Traditional Basmati Rice",
    image: abbuAmmi,
  },
  {
    id: 36,
    
    name: "Golden Diamond",
    description: "Premium Basmati Rice",
    image: goldenDiamond,
  },
  {
    id: 37,
    
    name: "Teen Akadda",
    description: "Consumer Basmati Rice",
    image: teenAkadda,
  },
  {
    id: 38,
    
    name: "Five Star",
    description: "Premium Basmati Rice",
    image: fiveStar,
  },
  {
    id: 39,
   
    name: "Baba",
    description: "Traditional Basmati Rice",
    image: baba,
  },
  {
    id: 40,
    
    name: "786",
    description: "Premium/Traditional Basmati Rice",
    image: sevenEightSix,
  },
  {
    id: 41,
    
    name: "Raja Hindustani",
    description: "Extra Long Grain Basmati Rice",
    image: rajaHindustani,
  },
  {
    id: 42,
    
    name: "Air India",
    description: "Extra Long Grain Basmati Rice",
    image: airIndia,
  },
  {
    id: 43,
    
    name: "Chandni",
    description: "Extra Long Grain Basmati Rice",
    image: chandni,
  },
  {
    id: 44,
    
    name: "Raj Bhog – Dehraduni",
    description: "Dehraduni Basmati Rice",
    image: rajBhogDehraduni,
  },
  {
    id: 45,
    
    name: "Saccha Moti",
    description: "1121 Basmati Rice",
    image: sacchaMoti,
  },
  {
    id: 46,
    
    name: "Raj Mahal",
    description: "Premium Basmati Rice",
    image: rajMahal,
  },
  {
    id: 47,
    
    name: "VIP",
    description: "Premium Basmati Rice",
    image: vip,
  },
];

const brandDetails = {
  11: {
    overview:
      "Tulsi Dass is a traditional Basmati rice brand within the J.R. Rice portfolio, designed around the familiarity and appeal of Indian rice traditions. Its identity is relevant for consumers who value recognizable Indian rice brands and traditional food culture.",
    riceIdentity: "Traditional Basmati Rice",
    positioning: "Traditional, dependable and consumer-oriented",
    idealMarkets: "Retail, ethnic grocery, distributors and export markets",
    idealBuyers: "Rice importers, ethnic-food distributors, supermarkets and wholesalers",
    why:
      "Its strongest proposition is its traditional Indian identity combined with Basmati positioning, making it suitable for markets where authenticity and familiarity influence rice purchasing decisions.",
  },
  12: {
    overview:
      "Sugandh is positioned around the aromatic character traditionally associated with Basmati rice. Its identity connects with consumers who associate rice quality with aroma and traditional culinary experience.",
    riceIdentity: "Aromatic Basmati Rice",
    positioning: "Aromatic, traditional and household-oriented",
    idealMarkets: "Retail, ethnic grocery, household and foodservice markets",
    idealBuyers: "Importers, distributors, retailers and supermarkets",
    why:
      "Its strongest marketing opportunity is its aromatic Basmati positioning, giving retailers a simple, consumer-friendly product story to communicate at the point of sale.",
  },
  13: {
    overview:
      "Chak Chak is a consumer-oriented Basmati rice brand with a memorable identity and strong retail-facing character. Its presentation suits markets where packaging recognition and approachable branding influence consumer choice.",
    riceIdentity: "Basmati Rice",
    positioning: "Consumer-focused and accessible",
    idealMarkets: "Retail, supermarkets, ethnic grocery and family-consumption markets",
    idealBuyers: "Retailers, distributors and importers",
    why:
      "Its key strength is brand memorability. The distinctive name gives retailers an opportunity to build recognition around the product rather than competing only on generic rice specifications.",
  },
  14: {
    overview:
      "Blue Diamond is presented as a Basmati rice brand with a clean, premium-oriented visual identity. It suits retail environments where presentation, shelf visibility and recognizable product positioning influence purchasing decisions.",
    riceIdentity: "Basmati Rice",
    positioning: "Premium-looking and retail-oriented",
    idealMarkets: "Modern retail, ethnic retail, distributors and export markets",
    idealBuyers: "Importers, supermarkets, wholesalers and distributors",
    why:
      "The brand combines Basmati positioning with strong retail presentation, making it suitable for buyers looking to build a recognizable branded rice offering in competitive retail environments.",
  },
  15: {
    overview:
      "Jagan is a consumer-oriented Basmati rice brand designed around familiar Indian household consumption. It offers a straightforward proposition for everyday meals and traditional cuisine, suited to retail and distributor-led markets.",
    riceIdentity: "Basmati Rice",
    positioning: "Everyday and dependable",
    idealMarkets: "Retail, ethnic grocery and family-consumption markets",
    idealBuyers: "Importers, wholesalers, distributors and retailers",
    why:
      "Jagan's strength lies in its simple everyday Basmati proposition, making it appropriate for markets where household consumption represents a significant portion of rice demand.",
  },
  16: {
    overview:
      "Pyari is a consumer-focused Basmati rice brand with an approachable identity designed for everyday household consumption. Its positioning suits retailers seeking an accessible Indian rice brand for family-oriented markets.",
    riceIdentity: "Basmati Rice",
    positioning: "Everyday and accessible",
    idealMarkets: "Retail, ethnic grocery and household markets",
    idealBuyers: "Retailers, distributors, wholesalers and importers",
    why:
      "Its approachable identity and everyday positioning give retailers a simple, consumer-friendly Basmati proposition that fits naturally into family-oriented rice categories.",
  },
  17: {
    overview:
      "Ammi Zan combines a culturally familiar identity with a Basmati rice offering designed around traditional household cooking. The brand is relevant for ethnic retail markets and consumers seeking familiar Indian food brands.",
    riceIdentity: "Traditional Basmati Rice",
    positioning: "Family-oriented and traditional",
    idealMarkets: "Ethnic grocery, retail and household markets",
    idealBuyers: "Ethnic-food importers, distributors, wholesalers and retailers",
    why:
      "Its strongest differentiator is its family and cultural positioning, which can create an emotional connection with consumers beyond the basic commodity nature of rice.",
  },
  18: {
    overview:
      "Chachi Zan is a consumer-facing Basmati rice brand built around a distinctive family-oriented identity. Its positioning suits traditional cooking, everyday household consumption and ethnic retail markets.",
    riceIdentity: "Basmati Rice",
    positioning: "Family and traditional",
    idealMarkets: "Retail, ethnic grocery and household markets",
    idealBuyers: "Importers, distributors and retailers",
    why:
      "The brand's family-oriented identity and traditional positioning provide a differentiated consumer proposition within the Basmati category.",
  },
  19: {
    overview:
      "Abba Hazoor is a premium-presented rice brand with a distinctive cultural identity. It is relevant to traditional rice consumption and ethnic retail markets where consumers value familiar cultural associations alongside Indian rice products.",
    riceIdentity: "Traditional / premium-positioned rice",
    positioning: "Traditional and premium-presented",
    idealMarkets: "Ethnic retail, premium grocery and export markets",
    idealBuyers: "Importers, distributors and ethnic-food retailers",
    why:
      "The brand offers an opportunity to combine premium presentation with cultural familiarity, creating a differentiated proposition for ethnic and traditional-food markets.",
  },
  20: {
    overview:
      "Janeman is a Basmati rice brand developed with a strong consumer-facing identity and attractive retail presentation. It suits household consumption and traditional meals while providing retailers with a recognizable branded option.",
    riceIdentity: "Basmati Rice",
    positioning: "Consumer-oriented and premium-presented",
    idealMarkets: "Retail, ethnic grocery and export markets",
    idealBuyers: "Importers, retailers and distributors",
    why:
      "Its combination of Basmati positioning and strong consumer presentation gives Janeman potential in retail environments where brand recognition is important.",
  },
  21: {
    overview:
      "Nagma Begum is a traditionally positioned Basmati rice brand with a distinctive identity suited to ethnic and culturally oriented rice markets. It provides a familiar Indian rice proposition for household cooking and traditional meals.",
    riceIdentity: "Basmati Rice",
    positioning: "Traditional and ethnic",
    idealMarkets: "Ethnic grocery, traditional retail and export markets",
    idealBuyers: "Importers, distributors, wholesalers and retailers",
    why:
      "The brand's strength lies in its distinctive traditional identity, making it relevant to ethnic-food markets where cultural familiarity can influence consumer preference.",
  },
  22: {
    overview:
      "China Gate is positioned as a premium Basmati rice brand with an international-style identity and strong retail presentation. It suits distributors and importers serving both ethnic and broader mainstream retail environments.",
    riceIdentity: "Premium Basmati Rice",
    positioning: "Premium and export-oriented",
    idealMarkets: "International retail, ethnic grocery and mainstream distribution",
    idealBuyers: "Importers, distributors, supermarkets and wholesalers",
    why:
      "Its combination of premium Basmati positioning and strong retail identity provides an attractive proposition for international distributors seeking recognizable Indian rice brands.",
  },
  23: {
    overview:
      "464 is positioned as a premium Basmati rice brand with a straightforward and recognizable product identity. It provides retailers and distributors with another branded option within the premium Indian rice category.",
    riceIdentity: "Basmati Rice",
    positioning: "Premium",
    idealMarkets: "Retail, distribution and export",
    idealBuyers: "Importers, distributors, wholesalers and retailers",
    why:
      "Its straightforward identity and premium positioning make it suitable for buyers looking to diversify their branded Basmati portfolio.",
  },
  24: {
    overview:
      "Saima Jaan is a traditionally styled Basmati rice brand combining an elegant identity with a consumer-oriented presentation. It suits ethnic retail and households seeking Indian Basmati for everyday and traditional preparations.",
    riceIdentity: "Basmati Rice",
    positioning: "Traditional and elegant",
    idealMarkets: "Ethnic grocery, retail and export markets",
    idealBuyers: "Importers, ethnic distributors, retailers and wholesalers",
    why:
      "Its elegant traditional identity provides a differentiated proposition for ethnic retail environments where consumers look for culturally familiar Indian food products.",
  },
  25: {
    overview:
      "Royal Diamond is positioned as a premium Basmati rice offering with an elevated brand identity. It is designed for retailers and distributors serving consumers looking for premium-presented Indian rice products.",
    riceIdentity: "Premium Basmati Rice",
    positioning: "Premium and elevated",
    idealMarkets: "Premium retail, ethnic grocery and export",
    idealBuyers: "Importers, distributors, premium retailers and wholesalers",
    why:
      "The brand offers a premium-oriented identity suitable for higher-value retail positioning, giving distributors an option beyond everyday Basmati products.",
  },
  26: {
    overview:
      "Lal Gate is a consumer-facing rice brand positioned for everyday household consumption and traditional rice dishes. Its recognizable retail identity suits distributors and retailers serving regular rice demand.",
    riceIdentity: "Basmati Rice",
    positioning: "Everyday and accessible",
    idealMarkets: "Retail, ethnic grocery and household markets",
    idealBuyers: "Retailers, distributors, wholesalers and importers",
    why:
      "Its proposition is a recognizable branded Basmati option for everyday household consumption.",
  },
  27: {
    overview:
      "Gulzar is positioned around traditional rice dishes including biryani and pulao. Its consumer presentation gives the brand a strong shelf identity, while its culinary positioning makes it relevant to households and ethnic-food retailers.",
    riceIdentity: "Basmati / Biryani & Pulao Rice",
    positioning: "Traditional culinary rice",
    idealMarkets: "Retail, ethnic grocery and foodservice",
    idealBuyers: "Importers, retailers, restaurants and distributors",
    why:
      "The brand has a clear culinary-use proposition, allowing it to be marketed around popular traditional rice preparations rather than only as a generic rice product.",
  },
  28: {
    overview:
      "Surya is a Basmati rice brand positioned for consumers seeking a familiar rice option for traditional Indian meals. Its straightforward positioning suits household consumption and retail distribution.",
    riceIdentity: "Basmati Rice",
    positioning: "Everyday and dependable",
    idealMarkets: "Retail, ethnic grocery and distribution",
    idealBuyers: "Importers, wholesalers, distributors and retailers",
    why:
      "Surya provides a simple, dependable Basmati proposition suitable for markets with strong everyday household rice consumption.",
  },
  29: {
    overview:
      "Hari Bhog offers a differentiated rice proposition within the J.R. Rice portfolio, with Basmati positioning alongside a 1121 Sella Rice presentation in the catalogue. This gives the brand relevance across traditional Basmati consumption and markets seeking Sella rice formats.",
    riceIdentity: "Basmati / 1121 Sella Rice",
    positioning: "Versatile and export-oriented",
    idealMarkets: "Retail, ethnic grocery, foodservice and export",
    idealBuyers: "Importers, distributors, wholesalers and retailers",
    why:
      "Its key advantage is portfolio versatility, particularly through the combination of Basmati positioning and 1121 Sella presentation.",
  },
  30: {
    overview:
      "Prince is a premium-looking Basmati rice brand designed for strong retail recognition. Its presentation suits household consumption, traditional Indian cuisine and international ethnic-food distribution.",
    riceIdentity: "Basmati Rice",
    positioning: "Premium and export-oriented",
    idealMarkets: "Retail, ethnic grocery and international distribution",
    idealBuyers: "Importers, distributors, retailers and wholesalers",
    why:
      "Prince offers a premium-presented Basmati proposition suitable for international buyers seeking branded Indian rice products.",
  },
  31: {
    overview:
      "Kesariya is presented as an Extra Long Grain Basmati rice brand with multiple quality presentations. Its long-grain positioning and strong retail presentation suit traditional rice dishes and premium everyday consumption.",
    riceIdentity: "Extra Long Grain Basmati Rice",
    positioning: "Premium everyday Basmati",
    idealMarkets: "Retail, ethnic grocery, distribution and export",
    idealBuyers: "Importers, distributors, retailers and wholesalers",
    why:
      "Its Extra Long Grain Basmati positioning gives buyers a clear proposition for markets where long-grain rice is an important purchase consideration.",
  },
  32: {
    overview:
      "Rajmukut is positioned as a premium Basmati rice brand with a distinctive royal identity. It suits consumers seeking an elevated rice proposition for traditional meals, celebrations and premium household consumption.",
    riceIdentity: "Premium Basmati Rice",
    positioning: "Premium and royal",
    idealMarkets: "Premium retail, ethnic grocery and export",
    idealBuyers: "Importers, premium retailers, distributors and wholesalers",
    why:
      "Its royal brand identity and premium positioning create an opportunity for higher-value retail presentation and premium consumer targeting.",
  },
  33: {
    overview:
      "Favor is a consumer-oriented Basmati rice brand designed for everyday and traditional rice consumption. Its straightforward retail presentation suits markets seeking accessible branded Basmati products.",
    riceIdentity: "Basmati Rice",
    positioning: "Everyday and accessible",
    idealMarkets: "Retail, ethnic grocery and distribution",
    idealBuyers: "Retailers, distributors, wholesalers and importers",
    why:
      "Favor provides a straightforward branded Basmati proposition suitable for broad household and retail markets.",
  },
  34: {
    overview:
      "Pyari Rice is an accessible consumer rice brand designed around regular household consumption. Its simple positioning suits family-oriented retail markets where dependable everyday rice is a core requirement.",
    riceIdentity: "Everyday Rice",
    positioning: "Accessible and family-oriented",
    idealMarkets: "Retail, household and ethnic grocery",
    idealBuyers: "Retailers, wholesalers, distributors and importers",
    why:
      "The brand has a clear family and everyday consumption proposition, making it suitable for retailers serving broad household markets.",
  },
  35: {
    overview:
      "Abbu Ammi carries a strong family-oriented identity connected with traditional home cooking and everyday Indian meals. Its culturally resonant positioning is relevant for ethnic retail and household-focused markets.",
    riceIdentity: "Family & Traditional Basmati",
    positioning: "Family-oriented and traditional",
    idealMarkets: "Ethnic grocery, retail and export",
    idealBuyers: "Ethnic-food importers, distributors, wholesalers and retailers",
    why:
      "Its strongest opportunity is its family-oriented cultural identity, which can help the product establish an emotional connection with consumers in ethnic markets.",
  },
  36: {
    overview:
      "Golden Diamond is positioned as a premium Basmati rice brand with an upscale visual identity. It suits retailers and distributors seeking a premium-looking Indian rice proposition for household consumption and traditional cuisine.",
    riceIdentity: "Premium Basmati Rice",
    positioning: "Premium and upscale",
    idealMarkets: "Premium retail, ethnic grocery and export",
    idealBuyers: "Importers, distributors, supermarkets and wholesalers",
    why:
      "The combination of premium Basmati positioning and upscale presentation gives Golden Diamond potential for premium retail shelves.",
  },
  37: {
    overview:
      "Teen Akadda is a distinctive consumer Basmati rice brand built around a memorable identity and bold retail presentation. It suits markets where recognizable branding and shelf differentiation influence consumer choice.",
    riceIdentity: "Basmati Rice",
    positioning: "Consumer-focused and distinctive",
    idealMarkets: "Retail, ethnic grocery and family-consumption markets",
    idealBuyers: "Retailers, distributors, wholesalers and importers",
    why:
      "Its key advantage is memorability and shelf differentiation, providing retailers with a branded Basmati product that can stand apart from generic rice offerings.",
  },
  38: {
    overview:
      "Five Star is positioned as a premium Basmati rice brand with a name that communicates an elevated consumer proposition. It suits retailers, distributors and households looking for a recognizable premium rice option.",
    riceIdentity: "Premium Basmati Rice",
    positioning: "Premium",
    idealMarkets: "Retail, premium grocery, ethnic retail and export",
    idealBuyers: "Importers, distributors, retailers and wholesalers",
    why:
      "The brand provides a clear premium-market proposition, making it suitable for retailers seeking differentiated Basmati products for higher-value consumer segments.",
  },
  39: {
    overview:
      "Baba is a consumer-oriented rice brand with a strong traditional identity and Basmati positioning. It suits ethnic retail, household consumption and distributor-led markets seeking familiar Indian rice brands.",
    riceIdentity: "Basmati Rice",
    positioning: "Traditional and consumer-oriented",
    idealMarkets: "Ethnic grocery, retail and export",
    idealBuyers: "Importers, distributors, wholesalers and retailers",
    why:
      "Baba offers a familiar traditional identity that can work particularly well in ethnic retail environments and markets with established demand for Indian rice brands.",
  },
  40: {
    overview:
      "786 is a distinctive Basmati rice brand with strong cultural recognition in its naming and presentation. Its positioning is relevant to ethnic retail markets and consumers seeking Indian Basmati for household and traditional cuisine.",
    riceIdentity: "Premium / Traditional Basmati Rice",
    positioning: "Premium and culturally oriented",
    idealMarkets: "Ethnic grocery, export and traditional retail",
    idealBuyers: "Importers, distributors, ethnic retailers and wholesalers",
    why:
      "The brand's distinctive identity provides strong cultural positioning, making it relevant to ethnic markets where culturally familiar brands can have strong consumer resonance.",
  },
  41: {
    overview:
      "Raja Hindustani is positioned as an Extra Long Grain Basmati rice brand combining a strong Indian identity with a premium-oriented proposition. Its presentation suits ethnic markets, traditional cuisine and retail distribution.",
    riceIdentity: "Extra Long Grain Basmati Rice",
    positioning: "Premium and traditional",
    idealMarkets: "Ethnic retail, international distribution and export markets",
    idealBuyers: "Importers, distributors, retailers and wholesalers",
    why:
      "The brand combines Extra Long Grain Basmati positioning with a distinctly Indian identity, creating a strong proposition for international ethnic-food markets.",
  },
  42: {
    overview:
      "Air India is presented as an Extra Long Grain Basmati rice brand with multiple packaging presentations. Its recognizable identity and long-grain positioning suit retail, distribution and international markets serving consumers seeking Indian Basmati rice.",
    riceIdentity: "Extra Long Grain Basmati Rice",
    positioning: "Retail and export-oriented",
    idealMarkets: "Retail, ethnic grocery and international distribution",
    idealBuyers: "Importers, distributors, supermarkets and wholesalers",
    why:
      "The brand combines Extra Long Grain Basmati positioning with strong brand recognition, providing an attractive option for international retail and ethnic-food distribution.",
  },
  43: {
    overview:
      "Chandni is an Extra Long Grain Basmati rice brand with a clean consumer-facing presentation. It is positioned for household consumption and traditional rice dishes and gives distributors an additional branded option for retail and ethnic-food markets.",
    riceIdentity: "Extra Long Grain Basmati Rice",
    positioning: "Consumer and retail-oriented",
    idealMarkets: "Retail, ethnic grocery and household markets",
    idealBuyers: "Retailers, distributors, wholesalers and importers",
    why:
      "Its Extra Long Grain Basmati positioning and clean retail presentation make it suitable for buyers seeking an accessible branded product for household markets.",
  },
  44: {
    overview:
      "Raj Bhog Dehraduni extends the Raj Bhog identity into a distinct Dehraduni Basmati offering. It gives consumers and distributors access to a differentiated Indian Basmati variety while retaining the familiarity of the Raj Bhog brand identity.",
    riceIdentity: "Dehraduni Basmati Rice",
    positioning: "Differentiated Basmati",
    idealMarkets: "Retail, ethnic grocery and export",
    idealBuyers: "Importers, distributors, retailers and wholesalers",
    why:
      "Its strongest advantage is variety differentiation, offering a Dehraduni Basmati proposition within an established brand family.",
  },
  45: {
    overview:
      "Saccha Moti is presented as a 1121 Basmati rice brand with a distinctive consumer-facing identity. It suits households and retail markets seeking long-grain Basmati for traditional meals and rice-based occasions.",
    riceIdentity: "1121 Basmati Rice",
    positioning: "Consumer and household Basmati",
    idealMarkets: "Retail, ethnic grocery and household markets",
    idealBuyers: "Retailers, distributors, wholesalers and importers",
    why:
      "Its clear 1121 Basmati positioning provides a recognizable product proposition for buyers seeking this established category within the Indian rice market.",
  },
  46: {
    overview:
      "Raj Mahal is positioned as a premium-oriented Basmati rice brand with a strong traditional identity. Its presentation suits consumers looking for an elevated rice option for traditional meals, celebrations and premium everyday consumption.",
    riceIdentity: "Premium Basmati Rice",
    positioning: "Premium and traditional",
    idealMarkets: "Premium retail, ethnic grocery and export",
    idealBuyers: "Importers, distributors, retailers and wholesalers",
    why:
      "The brand combines premium Basmati positioning with a strong traditional identity, making it appropriate for higher-value retail and ethnic-food markets.",
  },
  47: {
    overview:
      "VIP is a consumer-facing Basmati rice brand presented with a premium visual identity. It provides retailers and distributors with another differentiated branded Basmati option for household consumption and Indian rice markets.",
    riceIdentity: "Basmati Rice",
    positioning: "Premium-presented and consumer-oriented",
    idealMarkets: "Retail, ethnic grocery and distribution",
    idealBuyers: "Importers, distributors, retailers and wholesalers",
    why:
      "Its strongest proposition is premium presentation combined with Basmati positioning, making it suitable for retailers seeking visually differentiated Indian rice brands.",
  },
};

// ─────────────────────────────────────────────
// Product Card
// ─────────────────────────────────────────────
const ProductCard = ({ product, onViewProduct }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        rotate: -2,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 90,
        damping: 16,
      }}
      className="group relative"
    >
      {/* ───────────────── Image Area ───────────────── */}
      <div className="relative z-20 flex h-[285px] items-end justify-center pointer-events-none">
        {/* Glow */}
        <div
          className="
            absolute bottom-5 left-1/2
            h-20 w-44
            -translate-x-1/2
            rounded-full
            bg-[#c5a64b]/20
            blur-3xl
          "
        />

        {/* Ground Shadow */}
        <div
          className="
            absolute bottom-2 left-1/2
            h-5 w-28
            -translate-x-1/2
            rounded-[50%]
            bg-black/15
            blur-xl
          "
        />

        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="
            max-h-[270px]
            max-w-[84%]
            object-contain
            drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]
            transition-transform
            duration-700
            group-hover:scale-[1.05]
          "
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ───────────────── Card ───────────────── */}
      <div
        className="
          relative z-10
          -mt-9
          min-h-[325px]
          overflow-hidden
          rounded-[30px]
          border border-[#b9a24a]/30
          bg-gradient-to-br
          from-[#f5f3d9]
          via-[#e9eab6]
          to-[#dbe477]
          px-5 pt-14 pb-7
          text-center
          shadow-[0_18px_50px_rgba(40,60,30,0.12)]
          transition-all duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_28px_65px_rgba(40,60,30,0.20)]
        "
      >
        {/* Decorative Number */}
        <span
          className="
            pointer-events-none
            absolute right-5 top-3
            text-[75px]
            font-black
            leading-none
            text-[#284934]/[0.06]
          "
        >
          {product.number}
        </span>

        {/* Top Gold Line */}
        <div
          className="
            absolute left-1/2 top-0
            h-[3px] w-20
            -translate-x-1/2
            rounded-full
            bg-[#b9a24a]
          "
        />

        {/* Tag */}
        

        {/* Product Name */}
        <h3
          className="
            relative z-10
            font-serif
            text-[26px]
            font-semibold
            leading-tight
            text-[#263d2a]
          "
        >
          {product.name}
        </h3>

        {/* Product Type */}
        <p
          className="
            relative z-10
            mt-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#a9892d]
          "
        >
          {product.description}
        </p>

        {/* Divider */}
        <div className="mx-auto my-4 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-[#b9a24a]/60" />

          <Star
            size={12}
            fill="currentColor"
            className="text-[#b9a24a]"
          />

          <span className="h-px w-10 bg-[#b9a24a]/60" />
        </div>

        {/* Small Description */}
       

        {/* Explore Button */}
        <motion.button
          type="button"
          onClick={() => onViewProduct(product)}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            mx-auto mt-5
            flex items-center gap-2
            rounded-full
            bg-[#284934]
            px-5 py-2.5
            text-xs
            font-semibold
            text-[#ead78b]
            shadow-[0_8px_20px_rgba(40,73,52,0.18)]
            transition-all duration-300
            hover:bg-[#1f3828]
          "
        >
          Explore Product
          <ArrowUpRight size={15} />
        </motion.button>

        {/* Bottom Quality */}
        <div
          className="
            mt-5
            flex items-center justify-center gap-1.5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.14em]
            text-[#536053]/80
          "
        >
          <Leaf size={12} className="text-[#71884a]" />
          Signature Premium Quality
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function SignatureRiceCollection() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  React.useEffect(() => {
    if (!selectedProduct) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <section
      id="signature-rice-collection"
      className="relative scroll-mt-[76px] overflow-hidden bg-[#f8f8ef] py-20 sm:scroll-mt-[82px] md:py-24"
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute -left-32 top-20
          h-72 w-72
          rounded-full
          bg-[#dbe477]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-32 bottom-10
          h-80 w-80
          rounded-full
          bg-[#c5a64b]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ───────────────── Header ───────────────── */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Collection Pill */}
          <div
            className="
              mx-auto mb-5
              flex w-fit items-center gap-2
              rounded-full
              border border-[#b9a24a]/30
              bg-[#284934]
              px-4 py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#ead78b]
            "
          >
            <Sparkles size={13} />
            Signature Collection
          </div>

          {/* Heading */}
          <h2
            className="
              font-serif
              text-4xl
              font-semibold
              leading-tight
              text-[#263d2a]
              sm:text-5xl
            "
          >
            Signature{" "}
            <span className="text-[#a9892d]">
              Rice Collection
            </span>
          </h2>

          {/* Gold Divider */}
          <div className="mx-auto my-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b9a24a]/60" />

            <Star
              size={14}
              fill="currentColor"
              className="text-[#b9a24a]"
            />

            <span className="h-px w-16 bg-[#b9a24a]/60" />
          </div>

          {/* Intro */}
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#536053] sm:text-base">
            Explore our signature rice collection,
            bringing quality, tradition and trusted taste.
          </p>
        </motion.div>

        {/* ───────────────── Product Grid ───────────────── */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-6
            gap-y-14
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, ...brandDetails[product.id] }}
              onViewProduct={setSelectedProduct}
            />
          ))}
        </div>

        {/* ───────────────── Bottom Message ───────────────── */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mx-auto mt-16
            flex w-fit items-center gap-2
            rounded-full
            border border-[#b9a24a]/25
            bg-[#284934]/5
            px-5 py-2.5
            text-xs
            font-medium
            text-[#536053]
          "
        >
          <Leaf size={14} className="text-[#71884a]" />
          Signature grains. Trusted names. Timeless quality.
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signature-brand-title"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="absolute inset-0 bg-[#142218]/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.94 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto
                rounded-[30px] border border-[#c5aa4c]/40 bg-[#f8f8ef]
                shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:rounded-[38px]
              "
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close brand details"
                className="
                  absolute right-4 top-4 z-30 flex h-11 w-11 items-center
                  justify-center rounded-full border border-[#b9a24a]/30
                  bg-white/80 text-[#30452e] shadow-lg backdrop-blur-md
                  transition-all duration-300 hover:rotate-90
                  hover:bg-[#30452e] hover:text-white sm:right-6 sm:top-6
                "
              >
                <X size={21} />
              </button>

              <div className="absolute left-8 right-8 top-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#b69a35] to-transparent" />

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div
                  className="
                    relative flex min-h-[350px] items-center justify-center
                    overflow-hidden rounded-t-[30px]
                    bg-gradient-to-br from-[#eef0c9] via-[#e6e8b7] to-[#d5dd8a]
                    p-8 sm:min-h-[430px] sm:p-12
                    lg:rounded-l-[38px] lg:rounded-tr-none
                  "
                >
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
                  <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[#b69a35]/20" />
                  <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full border border-[#b69a35]/20" />

                  <span className="absolute left-6 top-5 font-serif text-7xl font-bold text-[#30452e]/10">
                    {String(selectedProduct.id).padStart(2, "0")}
                  </span>

                  <motion.img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} rice`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      relative z-10 max-h-[300px] max-w-[88%] object-contain
                      drop-shadow-[0_30px_35px_rgba(0,0,0,0.25)]
                      sm:max-h-[370px]
                    "
                  />

                  <div
                    className="
                      absolute bottom-6 left-1/2 z-20 -translate-x-1/2
                      whitespace-nowrap rounded-full border
                      border-[#b79b3c]/30 bg-white/70 px-4 py-2
                      text-xs font-semibold tracking-wider text-[#59622f]
                      shadow-lg backdrop-blur-md
                    "
                  >
                    J.R. RICE SIGNATURE COLLECTION
                  </div>
                </div>

                <div className="p-7 sm:p-10 lg:p-12">
                  <div
                    className="
                      mb-5 inline-flex items-center gap-2 rounded-full
                      border border-[#b79b3c]/30 bg-[#e9ebc4]/70 px-4 py-2
                    "
                  >
                    <Sparkles size={14} className="text-[#947522]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#59622f]">
                      Signature Rice Brand
                    </span>
                  </div>

                  <h2
                    id="signature-brand-title"
                    className="
                      font-serif text-3xl font-semibold leading-tight
                      text-[#263c29] sm:text-4xl lg:text-5xl
                    "
                  >
                    {selectedProduct.name}
                  </h2>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-px w-14 bg-[#aa8b2d]" />
                    <div className="h-2 w-2 rotate-45 bg-[#aa8b2d]" />
                    <div className="h-px w-14 bg-[#aa8b2d]" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#30452e]">
                    {selectedProduct.description}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#536053] sm:text-base">
                    {selectedProduct.overview}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Wheat size={19} className="mb-3 text-[#9a7d25]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Rice Identity
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.riceIdentity}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Award size={19} className="mb-3 text-[#9a7d25]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Market Positioning
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.positioning}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Store size={19} className="mb-3 text-[#9a7d25]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Ideal Markets
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.idealMarkets}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#b9a24a]/20 bg-[#f1f1d9] p-4">
                      <Users size={19} className="mb-3 text-[#55764f]" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#777e62]">
                        Ideal Buyers
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#30452e]">
                        {selectedProduct.idealBuyers}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="mb-4 flex items-center gap-2">
                      <Award size={19} className="text-[#a18328]" />
                      <h3 className="font-serif text-xl font-semibold text-[#30452e]">
                        Why {selectedProduct.name}?
                      </h3>
                    </div>
                    <div
                      className="
                        flex items-start gap-3 rounded-xl border
                        border-[#c5aa4c]/20 bg-white/60 px-4 py-4
                      "
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#55764f]"
                      />
                      <p className="text-sm leading-6 text-[#465244]">
                        {selectedProduct.why}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}