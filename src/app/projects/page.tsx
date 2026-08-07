"use client";

import { Book } from "lucide-react";
import { motion } from "framer-motion";
import { Intro } from "@/components/common/intro";
import { projectsList } from "@/data/projects";
import { ProjectCard } from "@/components/custom/project-card"; // adjust path if different

export default function ProjectsPage() {
  return (
    <main className="relative min-h-dvh overflow-x-clip">
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden"
      >
        <div className="h-[360px] w-[720px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      {/* hero / intro */}
      <div className="mx-5">
        <Intro
          icon={<Book />}
          badge="All Projects"
          heading="Projects"
          highlight=" I done"
          paragraph="Browse real world projects i done."
        />
      </div>

      {/* projects grid */}
      <section className="mx-auto w-full max-w-[1240px] px-4 pb-24 sm:px-6 lg:px-8">
        {/* divider + count */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {projectsList.length} projects
          </span>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        {/* responsive grid: 1 col → 2 cols → 3 cols */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 48, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
