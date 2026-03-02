import { motion } from "motion/react";
import Button from "../components/CTAButton.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import EmblaCarousel from "../components/EmblaCarousel.jsx";
import heroImage from '../assets/landing-hero.svg';
import reports from '../assets/reports.json';

export default function Home() {
  const isLargeScreen = window.innerWidth >= 928;

  const opportunities = [
    "+400 currículos otimizados e personalizados",
    "+280 aprovações em processos seletivos",
    "+30 aprovações no Itaú Unibanco e entre outras instituições financeiras",
    "Currículos com até 80% mais chance de serem selecionados",
    "Suporte completo em inscrição, busca de vagas e simulações de entrevista"
  ];

  return (
    <div className="w-screen bg-[var(--background-default)] flex flex-col items-center justify-start">
      {/* Background Image and Hero*/}
      <div className="absolute top-0 w-screen h-[54rem] flex flex-col items-center overflow-hidden">
        <div className="w-full h-[54rem] bg-[var(--background-inverse)]"/>
        <img src={heroImage} className="w-dvw mt-[-1.25rem] mr-[-1rem] lg:mt-[-5%] lg:mr-0"/>
      </div>

      {/* Landing section */}
      <section className="w-full flex flex-col items-center justify-start z-1 px-4 py-12 lg:py-16 lg:max-w-300">
        <div className="w-full flex flex-col items-center text-[var(--content-inverse)] gap-16 lg:px-42">
          <div>
            <h1 className="w-full text-center">
              SEU CURRÍCULO PODE ESTAR TE ELIMINANDO SEM VOCÊ SABER
            </h1>
            <p className="w-full text-center mt-4 lg:text-lg lg:px-52">
              Transformo sua busca por emprego em sucesso: reformulação de currículo, Gupy e perfil no LinkedIn
            </p>
          </div>
          <Button label="Saiba mais" variant="default"/>
          <div className="w-full flex flex-col items-center justify-center gap-8">

            {/* Youtube embed */}
            <iframe 
            className="w-full h-[calc((100vw-2rem)*9/16)] bg-black lg:w-160 lg:h-90 active:shadow-[0_0_20px_6px] lg:hover:shadow-[0_0_20px_4px] active:shadow-[#00775bf0] hover:shadow-[#00775bf0] transition-shadow duration-200 ease-in-out"
            src="https://www.youtube.com/embed/SywifiPJEWc"
            />

            {isLargeScreen ? (
              <p className="text-sm text-center text-[var(--content-primary)]">
                Vocẽ pode ser a próxima história de sucesso e conquistar a vaga dos seus sonhos
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Identification section */}
      <section className="w-full flex flex-col items-center justify-start px-4 py-12 mt-16 lg:py-16 lg:max-w-300 md:mt-0">

        {/* Identification card */}
        <motion.div 
        className="w-full flex flex-col items-center bg-[var(--background-accent)] rounded-2xl p-8 lg:p-16 gap-12 lg:justify-between lg:flex-row"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileactive={{ scale: 1.05 }}
        transition={{ duration: 0.15 }}
        >
          <div className="flex flex-col gap-6 select-none">
            <h2 className="text-[var(--content-inverse)]">
              Se você:
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-[var(--content-inverse)]">- Está cansado de enviar currículos sem retorno</p>
              <p className="text-lg text-[var(--content-inverse)]">- Tem medo de travar nas entrevistas</p>
              <p className="text-lg text-[var(--content-inverse)]">- Sabe que tem potencial, mas não sabe se vender</p>
            </div>
            <motion.h5 
            className="text-center text-[var(--brand-secondary)] lg:text-start"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "easeIn", delay: 0.75, duration: 0.5 }}
            >
              Então essa é a virada de chave que você precisa.
            </motion.h5>
          </div>
          <Button label="Entenda como" variant="white"/>
        </motion.div>

      </section>

      {/* Opportunities section */}
      <section className="w-full flex flex-col items-center justify-start px-4 py-12 lg:py-16 lg:max-w-300">
        <div className="w-full flex flex-col justify-center gap-16 lg:gap-16">
          <div className="w-full flex flex-col gap-6 lg:max-w-200">
            <motion.h4
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "easeIn", delay: 0.2, duration: 0.25 }}
            >
              GARANTO SEU POSICIONAMENTO NO MERCADO
            </motion.h4>
            <motion.h2
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "easeIn", delay: 0.3, duration: 0.25 }}
            >
              Desbloqueie vagas de emprego nas maiores empresas
            </motion.h2>
            <motion.p 
            className="text-justify font-medium lg:text-start"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "easeIn", delay: 0.4, duration: 0.25 }}
            >
              Este é o sistema validado que vai te tirar do anonimato, transformando seu currículo e LinkedIn em ferramentas de atração de recrutadores e te preparando para conquistar a vaga que você sempre quis. É a metodologia de alto impacto que eu mesmo uso e aplico com sucesso em meus clientes.
            </motion.p>
          </div>

          {isLargeScreen ? (
            <div className="w-full flex flex-row items-center justify-center gap-14">
              <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col gap-1">
                  {opportunities.map((text, index) => (
                    <motion.div 
                    key={index} 
                    className="flex gap-1.5 rounded-sm py-0.5 pl-0.5 pr-1 hover:cursor-default"
                    whileHover={{ backgroundColor: '#00C07166' }}
                    transition={{ duration: 0.25 }}
                    >
                      <img src="/icons/check.svg" className="w-6 h-6" alt="check icon" />
                      <p className="font-medium mt-0.25">{text}</p>
                    </motion.div>
                  ))}
                </div>
                <Button label="Brilhe nas entrevistas" variant="default"/>
              </div>
              <motion.img 
              src="/images/opportunities.svg" 
              className="h-76 mx-32"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.15 }}
              transition={{ duration: 0.15 }}
              />
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center gap-12">
              <motion.img 
              src="/images/opportunities.svg" 
              className="h-76 mx-32"
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.15 }}
              />
              <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col gap-2">
                  {opportunities.map((text, index) => (
                    <div key={index} className="flex gap-1.5">
                      <img src="/icons/check.svg" className="w-8 h-8"/>
                      <p className="font-medium mt-1">{text}</p>
                    </div>
                  ))}
                </div>
                <Button label="Brilhe nas entrevistas" variant="default"/>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services section */}
      <section className="w-full flex flex-col items-center justify-start px-4 py-12 lg:py-16 lg:max-w-300">
        <div className="text-3xl lg:text-4xl font-[Geologica] font-semibold mb-12">Conheça os serviços inclusos</div>
        <div className="w-full flex flex-col justify-center gap-4 lg:flex-row lg:gap-8">
          <ServiceCard title="Elaboração de Currículo Estratégico" description="Nada de templates prontos. Cada currículo é desenhado para os robôs (ATS), mas escrito para impressionar quem lê. Você se torna impossível de ignorar." icon="cv"/>
          <ServiceCard title="Mentoria de Carreira" description="Acompanhamento individual para acelerar sua evolução. Trabalhamos posicionamento, escolhas estratégicas, clareza de objetivos e caminhos reais. Você recebe direção prática, feedback e plano de ação." icon="carreer"/>
          <ServiceCard title="Preparação para Entrevistas" description="Treino direto para melhorar sua performance em seleções. Você aprende a criar respostas fortes, comunicar autoridade e mostrar valor. Ajustamos postu-ra, narrativa e pontos de impacto." icon="interview"/>
          <ServiceCard title="Estruturação de Perfil: Gupy e LinkedIn" description="Otimização dos perfis para aumentar visibilidade e passar por filtros. Ajusto palavras-chave, narrativa e seções para destacar habilidades e deixar seu perfil profissional e claro." icon="linkedin"/>
        </div>
      </section>
      
      {/* Reports section */}
      <section className="w-full max-w-screen flex flex-col items-center justify-start py-12 lg:py-16">
        <div className="text-3xl lg:text-4xl font-[Geologica] font-semibold mb-8">Histórias de sucesso</div>

        {/* Reports carousel */}
        <EmblaCarousel slides={[
          ...reports.map((report, index) => (
            <div key={index} className="w-full h-full flex flex-col items-center justify-center text-[var(--content-inverse)] p-8 gap-4">
              <img className="rounded-full w-48 h-48 bg-black" src={`/images/reports/report${index + 1}.png`} alt={report.name}/>
              <div className="text-center text-xl lg:text-2xl font-[Geologica] font-semibold mt-3">{report.name}</div>
              <p className="text-center">{report.text}</p>
            </div>
          ))
        ]} options={ { loop: true } } />
        
      </section>
      
      {/* Final section */}
      <section className="w-full flex flex-col items-center justify-start px-4 py-12 lg:py-16 lg:max-w-300">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="w-full flex flex-col items-center justify-center lg:flex-row gap-8 lg:px-16 lg:gap-32">
          <div className="w-full flex flex-col items-center justify-center gap-2 lg:mx-12">
            <img src="/images/Joseph.jpg" className="w-80 h-80 rounded-full active:shadow-[0_0_20px_4px] lg:hover:shadow-[0_0_20px_2px] active:shadow-[#00775bf0] hover:shadow-[#00775bf0] transition-shadow duration-200 ease-in-out"/>
            <div className="flex flex-row items-center">
              <img src="/logos/full.svg" className="h-16"/>
              <div className="text-3xl font-[Geologica] font-semibold mx-2">Joseph Santos</div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="text-center lg:text-start text-3xl font-[Geologica] font-semibold">Transformo sua busca em sucesso garantido</div>
            <div>
              <p className="text-justify">
                Eu sou o Joseph (ou José, se preferir). Sou Especialista em Recrutamento e Seleção com mais de 5 Anos de experiência em RH, com passagens por gigantes como Vivo, Mercado Livre, Honda, Santander e, atualmente, Itaú.
              </p>
              <p className="text-justify mt-3">
                Durante esse tempo, eu entendi como funcionam os algoritmos que filtram currículos (ATS), como os recrutadores pensam e por que a maioria dos candidatos sequer é vista.
              </p>
            </div>
            <motion.div 
            className="text-center text-2xl font-[Geologica] font-semibold text-[var(--brand-primary)]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "easeIn", delay: 0.75, duration: 0.5 }}
            >
              Seja a próxima história de sucesso!
            </motion.div>
            <Button label="Quero garantir minha vaga" variant="default"/>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 