import { Intro } from "@/components/common/intro";
import { BookCheck } from "lucide-react";
import Bio from "@/components/layout/bio";

export default function AboutPage() {
  return (
    <main>
      <div className="mx-5">
        <Intro
          icon={<BookCheck />}
          badge="About"
          heading="About"
          highlight="Me"
          paragraph="Let's me introduce my self briefly."
        />
        <Bio />
      </div>
    </main>
  );
}
