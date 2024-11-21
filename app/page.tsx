import Technologies from "@/components/site/technologies"

export default async function IndexBlog() {
  return (
    <>
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-slate-600 sm:text-5xl md:text-6xl pb-10">   
            Je suis 
            <span className="text-violet-800"> Sewa</span>, 
              développeur web avec les compétences nécessaires pour méner à bien vos projets de sites web et d'applications.
          </h1>
        </div>
      </section>
      <Technologies/>
    </>
  )
}
