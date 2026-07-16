import { useMemo, useState, type CSSProperties } from "react";
import {
  Avatar, Badge, Button, Card, CardContent, CardFooter, CardHeader, CardTitle,
  ComicCursor, ComicPanel, ComicReveal, Dialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, Divider, FAQ, FAQItem, Feature, Features,
  Highlight, Input, Navbar, NavbarActions, NavbarBrand, NavbarContent, NavbarLink,
  NavbarMenu, Pricing, PricingTier, Select, SoundBadge, SpeechBubble, Stat, Stats,
  Sticker, Switch, Testimonial, Testimonials, ToastProvider, toast, Tooltip
} from "comixa-ui";
import { BatteryCharging, Bluetooth, Check, ChevronRight, Headphones, Heart, Menu, Mic2, PackageCheck, Play, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, Volume2, X } from "lucide-react";

const colors = [
  { name: "Electric Blue", value: "#4d7cff", accent: "#ff4f8b" },
  { name: "Pop Pink", value: "#ff4f8b", accent: "#ffd539" },
  { name: "Mint Rush", value: "#67dca1", accent: "#4d7cff" },
  { name: "Midnight", value: "#24242a", accent: "#ffd539" }
];

const gallery = ["Front view", "Side profile", "Folded", "In the box"];

export function PulseOneProductShowcase() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedGallery, setSelectedGallery] = useState(0);
  const [quantity, setQuantity] = useState("1");
  const [demoOpen, setDemoOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const total = useMemo(() => 189 * Number(quantity), [quantity]);

  const addToCart = () => toast({ title: "Added to cart!", description: `${quantity} × Pulse One in ${selectedColor.name}`, variant: "success" });

  return (
    <ToastProvider position="bottom-right">
      <ComicCursor variant="spark" />
      <main className="min-h-full overflow-hidden bg-[#fff8e7] text-[#171717]">
        <Navbar variant="cream" position="sticky" className="z-40 border-b-4 border-black px-4 md:px-8">
          <NavbarContent className="mx-auto max-w-7xl">
            <NavbarBrand href="#top" className="display text-3xl">PULSE<span className="text-pink-500">ONE!</span></NavbarBrand>
            <NavbarMenu className="hidden gap-6 md:flex">
              <NavbarLink href="#features">Features</NavbarLink><NavbarLink href="#specs">Specs</NavbarLink><NavbarLink href="#reviews">Reviews</NavbarLink><NavbarLink href="#faq">FAQ</NavbarLink>
            </NavbarMenu>
            <NavbarActions>
              <Tooltip content={wishlisted ? "Remove from wishlist" : "Add to wishlist"}>
                <Button icon variant="outline" aria-label="Wishlist" onClick={() => setWishlisted(v => !v)}><Heart size={19} fill={wishlisted ? "currentColor" : "none"} /></Button>
              </Tooltip>
              <Button className="hidden sm:inline-flex" onClick={addToCart}><ShoppingBag size={18}/> Buy now</Button>
              <Button icon variant="outline" className="md:hidden" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</Button>
            </NavbarActions>
          </NavbarContent>
          {menuOpen && <div className="border-t-4 border-black bg-yellow-300 p-5 md:hidden"><div className="flex flex-col gap-4 font-bold"><a href="#features" onClick={()=>setMenuOpen(false)}>Features</a><a href="#specs" onClick={()=>setMenuOpen(false)}>Specs</a><a href="#reviews" onClick={()=>setMenuOpen(false)}>Reviews</a><a href="#faq" onClick={()=>setMenuOpen(false)}>FAQ</a></div></div>}
        </Navbar>

        <section id="top" className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div className="absolute right-[-80px] top-10 -z-0 h-64 w-64 rounded-full bg-blue-400 opacity-20 halftone" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <ComicReveal variant="slide-up">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3"><Badge variant="yellow">NEW DROP</Badge><Badge variant="blue">FREE SHIPPING</Badge><SoundBadge variant="wow" size="sm" /></div>
                <h1 className="display text-6xl leading-[.88] sm:text-7xl lg:text-8xl">SOUND THAT <Highlight tone="pink">HITS DIFFERENT.</Highlight></h1>
                <p className="mt-6 max-w-xl text-lg font-bold leading-relaxed text-neutral-700">Pulse One combines studio-grade sound, punchy comic styling and all-day comfort in one fearless pair of wireless headphones.</p>
                <div className="mt-8 flex flex-wrap items-center gap-4"><Button size="lg" onClick={addToCart}><ShoppingBag size={20}/> Add to cart — ${total}</Button><Button size="lg" variant="outline" onClick={()=>setDemoOpen(true)}><Play size={19}/> Watch story</Button></div>
                <div className="mt-7 flex flex-wrap gap-5 text-sm font-black"><span className="flex items-center gap-2"><Truck size={18}/> Free 2-day shipping</span><span className="flex items-center gap-2"><ShieldCheck size={18}/> 2-year warranty</span></div>
              </div>
            </ComicReveal>

            <ComicReveal variant="panel-wipe">
              <ComicPanel variant="hero" shadow="xl" halftone className="relative min-h-[520px] overflow-hidden p-5 product-stage">
                <Sticker variant="yellow" size="lg" tilt="left" className="absolute left-4 top-4 z-10">LIMITED EDITION</Sticker>
                <SoundBadge variant="boom" size="lg" className="absolute right-5 top-6 z-10" />
                <div className="absolute inset-8 burst bg-white/45" />
                <div className="relative flex min-h-[420px] items-center justify-center">
                  <div className="headphones" style={{ "--cup": selectedColor.value } as CSSProperties}>
                    <div className="headband"/><div className="cup left" style={{background:selectedColor.value}}/><div className="cup right" style={{background:selectedColor.value}}/>
                  </div>
                </div>
                <SpeechBubble tone="cream" tail="bottomRight" size="sm" className="absolute bottom-5 right-5 max-w-[190px] font-black">40 HOURS. ZERO BORING.</SpeechBubble>
              </ComicPanel>
            </ComicReveal>
          </div>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="grid grid-cols-4 gap-3">{gallery.map((item,index)=><button key={item} onClick={()=>setSelectedGallery(index)} className={`thumb ${selectedGallery===index?"active bg-yellow-300":"bg-white"}`} aria-label={item}><span className="display text-xl">{index+1}</span><span className="mt-1 block text-[10px] font-black uppercase">{item}</span></button>)}</div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div><p className="mb-2 text-xs font-black uppercase tracking-widest">Choose your color</p><div className="flex gap-3">{colors.map(color=><Tooltip key={color.name} content={color.name}><button className="swatch" data-active={selectedColor.name===color.name} style={{background:color.value}} onClick={()=>setSelectedColor(color)} aria-label={color.name}/></Tooltip>)}</div></div>
              <div className="flex items-end gap-3"><div className="w-28"><p className="mb-2 text-xs font-black uppercase tracking-widest">Quantity</p><Select options={[1,2,3,4].map(v=>({value:String(v),label:String(v)}))} value={quantity} onValueChange={setQuantity}/></div><div className="text-right"><p className="text-sm font-bold text-neutral-500 line-through">$229</p><p className="display text-4xl">${total}</p></div></div>
            </div>
          </div>
        </section>

        <Divider variant="burst" tone="ink" label="BUILT TO BE LOUD" />

        <section id="features" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-12 text-center"><Badge variant="pink">SUPER POWERS</Badge><h2 className="display mt-4 text-5xl sm:text-7xl">EVERY BEAT. FULL FORCE.</h2></div>
          <Features columns={4}>
            <Feature icon={<Volume2/>} title="Punchy 40mm drivers" description="Deep bass, crisp mids and sparkling detail without muddying the mix." />
            <Feature icon={<BatteryCharging/>} title="40-hour battery" description="A full work week of music with fast charging when you need a boost." />
            <Feature icon={<Mic2/>} title="Crystal-clear calls" description="Dual microphones keep your voice sharp, even in noisy places." />
            <Feature icon={<Bluetooth/>} title="Instant pairing" description="Bluetooth 5.4 and multipoint pairing across your favorite devices." />
          </Features>
        </section>

        <section className="border-y-4 border-black bg-blue-500 px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl"><Stats columns={4}><Stat value="40H" label="Battery life"/><Stat value="10 MIN" label="= 5 hours play"/><Stat value="238G" label="Featherweight"/><Stat value="2 YRS" label="Warranty"/></Stats></div>
        </section>

        <section id="specs" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-2">
          <ComicPanel variant="night" shadow="lg" className="relative overflow-hidden p-8 text-white">
            <div className="absolute inset-0 opacity-20 halftone"/><SoundBadge variant="zap" className="absolute right-5 top-5"/><p className="relative text-xs font-black uppercase tracking-[.25em] text-yellow-300">The inside story</p><h2 className="display relative mt-3 text-6xl">ENGINEERED FOR EVERYDAY IMPACT.</h2><p className="relative mt-5 max-w-lg font-bold leading-relaxed text-neutral-200">Memory-foam cushions, a flexible reinforced headband and responsive controls keep Pulse One ready from commute to creative sprint.</p>
            <button className="relative mt-8 flex items-center gap-2 font-black uppercase text-yellow-300" onClick={()=>setCompareOpen(true)}>Compare models <ChevronRight size={18}/></button>
          </ComicPanel>
          <Card variant="panel" padding="lg"><CardHeader><CardTitle className="display text-4xl">TECH SPECS</CardTitle></CardHeader><CardContent className="space-y-0">{[["Driver","40 mm dynamic"],["Frequency","20 Hz–20 kHz"],["Bluetooth","5.4 multipoint"],["Charging","USB-C fast charge"],["Weight","238 g"],["Codec","AAC / SBC"]].map(([a,b])=><div key={a} className="flex justify-between gap-5 border-b-2 border-dashed border-black py-4"><span className="font-black">{a}</span><span className="text-right font-bold text-neutral-600">{b}</span></div>)}</CardContent></Card>
        </section>

        <section id="reviews" className="border-y-4 border-black bg-yellow-300 px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><Badge variant="ink">REAL PEOPLE. REAL NOISE.</Badge><h2 className="display mt-4 text-5xl sm:text-7xl">THE REVIEWS ARE IN!</h2></div><div className="text-left md:text-right"><div className="review-stars text-2xl">★★★★★</div><p className="font-black">4.9 from 1,284 listeners</p></div></div>
            <Testimonials columns={3}>
              <Testimonial quote="The bass has real punch, but vocals still stay clean. I use them every day." author="Maya R." role="Product Designer" avatar={<Avatar fallback="MR" variant="pink"/>}/>
              <Testimonial quote="Comfortable for long coding sessions and the battery genuinely refuses to die." author="Jon K." role="Frontend Developer" avatar={<Avatar fallback="JK" variant="blue"/>}/>
              <Testimonial quote="They look like nothing else in my setup. The comic styling is ridiculously fun." author="Lina S." role="Illustrator" avatar={<Avatar fallback="LS" variant="green"/>}/>
            </Testimonials>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div><Badge variant="blue">WHAT'S IN THE BOX?</Badge><h2 className="display mt-4 text-6xl">UNBOX THE BOOM.</h2><p className="mt-5 font-bold leading-relaxed text-neutral-700">Everything you need to start listening, travelling and creating right away.</p></div>
            <div className="grid gap-4 sm:grid-cols-3">{[[PackageCheck,"Pulse One"],[BatteryCharging,"USB-C cable"],[ShieldCheck,"Hard travel case"]].map(([Icon,label])=>{const C=Icon as typeof PackageCheck;return <Card key={label as string} variant="pop" className="text-center"><CardContent className="grid min-h-44 place-items-center"><div><C className="mx-auto mb-4" size={38}/><p className="display text-2xl">{label as string}</p></div></CardContent></Card>})}</div>
          </div>
        </section>

        <section id="faq" className="border-t-4 border-black bg-[#ffeff5] px-5 py-20 md:px-8"><div className="mx-auto max-w-4xl"><div className="text-center"><Badge variant="pink">NEED THE DETAILS?</Badge><h2 className="display mt-4 text-6xl">FAQ</h2></div><FAQ className="mt-10"><FAQItem value="wired" title="Does Pulse One support wired listening?">Yes. A USB-C audio mode is available for laptops and compatible mobile devices.</FAQItem><FAQItem value="multipoint" title="Can I connect two devices at once?">Yes. Multipoint Bluetooth lets you switch between two paired devices.</FAQItem><FAQItem value="gaming" title="Is it suitable for gaming?">It works well for casual gaming, calls and media. Competitive players may prefer wired low-latency mode.</FAQItem><FAQItem value="returns" title="What is the return policy?">The showcase includes a fictional 30-day return policy for demonstration purposes.</FAQItem></FAQ></div></section>

        <section className="bg-[#171717] px-5 py-16 text-white md:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left"><div><SoundBadge variant="pow"/><h2 className="display mt-3 text-5xl">READY TO FEEL EVERY BEAT?</h2><p className="mt-2 font-bold text-neutral-300">Free shipping. 30-day returns. Two-year warranty.</p></div><Button size="lg" onClick={addToCart}><ShoppingBag size={20}/> Get Pulse One — ${total}</Button></div></section>

        <footer className="border-t-4 border-black bg-[#fff8e7] px-5 py-7"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm font-black md:flex-row"><span>© 2026 PULSE ONE — DEMO PRODUCT</span><span>BUILT WITH COMIXA UI 0.1.5</span></div></footer>

        <Dialog open={demoOpen} onOpenChange={setDemoOpen}><DialogContent variant="boom" size="lg"><DialogHeader><DialogTitle className="display text-5xl">THE PULSE ONE STORY</DialogTitle><DialogDescription>Concept video placeholder for a bold product launch.</DialogDescription></DialogHeader><div className="grid min-h-64 place-items-center border-4 border-black bg-blue-500 halftone"><button className="grid h-20 w-20 place-items-center rounded-full border-4 border-black bg-yellow-300 ink-shadow" onClick={()=>toast({title:"Demo video started",description:"Replace this placeholder with your product video."})}><Play size={32} fill="currentColor"/></button></div><DialogFooter><Button onClick={()=>setDemoOpen(false)}>Got it</Button></DialogFooter></DialogContent></Dialog>

        <Dialog open={compareOpen} onOpenChange={setCompareOpen}><DialogContent variant="panel" size="lg"><DialogHeader><DialogTitle className="display text-5xl">COMPARE THE LINEUP</DialogTitle><DialogDescription>Choose the model that fits your listening style.</DialogDescription></DialogHeader><Pricing columns={2}><PricingTier name="Pulse Mini" price="$129" description="Lightweight everyday sound" features={["28-hour battery","Single-device pairing","Soft carry pouch"]}/><PricingTier name="Pulse One" price="$189" description="The complete experience" featured badge="BEST PICK" features={["40-hour battery","Multipoint Bluetooth","Hard travel case","2-year warranty"]}/></Pricing><DialogFooter><Button variant="outline" onClick={()=>setCompareOpen(false)}>Close</Button><Button onClick={()=>{setCompareOpen(false);addToCart()}}>Choose Pulse One</Button></DialogFooter></DialogContent></Dialog>
      </main>
    </ToastProvider>
  );
}
