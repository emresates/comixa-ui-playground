import { useState, type SVGProps } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Palette,
  Rocket,
  Send,
  Sparkles,
  X,
} from "lucide-react";

function GithubIcon({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.28-.01-1.21-.01-2.19-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.41-5.29 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.22 0 .31.21.67.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
import {
  Avatar,
  Background,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ComicCursor,
  ComicPage,
  ComicPanel,
  ComicReveal,
  ComicText,
  ComixaProvider,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Divider,
  FAQ,
  FAQItem,
  Feature,
  Features,
  Highlight,
  Input,
  LetterReveal,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarLink,
  NavbarMenu,
  NavbarMobileMenu,
  NavbarToggle,
  PageTransition,
  Ribbon,
  SoundBadge,
  SpeechBubble,
  Stat,
  Stats,
  Sticker,
  Testimonial,
  Testimonials,
  ToastProvider,
  Tooltip,
  Typewriter,
  toast,
} from "comixa-ui";
import { experience, projects, site, skills } from "./portfolioSite";

const navItems = [
  ["About", "about"],
  ["Work", "work"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const accentClass = {
  yellow: "bg-yellow",
  blue: "bg-blue",
  pink: "bg-pink",
};

const experienceStyles = [
  {
    accent: "pink",
    avatar: "pink",
    sticker: "yellow",
    bubble: "cream",
    highlight: "yellow",
    sound: "wham",
  },
  {
    accent: "blue",
    avatar: "yellow",
    sticker: "pink",
    bubble: "pink",
    highlight: "blue",
    sound: "pow",
  },
  {
    accent: "yellow",
    avatar: "blue",
    sticker: "yellow",
    bubble: "blue",
    highlight: "yellow",
    sound: "zap",
  },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function DeveloperPortfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const handleContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Message ready!",
      description: "Connect this form to your preferred email provider.",
      variant: "success",
    });
    setContactOpen(false);
  };

  return (
    <ComixaProvider>
      <ToastProvider position="top-right" duration={4200}>
        <PageTransition variant="panel-swipe" padding="none">
          <main className="site-shell bg-paper text-ink">
            <Navbar
              variant="cream"
              position="sticky"
              className="z-50 mx-auto border-b-4 border-ink px-4 md:px-7"
            >
              <NavbarContent className="mx-auto w-full max-w-7xl">
                <NavbarBrand
                  href="#home"
                  className="font-display text-3xl tracking-wider"
                >
                  [YOUR<span className="text-pink">NAME]</span>
                </NavbarBrand>

                <NavbarMenu className="hidden md:flex">
                  {navItems.map(([label, id]) => (
                    <NavbarLink key={id} href={`#${id}`}>
                      {label}
                    </NavbarLink>
                  ))}
                </NavbarMenu>

                <NavbarActions>
                  <Badge variant="green" className="hidden lg:inline-flex">
                    OPEN TO WORK
                  </Badge>
                  <Button size="sm" onClick={() => setContactOpen(true)}>
                    Hire me
                  </Button>
                  <NavbarToggle
                    className="md:hidden"
                    aria-label="Toggle navigation"
                    onClick={() => setMobileOpen((value) => !value)}
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </NavbarToggle>
                </NavbarActions>
              </NavbarContent>

              {mobileOpen && (
                <NavbarMobileMenu className="md:hidden">
                  {navItems.map(([label, id]) => (
                    <NavbarLink
                      key={id}
                      href={`#${id}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-xl"
                    >
                      {label}
                    </NavbarLink>
                  ))}
                </NavbarMobileMenu>
              )}
            </Navbar>

            <section
              id="home"
              className="relative min-h-[calc(70vh-72px)] overflow-hidden px-5 py-14 md:px-8 lg:py-20"
            >
              <Background
                variant="dots"
                tone="paper"
                intensity="md"
                className="absolute inset-0 opacity-40"
              />
              <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_.88fr]">
                <div>
                  <SpeechBubble
                    tone="cream"
                    size="sm"
                    tail="bottomLeft"
                    className="mb-7 inline-block -rotate-2"
                  >
                    <span className="flex items-center gap-2 font-bold uppercase tracking-wider">
                      <Sparkles size={17} /> {site.availability}
                    </span>
                  </SpeechBubble>

                  <Badge variant="pink" size="lg" className="mb-5">
                    ISSUE #01 — THE FRONTEND HERO
                  </Badge>
                  <h1 className="hero-title">
                    <LetterReveal as="span" once triggerOnView repeat={1}>
                      [YOUR NAME]
                    </LetterReveal>
                    <span className="mt-3 block text-blue ink-outline">
                      BUILDS FOR THE WEB.
                    </span>
                  </h1>

                  <div className="mt-7 max-w-2xl text-xl font-bold leading-relaxed md:text-2xl">
                    <Typewriter as="p" speed={42} repeat={1} caret>
                      {site.intro}
                    </Typewriter>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      effect="pop"
                      onClick={() => scrollToSection("work")}
                    >
                      View projects <ArrowDownRight size={20} />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      effect="wiggle"
                      onClick={() => setContactOpen(true)}
                    >
                      Start a project <Mail size={19} />
                    </Button>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    {[
                      ["React", "blue"],
                      ["Next.js", "ink"],
                      ["TypeScript", "yellow"],
                      ["Tailwind", "pink"],
                    ].map(([label, variant]) => (
                      <Badge
                        key={label}
                        variant={variant as "blue" | "ink" | "yellow" | "pink"}
                        size="md"
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <ComicReveal variant="pop" duration={650}>
                  <div className="relative mx-auto max-w-lg">
                    <SoundBadge
                      variant="pow"
                      size="lg"
                      className="absolute -left-6 top-6 z-20 -rotate-12"
                    />
                    <Sticker
                      variant="yellow"
                      size="lg"
                      tilt="right"
                      shape="ticket"
                      className="absolute -right-4 top-12 z-20"
                    >
                      FRONTEND DEV
                    </Sticker>
                    <ComicPanel
                      variant="hero"
                      shadow="xl"
                      tilt
                      hover
                      halftone
                      className="p-6 md:p-9"
                    >
                      <div
                        className="avatar-art animate-floaty"
                        aria-label="Placeholder comic avatar"
                      >
                        <div className="avatar-cape" />
                        <div className="avatar-hair" />
                        <div className="avatar-head">
                          <div className="avatar-eye left" />
                          <div className="avatar-eye right" />
                          <div className="avatar-smile" />
                        </div>
                        <div className="avatar-body">YN</div>
                      </div>
                      <SpeechBubble
                        tone="cream"
                        tail="bottomRight"
                        size="sm"
                        className="mt-5 rotate-1 text-center font-bold"
                      >
                        Turning ideas into interfaces, one panel at a time.
                      </SpeechBubble>
                    </ComicPanel>
                  </div>
                </ComicReveal>
              </div>
            </section>

            <div className="overflow-hidden border-y-4 border-ink bg-ink py-4 text-paper">
              <div className="marquee-track flex gap-8 whitespace-nowrap font-display text-3xl tracking-widest">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex gap-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <span key={index}>
                        REACT • NEXT.JS • TYPESCRIPT • ACCESSIBILITY •
                        PERFORMANCE • MOTION •
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <section id="about" className="px-5 py-24 md:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <Badge variant="yellow">ORIGIN STORY</Badge>
                    <h2 className="section-title mt-4">ABOUT THE HERO</h2>
                  </div>
                  <Ribbon variant="ticket" tilt="right" size="lg">
                    BASED IN {site.location.toUpperCase()}
                  </Ribbon>
                </div>

                <ComicPage layout="2-1" tone="paper">
                  <ComicPanel
                    variant="cream"
                    shadow="lg"
                    className="p-7 md:p-10"
                  >
                    <SpeechBubble
                      tone="pink"
                      tail="bottomLeft"
                      caption="WHO AM I?"
                      size="lg"
                    >
                      <p className="text-lg font-bold leading-relaxed">
                        {site.about}
                      </p>
                    </SpeechBubble>
                  </ComicPanel>

                  <ComicPanel
                    variant="sky"
                    shadow="lg"
                    halftone
                    className="flex min-h-72 flex-col justify-between p-7"
                  >
                    <SoundBadge variant="zap" size="md" />
                    <div>
                      <ComicText
                        as="h3"
                        size="xl"
                        tone="yellow"
                        effect="wiggle"
                        repeat={1}
                      >
                        CODE + CRAFT
                      </ComicText>
                      <p className="mt-4 max-w-md text-lg font-bold">
                        I bridge product thinking, visual detail and frontend
                        engineering to ship interfaces that feel complete.
                      </p>
                    </div>
                    <Sticker variant="pink" tilt="left">
                      DETAILS MATTER!
                    </Sticker>
                  </ComicPanel>

                  <ComicPanel
                    variant="night"
                    shadow="lg"
                    className="p-6 text-paper"
                  >
                    <Stats columns={4}>
                      <Stat
                        value="24"
                        label="Projects"
                        hint="Shipped"
                        tone="yellow"
                        animate
                      />
                      <Stat
                        value="5"
                        label="Years"
                        hint="Experience"
                        tone="pink"
                        animate
                      />
                      <Stat
                        value="95"
                        label="Lighthouse"
                        hint="Average"
                        tone="blue"
                        animate
                      />
                      <Stat
                        value="100"
                        label="Responsive"
                        hint="Percent"
                        tone="green"
                        animate
                      />
                    </Stats>
                  </ComicPanel>
                </ComicPage>
              </div>
            </section>

            <Divider variant="burst" tone="red" label="FEATURED MISSIONS" />

            <section id="work" className="bg-ink px-5 py-24 text-paper md:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12">
                  <Badge variant="yellow">CASE FILES</Badge>
                  <h2 className="section-title mt-4">SELECTED WORK</h2>
                  <p className="mt-5 max-w-2xl text-lg font-bold text-paper/75">
                    Product interfaces built around clear goals, strong systems
                    and expressive interaction.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                  {projects.map((project, index) => (
                    <ComicReveal
                      key={project.title}
                      variant="slide-up"
                      delay={index * 100}
                    >
                      <Card
                        variant="panel"
                        padding="none"
                        effect="pop"
                        className="h-full p-5 overflow-hidden bg-paper text-ink"
                      >
                        <div
                          className={`project-preview ${accentClass[project.accent as keyof typeof accentClass]}`}
                        >
                          <Ribbon
                            variant="corner"
                            size="sm"
                            className="absolute right-0 top-0 z-10"
                          >
                            {project.issue}
                          </Ribbon>
                          <span>{project.title.replace(" ", "\n")}</span>
                        </div>
                        <CardHeader>
                          <div className="my-2 flex items-center justify-between gap-4">
                            <Badge variant="pink">{project.category}</Badge>
                            <SoundBadge
                              variant={
                                index === 0
                                  ? "pow"
                                  : index === 1
                                    ? "zap"
                                    : "wow"
                              }
                              size="sm"
                            />
                          </div>
                          <CardTitle className="font-display text-4xl">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="font-bold leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <Badge key={item} variant="outline">
                                {item}
                              </Badge>
                            ))}
                          </div>
                          <Highlight
                            as="p"
                            tone="yellow"
                            once
                            className="mt-5 inline-block font-bold"
                          >
                            {project.metric}
                          </Highlight>
                        </CardContent>
                        <CardFooter className="flex gap-3">
                          <Button
                            size="sm"
                            onClick={() => setSelectedProject(project)}
                          >
                            Case study <ArrowUpRight size={17} />
                          </Button>
                          <Tooltip
                            content="Replace with your GitHub URL"
                            side="top"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              icon
                              aria-label="Open GitHub placeholder"
                              onClick={() =>
                                toast({
                                  title: "Add your project URL",
                                  description:
                                    "Update the project data file with a real repository link.",
                                })
                              }
                            >
                              <GithubIcon size={18} />
                            </Button>
                          </Tooltip>
                        </CardFooter>
                      </Card>
                    </ComicReveal>
                  ))}
                </div>
              </div>
            </section>

            <section id="skills" className="relative px-5 py-24 md:px-8">
              <Background
                variant="comic-paper"
                tone="cream"
                intensity="sm"
                className="absolute inset-0"
              />
              <div className="relative mx-auto max-w-7xl">
                <Badge variant="blue">POWER SET</Badge>
                <h2 className="section-title mt-4">WHAT I BRING</h2>
                <Features columns={3} className="mt-12">
                  {skills.map(([title, description], index) => {
                    const icons = [
                      <Code2 key="1" />,
                      <Braces key="2" />,
                      <Layers3 key="3" />,
                      <Rocket key="4" />,
                      <Globe2 key="5" />,
                      <Palette key="6" />,
                    ];
                    const variants = [
                      "yellow",
                      "blue",
                      "burst",
                      "outline",
                      "default",
                      "yellow",
                    ] as const;
                    return (
                      <Feature
                        key={title}
                        icon={icons[index]}
                        title={title}
                        description={description}
                        variant={variants[index]}
                        align="left"
                      />
                    );
                  })}
                </Features>
              </div>
            </section>

            <section
              id="experience"
              className="border-y-4 border-ink bg-yellow px-5 py-24 md:px-8"
            >
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 md:flex md:items-end md:justify-between">
                  <div>
                    <Badge variant="ink">THE TIMELINE</Badge>
                    <h2 className="section-title mt-4">PREVIOUS CHAPTERS</h2>
                  </div>
                  <SoundBadge
                    variant="wham"
                    size="lg"
                    className="mt-7 md:mt-0"
                  />
                </div>

                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute bottom-6 left-[1.65rem] top-6 hidden w-1 border-l-4 border-dashed border-ink sm:block"
                  />

                  <div className="space-y-12">
                    {experience.map((item, index) => {
                      const style = experienceStyles[index];
                      const chapter =
                        index === 0 ? "NOW" : `0${experience.length - index}`;

                      return (
                        <ComicReveal
                          key={item.issue}
                          variant={index === 0 ? "spotlight" : "slide-up"}
                          delay={index * 140}
                        >
                          <div className="relative flex flex-col gap-5 pl-14 sm:flex-row sm:items-stretch sm:gap-8 sm:pl-20">
                            <div className="absolute left-0 top-5 z-10 sm:relative sm:left-auto sm:top-auto sm:w-28 sm:shrink-0 sm:pt-5">
                              <div className="flex flex-col items-center gap-3">
                                <Avatar
                                  fallback={String(
                                    experience.length - index,
                                  ).padStart(2, "0")}
                                  variant={style.avatar}
                                  size="lg"
                                  shape="circle"
                                />
                                <Sticker
                                  variant={style.sticker}
                                  size="sm"
                                  tilt={index % 2 ? "left" : "right"}
                                >
                                  {chapter}
                                </Sticker>
                              </div>
                            </div>

                            <Card
                              variant="panel"
                              padding="none"
                              effect={index === 0 ? "pop" : "none"}
                              className="relative min-w-0 flex-1 overflow-hidden"
                            >
                              <Ribbon
                                variant="corner"
                                size="sm"
                                className="absolute right-0 top-0 z-10"
                              >
                                {item.issue}
                              </Ribbon>

                              <div
                                className={`project-preview !min-h-[5.5rem] ${accentClass[style.accent]}`}
                              >
                                <span className="!text-3xl md:!text-4xl">
                                  {item.issue.replace("CHAPTER ", "#")}
                                </span>
                              </div>

                              <CardHeader className="p-6 md:p-8">
                                <div className="flex flex-wrap items-center gap-3 pr-16">
                                  <Badge
                                    variant={index === 0 ? "pink" : "ink"}
                                    size="lg"
                                  >
                                    {item.period}
                                  </Badge>
                                  <SoundBadge variant={style.sound} size="sm" />
                                </div>

                                <CardTitle className="mt-5 font-display text-4xl leading-none md:text-5xl">
                                  <ComicText
                                    as="span"
                                    size="lg"
                                    tone={index === 0 ? "yellow" : "ink"}
                                    effect={index === 0 ? "pop" : "none"}
                                    once
                                    start="inView"
                                    className="block"
                                  >
                                    {item.role}
                                  </ComicText>
                                </CardTitle>

                                <Highlight
                                  as="p"
                                  tone={style.highlight}
                                  once
                                  className="mt-3 inline-block font-bold uppercase tracking-[0.18em]"
                                >
                                  @ {item.company}
                                </Highlight>
                              </CardHeader>

                              <CardContent className="px-6 pb-7 md:px-8 md:pb-9">
                                <SpeechBubble
                                  tone={style.bubble}
                                  tail={
                                    index % 2 ? "bottomRight" : "bottomLeft"
                                  }
                                  caption={
                                    index === 0
                                      ? "ACTIVE MISSION"
                                      : "MISSION LOG"
                                  }
                                  className="font-bold leading-relaxed"
                                >
                                  {item.detail}
                                </SpeechBubble>
                              </CardContent>
                            </Card>
                          </div>

                          {index < experience.length - 1 && (
                            <Divider
                              variant="dots"
                              tone="ink"
                              className="mt-12 sm:ml-20"
                            />
                          )}
                        </ComicReveal>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section className="px-5 py-24 md:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="text-center">
                  <Badge variant="pink">CLIENT TRANSMISSIONS</Badge>
                  <h2 className="section-title mt-4">NICE WORDS</h2>
                </div>
                <Testimonials columns={3} className="mt-12">
                  <Testimonial
                    quote="[YOUR NAME] transformed a complicated workflow into an interface our customers understood immediately."
                    author="[CLIENT NAME]"
                    role="Product Lead, [COMPANY]"
                    rating={5}
                    variant="speech"
                    avatar={<Avatar fallback="CL" variant="yellow" />}
                  />
                  <Testimonial
                    quote="Fast, thoughtful and incredibly detail-oriented. Every interaction felt intentional."
                    author="[CLIENT NAME]"
                    role="Founder, [COMPANY]"
                    rating={5}
                    variant="pop"
                    avatar={<Avatar fallback="FN" variant="pink" />}
                  />
                  <Testimonial
                    quote="A rare mix of strong engineering judgment and genuine visual craft."
                    author="[CLIENT NAME]"
                    role="Design Director, [COMPANY]"
                    rating={5}
                    variant="cream"
                    avatar={<Avatar fallback="DD" variant="blue" />}
                  />
                </Testimonials>
              </div>
            </section>

            <section
              id="contact"
              className="relative overflow-hidden bg-blue px-5 py-24 md:px-8"
            >
              <Background
                variant="explosion"
                tone="ink"
                intensity="lg"
                className="absolute inset-0 opacity-20"
              />
              <div className="relative mx-auto max-w-5xl text-center">
                <SpeechBubble
                  tone="cream"
                  tail="bottom"
                  className="mx-auto mb-8 inline-block -rotate-2 font-bold uppercase"
                >
                  Your next chapter starts here
                </SpeechBubble>
                <h2 className="section-title text-paper ink-outline">
                  LET&apos;S BUILD SOMETHING LOUD.
                </h2>
                <p className="mx-auto mt-7 max-w-2xl text-xl font-bold text-paper">
                  Have a product, redesign or ambitious frontend problem? Tell
                  me what you are building.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    variant="default"
                    effect="pop"
                    onClick={() => setContactOpen(true)}
                  >
                    Send a message <Send size={19} />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      navigator.clipboard?.writeText(site.email).then(() =>
                        toast({
                          title: "Email copied!",
                          description: site.email,
                          variant: "success",
                        }),
                      )
                    }
                  >
                    Copy email
                  </Button>
                </div>
                <div className="mt-10 flex justify-center gap-3">
                  <a
                    href={site.socials.github}
                    aria-label="GitHub"
                    className="grid h-12 w-12 place-items-center border-4 border-ink bg-paper shadow-[4px_4px_0_#171717] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={site.socials.linkedin}
                    aria-label="LinkedIn"
                    className="grid h-12 w-12 place-items-center border-4 border-ink bg-paper shadow-[4px_4px_0_#171717] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </section>

            <section className="px-5 py-20 md:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="text-center">
                  <Badge variant="yellow">FAQ</Badge>
                  <h2 className="section-title mt-4">FINAL NOTES</h2>
                </div>
                <FAQ type="single" variant="panel" className="mt-10">
                  <FAQItem
                    value="one"
                    title="Is this portfolio ready to customize?"
                  >
                    Yes. Identity, project and experience content lives in{" "}
                    <code>data/site.ts</code> so you can replace the
                    placeholders quickly.
                  </FAQItem>
                  <FAQItem
                    value="two"
                    title="Which Comixa UI version does it use?"
                  >
                    The project pins <strong>comixa-ui@0.1.5</strong> and uses
                    its official Tailwind preset.
                  </FAQItem>
                  <FAQItem
                    value="three"
                    title="Does the contact form send real email?"
                  >
                    The demo validates the interaction locally. Connect the
                    submit handler to Resend, Formspree or your own API route
                    before production.
                  </FAQItem>
                </FAQ>
              </div>
            </section>

            <footer className="border-t-4 border-ink bg-ink px-5 py-8 text-paper md:px-8">
              <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center font-bold md:flex-row md:text-left">
                <div>
                  <p className="font-display text-3xl">THE END... FOR NOW.</p>
                  <p className="text-paper/65">
                    © 2026 {site.name}. Built with Comixa UI.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection("home")}
                >
                  Back to cover ↑
                </Button>
              </div>
            </footer>

            <Dialog open={contactOpen} onOpenChange={setContactOpen}>
              <DialogContent variant="boom" size="md" effect="pop">
                <DialogHeader>
                  <DialogTitle className="font-display text-4xl">
                    START A NEW MISSION
                  </DialogTitle>
                  <DialogDescription>
                    Replace this demo handler with your preferred form service.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleContact} className="mt-5 space-y-4">
                  <Input
                    required
                    inputSize="lg"
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                  <Input
                    required
                    type="email"
                    inputSize="lg"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                  <textarea
                    required
                    aria-label="Project message"
                    placeholder="Tell me about your project..."
                    className="min-h-36 w-full border-4 border-ink bg-paper p-4 font-bold outline-none transition focus:shadow-[5px_5px_0_#171717]"
                  />
                  <DialogFooter>
                    <Button type="submit" size="lg">
                      Send transmission <Send size={18} />
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog
              open={Boolean(selectedProject)}
              onOpenChange={(open) => !open && setSelectedProject(null)}
            >
              <DialogContent variant="panel" size="lg" effect="pop">
                {selectedProject && (
                  <>
                    <DialogHeader>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="pink">{selectedProject.issue}</Badge>
                        <Badge variant="yellow">
                          {selectedProject.category}
                        </Badge>
                      </div>
                      <DialogTitle className="mt-3 font-display text-5xl">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-base font-bold leading-relaxed">
                        {selectedProject.description}
                      </DialogDescription>
                    </DialogHeader>
                    <ComicPanel variant="sky" halftone className="mt-6 p-6">
                      <p className="font-display text-3xl">
                        CASE STUDY PLACEHOLDER
                      </p>
                      <p className="mt-3 font-bold">
                        Add the challenge, process, responsibilities,
                        screenshots and measurable result for this project.
                      </p>
                    </ComicPanel>
                    <DialogFooter className="mt-6">
                      <Button
                        onClick={() =>
                          toast({
                            title: "Demo link placeholder",
                            description:
                              "Add liveUrl and repositoryUrl fields inside data/site.ts.",
                          })
                        }
                      >
                        Live project <ArrowUpRight size={18} />
                      </Button>
                    </DialogFooter>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </main>
        </PageTransition>
      </ToastProvider>
    </ComixaProvider>
  );
}
