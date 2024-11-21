import {  SiReact,
          SiNextdotjs,
          SiJavascript,
          SiTypescript,
          SiNodedotjs,
          SiMongodb } from '@icons-pack/react-simple-icons';

export default async function Technologies() {
return (
      <section className="pb-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center my-10">
        
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 text-center">
            Compétences et Technologies
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden flex min-h-[220px] flex-col justify-between rounded-md p-6 bg-slate-300 dark:bg-gray-800">
            <div className="space-y-2 align-top h-1/5">
              <SiNextdotjs color='#000000' size={44} />
            </div>
            <div className="flex flex-col space-y-2 justify-between h-4/5">
              <h3 className="font-bold text-xl mt-2">Next.js</h3>
              <p className="text-lg">
                Next.js est un framework open source qui s'appuie sur la bibliothèque JavaScript React et sur la technologie Node.js.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden flex min-h-[220px] flex-col justify-between rounded-md p-6 bg-slate-300 dark:bg-gray-800">
            <div className="space-y-2 align-top h-1/5">
              <SiReact color='#61DAFB' size={44} />
            </div>
            <div className="flex flex-col space-y-2 justify-between h-4/5">
              <h3 className="font-bold text-xl mt-2">React</h3>
              <p className="text-lg">
                React est une bibliothèque open source JavaScript pour créer des interfaces utilisateurs. Elle est maintenue par Meta et par une communauté de développeurs individuels et d'entreprises.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden flex min-h-[220px] flex-col justify-between rounded-md p-6 bg-slate-300 dark:bg-gray-800">
            <div className="space-y-2 align-top h-1/5">
              <SiMongodb color='#47A248' size={44} />
            <div className="flex flex-col space-y-2 justify-between h-4/5">
              <h3 className="font-bold text-xl mt-2">MongoDB</h3>
                <p className="text-lg">
                  MongoDB est un système de gestion de base de données orienté documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden flex min-h-[220px] flex-col justify-between rounded-md p-6 bg-slate-300 dark:bg-gray-800">
            <div className="space-y-2 align-top h-1/5">
              <SiNodedotjs color='#5FA04E' size={44} />
            </div> 
            <div className="flex flex-col space-y-2 justify-between h-4/5">
              <h3 className="font-bold text-xl mt-2">Node.js</h3>
              <p className="text-lg">
                Node.js est un environnement d'exécution JavaScript open-source et multiplateforme qui permet aux développeurs de créer des serveurs et des applications.
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden flex min-h-[220px] flex-col justify-between rounded-md p-6 bg-slate-300 dark:bg-gray-800">
            <div className="space-y-2 align-top h-1/5">
              <SiTypescript color='#3178C6' size={44} />
            </div>
            <div className="flex flex-col space-y-2 justify-between h-4/5">
              <h3 className="font-bold text-xl mt-2">TypeScript</h3>
              <p className="text-lg">
                TypeScript est un langage de programmation libre développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript.
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden flex min-h-[220px] flex-col justify-between rounded-md p-6 bg-slate-300 dark:bg-gray-800">
            <div className="space-y-2 align-top h-1/5">
              <SiJavascript color='#F7DF1E' size={44} />
            </div>
            <div className="flex flex-col space-y-2 justify-between h-4/5">
              <h3 className="font-bold text-xl mt-2">JavaScript</h3>
              <p className="text-lg">
                JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}