import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collections")({
  component: CollectionsPage,
});

function CollectionsPage() {
  const gallery = [
    "/images/interior1.jpg",
    "/images/interior2.jpg",
    "/images/interior3.jpg",
    "/images/interior4.jpg",
    "/images/interior5.jpg",
    "/images/interior6.jpg",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}

      <section className="pt-40 pb-24 px-8 md:px-16 lg:px-24">
        <p className="font-mono uppercase tracking-[0.3em] text-[10px] text-accent mb-6">
          Curated Interiors
        </p>

        <h1 className="font-display italic text-6xl md:text-8xl leading-[0.95] tracking-tight">
          Spaces designed
          <br />
          to inspire living.
        </h1>

        <p className="mt-8 max-w-xl text-foreground/70 leading-relaxed">
          Discover inspiring interiors, elegant spaces, and timeless designs curated by Saradhi Interiors.
        </p>
      </section>

      {/* Gallery */}

      <section className="columns-1 md:columns-2 lg:columns-3 gap-6 px-8 md:px-16 lg:px-24 pb-32">
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Interior ${index + 1}`}
            className="mb-6 w-full rounded-sm object-cover hover:scale-[1.02] transition duration-700"
          />
        ))}
      </section>

      {/* Videos */}

      <section className="px-8 md:px-16 lg:px-24 pb-32">
        <p className="font-mono uppercase tracking-[0.3em] text-[10px] text-accent mb-10">
          Films
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src="/videos/interior1.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src="/videos/interior2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Quote Section */}

      <section className="px-8 md:px-16 lg:px-24 pb-32">
        <div className="max-w-4xl">
          <p className="font-display italic text-4xl md:text-6xl leading-tight mb-8">
            “Great interiors are not merely designed.
            They are thoughtfully lived.”
          </p>

          <p className="text-foreground/70 max-w-2xl leading-relaxed">
            At Saradhi Interiors, we create timeless spaces through experience,
            craftsmanship, and thoughtful design.
          </p>
        </div>
      </section>

    </main>
  );
}

export default CollectionsPage;