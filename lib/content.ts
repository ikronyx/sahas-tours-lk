export const photos = {
  sigiriya: { src: "/images/sigiriya.webp", alt: "Sigiriya Lion Rock rising from the forest", name: "Sigiriya", position: "center 48%" },
  ella: { src: "/images/ella.webp", alt: "Nine Arch Bridge surrounded by the green hills of Ella", name: "Ella", position: "center 52%" },
  galle: { src: "/images/galle.webp", alt: "Galle Fort lighthouse beside the Indian Ocean", name: "Galle", position: "center 52%" },
  udawalawe: { src: "/images/udawalawe.webp", alt: "Elephant in Udawalawe National Park", name: "Udawalawe", position: "center 46%" },
  "nuwara-eliya": { src: "/images/nuwara-eliya.webp", alt: "Tea country near Nuwara Eliya", name: "Nuwara Eliya", position: "center 56%" },
  mirissa: { src: "/images/mirissa.webp", alt: "Palm-lined beach in Mirissa", name: "Mirissa", position: "center 55%" },
  kandy: { src: "/images/kandy.webp", alt: "Visitors at the Temple of the Tooth in Kandy", name: "Kandy", position: "center 54%" },
};

export type Place = keyof typeof photos;

type Destination = {
  slug: Place;
  region: string;
  teaser: string;
  description: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  { slug: "sigiriya", region: "Cultural Triangle", teaser: "A rock fortress rising high above the forest.", description: "Start among the water gardens and climb towards the summit of Sigiriya. At the top, the ruins look over the forest and surrounding villages.", highlights: ["Lion Rock and its summit ruins", "Water gardens below the fortress", "Nearby Dambulla cave temples"] },
  { slug: "ella", region: "Hill Country", teaser: "Forest trails, railway arches and open mountain views.", description: "Ella is a base for short walks and longer mornings in the hills. Follow the paths towards Nine Arch Bridge or head up to Little Adam’s Peak for views across Ella Gap.", highlights: ["Nine Arch Bridge", "Little Adam’s Peak", "Ravana Falls"] },
  { slug: "galle", region: "South Coast", teaser: "Lighthouse walks and quiet streets inside the old fort.", description: "Take the ramparts to the lighthouse, turn into the shaded lanes and leave time to stop for coffee inside the fort. The walls offer an open view over the Indian Ocean.", highlights: ["Galle Fort ramparts", "Galle Lighthouse", "Old Town streets"] },
  { slug: "kandy", region: "Central Highlands", teaser: "A lakeside city with one of Sri Lanka’s most sacred temples.", description: "A walk along Kandy Lake connects the centre of town with the Temple of the Tooth. Allow time to explore the market streets or head out to the botanical gardens at Peradeniya.", highlights: ["Temple of the Tooth", "Kandy Lake", "Peradeniya Botanical Gardens"] },
  { slug: "nuwara-eliya", region: "Hill Country", teaser: "Cool mornings, tea estates and a landscape of steep valleys.", description: "The roads into Nuwara Eliya wind through tea country. Build a day around an estate visit and a lakeside walk, or spend longer in the hills with a trip towards Horton Plains.", highlights: ["Tea country", "Gregory Lake", "Horton Plains area"] },
  { slug: "udawalawe", region: "Southern Sri Lanka", teaser: "Open grasslands, wetlands and a chance to see elephants.", description: "The reservoir and surrounding grasslands make Udawalawe a rewarding place to look for wildlife. A safari can be planned around local conditions and opening hours, with sightings varying from day to day.", highlights: ["Udawalawe National Park", "Reservoir and grassland habitats", "Birdwatching and elephant watching"] },
  { slug: "mirissa", region: "South Coast", teaser: "A palm-lined bay for a slower end to a journey.", description: "Mirissa invites you to spend a morning by the water, explore the coastline and linger over lunch. Plan time on the beach around the season and local sea conditions.", highlights: ["Mirissa Beach", "Coastal viewpoints", "Nearby Weligama Bay"] },
];

export const themes = ["Culture & Heritage", "Hill Country", "Wildlife & Coast"] as const;
export type Theme = (typeof themes)[number];

type Tour = {
  slug: string;
  name: string;
  theme: Theme;
  photo: Place;
  summary: string;
  description: string;
  stops: Place[];
  days: { title: string; detail: string }[];
};

export const tours: Tour[] = [
  {
    slug: "heritage-and-highlands", name: "Heritage & Highlands", theme: "Culture & Heritage", photo: "sigiriya",
    summary: "Rock citadels, living traditions and a few days in the hills.",
    description: "Begin in the Cultural Triangle and work your way towards the tea-growing highlands. This route balances early starts at major sights with time to walk and explore.",
    stops: ["sigiriya", "kandy", "nuwara-eliya", "ella"],
    days: [
      { title: "Into the Cultural Triangle", detail: "Travel inland to the Sigiriya area. If time allows, look around the village and get your bearings before the next morning’s climb." },
      { title: "Sigiriya and Dambulla", detail: "Start at Lion Rock and its gardens, then continue to the cave temples at Dambulla. Choose a pace that suits the group." },
      { title: "Kandy by the lake", detail: "Continue to Kandy for the Temple of the Tooth and a walk along the lakeshore." },
      { title: "Into tea country", detail: "Follow the mountain roads towards Nuwara Eliya and set aside time for a tea estate visit, subject to opening hours." },
      { title: "Ella on foot", detail: "Head to Ella to see Nine Arch Bridge. Add Little Adam’s Peak if the weather and walking conditions suit." },
      { title: "An easy finish", detail: "Take one last morning in the hills before continuing to your onward stop in Sri Lanka." },
    ],
  },
  {
    slug: "tea-country-trails", name: "Tea Country Trails", theme: "Hill Country", photo: "ella",
    summary: "Tea estates, a famous railway and walks through the highlands.",
    description: "Give the hill country room to breathe. Follow the tea valleys from Kandy through Nuwara Eliya to Ella and make time for walks between the viewpoints.",
    stops: ["kandy", "nuwara-eliya", "ella"],
    days: [
      { title: "A first day in Kandy", detail: "Explore the lakeshore and pick a stop in town or at the gardens in nearby Peradeniya." },
      { title: "Tea estates and mountain roads", detail: "Continue towards Nuwara Eliya. Enquire about a tea estate visit and leave time for the scenery along the way." },
      { title: "Across the hills to Ella", detail: "Consider a rail segment subject to timetable and seat availability, or travel by road. Explore Ella’s town centre after arriving." },
      { title: "Bridge walks and valley views", detail: "See Nine Arch Bridge and choose a viewpoint walk based on weather and time before your onward journey." },
    ],
  },
  {
    slug: "wildlife-and-southern-shores", name: "Wildlife & Southern Shores", theme: "Wildlife & Coast", photo: "udawalawe",
    summary: "A park safari, sandy bays and Galle Fort at your own pace.",
    description: "Pair time near the grasslands of Udawalawe with a few days on the southern shoreline. Keep the beach days flexible for weather and local sea conditions.",
    stops: ["udawalawe", "mirissa", "galle"],
    days: [
      { title: "Arrive near Udawalawe", detail: "Travel to the park area and leave the evening free before an early start." },
      { title: "Wildlife and the coast", detail: "Plan a safari subject to park access and conditions, then continue towards Mirissa. Wildlife sightings vary." },
      { title: "A gentle day in Mirissa", detail: "Spend time near the bay, look for coastal viewpoints or visit nearby Weligama." },
      { title: "Explore Galle Fort", detail: "Walk the fort ramparts, see the lighthouse and explore the lanes inside the old town." },
      { title: "A last look at the coast", detail: "Keep the morning open for a short walk or an early lunch before your onward journey." },
    ],
  },
];

type Experience = { slug: string; name: string; photo: Place; description: string; ideas: string[]; places: Place[] };
export const experiences: Experience[] = [
  { slug: "culture-and-heritage", name: "Culture & Heritage", photo: "sigiriya", description: "Explore the island’s rock fortresses, temple precincts and historic streets.", ideas: ["Climb through the gardens at Sigiriya", "Visit the Temple of the Tooth in Kandy", "Follow the ramparts at Galle Fort"], places: ["sigiriya","kandy","galle"] },
  { slug: "tea-country-and-rail", name: "Tea Country & Rail", photo: "nuwara-eliya", description: "Follow the mountain roads, find tea estates and make time for short walks in the central highlands.", ideas: ["Explore the tea-growing hills around Nuwara Eliya", "See Nine Arch Bridge near Ella", "Ask about adding a hill-country rail segment"], places: ["kandy","nuwara-eliya","ella"] },
  { slug: "wildlife-and-nature", name: "Wildlife & Nature", photo: "udawalawe", description: "Spend time in open grasslands and forested valleys, with space to stop and look closely.", ideas: ["Look for elephants and birds in Udawalawe", "Visit a viewpoint around Ella Gap", "Ask about park access and safari timing"], places: ["udawalawe","ella"] },
  { slug: "south-coast", name: "The South Coast", photo: "mirissa", description: "Pair the history of Galle Fort with a softer pace on the southern shoreline.", ideas: ["Walk to the Galle lighthouse", "Spend a morning by Mirissa Bay", "Explore the coast around Weligama"], places: ["galle","mirissa"] },
];

export const inclusionTopics = ["Transport and pickup points", "Accommodation and meals", "Guide services and entrance fees", "Rail seats and safari arrangements"];
