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

      {/* lời chúc */}
      <section className="w-full py-20 px-6">
        <p className="text-stone-500 text-center max-w-md mx-auto leading-relaxed">
          Chúc bạn có một trải nghiệm tuyệt vời tại Priméd&apos;Or!
        </p>
      </section>
    </main>
  );
}
