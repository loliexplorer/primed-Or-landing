import { HeroSection } from "@/components/features/hero/hero-section";
import { PhilosophySection } from "@/components/features/philosophy/philosophy-section";
import { IngredientsSection } from "@/components/features/ingredients/ingredients-carousel";
import { CollectionsSection } from "@/components/features/collections/collections-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <PhilosophySection />
      <IngredientsSection />
      <CollectionsSection />

      {/* Placeholder for next sections */}
      <section className="w-full py-20 text-center">
        <p className="text-stone-500">Chúc bạn có một trải nghiệm tuyệt vời tại Primed'Or!</p>
      </section>
    </main>
  );
}
