export const photos = {
  sigiriya: { src: "/images/sigiriya.webp", alt: "Sigiriya Lion Rock rising from the forest", name: "Sigiriya", position: "center 48%" },
  ella: { src: "/images/ella.webp", alt: "Nine Arch Bridge surrounded by the green hills of Ella", name: "Ella", position: "center 52%" },
  galle: { src: "/images/galle.webp", alt: "Galle Fort lighthouse beside the Indian Ocean", name: "Galle", position: "center 52%" },
  udawalawe: { src: "/images/udawalawe.webp", alt: "Elephant in Udawalawe National Park", name: "Udawalawe", position: "center 46%" },
  "nuwara-eliya": { src: "/images/nuwara-eliya.webp", alt: "Tea country near Nuwara Eliya", name: "Nuwara Eliya", position: "center 56%" },
  mirissa: { src: "/images/mirissa.webp", alt: "Palm-lined beach in Mirissa", name: "Mirissa", position: "center 55%" },
  kandy: { src: "/images/kandy.webp", alt: "Visitors at the Temple of the Tooth in Kandy", name: "Kandy", position: "center 54%" },
  "ahangama": { src: "/images/ahangama.webp", alt: "Coral-fringed shore at Ahangama", name: "Ahangama", position: "center" },
  "anuradhapura": { src: "/images/anuradhapura.webp", alt: "Ruwanwelisaya stupa in Anuradhapura", name: "Anuradhapura", position: "center" },
  "colombo": { src: "/images/colombo.webp", alt: "Galle Face Green beside the ocean in Colombo", name: "Colombo", position: "center" },
  "hambantota": { src: "/images/hambantota.webp", alt: "Wildlife habitat in Bundala National Park near Hambantota", name: "Hambantota", position: "center" },
  "hikkaduwa": { src: "/images/hikkaduwa.webp", alt: "Hikkaduwa Beach on Sri Lanka’s southwest coast", name: "Hikkaduwa", position: "center" },
  "jaffna": { src: "/images/jaffna.webp", alt: "Nallur Kandaswamy Temple in Jaffna", name: "Jaffna", position: "center" },
  "kataragama": { src: "/images/kataragama.webp", alt: "Buildings in the Kataragama temple precinct", name: "Kataragama", position: "center" },
  "negombo": { src: "/images/negombo.webp", alt: "Fishing boat on the shore in Negombo", name: "Negombo", position: "center" },
  "puttalam": { src: "/images/puttalam.webp", alt: "Puttalam Lagoon at low tide", name: "Puttalam", position: "center" },
  "tangalle": { src: "/images/tangalle.webp", alt: "Palm-lined shore in Tangalle", name: "Tangalle", position: "center" },
  "unawatuna-bay": { src: "/images/unawatuna-bay.webp", alt: "Unawatuna Beach beside the bay", name: "Unawatuna Bay", position: "center" },
  "weligama": { src: "/images/weligama.webp", alt: "Weligama Beach and the waters of the bay", name: "Weligama", position: "center" },
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
  { slug: "ahangama", region: "South Coast", teaser: "Surf breaks, small bays and cafés along the southern coast.", description: "Base yourself near Kabalana for beach time and cafés, or explore the quieter lanes inland. Surf breaks differ in difficulty, so a local guide can help match the conditions to your level.", highlights: ["Kabalana Beach", "Coastal cafés and village lanes", "Surf breaks around Ahangama"] },
  { slug: "anuradhapura", region: "Cultural Triangle", teaser: "White stupas, sacred courtyards and ancient reservoirs.", description: "Allow a day to explore this former capital. Ruwanwelisaya and the Sri Maha Bodhi precinct are active places of worship, while Isurumuniya offers a smaller temple stop beside the old reservoirs.", highlights: ["Ruwanwelisaya stupa", "Jaya Sri Maha Bodhi", "Isurumuniya temple"] },
  { slug: "colombo", region: "Western Coast", teaser: "A coastal capital of markets, temples and waterfront walks.", description: "Begin with the market streets of Pettah, then slow down by Beira Lake or at Gangaramaya Temple. Galle Face Green is a natural last stop if you want a sea breeze and an evening stroll.", highlights: ["Pettah markets", "Gangaramaya Temple", "Galle Face Green"] },
  { slug: "hambantota", region: "Southeast Coast", teaser: "Lagoons and wetlands on Sri Lanka’s drier southern coast.", description: "Use Hambantota as a base to see a different side of the south. Nearby Bundala National Park rewards an unhurried birdwatching visit, and the lagoons and salt pans help explain the character of this dry coastal landscape.", highlights: ["Bundala National Park", "Lagoons and salt pans", "Dry-zone birdwatching"] },
  { slug: "hikkaduwa", region: "Southwest Coast", teaser: "A lively beach town beside a protected coral reef.", description: "Hikkaduwa offers a mix of beach time and local cafés. If sea conditions suit, ask about a reef visit in the marine park and give coral and marine wildlife plenty of space.", highlights: ["Hikkaduwa Beach", "Hikkaduwa Marine National Park", "Beachfront cafés"] },
  { slug: "jaffna", region: "Northern Peninsula", teaser: "Tamil temple architecture, market streets and a lagoon-side fort.", description: "Give Jaffna time for both its landmarks and everyday life. Visit the Nallur temple precinct, explore the market streets and walk the grounds of Jaffna Fort beside the lagoon.", highlights: ["Nallur Kandaswamy Temple", "Jaffna Fort", "Jaffna market"] },
  { slug: "kataragama", region: "Southern Sri Lanka", teaser: "An active pilgrimage town centred on a sacred temple precinct.", description: "The Kataragama temple precinct brings together several religious traditions. Leave time for the riverside approach and visit Kiri Vehera if it fits your route. A local guide can explain what is taking place during ceremonies.", highlights: ["Kataragama temple precinct", "Kiri Vehera", "Menik Ganga riverside"] },
  { slug: "negombo", region: "Western Coast", teaser: "Fishing boats, lagoon scenery and heritage churches near the airport.", description: "Negombo works well for an easy first or last night. Go early for the fishing district, spend time near the lagoon, or walk between the town’s churches and the coast.", highlights: ["Fishing district", "Negombo Lagoon", "St. Mary’s Church"] },
  { slug: "puttalam", region: "Northwest Coast", teaser: "A northwest lagoon landscape of fishing villages and open water.", description: "Puttalam is a useful stop on a journey through the northwest. Spend time by the lagoon to get a sense of its working waterfront, then continue towards the Kalpitiya peninsula if you have time.", highlights: ["Puttalam Lagoon", "Lagoon-side fishing communities", "Kalpitiya peninsula nearby"] },
  { slug: "tangalle", region: "South Coast", teaser: "Quiet stretches of sand and lagoons east of the busier resort towns.", description: "Tangalle is best enjoyed at a slower pace. Walk the sand at Medaketiya, spend time near a lagoon or ask about a guided visit to Rekawa. Pay attention to local sea conditions before entering the water.", highlights: ["Medaketiya Beach", "Rekawa Lagoon", "Southern coastal walks"] },
  { slug: "unawatuna-bay", region: "South Coast", teaser: "A curved beach and short coastal outings near Galle.", description: "Unawatuna is an easy beach stop on a wider Galle itinerary. Spend time along the bay or take a short outing towards Rumassala for a hilltop view and a different perspective on the coast.", highlights: ["Unawatuna Beach", "Rumassala", "Japanese Peace Pagoda"] },
  { slug: "weligama", region: "South Coast", teaser: "A wide bay for beach walks and introductory surf lessons.", description: "Weligama’s bay can suit a first surf lesson when conditions are right. Even without getting in the water, the sweep of beach and fishing boats make it a good stop between Ahangama and Mirissa.", highlights: ["Weligama Bay", "Beginner surf lessons when conditions suit", "Fishing boats and beach walks"] },
];

export const themes = ["Culture & Heritage", "Hill Country", "Wildlife & Coast"] as const;
export type Theme = (typeof themes)[number];

const routeOnlyStops = {
  polonnaruwa: "Polonnaruwa",
  dambulla: "Dambulla",
  "nanu-oya": "Nanu Oya",
  yala: "Yala National Park",
};

type TourStop = Place | keyof typeof routeOnlyStops;

export function isDestinationStop(stop: TourStop): stop is Place {
  return Object.hasOwn(photos, stop);
}

export function tourStopName(stop: TourStop) {
  return isDestinationStop(stop) ? photos[stop].name : routeOnlyStops[stop];
}

type Tour = {
  slug: string;
  name: string;
  theme: Theme;
  photo: Place;
  summary: string;
  description: string;
  stops: TourStop[];
  days: { title: string; area: string; detail: string; overnight?: string }[];
};

export const tours: Tour[] = [
  {
    slug: "heritage-and-highlands",
    name: "Heritage & Highlands",
    theme: "Culture & Heritage",
    photo: "sigiriya",
    summary: "Ancient capitals, rock fortresses and temple traditions, with a highland train journey and a visit to Galle.",
    description: "This seven-day route puts Sri Lanka’s heritage first. Begin with a choice of ancient capital, climb Lion Rock and visit the cave temples at Dambulla and the Temple of the Tooth in Kandy. The route then crosses tea country and Ella before finishing in Galle and Colombo.",
    stops: ["anuradhapura", "polonnaruwa", "sigiriya", "dambulla", "kandy", "nuwara-eliya", "nanu-oya", "ella", "galle", "colombo"],
    days: [
      { title: "An ancient capital on the way to Sigiriya", area: "Airport or nearby hotel → Anuradhapura or Polonnaruwa → Sigiriya", detail: "Meet your driver at the airport or a nearby hotel. With an early pickup, choose one ancient capital to explore: Anuradhapura for its sacred precincts, or Polonnaruwa for its royal ruins. Continue to Sigiriya. A late pickup is better suited to a direct transfer.", overnight: "Sigiriya" },
      { title: "Lion Rock and village life", area: "Sigiriya", detail: "Climb Lion Rock in the morning, taking time for the gardens and fortress ruins. Spend the afternoon on a village tour. If you prefer another climb, choose Pidurangala Rock in place of the village visit.", overnight: "Sigiriya" },
      { title: "Cave temples, spices and Kandy", area: "Sigiriya → Dambulla → Kandy", detail: "Visit the Dambulla Cave Temple, then stop at a spice garden on the way to Kandy. Visit the Temple of the Tooth and fit in a short city tour if time allows.", overnight: "Kandy" },
      { title: "Tea making in the highlands", area: "Kandy → Nuwara Eliya", detail: "Travel into the hills and visit a tea factory to see how the leaves are processed. Spend the rest of the afternoon exploring Nuwara Eliya at an easy pace.", overnight: "Nuwara Eliya" },
      { title: "Train to Ella and Nine Arch Bridge", area: "Nanu Oya → Ella", detail: "Take the train from Nanu Oya to Ella if seats and the timetable allow. Visit Nine Arch Bridge after arrival if there is enough daylight. The rail leg can be replaced by a road transfer if needed.", overnight: "Ella" },
      { title: "Galle’s historic streets", area: "Ella → Galle", detail: "Travel down from the hills to Galle. After the drive, take a city tour centred on the fort, its narrow streets and the ramparts.", overnight: "Galle" },
      { title: "Colombo and drop-off", area: "Galle → Colombo", detail: "Continue to Colombo for drop-off. If your schedule leaves time, make a short city stop before the journey ends." },
    ],
  },
  {
    slug: "tea-country-trails",
    name: "Tea Country Trails",
    theme: "Hill Country",
    photo: "ella",
    summary: "Two nights in Nuwara Eliya, tea country at an easy pace and the Nanu Oya–Ella rail journey.",
    description: "This seven-day route gives the hills more time. Start in Kandy, spend two nights in Nuwara Eliya around a tea factory visit, then take the train to Ella and set aside a full day for Nine Arch Bridge and the town.",
    stops: ["kandy", "nuwara-eliya", "nanu-oya", "ella", "colombo"],
    days: [
      { title: "Arrival and the road to Kandy", area: "Airport or nearby hotel → Kandy", detail: "Meet your driver at the airport or a nearby hotel and head straight for the hills. Keep the rest of the day free to settle in after the transfer.", overnight: "Kandy" },
      { title: "Kandy at an easy pace", area: "Kandy", detail: "Visit the Temple of the Tooth, then take a city tour with time for breaks. Keeping the day in Kandy avoids another long transfer before tea country.", overnight: "Kandy" },
      { title: "From tea leaf to cup", area: "Kandy → Nuwara Eliya", detail: "Travel to Nuwara Eliya and arrange a tea factory visit, subject to opening hours. See how the leaves are processed and ask about a tasting.", overnight: "Nuwara Eliya" },
      { title: "An unhurried day in tea country", area: "Nuwara Eliya", detail: "Spend the day in Nuwara Eliya, with time to explore the town and take in the tea-growing landscape. This day also gives you room to move the factory visit if its opening hours suit a different day.", overnight: "Nuwara Eliya" },
      { title: "Rail through the hills", area: "Nanu Oya → Ella", detail: "Transfer to Nanu Oya station and take the train to Ella, subject to timetable and seat availability. Travel by road if the rail leg is unavailable, and keep the evening free in Ella.", overnight: "Ella" },
      { title: "Nine Arch Bridge and time in Ella", area: "Ella", detail: "Make Nine Arch Bridge the focus of the morning. Visit the viewpoint at your own pace, then leave the rest of the day open to explore Ella.", overnight: "Ella" },
      { title: "From the hills to Colombo", area: "Ella → Colombo", detail: "Leave Ella and allow most of the day for the road transfer to Colombo. Agree on your drop-off time before setting out." },
    ],
  },
  {
    slug: "wildlife-and-southern-shores",
    name: "Wildlife & Southern Shores",
    theme: "Wildlife & Coast",
    photo: "mirissa",
    summary: "A safari near Sigiriya, a dedicated Yala game drive and a morning on the water in Mirissa.",
    description: "This seven-day route pairs the Sigiriya area with Yala National Park and the southern coast. The safari and whale-watching trips are on separate days, leaving room for the transfers and for changes in park or sea conditions.",
    stops: ["sigiriya", "ella", "yala", "mirissa", "hikkaduwa", "colombo"],
    days: [
      { title: "Arrival and transfer to Sigiriya", area: "Airport or nearby hotel → Sigiriya", detail: "Meet your driver at the airport or a nearby hotel and travel to Sigiriya. Keep the evening free before the next day’s early start.", overnight: "Sigiriya" },
      { title: "Pidurangala and a safari near Sigiriya", area: "Sigiriya", detail: "Walk up Pidurangala Rock in the morning if conditions suit. Plan an afternoon safari in the Sigiriya area, with the operator choosing the available safari location based on local conditions. Wildlife sightings vary.", overnight: "Sigiriya" },
      { title: "Transfer into the hills", area: "Sigiriya → Ella", detail: "Set aside most of the day for the drive to Ella. Arrive with time to rest before heading towards the national park the following day.", overnight: "Ella" },
      { title: "Nine Arch Bridge and the road to Yala", area: "Ella → Yala National Park", detail: "Visit Nine Arch Bridge in the morning, then continue towards Yala. Use the evening to confirm the next morning’s safari arrangements.", overnight: "the Yala area" },
      { title: "Yala safari and the southern coast", area: "Yala National Park → Mirissa", detail: "Set out on a morning jeep safari, subject to park access and conditions. After the drive, travel to Mirissa and keep the evening free. Wildlife sightings vary.", overnight: "Mirissa" },
      { title: "Whale watching off Mirissa", area: "Mirissa", detail: "Take a morning whale-watching trip if the season, sea conditions and sailing schedule suit. Sightings vary. If the boat trip is cancelled, spend the morning on shore in Mirissa.", overnight: "Mirissa" },
      { title: "Hikkaduwa and drop-off in Colombo", area: "Mirissa → Hikkaduwa → Colombo", detail: "Travel up the coast with a short stop in Hikkaduwa for time by the sea, then continue to Colombo for drop-off." },
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
