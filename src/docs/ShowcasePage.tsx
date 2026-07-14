import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ComicPage,
  ComicPanel,
  Background,
  ComicPaperBackground,
  ComicText,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Divider,
  DotsBackground,
  ExplosionBackground,
  FAQ,
  FAQItem,
  GridBackground,
  Highlight,
  Input,
  LetterReveal,
  LinesBackground,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarLink,
  NavbarMenu,
  NavbarMobileMenu,
  NavbarToggle,
  PatternBackground,
  Pricing,
  PricingTier,
  Radio,
  RadioGroup,
  Select,
  SoundBadge,
  SpeechBubble,
  Stat,
  Stats,
  Sticker,
  Switch,
  Testimonial,
  Testimonials,
  Tooltip,
  Typewriter,
  toast,
} from "comixa-ui";
import { ShowcaseSection } from "./ShowcaseSection";

export function ShowcasePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [team, setTeam] = useState("red");
  const [on, setOn] = useState(true);

  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide">
          Showcase
        </h1>
        <p className="pg-fg-muted max-w-2xl text-base">
          Blank canvas with every Comixa component in one place.
        </p>
      </header>

      <ShowcaseSection title="Button">
        <div className="flex flex-wrap gap-2">
          <Button variant="pop">Pop</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading>Loading</Button>
          <Button icon aria-label="Zap">
            <span className="font-comic text-sm">⚡</span>
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Badge / SoundBadge / Sticker">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="yellow">Yellow</Badge>
          <Badge variant="red">Red</Badge>
          <Badge variant="ink">Ink</Badge>
          <SoundBadge variant="pow" size="sm" />
          <SoundBadge variant="boom" burst size="sm" />
          <Sticker variant="yellow" size="sm">
            New!
          </Sticker>
          <Sticker variant="red" shape="circle" size="sm">
            Hot
          </Sticker>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Input / Select">
        <div className="grid max-w-xl gap-3">
          <Input placeholder="Hero name..." />
          <Input variant="filled" state="success" defaultValue="Pow" />
          <Select
            variant="pop"
            defaultValue="zap"
            options={[
              { value: "zap", label: "Captain Zap" },
              { value: "boom", label: "Boom Knight" },
            ]}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Checkbox / Radio / Switch">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <Checkbox label="Quest" defaultChecked />
            <Checkbox label="Danger" variant="danger" />
            <Switch
              label="Alerts"
              checked={on}
              onCheckedChange={setOn}
              variant="primary"
            />
          </div>
          <RadioGroup orientation="horizontal" className="gap-4">
            <Radio
              name="showcase-team"
              value="red"
              label="Red"
              variant="danger"
              checked={team === "red"}
              onChange={() => setTeam("red")}
            />
            <Radio
              name="showcase-team"
              value="blue"
              label="Blue"
              variant="primary"
              checked={team === "blue"}
              onChange={() => setTeam("blue")}
            />
          </RadioGroup>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Dialog / Toast / Tooltip">
        <div className="flex flex-wrap gap-2">
          <Button variant="pop" onClick={() => setDialogOpen(true)}>
            Open dialog
          </Button>
          <Button
            variant="success"
            onClick={() => toast.success("Showcase toast!")}
          >
            Toast
          </Button>
          <Tooltip content="Comic tip" variant="pop">
            <Button size="sm" variant="outline">
              Tooltip
            </Button>
          </Tooltip>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent variant="boom">
            <DialogHeader>
              <DialogTitle>Showcase dialog</DialogTitle>
              <DialogDescription>All components on one page.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      <ShowcaseSection title="Card">
        <Card variant="pop" className="max-w-sm">
          <CardHeader>
            <CardTitle>Pop card</CardTitle>
            <CardDescription>Hard shadow panel.</CardDescription>
          </CardHeader>
          <CardContent>Showcase content.</CardContent>
          <CardFooter>
            <Button size="sm">Open</Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Divider">
        <div className="flex flex-col gap-3">
          <Divider variant="dashed" label="Chapter" />
          <Divider variant="zigzag" tone="red" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="ComicPage">
        <ComicPage layout="2-1">
          <ComicPanel variant="sky" caption="1">
            Top left
          </ComicPanel>
          <ComicPanel variant="pop" caption="2">
            Top right
          </ComicPanel>
          <ComicPanel variant="alert">Wide panel</ComicPanel>
        </ComicPage>
      </ShowcaseSection>

      <ShowcaseSection title="SpeechBubble / Avatar">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex items-end gap-2">
            <Avatar name="Zap" variant="yellow" size="sm" shape="circle" />
            <SpeechBubble tone="cream" tail="bottomLeft">
              Hello from the strip!
            </SpeechBubble>
          </div>
          <SpeechBubble shape="thought">Hmm…</SpeechBubble>
          <AvatarGroup>
            <Avatar name="A B" shape="circle" variant="yellow" />
            <Avatar name="C D" shape="circle" variant="blue" />
          </AvatarGroup>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Navbar">
        <div className="overflow-hidden rounded-xl border-2 border-ink">
          <Navbar variant="pop" className="rounded-none border-0 shadow-none">
            <NavbarBrand href="#showcase" className="gap-2">
              <img
                src="/logo.png"
                alt=""
                className="h-8 w-8 rounded-md border-2 border-ink bg-paper object-cover"
              />
              Comixa
            </NavbarBrand>
            <NavbarContent>
              <NavbarMenu className="gap-1">
                <NavbarLink href="#showcase" active>
                  Home
                </NavbarLink>
                <NavbarLink href="#showcase">Docs</NavbarLink>
                <NavbarLink href="#showcase">Pricing</NavbarLink>
              </NavbarMenu>
              <NavbarActions>
                <Button size="sm" variant="outline" className="hidden sm:inline-flex">
                  Sign in
                </Button>
                <Button size="sm" variant="primary">
                  Join
                </Button>
                <NavbarToggle className="bg-paper" />
              </NavbarActions>
            </NavbarContent>
            <NavbarMobileMenu className="bg-paper-cream">
              <NavbarLink href="#showcase" active>
                Home
              </NavbarLink>
              <NavbarLink href="#showcase">Docs</NavbarLink>
              <NavbarLink href="#showcase">Pricing</NavbarLink>
              <div className="mt-2 flex gap-2 px-1">
                <Button size="sm" variant="outline" className="flex-1">
                  Sign in
                </Button>
                <Button size="sm" variant="primary" className="flex-1">
                  Join
                </Button>
              </div>
            </NavbarMobileMenu>
          </Navbar>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Testimonials">
        <Testimonials columns={2}>
          <Testimonial
            quote="Ship with pow."
            author="Captain Zap"
            role="Hero"
            rating={5}
            variant="pop"
            avatar={
              <Avatar name="CZ" size="sm" shape="circle" variant="yellow" />
            }
          />
          <Testimonial
            quote="Ink borders forever."
            author="Ink Mage"
            role="Designer"
            rating={4}
            variant="cream"
          />
        </Testimonials>
      </ShowcaseSection>

      <ShowcaseSection title="Pricing">
        <Pricing columns={2}>
          <PricingTier
            name="Sidekick"
            price="$0"
            period="mo"
            features={["Basics"]}
            cta={
              <Button variant="outline" size="sm" className="w-full">
                Free
              </Button>
            }
          />
          <PricingTier
            name="Hero"
            price="$19"
            period="mo"
            featured
            badge="Popular"
            features={["Everything"]}
            cta={
              <Button variant="pop" size="sm" className="w-full">
                Start
              </Button>
            }
          />
        </Pricing>
      </ShowcaseSection>

      <ShowcaseSection title="FAQ">
        <FAQ type="single" defaultValue="a">
          <FAQItem value="a" title="What is Showcase?">
            A blank page with every component rendered together.
          </FAQItem>
          <FAQItem value="b" title="Where are the docs?">
            Each component also has its own sidebar page.
          </FAQItem>
        </FAQ>
      </ShowcaseSection>

      <ShowcaseSection title="Stats">
        <Stats columns={4}>
          <Stat value="12k+" label="Heroes" animate />
          <Stat value="98%" label="Pow" tone="yellow" animate />
          <Stat value="240" label="Panels" tone="blue" animate />
          <Stat value="4.9" label="Stars" tone="green" animate />
        </Stats>
      </ShowcaseSection>

      <ShowcaseSection title="Animated text">
        <div className="flex flex-col gap-4">
          <LetterReveal as="h2" className="text-2xl" repeat={Infinity}>
            Boom Town
          </LetterReveal>
          <Typewriter speed={40} repeat={Infinity}>
            Typing in the showcase…
          </Typewriter>
          <div className="flex flex-wrap gap-3">
            <ComicText effect="pop" size="md" repeat={Infinity}>
              Kapow!
            </ComicText>
            <p>
              Ship{" "}
              <Highlight tone="yellow" repeat={Infinity}>
                faster
              </Highlight>{" "}
              pages.
            </p>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Background">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <DotsBackground className="min-h-24 rounded-lg border-2 border-ink p-3">
            <p className="font-comic text-sm uppercase">Dots</p>
          </DotsBackground>
          <GridBackground
            tone="cream"
            className="min-h-24 rounded-lg border-2 border-ink p-3"
          >
            <p className="font-comic text-sm uppercase">Grid</p>
          </GridBackground>
          <LinesBackground className="min-h-24 rounded-lg border-2 border-ink p-3">
            <p className="font-comic text-sm uppercase">Lines</p>
          </LinesBackground>
          <PatternBackground className="min-h-24 rounded-lg border-2 border-ink p-3">
            <p className="font-comic text-sm uppercase">Pattern</p>
          </PatternBackground>
          <ExplosionBackground
            tone="yellow"
            className="min-h-24 rounded-lg border-2 border-ink p-3"
          >
            <p className="font-comic text-sm uppercase">Explosion</p>
          </ExplosionBackground>
          <ComicPaperBackground className="min-h-24 rounded-lg p-3">
            <p className="font-comic text-sm uppercase">Comic paper</p>
          </ComicPaperBackground>
          <Background
            variant="dots"
            intensity="sm"
            className="min-h-24 rounded-lg border-2 border-ink p-3 sm:col-span-2 lg:col-span-3"
          >
            <p className="font-comic text-sm uppercase">
              Background variant=&quot;dots&quot;
            </p>
          </Background>
        </div>
      </ShowcaseSection>
    </article>
  );
}
