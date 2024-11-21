import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle } from "@/components/ui/card"
import { SiHtml5, SiCss3, SiGithub, SiSass, SiReact } from '@icons-pack/react-simple-icons';

export default function CardKasa () {
    return (
      <Card className="w-full overflow-hidden my-8 border-slate-300 dark:border-slate-600 border-2">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-full xl:w-1/2  m-2">
                  <Image 
                  src="/Kasa.png"
                  alt="Kasa"
                  className="object-contain md:object-scale-down"
                  width={1024}
                  height={630}
                  />
                </div>
                <div className="lg:w-full xl:w-1/2 p-6 flex flex-col justify-between">
                  <CardContent className="p-0">
                    <CardTitle className="text-xl sm:text-xl md:text-2xl lg:text-3xl pb-2" >
                    Créer une application web de location immobilière avec React
                    </CardTitle>
                    <CardDescription className="text-xl my-2">
                    <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Description
                      </h2>
                      <div className="text-md">
                      Dans ce projet, j'ai implémenté le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive. 
                      </div>
                      <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Problématiques
                      </h2>
                      <ul className="text-md">
                        <li className="list-disc mx-10">
                        Utiliser React Router pour configurer la navigation entre les différentes pages de l'application. 
                        </li>
                        <li className="list-disc mx-10">
                        Récupérer les données du site à partir d'un fichier JSON.
                        </li>
                        <li className="list-disc mx-10">
                        Utiliser du Sass pour toute la patie CSS.
                        </li>
                        <li className="list-disc mx-10">
                        Pour l'utilisation de JavaScript en dehors du navigateur. Il a fallu installer Node.js.
                        </li>
                      </ul>
                      <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-1 pt-2 font-bold">
                        Compétences
                      </h2>
                      <ul className="text-md">
                        <li className="list-disc mx-10">
                        La maîtrise de React et de React Router pour faire du développement d'applications moderne.
                        </li>
                        <li className="list-disc mx-10">
                        L'utilisation de SASS pour gérer le CSS et l'implémentation d’animations CSS.
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
                            <SiSass color='#CC6699' size={32} />
                          </div> 
                          <div className="mr-2">
                            <SiReact color='#61DAFB' size={32} />
                          </div> 
                          </div>
                        </div>
                      </div>
                      <div className="space-x-4 text-center">
                        <Link
                          href="https://github.com/a-n-s-k/Kasa"
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








