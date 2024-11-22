import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle } from "@/components/ui/card"
import { SiHtml5, SiCss3, SiGithub } from '@icons-pack/react-simple-icons';

export default function CardBooki () {
    return (
      <Card className="w-full overflow-hidden my-8 border-slate-300 dark:border-slate-600 border-2">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-full xl:w-1/2  m-2">
                  <Image 
                  src="https://a-n-s-k.github.io/portfolio/Booki.png" 
                  alt="Booki" 
                  className="object-contain md:object-scale-down"
                  width={1024}
                  height={600}
                  />
                </div>
                <div className="lg:w-full xl:w-1/2 p-6 flex flex-col justify-between">
                  <CardContent className="p-0">
                    <CardTitle className="text-xl sm:text-xl md:text-2xl lg:text-3xl pb-2" >
                    Création de la page d'accueil d'une agence de voyage avec HTML et CSS
                    </CardTitle>
                    <CardDescription className="text-xl my-2">
                    <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Description
                      </h2>
                      <div className="text-md">
                      Ce projet consiste à créer des interfaces web responsives à partir de maquettes Figma pour mobile, tablette et desktop en utilisant du HTML et du CSS.
                      </div>
                      <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Problématiques
                      </h2>

                      <ul className="text-md">
                        <li className="list-disc mx-10">
                        Installer un environnement de développement front-end.
                        </li>
                        <li className="list-disc mx-10">
                        Intégrer du contenu conformément à une maquette avec HTML et CSS.
                        </li>
                        <li className="list-disc mx-10">
                        Implémenter une interface responsive avec HTML et CSS.
                        </li>
                        <li className="list-disc mx-10">
                        Versionner son projet avec Git et Github.
                        </li>
                      </ul>
                      <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Compétences
                      </h2>
                      <ul className="text-md">
                        <li className="list-disc mx-10">
                        Configuration d'environnement de développement efficace.
                        </li>
                        <li className="list-disc mx-10">
                        Maîtrise du HTML et du CSS.
                        </li>
                        <li className="list-disc mx-10">
                        Utilisation du versioning avec Git et Github.
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="flex items-center justify-between  bg-slate-300 dark:bg-slate-600 rounded-sm py-2 px-2">
                      <div className="flex items-center space-x-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                          <div className="mr-2">
                            <SiHtml5 color='#E34F26' size={32} />
                          </div> 
                          <div className="mr-2">
                            <SiCss3 color='#1572B6' size={32} />
                          </div> 
                          </div>
                        </div>
                      </div>
                      <div className="space-x-4 text-center">
                        <Link
                          href="https://github.com/a-n-s-k/Booki"
                          target="_blank"
                          rel="noreferrer"
                        >
                        <SiGithub color='#181717' size={32} />
                        </Link>
                      </div>
                      <div className="space-x-4 text-center">
                      <Link
                          href="https://a-n-s-k.github.io/Booki"
                          target="_blank"
                          rel="noreferrer"
                          className={cn(buttonVariants({ size: "default", variant:"default" }))}
                        >
                        Voir le site
                        </Link>
                      </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}








