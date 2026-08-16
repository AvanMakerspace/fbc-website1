import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before Free Block Creatives I kept my story to myself. Learning film and performance gave me a way to say it out loud — and an audience that listened.",
    name: "Aisha",
    role: "Youth participant, Arts Education & Training",
  },
  {
    quote:
      "The beadwork and crochet training changed what my week looks like. I make products people actually buy, and that income belongs to me.",
    name: "Grace",
    role: "Member, Livelihoods & Crafts",
  },
  {
    quote:
      "As an LGBTQ+ refugee, safe rooms are rare. Here safeguarding is not a poster on the wall — it is how rehearsals, feedback and complaints are handled.",
    name: "Daniel",
    role: "Core member, Production & Creative Works",
  },
  {
    quote:
      "We came in to facilitate one holiday programme and left learning from them. The collective is refugee-led in practice, not just in name.",
    name: "Visiting facilitator",
    role: "Community partner, Kakuma",
  },
];

export function Testimonials() {
  return (
    <section id="voices" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Voices from the block</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Reflections from members, participants and partners on what changes when refugees lead
          their own creative work.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card p-7 shadow-lift">
              <Quote className="size-7 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-1 w-8 rounded-full spectrum-rule" />
                <span>
                  <span className="block text-sm font-bold">{t.name}</span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Names are shortened and some quotes are shared anonymously to protect member privacy.
        </p>
      </div>
    </section>
  );
}
