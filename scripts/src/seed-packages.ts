import { db, packagesTable } from "@workspace/db";

const packages = [
  // ==================== DUBAI PACKAGES ====================
  {
    slug: "dubai-evening-desert-safari",
    imageUrl: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80",
    name: "Dubai Evening Desert Safari",
    tagline: "Experience the Magic of Arabian Nights",
    description: "Embark on an unforgettable evening desert safari adventure in the golden dunes of Dubai. This premium experience combines adrenaline-pumping dune bashing, authentic Bedouin hospitality, camel rides, and a spectacular BBQ dinner under the stars. Watch the sunset paint the sand dunes in shades of gold and crimson as you enjoy traditional entertainment including belly dancing, Tanoura spinning, and fire shows.",
    destination: "dubai",
    category: "desert",
    duration: "6 hours (4:00 PM – 10:00 PM)",
    price: 250,
    currency: "AED",
    maxGroupSize: 20,
    highlights: [
      "Thrilling dune bashing in 4x4 Land Cruisers",
      "Camel riding at sunset",
      "Traditional Bedouin camp experience",
      "BBQ dinner with 30+ dishes",
      "Live belly dance & Tanoura show",
      "Fire show performance",
      "Henna painting & traditional dress",
      "Shisha smoking experience",
      "Falconry demonstration",
      "Star gazing in the desert"
    ],
    includes: [
      "Hotel pickup & drop-off (Dubai area)",
      "Dune bashing in 4x4 vehicles",
      "Camel ride (1 round)",
      "Quad bike ride (15 mins)",
      "BBQ dinner (unlimited)",
      "Soft drinks, water & tea",
      "Belly dance show",
      "Tanoura show",
      "Fire show",
      "Henna painting",
      "Traditional Arabic dress (photo opportunity)",
      "Professional guide & driver"
    ],
    excludes: [
      "Alcoholic beverages",
      "Personal expenses",
      "Gratuities",
      "Sand boarding (optional add-on)"
    ],
    itinerary: [
      "4:00 PM – Hotel pickup in comfortable 4x4",
      "4:30 PM – Arrive at desert & begin dune bashing",
      "5:00 PM – Camel riding & sand dune photography",
      "5:30 PM – Reach Bedouin camp, try henna & traditional dress",
      "6:00 PM – Watch mesmerizing desert sunset",
      "6:30 PM – BBQ dinner buffet opens",
      "7:30 PM – Live entertainment: belly dance & Tanoura show",
      "8:00 PM – Fire show performance",
      "8:30 PM – Stargazing & shisha time",
      "9:30 PM – Transfer back to hotel",
      "10:00 PM – Drop-off at hotel"
    ],
    badge: "Most Popular",
    isPopular: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 2847,
    seoTitle: "Dubai Evening Desert Safari 2025 | Best BBQ & Dune Bashing Tour | Funnel Experts Tours",
    seoDescription: "Book Dubai's top-rated evening desert safari. Dune bashing, camel ride, BBQ dinner, belly dance show & more. Hotel pickup included. From AED 250. Book now!",
    seoKeywords: "Dubai desert safari, evening desert safari Dubai, dune bashing Dubai, BBQ dinner desert Dubai, camel ride Dubai, Bedouin camp Dubai"
  },
  {
    slug: "dubai-overnight-desert-safari",
    imageUrl: "https://images.unsplash.com/photo-1542382103-68f7491d9d93?w=1200&q=80",
    name: "Dubai Overnight Desert Safari",
    tagline: "Sleep Under a Million Stars in the Arabian Desert",
    description: "Take your desert experience to the next level with an extraordinary overnight stay in a traditional Bedouin camp. After an exhilarating evening of dune bashing, camel rides, and live entertainment, retire to your comfortable desert tent and wake up to a breathtaking desert sunrise. This is the ultimate Arabian adventure — a once-in-a-lifetime experience that will stay with you forever.",
    destination: "dubai",
    category: "desert",
    duration: "18 hours (4:00 PM – 10:00 AM next day)",
    price: 550,
    currency: "AED",
    maxGroupSize: 16,
    highlights: [
      "Dune bashing at sunset & sunrise",
      "Overnight stay in premium desert camp",
      "Desert sunrise photography",
      "Full BBQ dinner & morning breakfast",
      "Stargazing in pristine dark skies",
      "Morning nature walk with guide",
      "All evening entertainment included",
      "Private tent accommodation"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "Dune bashing (evening & optional morning)",
      "Camel ride",
      "Overnight tent accommodation",
      "BBQ dinner (unlimited)",
      "Continental breakfast",
      "All drinks (non-alcoholic)",
      "Evening entertainment package",
      "Morning desert walk",
      "Professional guide"
    ],
    excludes: [
      "Alcoholic beverages",
      "Personal expenses",
      "Quad biking (optional)"
    ],
    itinerary: [
      "4:00 PM – Hotel pickup",
      "4:30 PM – Sunset dune bashing adventure",
      "5:30 PM – Check-in to Bedouin camp",
      "6:00 PM – Sunset camel ride & photography",
      "7:00 PM – BBQ dinner under the stars",
      "8:00 PM – Live entertainment shows",
      "9:00 PM – Stargazing session with guide",
      "10:00 PM – Retire to your desert tent",
      "5:30 AM – Wake up for sunrise photography",
      "6:30 AM – Morning nature walk",
      "8:00 AM – Breakfast at camp",
      "9:30 AM – Depart camp",
      "10:00 AM – Drop-off at hotel"
    ],
    badge: "Premium Experience",
    isPopular: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 892,
    seoTitle: "Dubai Overnight Desert Safari 2025 | Sleep Under Stars | Funnel Experts Tours",
    seoDescription: "Experience an unforgettable overnight desert safari in Dubai. Bedouin camp, desert sunrise, BBQ dinner & breakfast. Premium package from AED 550. Book now!",
    seoKeywords: "Dubai overnight desert safari, sleep in desert Dubai, Bedouin camp overnight, desert camping Dubai, desert sunrise Dubai"
  },
  {
    slug: "dubai-late-night-city-drive",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    name: "Dubai Late Night City Drive",
    tagline: "Discover Dubai's Dazzling Nocturnal Soul",
    description: "Experience Dubai at its most magical — when the city transforms into a breathtaking constellation of lights. This exclusive late-night tour takes you through the illuminated corridors of Downtown Dubai, past the majestic Burj Khalifa fountain show, along the glittering Dubai Marina, and through the architectural marvel of Business Bay. See why Dubai is truly the city that never sleeps.",
    destination: "dubai",
    category: "nightlife",
    duration: "4 hours (9:00 PM – 1:00 AM)",
    price: 199,
    currency: "AED",
    maxGroupSize: 12,
    highlights: [
      "Burj Khalifa fountain show viewing",
      "Dubai Marina lights tour",
      "Business Bay night skyline",
      "JBR & Dubai Eye illuminated",
      "Palm Jumeirah night view",
      "Downtown Dubai experience",
      "Professional photography stops",
      "Dubai Frame night view"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "Air-conditioned vehicle",
      "Professional guide",
      "All key stops included",
      "Photography assistance"
    ],
    excludes: [
      "Burj Khalifa entry tickets",
      "Meals & drinks",
      "Personal shopping"
    ],
    itinerary: [
      "9:00 PM – Hotel pickup",
      "9:15 PM – Dubai Frame night view",
      "9:45 PM – Dubai Creek & Al Seef promenade",
      "10:15 PM – Downtown Dubai & Burj Khalifa fountain show",
      "10:45 PM – Business Bay skyline stop",
      "11:15 PM – Dubai Marina & JBR walk",
      "11:45 PM – Palm Jumeirah & Atlantis view",
      "12:15 AM – JBR beach walk & Blue Waters",
      "12:45 AM – Return journey",
      "1:00 AM – Hotel drop-off"
    ],
    badge: "Night Special",
    isPopular: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 1243,
    seoTitle: "Dubai Late Night City Drive Tour 2025 | Marina, Downtown & Burj Khalifa | Funnel Experts Tours",
    seoDescription: "Discover Dubai's stunning nightlife on our exclusive late-night city drive. Burj Khalifa fountain show, Marina, Palm Jumeirah. From AED 199. Book now!",
    seoKeywords: "Dubai night tour, Dubai city drive night, Dubai Marina night, Burj Khalifa fountain show, Dubai nightlife tour"
  },
  {
    slug: "dubai-city-highlights-tour",
    imageUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80",
    name: "Dubai City Highlights Tour",
    tagline: "The Best of Dubai in One Spectacular Day",
    description: "Discover the essence of Dubai on this comprehensive full-day city tour. From the historic Al Fahidi district and vibrant Gold Souk to the iconic Burj Khalifa and Dubai Mall, this expertly curated tour reveals both the traditional heritage and ultra-modern magnificence of the world's most audacious city. Perfect for first-time visitors and those looking to maximize their Dubai experience.",
    destination: "dubai",
    category: "city",
    duration: "8 hours (9:00 AM – 5:00 PM)",
    price: 349,
    currency: "AED",
    maxGroupSize: 15,
    highlights: [
      "Burj Khalifa At The Top experience (124th floor)",
      "Dubai Mall & Dubai Fountain viewing",
      "Gold Souk & Spice Souk",
      "Al Fahidi Historic District",
      "Abra (traditional boat) ride across Dubai Creek",
      "Jumeirah Mosque exterior photo stop",
      "Jumeirah Beach & Burj Al Arab view",
      "Palm Jumeirah panoramic view"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "Burj Khalifa At The Top tickets (124th floor)",
      "Abra (water taxi) ride",
      "Professional English-speaking guide",
      "Air-conditioned vehicle",
      "Lunch at a local restaurant"
    ],
    excludes: [
      "Burj Khalifa 148th floor (Skydeck) tickets",
      "Personal shopping",
      "Drinks & snacks",
      "Museum entry fees"
    ],
    itinerary: [
      "9:00 AM – Hotel pickup",
      "9:30 AM – Al Fahidi Historic District & Dubai Museum",
      "10:30 AM – Spice Souk & Gold Souk visit",
      "11:00 AM – Abra ride across Dubai Creek",
      "11:30 AM – Deira Covered Souk",
      "12:30 PM – Lunch at local restaurant",
      "1:30 PM – Jumeirah Mosque exterior",
      "2:00 PM – Jumeirah Beach & Burj Al Arab view",
      "2:30 PM – Palm Jumeirah drive & Atlantis view",
      "3:00 PM – Dubai Mall & Dubai Fountain area",
      "3:30 PM – Burj Khalifa At The Top visit",
      "4:30 PM – Shopping time at Dubai Mall",
      "5:00 PM – Return to hotel"
    ],
    badge: "Best Value",
    isPopular: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 1876,
    seoTitle: "Dubai City Tour 2025 | Burj Khalifa, Gold Souk & More | Funnel Experts Tours",
    seoDescription: "Explore Dubai's best attractions on our full-day city tour. Burj Khalifa tickets included, Gold Souk, Creek, Jumeirah Beach. From AED 349. Book today!",
    seoKeywords: "Dubai city tour, Burj Khalifa tour, Dubai sightseeing, Dubai tour package, Gold Souk tour, Dubai full day tour"
  },
  {
    slug: "dubai-adventure-dune-bashing",
    imageUrl: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80",
    name: "Dubai ATV & Sandboarding Adventure",
    tagline: "Maximum Thrills in the Arabian Dunes",
    description: "For thrill-seekers who want more than a standard safari, this action-packed adventure delivers maximum adrenaline in Dubai's spectacular desert landscape. Ride powerful ATVs across towering sand dunes, master the art of sandboarding on steep slopes, and experience the raw excitement of off-road desert terrain. Perfect for adventurous souls and groups looking for an unforgettable shared experience.",
    destination: "dubai",
    category: "adventure",
    duration: "3 hours (options: Morning, Afternoon, or Evening)",
    price: 300,
    currency: "AED",
    maxGroupSize: 10,
    highlights: [
      "ATV quad biking (30 minutes)",
      "Sandboarding on giant dunes",
      "Dune bashing in 4x4",
      "Camel ride",
      "Desert photography spots",
      "Complimentary refreshments"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "ATV quad bike (30 mins)",
      "Sandboard equipment",
      "Safety gear & helmet",
      "Dune bashing in 4x4",
      "Camel ride",
      "Water & soft drinks",
      "Professional safety guide"
    ],
    excludes: [
      "Meals",
      "Personal insurance",
      "Gratuities"
    ],
    itinerary: [
      "Pickup from hotel",
      "Drive to desert adventure zone",
      "Safety briefing & gear up",
      "ATV quad biking session (30 mins)",
      "Sandboarding on mega dunes",
      "Dune bashing with professional driver",
      "Camel riding & photography",
      "Refreshment break",
      "Return to hotel"
    ],
    badge: "Adrenaline Rush",
    isPopular: false,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 654,
    seoTitle: "Dubai ATV & Sandboarding Adventure 2025 | Desert Adventure Tours | Funnel Experts Tours",
    seoDescription: "Experience Dubai's ultimate desert adventure with ATV quad biking and sandboarding. Thrilling dune bashing included. Book from AED 300 per person!",
    seoKeywords: "Dubai ATV quad biking, sandboarding Dubai, Dubai adventure tour, Dubai desert adventure, quad bike desert Dubai"
  },
  {
    slug: "dubai-creek-heritage-tour",
    imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80",
    name: "Dubai Creek & Heritage Cultural Tour",
    tagline: "Journey Through Dubai's Rich Thousand-Year History",
    description: "Step back in time on this immersive cultural heritage tour that unveils the authentic soul of old Dubai. Travel via traditional Abra boat across the historic Dubai Creek, wander through the aromatic Spice Souk, marvel at the glittering Gold Souk, and explore the beautifully preserved wind-tower architecture of the Al Fahidi Historic District. A thoughtful counterbalance to Dubai's modern glitz.",
    destination: "dubai",
    category: "cultural",
    duration: "5 hours (9:00 AM – 2:00 PM)",
    price: 220,
    currency: "AED",
    maxGroupSize: 15,
    highlights: [
      "Al Fahidi Historic District (Bastakiya)",
      "Dubai Museum visit",
      "Abra water taxi across the Creek",
      "Gold Souk — 10+ tonnes of gold on display",
      "Spice Souk aromatic experience",
      "Deira Covered Souk",
      "Sheikh Saeed Al Maktoum House",
      "Arabic coffee & dates ceremony"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "Abra (water taxi) ride",
      "Dubai Museum entry",
      "Arabic coffee & dates",
      "Professional historian guide",
      "Air-conditioned vehicle"
    ],
    excludes: [
      "Personal shopping",
      "Lunch",
      "Photography fees at museums"
    ],
    itinerary: [
      "9:00 AM – Hotel pickup",
      "9:30 AM – Al Fahidi Historic District walking tour",
      "10:00 AM – Dubai Museum visit",
      "10:45 AM – Sheikh Saeed Al Maktoum House",
      "11:00 AM – Abra ride across Dubai Creek",
      "11:15 AM – Spice Souk exploration",
      "11:45 AM – Gold Souk visit & explanation",
      "12:30 PM – Deira Covered Souk",
      "1:15 PM – Arabic coffee & dates ceremony",
      "2:00 PM – Return to hotel"
    ],
    badge: "Cultural Gem",
    isPopular: false,
    isFeatured: false,
    rating: 4.9,
    reviewCount: 789,
    seoTitle: "Dubai Creek Heritage Cultural Tour 2025 | Gold Souk, Spice Souk & Abra | Funnel Experts Tours",
    seoDescription: "Explore old Dubai on our cultural heritage tour. Al Fahidi Historic District, Gold Souk, Spice Souk & Abra ride. From AED 220. Book your cultural journey!",
    seoKeywords: "Dubai cultural tour, Dubai Creek tour, Gold Souk Dubai, Spice Souk Dubai, Al Fahidi district, Dubai heritage tour, Abra boat Dubai"
  },

  // ==================== FUJAIRAH PACKAGES ====================
  {
    slug: "fujairah-full-day-tour",
    imageUrl: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1200&q=80",
    name: "Fujairah Full Day Discovery Tour",
    tagline: "The Emirates' Hidden Treasure on the Gulf of Oman",
    description: "Escape the glitter of the Gulf and discover Fujairah — the UAE's only emirate situated entirely on the Gulf of Oman coast. This comprehensive full-day tour unveils ancient forts and mosques, dramatic Hajar Mountain landscapes, pristine beaches, and charming fishing villages. Experience a side of the Emirates that few tourists ever discover, with stunning contrast between rugged mountains and turquoise sea.",
    destination: "fujairah",
    category: "city",
    duration: "10 hours (7:00 AM – 5:00 PM)",
    price: 399,
    currency: "AED",
    maxGroupSize: 15,
    highlights: [
      "Al Bidyah Mosque — UAE's oldest mosque (1446 AD)",
      "Fujairah Fort — 500-year-old heritage marvel",
      "Khor Fakkan Bay & Amphitheatre",
      "Dibba Al Hisn ancient town",
      "Snoopy Island snorkeling spot",
      "Fujairah Corniche & waterfront",
      "Wadi Wurayah National Park",
      "Bull-butting cultural experience (Friday mornings)"
    ],
    includes: [
      "Hotel pickup & drop-off (Dubai/Sharjah)",
      "English-speaking guide",
      "Air-conditioned vehicle",
      "Lunch at seafood restaurant",
      "Water & soft drinks",
      "All entry fees included"
    ],
    excludes: [
      "Snorkeling equipment rental",
      "Personal shopping",
      "Alcoholic beverages"
    ],
    itinerary: [
      "7:00 AM – Hotel pickup from Dubai/Sharjah",
      "8:30 AM – Al Bidyah Mosque visit",
      "9:15 AM – Fujairah Fort & Heritage Village",
      "10:00 AM – Khor Fakkan Bay & Amphitheatre",
      "10:45 AM – Dibba Al Hisn ancient town",
      "11:30 AM – Snoopy Island viewpoint & beach",
      "12:30 PM – Seafood lunch at local restaurant",
      "1:30 PM – Wadi Wurayah National Park",
      "2:30 PM – Fujairah Corniche & Fish Market",
      "3:30 PM – Hajar Mountains scenic drive",
      "4:00 PM – Depart for Dubai",
      "5:30 PM – Hotel drop-off"
    ],
    badge: "Hidden Gem",
    isPopular: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 623,
    seoTitle: "Fujairah Full Day Tour from Dubai 2025 | Historic Forts & Gulf Coast | Funnel Experts Tours",
    seoDescription: "Discover Fujairah's ancient mosques, historic forts, and pristine Gulf of Oman coast. Full-day tour from Dubai with lunch included. From AED 399. Book now!",
    seoKeywords: "Fujairah tour from Dubai, Al Bidyah Mosque, Fujairah Fort, Khor Fakkan tour, Fujairah day trip, Gulf of Oman tour UAE"
  },
  {
    slug: "fujairah-snorkeling-diving",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    name: "Fujairah Snorkeling & Diving Experience",
    tagline: "Discover the UAE's Most Vibrant Underwater World",
    description: "The Gulf of Oman off Fujairah's coast is one of the Middle East's most pristine marine environments, teeming with colorful coral reefs, diverse fish species, sea turtles, and even occasional whale sharks. Whether you're an experienced diver or a first-time snorkeler, this experience delivers an extraordinary window into an underwater world of breathtaking beauty.",
    destination: "fujairah",
    category: "adventure",
    duration: "7 hours (8:00 AM – 3:00 PM)",
    price: 350,
    currency: "AED",
    maxGroupSize: 10,
    highlights: [
      "Snoopy Island premier snorkeling spot",
      "Coral reef diving at Martini Rock",
      "Marine biodiversity — over 100 fish species",
      "Chance to spot sea turtles & rays",
      "Glass-bottom boat tour option",
      "Sandy beach relaxation",
      "Fresh seafood lunch",
      "PADI-certified dive instructors"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "Snorkeling equipment (mask, fins, wetsuit)",
      "2 guided snorkeling sessions",
      "Safety briefing",
      "PADI instructor",
      "Beach time",
      "Seafood lunch",
      "Fresh water & soft drinks"
    ],
    excludes: [
      "Scuba diving certification fee",
      "Underwater camera rental",
      "Personal insurance",
      "Gratuities"
    ],
    itinerary: [
      "8:00 AM – Hotel pickup from Dubai",
      "9:30 AM – Arrive at Fujairah coast",
      "9:45 AM – Snorkeling safety briefing & equipment",
      "10:00 AM – First snorkeling session at Snoopy Island",
      "11:00 AM – Break & beach relaxation",
      "11:30 AM – Second snorkeling session (deeper reef)",
      "12:30 PM – Seafood lunch at beach restaurant",
      "1:30 PM – Free beach time",
      "2:30 PM – Pack up & depart",
      "4:00 PM – Hotel drop-off"
    ],
    badge: "Ocean Adventure",
    isPopular: false,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 341,
    seoTitle: "Fujairah Snorkeling & Diving Tour 2025 | Snoopy Island & Coral Reefs | Funnel Experts Tours",
    seoDescription: "Explore Fujairah's stunning coral reefs and marine life at Snoopy Island. Snorkeling & diving tours from Dubai. Equipment included. From AED 350. Book now!",
    seoKeywords: "Fujairah snorkeling tour, Snoopy Island snorkeling, Fujairah diving, UAE snorkeling tour, Fujairah water sports, Gulf of Oman diving"
  },
  {
    slug: "fujairah-wadi-adventure",
    imageUrl: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=1200&q=80",
    name: "Fujairah Wadi & Mountain Adventure",
    tagline: "Trek Through Ancient Wadis in the Hajar Mountains",
    description: "The dramatic Hajar Mountains of Fujairah harbor some of the UAE's most spectacular natural landscapes — ancient wadis carved by millennia of seasonal floods, crystal-clear rock pools, traditional mountain villages untouched by modernity, and panoramic vistas that stretch to the horizon. This guided wadi adventure reveals the UAE's wild, rugged soul far from the urban glitter.",
    destination: "fujairah",
    category: "adventure",
    duration: "8 hours (7:30 AM – 3:30 PM)",
    price: 320,
    currency: "AED",
    maxGroupSize: 12,
    highlights: [
      "Wadi Wurayah — UAE's first mountain national park",
      "Natural rock pools & waterfalls (seasonal)",
      "Traditional mountain village visit",
      "Hajar Mountain scenic drives",
      "Flora & fauna guided explanation",
      "Fossil hunting opportunities",
      "4x4 off-road mountain trails",
      "Picnic lunch in nature"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "4x4 transport through mountains",
      "Expert nature guide",
      "Picnic lunch & refreshments",
      "Trekking poles (if needed)",
      "National park entry fees"
    ],
    excludes: [
      "Personal outdoor gear",
      "Travel insurance",
      "Gratuities"
    ],
    itinerary: [
      "7:30 AM – Hotel pickup from Dubai",
      "9:00 AM – Enter Hajar Mountain foothills",
      "9:30 AM – Wadi Wurayah National Park entry",
      "10:00 AM – Guided wadi trekking & rock pools",
      "11:30 AM – Traditional mountain village visit",
      "12:30 PM – Picnic lunch with panoramic views",
      "1:30 PM – 4x4 off-road mountain trails",
      "2:30 PM – Fossil hunting & geology walk",
      "3:00 PM – Depart",
      "4:30 PM – Hotel drop-off"
    ],
    badge: "Nature Escape",
    isPopular: false,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 287,
    seoTitle: "Fujairah Wadi & Mountain Trekking Tour 2025 | Hajar Mountains | Funnel Experts Tours",
    seoDescription: "Trek through Fujairah's stunning Hajar Mountains and ancient wadis. Nature guide, 4x4 off-road & picnic lunch included. From AED 320. Book your adventure!",
    seoKeywords: "Fujairah wadi tour, Hajar Mountains trekking UAE, Wadi Wurayah, mountain tour Fujairah, UAE nature tour, wadi adventure UAE"
  },

  // ==================== RAK PACKAGES ====================
  {
    slug: "rak-jebel-jais-zipline-adventure",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    name: "Ras Al Khaimah Jebel Jais Adventure",
    tagline: "Conquer the World's Longest Zipline at 1,680m Altitude",
    description: "Challenge yourself on Jebel Jais — the UAE's highest peak at 1,934 meters — home to the world's longest zipline at 2.83 kilometers. This epic RAK adventure takes you soaring over dramatic mountain canyons at speeds of up to 120 km/h, with jaw-dropping views of jagged peaks, deep wadis, and the distant Arabian Gulf. The ultimate UAE bucket-list experience for the truly adventurous.",
    destination: "rak",
    category: "adventure",
    duration: "9 hours (7:00 AM – 4:00 PM)",
    price: 750,
    currency: "AED",
    maxGroupSize: 8,
    highlights: [
      "World's longest zipline (2.83 km)",
      "Jebel Jais — UAE's highest peak (1,934m)",
      "Speeds up to 120 km/h",
      "Panoramic mountain & gulf views",
      "Jebel Jais Viewing Deck Park",
      "Mountain road scenic drive",
      "RAK old town heritage visit",
      "Mountain restaurant lunch"
    ],
    includes: [
      "Hotel pickup & drop-off (Dubai/RAK)",
      "World record zipline ticket",
      "Safety equipment & briefing",
      "Professional guide",
      "Transport to mountain summit",
      "Lunch at mountain restaurant",
      "RAK old town mini-tour"
    ],
    excludes: [
      "Via Ferrata climbing (optional add-on)",
      "Toboggan ride (optional add-on)",
      "Personal insurance",
      "Gratuities"
    ],
    itinerary: [
      "7:00 AM – Hotel pickup",
      "8:30 AM – Arrive in RAK, breakfast stop",
      "9:00 AM – RAK old town & Corniche",
      "9:45 AM – Drive to Jebel Jais mountain",
      "10:30 AM – Jebel Jais Viewing Deck Park",
      "11:00 AM – Zipline safety briefing",
      "11:30 AM – THE ZIPLINE — world's longest!",
      "12:30 PM – Mountain lunch with stunning views",
      "1:30 PM – Jebel Jais hiking trail options",
      "2:30 PM – Scenic mountain drive descent",
      "3:15 PM – RAK Corniche final stop",
      "4:00 PM – Depart for Dubai",
      "5:30 PM – Hotel drop-off"
    ],
    badge: "World Record",
    isPopular: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 518,
    seoTitle: "Jebel Jais Zipline Tour RAK 2025 | World's Longest Zipline | Funnel Experts Tours",
    seoDescription: "Conquer the world's longest zipline on Jebel Jais, UAE's highest peak! 2.83km, 120 km/h speeds. Full-day RAK adventure from Dubai. From AED 750. Book now!",
    seoKeywords: "Jebel Jais zipline, world's longest zipline UAE, Ras Al Khaimah adventure, RAK zipline tour, Jebel Jais tour, RAK mountain tour"
  },
  {
    slug: "rak-mountain-nature-tour",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    name: "RAK Mountain Hiking & Nature Discovery",
    tagline: "Hike Through RAK's Spectacular Hajar Highlands",
    description: "Ras Al Khaimah is the UAE's outdoor adventure capital, with dramatic Hajar Mountain landscapes, ancient terraced farms, and prehistoric archaeological sites that date back 5,000 years. This expertly guided hiking and nature tour takes you through RAK's most spectacular terrain — from ancient falaj irrigation systems to rock inscriptions dating to the Bronze Age, all set against magnificent mountain scenery.",
    destination: "rak",
    category: "adventure",
    duration: "8 hours (7:30 AM – 3:30 PM)",
    price: 350,
    currency: "AED",
    maxGroupSize: 12,
    highlights: [
      "Jebel Jais mountain trails",
      "Ancient Bronze Age archaeological sites",
      "Traditional falaj irrigation systems",
      "Hajar Mountain biodiversity tour",
      "Old abandoned mountain villages",
      "Archaeological fossil sites",
      "Panoramic Arabian Gulf views",
      "Authentic Emirati village lunch"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "Expert mountain guide",
      "4x4 transport",
      "Traditional Emirati lunch",
      "Water & snacks",
      "Trekking poles",
      "Archaeological guide notes"
    ],
    excludes: [
      "Personal outdoor gear",
      "Travel insurance",
      "Gratuities"
    ],
    itinerary: [
      "7:30 AM – Hotel pickup from Dubai",
      "9:00 AM – RAK mountain approach",
      "9:30 AM – Archaeological site visit (Bronze Age)",
      "10:15 AM – Falaj irrigation system walk",
      "11:00 AM – Mountain hiking trail (medium difficulty)",
      "12:30 PM – Traditional Emirati village lunch",
      "1:30 PM – Abandoned mountain village exploration",
      "2:15 PM – Summit viewpoint photography",
      "3:00 PM – Descent & depart",
      "4:30 PM – Hotel drop-off"
    ],
    badge: "Heritage Trek",
    isPopular: false,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 234,
    seoTitle: "RAK Mountain Hiking & Nature Tour 2025 | Hajar Mountains Adventure | Funnel Experts Tours",
    seoDescription: "Hike through Ras Al Khaimah's stunning Hajar Mountains. Ancient archaeological sites, traditional villages & panoramic views. From AED 350. Book now!",
    seoKeywords: "RAK hiking tour, Ras Al Khaimah mountain tour, Hajar Mountains hiking, RAK nature tour, UAE mountain hiking, RAK adventure tour"
  },
  {
    slug: "rak-heritage-city-tour",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    name: "RAK Heritage, History & City Discovery",
    tagline: "Uncover the Ancient Soul of Ras Al Khaimah",
    description: "Ras Al Khaimah is one of the UAE's most historically rich emirates, with a fascinating story stretching back 7,000 years. This comprehensive heritage tour explores RAK's remarkable archaeological museums, ancient Dhayah Fort (the only hilltop fort in the UAE), pearl diving heritage, traditional mangrove kayaking, and the vibrant local souks that give authentic flavor to this underexplored gem.",
    destination: "rak",
    category: "cultural",
    duration: "8 hours (8:00 AM – 4:00 PM)",
    price: 299,
    currency: "AED",
    maxGroupSize: 15,
    highlights: [
      "Dhayah Fort — UAE's only hilltop fort",
      "National Museum of Ras Al Khaimah",
      "Pearl museum & diving heritage",
      "Mangrove kayaking adventure",
      "Traditional RAK souks",
      "Al Nakheel heritage village",
      "RAK Corniche & waterfront",
      "Authentic Emirati lunch"
    ],
    includes: [
      "Hotel pickup & drop-off",
      "Dhayah Fort entry",
      "National Museum entry",
      "Kayaking equipment & guide",
      "Emirati lunch",
      "Water & refreshments",
      "Professional guide"
    ],
    excludes: [
      "Personal shopping",
      "Additional activities",
      "Gratuities"
    ],
    itinerary: [
      "8:00 AM – Hotel pickup from Dubai",
      "9:30 AM – National Museum of RAK",
      "10:15 AM – Pearl Museum & diving heritage",
      "11:00 AM – Dhayah Fort — panoramic views",
      "12:00 PM – Emirati lunch at heritage restaurant",
      "1:00 PM – Mangrove kayaking (1.5 hours)",
      "2:30 PM – Al Nakheel heritage village",
      "3:00 PM – RAK souks & Corniche",
      "3:45 PM – Depart",
      "5:00 PM – Hotel drop-off"
    ],
    badge: "Cultural Discovery",
    isPopular: false,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 198,
    seoTitle: "Ras Al Khaimah Heritage City Tour 2025 | Dhayah Fort & Museums | Funnel Experts Tours",
    seoDescription: "Explore Ras Al Khaimah's 7,000-year history. Dhayah Fort, National Museum, mangrove kayaking & authentic Emirati culture. From AED 299. Book today!",
    seoKeywords: "Ras Al Khaimah tour, RAK heritage tour, Dhayah Fort, RAK city tour, mangrove kayaking RAK, RAK museum tour, UAE heritage tour"
  },

  // ==================== PARTNER PACKAGES ====================
  {
    slug: "dubai-skydive-dubai-tandem",
    imageUrl: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1200&q=80",
    name: "Skydive Dubai — Tandem Jump Experience",
    tagline: "Freefall Over the Palm Jumeirah at 13,000 Feet",
    description: "Experience the ultimate adrenaline rush with our official Skydive Dubai partnership. Leap from 13,000 feet and freefall at 120 mph over the iconic Palm Jumeirah, with Dubai's stunning skyline, turquoise waters, and golden desert as your backdrop. This tandem skydive is the #1 bucket-list activity in Dubai — an unforgettable, life-changing experience guided by world-class USPA-certified instructors.",
    destination: "dubai",
    category: "adventure",
    duration: "4 hours (7:00 AM – 11:00 AM)",
    price: 1999,
    currency: "AED",
    maxGroupSize: 6,
    highlights: [
      "Freefall from 13,000 feet at 120 mph",
      "Breathtaking views of Palm Jumeirah from above",
      "Tandem jump with USPA-certified instructor",
      "60-second freefall followed by 5-minute canopy ride",
      "HD video and photos of your entire jump",
      "Certificate of completion",
      "Views of Burj Al Arab, Atlantis & World Islands"
    ],
    includes: [
      "Hotel pickup & drop-off (Dubai)",
      "Safety briefing and ground training",
      "All skydive equipment and gear",
      "Tandem jump with certified instructor",
      "HD GoPro video & professional photos",
      "Certificate of achievement",
      "Refreshments after landing",
      "VIP lounge access at Skydive Dubai"
    ],
    excludes: [
      "Personal insurance (recommended)",
      "Gratuities",
      "Food and beverages (beyond refreshments)",
      "Additional camera/video packages"
    ],
    itinerary: [
      "7:00 AM – VIP pickup from your hotel",
      "7:45 AM – Arrive at Skydive Dubai Palm drop zone",
      "8:00 AM – Safety briefing and harness fitting",
      "8:30 AM – Board aircraft and ascend to 13,000 feet",
      "8:50 AM – Tandem freefall over Palm Jumeirah",
      "9:00 AM – Canopy glide and beach landing",
      "9:30 AM – Review HD footage & receive certificate",
      "10:30 AM – Hotel drop-off"
    ],
    badge: "Partner Exclusive",
    isPopular: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 1823,
    seoTitle: "Skydive Dubai Tandem Jump | Official Partner | Funnel Experts Tours",
    seoDescription: "Book your Skydive Dubai tandem jump through our official partnership. Freefall over Palm Jumeirah at 13,000 ft. VIP pickup, HD video & photos included. From AED 1,999.",
    seoKeywords: "Skydive Dubai, tandem skydive Dubai, skydiving Palm Jumeirah, Dubai skydive booking, Skydive Dubai price, Dubai adventure activities"
  },
  {
    slug: "dubai-bounce-x-adventure",
    imageUrl: "https://images.unsplash.com/photo-1570691079236-4bca6c45d440?w=1200&q=80",
    name: "Bounce X Dubai — Ultimate Indoor Adventure",
    tagline: "The Middle East's Most Thrilling Indoor Playground",
    description: "Get ready for non-stop action at Bounce X Dubai, the region's most exciting indoor adventure park. Our exclusive partnership gives you VIP access to over 100 interconnected trampolines, ninja warrior courses, climbing walls, slam dunk zones, and the famous X-Park obstacle course. Perfect for families, groups, and adrenaline seekers of all ages — all in a fully climate-controlled environment.",
    destination: "dubai",
    category: "adventure",
    duration: "3 hours (Flexible timing)",
    price: 199,
    currency: "AED",
    maxGroupSize: 30,
    highlights: [
      "100+ interconnected trampolines",
      "X-Park ninja warrior obstacle course",
      "Rock climbing walls for all levels",
      "Basketball slam dunk trampolines",
      "Foam pit with aerial tricks",
      "Dodgeball arena",
      "Kid-friendly zones for ages 3+",
      "Climate-controlled indoor venue"
    ],
    includes: [
      "Hotel pickup & drop-off (Dubai)",
      "VIP fast-track entry — skip the queue",
      "2-hour unlimited bounce session",
      "Grip socks included",
      "Access to all zones and attractions",
      "Professional supervision",
      "Water and refreshments",
      "Dedicated group coordinator"
    ],
    excludes: [
      "Personal insurance",
      "Gratuities",
      "Food (cafe available on-site)",
      "Extended session add-ons"
    ],
    itinerary: [
      "Flexible pickup from your hotel",
      "Arrive at Bounce X Dubai — VIP check-in",
      "Safety briefing and grip sock fitting",
      "2 hours of unlimited bouncing and adventure",
      "Cool-down with refreshments",
      "Hotel drop-off"
    ],
    badge: "Partner Exclusive",
    isPopular: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 2156,
    seoTitle: "Bounce X Dubai VIP Access | Official Partner | Funnel Experts Tours",
    seoDescription: "Book Bounce X Dubai with VIP access through our official partnership. 100+ trampolines, ninja courses, climbing walls. Hotel pickup included. From AED 199.",
    seoKeywords: "Bounce X Dubai, Bounce Dubai, trampoline park Dubai, indoor adventure Dubai, Dubai family activities, Bounce X booking"
  }
];

async function seed() {
  console.log("🌴 Seeding tour packages...");

  await db.delete(packagesTable);

  for (const pkg of packages) {
    await db.insert(packagesTable).values(pkg);
    console.log(`✅ Inserted: ${pkg.name}`);
  }

  console.log(`\n🎉 Successfully seeded ${packages.length} packages!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
