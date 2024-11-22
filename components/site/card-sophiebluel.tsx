import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle } from "@/components/ui/card"
import { SiHtml5, SiCss3, SiGithub, SiJavascript } from '@icons-pack/react-simple-icons';

export default function CardSophiebluel () {
    return (
      <Card className="w-full overflow-hidden my-8 border-slate-300 dark:border-slate-600 border-2">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-full xl:w-1/2  m-2">
                  <Image 
                  src="https://a-n-s-k.github.io/portfolio/SophieBluel.png"
                  alt="Sophie Bluel"
                  className="object-contain md:object-scale-down"
                  width={1024}
                  height={630}
                  />
                </div>
                <div className="lg:w-full xl:w-1/2 p-6 flex flex-col justify-between">
                  <CardContent className="p-0">
                    <CardTitle className="text-xl sm:text-xl md:text-2xl lg:text-3xl pb-2" >
                    Création d’une page web dynamique avec JavaScript
                    </CardTitle>
                    <CardDescription className="text-xl my-2">
                    <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Description
                      </h2>
                      <div className="text-md">
                      Ce projet vous engage à créer une page web dynamique pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API. 
                      </div>
                      <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Problématiques
                      </h2>
                      <ul className="text-md">
                        <li className="list-disc mx-10">
                        Gérer les événements utilisateurs avec JavaScript.
                        </li>
                        <li className="list-disc mx-10">
                        Manipuler les éléments du DOM avec JavaScript.
                        </li>
                        <li className="list-disc mx-10">
                        Récupérer les données utilisateurs dans le JavaScript via des formulaires.
                        </li>
                      </ul>
                      <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Compétences
                      </h2>
                      <ul className="text-md">
                        <li className="list-disc mx-10">
                        La capacité à créer des pages web dynamiques avec JavaScript.
                        </li>
                        <li className="list-disc mx-10">
                        Gérer les interactions utilisateurs et la communication avec des APIs.
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
                          <div className="mr-2">
                            <SiJavascript color='#F7DF1E' size={32} />
                          </div> 
                          </div>
                        </div>
                      </div>
                      <div className="space-x-4 text-center">
                        <Link
                          href="https://github.com/a-n-s-k/SophieBluel"
                          target="_blank"
                          rel="noreferrer"
                        >
                        <SiGithub color='#181717' size={32} />
                        </Link>
                      </div>
                      <div className="space-x-4 text-center">
                      </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}








