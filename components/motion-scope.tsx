"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

export function MotionScope({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", (context) => {
      const entrance = root.querySelectorAll("[data-motion-enter]");
      if (entrance.length) {
        gsap.from(entrance, {
          y: 22,
          opacity: 0.45,
          duration: 0.76,
          stagger: 0.11,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }

      const reveals = root.querySelectorAll("[data-motion-reveal], [data-motion-stagger] > *");
      if (!reveals.length || !("IntersectionObserver" in window)) return;

      const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.intersectionRatio >= 0.12);
        if (!visible.length) return;

        visible.forEach(({ target }) => observer.unobserve(target));
        context.add(() => {
          gsap.from(visible.map(({ target }) => target), {
            y: 32,
            opacity: 0.3,
            duration: 0.8,
            stagger: 0.085,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
        });
      }, { threshold: 0.12 });

      reveals.forEach((element) => {
        if (element.getBoundingClientRect().top >= 0) observer.observe(element);
      });

      return () => observer.disconnect();
    }, root);

    return () => media.revert();
  }, []);

  return <div ref={scope}>{children}</div>;
}
