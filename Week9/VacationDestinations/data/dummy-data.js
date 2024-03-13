import Country from "../models/countries";
import VacationSpot from "../models/vacations";

export const COUNTRIES = [
  new Country("s1", "Italy", "#f44336"), // Red
  new Country("s2", "France", "#2196f3"), // Blue
  new Country("s3", "Spain", "#4caf50"), // Green
  new Country("s4", "Japan", "#ff9800"), // Orange
  new Country("s5", "Brazil", "#9c27b0"), // Purple
  new Country("s6", "Australia", "#ffeb3b"), // Yellow
  new Country("s7", "Mexico", "#03a9f4"), // Light Blue
  new Country("s8", "Canada", "#8bc34a"), // Light Green
  new Country("s9", "Germany", "#ff5722"), // Deep Orange
  new Country("s10", "South Africa", "#673ab7"), // Deep Purple
];

export const VACATIONS = [
  // Italy
  new VacationSpot(
    "v1",
    "s1",
    "Colosseum, Rome",
    "$1,500",
    70,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
    "An enduring symbol of the Roman Empire, offering insight into ancient architecture and history."
  ),
  new VacationSpot(
    "v11",
    "s1",
    "Venice Canals, Venice",
    "$1,200",
    400,
    4.7,
    "https://cdn.britannica.com/63/153463-050-06B6270D/Grand-Canal-Venice.jpg",
    "Iconic waterways of Venice, offering romantic gondola rides and a glimpse into the unique Venetian lifestyle."
  ),
  // France
  new VacationSpot(
    "v2",
    "s2",
    "Eiffel Tower, Paris",
    "$2,000",
    1889,
    4.9,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
    "Iconic iron lattice tower in Paris, known worldwide as a symbol of French culture and romance."
  ),
  new VacationSpot(
    "v12",
    "s2",
    "Louvre Museum, Paris",
    "$2,500",
    1793,
    4.8,
    "https://www.aparisguide.com/louvre/louvre-museum001.jpg",
    "World's largest art museum and a historic monument in Paris, home to the Mona Lisa and thousands of other works."
  ),
  // Spain
  new VacationSpot(
    "v3",
    "s3",
    "Sagrada Familia, Barcelona",
    "$1,800",
    1882,
    4.7,
    "https://images.adsttc.com/media/images/5254/4190/e8e4/4eff/0200/06cf/large_jpg/sfpassio.jpg?1381253501",
    "A masterpiece of modernist architecture by Antoni Gaudí, still under construction after more than a century."
  ),
  new VacationSpot(
    "v13",
    "s3",
    "Park Guell, Barcelona",
    "$1,000",
    1914,
    4.5,
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/bb.jpg",
    "A public park system composed of gardens and architectonic elements located on Carmel Hill, by Antoni Gaudí."
  ),
  // Japan
  new VacationSpot(
    "v4",
    "s4",
    "Mount Fuji, Shizuoka",
    "$1,300",
    700,
    4.8,
    "https://a0.cdn.japantravel.com/photo/59640-202053/1440x960!/shizuoka-iconic-mt-fuji-202053.jpg",
    "Japan's tallest peak, offering breathtaking views and a pilgrimage site for centuries."
  ),
  new VacationSpot(
    "v14",
    "s4",
    "Kyoto's Temples, Kyoto",
    "$1,100",
    794,
    4.7,
    "https://a.cdn-hotels.com/gdcs/production148/d675/ca00c4dd-cc06-40a1-89cb-a49559e0fb3e.jpg",
    "Historic temples of Kyoto, offering serene beauty, traditional architecture, and a step back into Japan’s history."
  ),
  // Brazil
  new VacationSpot(
    "v5",
    "s5",
    "Christ the Redeemer, Rio de Janeiro",
    "$2,200",
    1931,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg",
    "Massive statue of Jesus Christ, overlooking Rio de Janeiro from the Corcovado mountain, a symbol of peace."
  ),
  new VacationSpot(
    "v15",
    "s5",
    "Amazon Rainforest, Manaus",
    "$3,000",
    0,
    4.9,
    "https://live.staticflickr.com/4233/35781446921_db0b200cd8_b.jpg",
    "The largest tropical rainforest in the world, offering unparalleled biodiversity and awe-inspiring natural beauty."
  ),
  // Australia
  new VacationSpot(
    "v6",
    "s6",
    "Great Barrier Reef, Queensland",
    "$3,500",
    0,
    4.9,
    "https://greatbarrierreef.org/wp-content/uploads/2022/06/Lady-Musgrave-Island-Great-Barrier-Reef.jpg",
    "The world's largest coral reef system, home to thousands of marine species, ideal for diving and snorkeling."
  ),
  new VacationSpot(
    "v16",
    "s6",
    "Sydney Opera House, Sydney",
    "$2,500",
    1973,
    4.8,
    "https://cdn.britannica.com/96/100196-050-C92064E0/Sydney-Opera-House-Port-Jackson.jpg",
    "A masterpiece of 20th-century architecture, hosting over 1,500 performances each year."
  ),
  // Mexico
  new VacationSpot(
    "v7",
    "s7",
    "Chichen Itza, Yucatán",
    "$1,800",
    600,
    4.7,
    "https://www.chichenitza.com/public/assets/img/chichen-itza-tour.jpg",
    "A complex of Mayan ruins on Mexico's Yucatán Peninsula, a testament to the advanced Mayan civilization."
  ),
  new VacationSpot(
    "v17",
    "s7",
    "Cancun's Beaches, Cancun",
    "$2,000",
    0,
    4.9,
    "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg",
    "World-renowned beaches offering crystal clear waters, white sand beaches, and vibrant nightlife."
  ),
  // Canada
  new VacationSpot(
    "v8",
    "s8",
    "Niagara Falls, Ontario",
    "$1,500",
    0,
    4.8,
    "https://media.cntraveler.com/photos/5b311699fe04d40b64b22c9e/16:9/w_2560,c_limit/Niagara-Falls_GettyImages-959566100.jpg",
    "One of the world's most stunning natural wonders, featuring massive waterfalls at the border of Canada and the USA."
  ),
  new VacationSpot(
    "v18",
    "s8",
    "Banff National Park, Alberta",
    "$2,800",
    1885,
    4.9,
    "https://wanderthemap.com/wp-content/uploads/2017/04/Banff_National_Park_Canada_Featured-Image.jpg",
    "Canada's oldest national park, offering breathtaking mountain landscapes, crystal clear lakes, and abundant wildlife."
  ),
  // Germany
  new VacationSpot(
    "v9",
    "s9",
    "Neuschwanstein Castle, Bavaria",
    "$2,200",
    1869,
    4.8,
    "https://cdn.britannica.com/11/179711-138-F5C2AEAB/Overview-Neuschwanstein-Castle-Fussen-Germany.jpg",
    "A fairy-tale castle built by King Ludwig II of Bavaria, inspiring Disney’s Sleeping Beauty Castle."
  ),
  new VacationSpot(
    "v19",
    "s9",
    "Brandenburg Gate, Berlin",
    "$1,700",
    1791,
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Berlin_-_0266_-_16052015_-_Brandenburger_Tor.jpg/1200px-Berlin_-_0266_-_16052015_-_Brandenburger_Tor.jpg",
    "An iconic neoclassical monument in Berlin, symbolizing unity and peace, with a rich history."
  ),
  // South Africa
  new VacationSpot(
    "v10",
    "s10",
    "Table Mountain, Cape Town",
    "$2,000",
    0,
    4.9,
    "https://blog.goway.com/globetrotting/wp-content/uploads/2019/03/Table-mountain-at-sunset-Cape-Town-South-Africa-_492187513.jpg",
    "A flat-topped mountain forming a prominent landmark overlooking Cape Town, famous for its stunning views."
  ),
  new VacationSpot(
    "v20",
    "s10",
    "Kruger National Park, Mpumalanga",
    "$3,200",
    1926,
    4.9,
    "https://cdn.britannica.com/57/129357-050-3B3372DB/Giraffe-Kruger-National-Park-South-Africa.jpg",
    "One of Africa's largest game reserves, home to hundreds of mammals including the Big Five, offering a thrilling safari experience."
  ),
];