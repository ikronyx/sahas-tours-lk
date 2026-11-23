"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useId, useRef, useState } from "react";

type NavItem = { label: string; href: string };

export default function Navigation({ items }: { items: NavItem[] }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const id = useId();
  return <nav className="primary-nav" aria-label="Main navigation" onKeyDown={event => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }}>
    <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
      {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      <span>{open ? "Close" : "Menu"}</span>
    </button>
    <ul id={id} className={open ? "nav-list nav-open" : "nav-list"}>
      {items.map(({ label, href }) => {
        const current = href === path;
        const active = current || (href !== "/" && path.startsWith(href + "/"));
        return <li key={href}><Link href={href} className={active ? "active" : ""} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link></li>;
      })}
    </ul>
  </nav>;
}
