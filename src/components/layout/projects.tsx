"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/custom/project-card";
import { projectsList } from "@/data/projects";
import { Heading } from "@/components/common/intro";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => "+=" + getScrollAmount(),
          scrub: 0.5, // ← smoother scrub response
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Card focus animations
      gsap.utils.toArray<HTMLElement>(".proj-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.85, filter: "grayscale(1)" },
          {
            opacity: 1,
            scale: 1,
            filter: "grayscale(0)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 78%",
              end: "left 45%",
              scrub: true,
            },
          },
        );
      });

      // More Projects button — rises & scales into view
      const moreBtn = track.querySelector(".more-projects-btn");
      if (moreBtn) {
        gsap.fromTo(
          moreBtn,
          { opacity: 0, scale: 0.6, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: moreBtn,
              containerAnimation: tween,
              start: "left 85%",
              end: "left 55%",
              scrub: true,
            },
          },
        );
      }
    }, wrap);

    return () => ctx.revert();
  }, []);

  const chosenProjects = projectsList.slice(0, 4);

  return (
    <section id="projects" className="relative mb-5">
      <div className="mx-auto max-w-[1100px] px-6 pb-10 pt-24">
        <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wide text-red-400">
          <span className="h-px w-6 bg-red-400" />
          selected work — {String(projectsList.length).padStart(2, "0")}
        </div>
        <Heading
          text="Projects that shipped,"
          highlight="not just prototypes."
        />
      </div>

      <div
        ref={wrapRef}
        className="relative flex h-[100dvh] items-center overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex gap-2 px-1 m-3 lg:gap-7 lg:px-[6vw]"
        >
          {chosenProjects.map((project, i) => (
            <ProjectCard key={project.title} index={i} {...project} />
          ))}

          {/* ── Circular More Projects CTA ── */}
          <div className="flex flex-none items-center justify-center px-3 lg:px-8">
            <Link
              href="/projects"
              className="more-projects-btn group relative flex h-[170px] w-[170px] flex-col items-center justify-center gap-2.5 rounded-full border border-white/10 bg-background/80 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-110 hover:border-white/30 hover:bg-background sm:h-[200px] sm:w-[200px] lg:h-[280px] lg:w-[280px] lg:gap-4"
            >
              {/* subtle expanding ring on hover */}
              <span className="absolute inset-0 rounded-full border border-white/5 opacity-0 transition-all duration-500 ease-out scale-100 group-hover:scale-125 group-hover:opacity-100" />

              <span className="relative text-center font-display text-xs font-bold uppercase tracking-widest text-foreground sm:text-sm lg:text-base">
                More
                <br />
                Projects
              </span>

              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-foreground transition-all duration-300 group-hover:border-muted/30 group-hover:bg-card/5 sm:h-10 sm:w-10 lg:h-12 lg:w-12">
                <ArrowRight
                  size={16}
                  className="text-foreground transition-transform duration-300 group-hover:translate-x-0.5 sm:size-[18px] lg:size-5"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
