import CardBooki from "@/components/site/card-booki"
import CardSophiebluel from "@/components/site/card-sophiebluel"
import CardKasa from "@/components/site/card-kasa"

export default function portfolio() {
  return (
<section className="py-10">
  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-10 text-center">
    Réalisations
  </h1>
  <div className="text-2xl text-center">
      Vous trouverez quelques unes de mes réalisations ci-dessous.
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols">
    <CardBooki/>
    <CardKasa/>
    <CardSophiebluel/>
  </div>
</section>
)}
