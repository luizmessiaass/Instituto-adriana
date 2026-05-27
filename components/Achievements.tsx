import Link from "next/link";
import { Flame, Star, TimerReset } from "lucide-react";
import { achievements } from "@/lib/data";

const icons = [TimerReset, Star, Flame];

export function Achievements() {
  return (
    <section className="panel achievements">
      <h3>Conquistas recentes</h3>
      {achievements.map((item, index) => {
        const Icon = icons[index];
        return (
          <div className="achievement" key={item}>
            <span><Icon size={17} strokeWidth={1.6} /></span>
            <p>{item}</p>
          </div>
        );
      })}
      <Link href="/perfil#conquistas">VER TODAS AS CONQUISTAS <span>›</span></Link>
    </section>
  );
}
