import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  tanstack: {
    title: "TanStack Query",
    bg: "black",
    fg: "white",
    icon: <span>🔄</span>,
  },
  radix: {
    title: "Radix UI",
    bg: "black",
    fg: "white",
    icon: <span>🎭</span>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <span>📱</span>,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <span>🎯</span>,
  },
  raspberrypi: {
    title: "Raspberry Pi",
    bg: "black",
    fg: "white",
    icon: <span>🍓</span>,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <span>📸</span>,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <span>🧠</span>,
  },
  c: {
    title: "C",
    bg: "black",
    fg: "white",
    icon: <span>C</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. AquaGuard - Mobile
    id: "aquaguard",
    category: "Mobile Development",
    title: "AquaGuard - Sistema de Monitoramento de Água",
    src: "/assets/projects-screenshots/aquaguard/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Leonardobrzz/AquaGuard---MOBILE",
    github: "https://github.com/Leonardobrzz/AquaGuard---MOBILE",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            AquaGuard é um sistema mobile de monitoramento de qualidade da água desenvolvido em Flutter.
            O aplicativo permite acompanhar em tempo real parâmetros de qualidade da água, oferecendo
            uma interface intuitiva e responsiva para dispositivos móveis.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Características Principais</TypographyH3>
          <p className="font-mono mb-2">
            • Interface mobile moderna e responsiva<br/>
            • Monitoramento em tempo real de parâmetros da água<br/>
            • Integração com Firebase para armazenamento de dados<br/>
            • Desenvolvido com Flutter para iOS e Android
          </p>
        </div>
      );
    },
  },
  { // 02. App Interface Flutter
    id: "appinterfaceflutter",
    category: "Mobile Development",
    title: "Interface de Aplicativo Flutter",
    src: "/assets/projects-screenshots/flutterapp/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Leonardobrzz/app-interface-flutter",
    github: "https://github.com/Leonardobrzz/app-interface-flutter",
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Projeto de desenvolvimento de interface moderna para aplicativo mobile utilizando Flutter.
            Demonstra habilidades em design de UI/UX e implementação de componentes reutilizáveis.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Destaques Técnicos</TypographyH3>
          <p className="font-mono mb-2">
            • Componentes Flutter customizados<br/>
            • Design responsivo e adaptativo<br/>
            • Navegação fluida entre telas<br/>
            • Boas práticas de arquitetura mobile
          </p>
        </div>
      );
    },
  },
  { // 03. Embarca Tech - Projeto Final
    id: "embarcatech",
    category: "Sistemas Embarcados",
    title: "Projeto Final - Embarca Tech",
    src: "/assets/projects-screenshots/embarcatech/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Leonardobrzz/Projeto-final---Embarca-Tech",
    github: "https://github.com/Leonardobrzz/Projeto-final---Embarca-Tech",
    skills: {
      frontend: [PROJECT_SKILLS.c],
      backend: [
        PROJECT_SKILLS.raspberrypi,
        PROJECT_SKILLS.arduino,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Projeto final do programa Embarca Tech focado em sistemas embarcados. Desenvolvido com
            Raspberry Pi e programação em C, demonstra integração hardware-software para solução
            de problemas reais com IoT e automação.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tecnologias Embarcadas</TypographyH3>
          <p className="font-mono mb-2">
            • Programação em C para sistemas embarcados<br/>
            • Integração com Raspberry Pi / Pico<br/>
            • Comunicação UART e Bluetooth<br/>
            • Controle de periféricos e sensores
          </p>
        </div>
      );
    },
  },
  { // 04. Processamento de Imagens
    id: "processamentoimagens",
    category: "Ciência de Dados / ML",
    title: "Processamento de Imagens Médicas",
    src: "/assets/projects-screenshots/processamento/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Leonardobrzz/Processamento-de-Imagens",
    github: "https://github.com/Leonardobrzz/Processamento-de-Imagens",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.opencv,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Projeto de processamento e análise de imagens médicas utilizando técnicas de Machine Learning
            e Computer Vision. Desenvolvido com Python, TensorFlow e OpenCV para classificação de
            imagens de raio-X e DICOM, com aplicação em diagnóstico veterinário.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Machine Learning Aplicado</TypographyH3>
          <p className="font-mono mb-2">
            • Processamento de imagens médicas (raio-X, DICOM)<br/>
            • Classificação com TensorFlow e redes neurais<br/>
            • Análise de pulmões de cães com ML<br/>
            • Métricas estatísticas e análise descritiva<br/>
            • Computer Vision com OpenCV
          </p>
        </div>
      );
    },
  },
  { // 05. Cidade Inteligente
    id: "cidadeinteligente",
    category: "IoT / Sistemas Embarcados",
    title: "Cidade Inteligente - IoT",
    src: "/assets/projects-screenshots/cidadeinteligente/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Leonardobrzz/Cidade-inteligente",
    github: "https://github.com/Leonardobrzz/Cidade-inteligente",
    skills: {
      frontend: [PROJECT_SKILLS.c, PROJECT_SKILLS.cplusplus],
      backend: [
        PROJECT_SKILLS.arduino,
        PROJECT_SKILLS.raspberrypi,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Projeto de cidade inteligente utilizando conceitos de IoT e automação. Desenvolvido com
            Arduino e Raspberry Pi para criar soluções de monitoramento e controle urbano, demonstrando
            integração de múltiplos sensores e atuadores.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Internet das Coisas</TypographyH3>
          <p className="font-mono mb-2">
            • Sistema de automação urbana com IoT<br/>
            • Integração Arduino Mega e Raspberry Pi<br/>
            • Comunicação entre dispositivos<br/>
            • Monitoramento e controle remoto<br/>
            • Eletrônica digital aplicada
          </p>
        </div>
      );
    },
  },
  { // 06. Aura Weather
    id: "auraweather",
    category: "Web Development",
    title: "Aura Weather - App de Clima Moderno",
    src: "/assets/projects-screenshots/auraweather/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Leonardobrzz/aura-weather",
    github: "https://github.com/Leonardobrzz/aura-weather",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.tanstack,
        PROJECT_SKILLS.radix,
        PROJECT_SKILLS.framerMotion,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Aplicativo moderno de previsão do tempo desenvolvido com React, TypeScript, Vite e Tailwind CSS.
            Utiliza a API do OpenWeatherMap para fornecer informações climáticas em tempo real, com
            interface elegante e animações suaves.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Funcionalidades Principais</TypographyH3>
          <p className="font-mono mb-2">
            • Temperatura atual e sensação térmica em tempo real<br/>
            • Busca de cidades com autocomplete<br/>
            • Previsão horária para próximas 24 horas<br/>
            • Previsão estendida de 5 dias<br/>
            • Informações detalhadas: vento, umidade, pressão, visibilidade<br/>
            • Interface moderna com gradientes dinâmicos<br/>
            • Animações suaves com Framer Motion<br/>
            • Integração com OpenWeatherMap API
          </p>
          <TypographyH3 className="my-4 mt-8">Stack Técnico</TypographyH3>
          <p className="font-mono mb-2">
            • React 18 com TypeScript para type safety<br/>
            • Vite para build otimizado e dev server rápido<br/>
            • TanStack Query para gerenciamento de estado assíncrono<br/>
            • Radix UI para componentes acessíveis<br/>
            • Tailwind CSS para estilização utilitária<br/>
            • Framer Motion para animações fluidas
          </p>
        </div>
      );
    },
  },
];
export default projects;