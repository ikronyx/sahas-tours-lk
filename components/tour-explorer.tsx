"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { themes, tours, tourStopName } from "@/lib/content";
import { TourCard } from "./editorial";

export default function TourExplorer() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("All themes");
  const results = tours.filter(tour => {
    const terms = [tour.name, tour.theme, tour.summary, ...tour.stops.map(tourStopName)].join(" ").toLowerCase();
    return (theme === "All themes" || tour.theme === theme) && terms.includes(query.trim().toLowerCase());
  });

  return <>
    <div className="filter-panel">
      <label className="filter-search"><span>Search tours</span><span><Search size={18} aria-hidden="true" /><input type="search" placeholder="Tour name or destination" value={query} onChange={event => setQuery(event.target.value)} /></span></label>
      <label><span>Travel theme</span><select value={theme} onChange={event => setTheme(event.target.value)}>{["All themes", ...themes].map(item => <option key={item}>{item}</option>)}</select></label>
    </div>
    <p className="result-count" aria-live="polite">{results.length} {results.length === 1 ? "itinerary" : "itineraries"}</p>
    {results.length > 0 ? <div className="card-grid">{results.map(tour => <TourCard key={tour.slug} tour={tour} />)}</div> : <p className="empty-state">No itineraries match. Try a different destination or theme.</p>}
  </>;
}
