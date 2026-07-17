import { useMemo, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ComicCursor,
  ComicPanel,
  ComicReveal,
  ComixaProvider,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Divider,
  Input,
  Select,
  SoundBadge,
  SpeechBubble,
  Stat,
  Stats,
  Sticker,
  Switch,
  ToastProvider,
  Tooltip,
  toast,
} from "comixa-ui";
import {
  Activity,
  Bell,
  ChevronDown,
  CircleDollarSign,
  Command,
  CreditCard,
  Download,
  Gauge,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

const nav = [
  ["Overview", LayoutDashboard],
  ["Analytics", TrendingUp],
  ["Customers", Users],
  ["Subscriptions", CreditCard],
  ["Automation", Zap],
  ["Settings", Settings],
] as const;
const customers = [
  {
    name: "Olivia Martin",
    email: "olivia@northstar.dev",
    plan: "Pro",
    mrr: "$129",
    status: "Active",
    avatar: "OM",
  },
  {
    name: "Noah Williams",
    email: "noah@pixelcraft.io",
    plan: "Team",
    mrr: "$249",
    status: "Active",
    avatar: "NW",
  },
  {
    name: "Emma Brown",
    email: "emma@launchkit.co",
    plan: "Starter",
    mrr: "$39",
    status: "Trial",
    avatar: "EB",
  },
  {
    name: "Liam Davis",
    email: "liam@motionlab.dev",
    plan: "Pro",
    mrr: "$129",
    status: "Active",
    avatar: "LD",
  },
  {
    name: "Sophia Wilson",
    email: "sophia@moonbase.ai",
    plan: "Team",
    mrr: "$249",
    status: "Past due",
    avatar: "SW",
  },
];
const activities = [
  ["New Pro subscription", "Olivia upgraded 8 minutes ago", "green"],
  ["Automation completed", "Quarterly report generated", "blue"],
  ["Payment recovered", "Invoice #1842 was paid", "yellow"],
  ["Team member invited", "Noah added 3 collaborators", "pink"],
];

export function LaunchBoardDashboard() {
  const [mobile, setMobile] = useState(false);
  const [period, setPeriod] = useState("30d");
  const [query, setQuery] = useState("");
  const [dialog, setDialog] = useState(false);
  const [live, setLive] = useState(true);
  const filtered = useMemo(
    () =>
      customers.filter((c) =>
        (c.name + c.email + c.plan).toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );
  const notify = (message: string) =>
    toast({ title: "ZAP!", description: message, variant: "success" });
  return (
    <ComixaProvider theme="vintage">
      <ToastProvider position="top-right">
        <ComicCursor variant="dot" trailCount={3} />
        <div className="grid-paper min-h-full lg:grid lg:grid-cols-[270px_1fr]">
          <aside className="hidden min-h-screen border-r-[4px] border-ink bg-ink text-white lg:flex lg:flex-col">
            <Sidebar notify={notify} />
          </aside>
          {mobile && (
            <div
              className="fixed inset-0 z-50 bg-black/60 lg:hidden"
              onClick={() => setMobile(false)}
            >
              <aside
                className="h-full w-[86%] max-w-xs bg-ink text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end p-3">
                  <Button
                    icon
                    variant="danger"
                    onClick={() => setMobile(false)}
                    aria-label="Close"
                  >
                    <X size={18} />
                  </Button>
                </div>
                <Sidebar notify={notify} />
              </aside>
            </div>
          )}

          <main className="min-w-0">
            <header className="sticky top-0 z-30 border-b-[4px] border-ink bg-paper/95 px-4 py-3 backdrop-blur md:px-7">
              <div className="flex items-center gap-3">
                <Button
                  icon
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setMobile(true)}
                  aria-label="Open menu"
                >
                  <Menu size={18} />
                </Button>
                <div className="relative hidden max-w-md flex-1 md:block">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                  />
                  <Input className="pl-10" placeholder="Search anything..." />
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <Tooltip content="Command palette">
                    <Button icon variant="ghost" aria-label="Commands">
                      <Command size={18} />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Notifications">
                    <Button
                      icon
                      variant="outline"
                      aria-label="Notifications"
                      onClick={() => notify("You have 4 unread notifications.")}
                    >
                      <Bell size={18} />
                    </Button>
                  </Tooltip>
                  <Avatar fallback="YN" name="Your Name" variant="yellow" />
                </div>
              </div>
            </header>

            <div className="mx-auto max-w-[1500px] space-y-7 p-4 md:p-7">
              <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <SoundBadge variant="pow" size="sm" />
                    <Badge variant="green">All systems operational</Badge>
                  </div>
                  <h1 className="font-display text-5xl uppercase leading-none md:text-7xl">
                    Your SaaS <span className="text-pink">command center.</span>
                  </h1>
                  <p className="mt-3 max-w-2xl text-lg font-bold text-ink/70">
                    Track revenue, customers, subscriptions and automations
                    without losing the plot.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Select
                    value={period}
                    onValueChange={setPeriod}
                    variant="default"
                    options={[
                      { value: "7d", label: "Last 7 days" },
                      { value: "30d", label: "Last 30 days" },
                      { value: "90d", label: "Last 90 days" },
                    ]}
                  />
                  <Button
                    variant="outline"
                    onClick={() => notify("Dashboard report downloaded.")}
                  >
                    <Download size={17} /> Export
                  </Button>
                  <Button onClick={() => setDialog(true)}>
                    <Plus size={17} /> New customer
                  </Button>
                </div>
              </section>

              <ComicReveal variant="slide-up">
                <Stats columns={4}>
                  <Stat
                    value="$84,240"
                    label="Monthly revenue"
                    hint="↑ 18.4% this month"
                    tone="yellow"
                    animate
                  />
                  <Stat
                    value="2,418"
                    label="Active customers"
                    hint="+142 this period"
                    tone="pink"
                    animate
                  />
                  <Stat
                    value="6.2%"
                    label="Churn rate"
                    hint="↓ 1.1% improvement"
                    tone="blue"
                    animate
                  />
                  <Stat
                    value="94.8%"
                    label="Automation success"
                    hint="12.4k tasks run"
                    tone="green"
                    animate
                  />
                </Stats>
              </ComicReveal>

              <section className="grid gap-6 xl:grid-cols-[1.65fr_.9fr]">
                <ComicPanel
                  variant="cream"
                  shadow="lg"
                  className="overflow-hidden p-0"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b-[3px] border-ink p-5">
                    <div>
                      <Badge variant="yellow">Revenue</Badge>
                      <h2 className="mt-2 font-display text-4xl">MRR GROWTH</h2>
                      <p className="font-bold text-ink/60">
                        Recurring revenue across {period}.
                      </p>
                    </div>
                    <Sticker variant="green" tilt="right">
                      +18.4%
                    </Sticker>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="mb-5 flex flex-wrap gap-5">
                      <div>
                        <p className="text-sm font-bold uppercase text-ink/55">
                          Current MRR
                        </p>
                        <p className="font-display text-4xl">$84.2K</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase text-ink/55">
                          Forecast
                        </p>
                        <p className="font-display text-4xl">$96.8K</p>
                      </div>
                    </div>
                    <RevenueChart />
                  </div>
                </ComicPanel>

                <div className="space-y-6">
                  <ComicPanel
                    variant="hero"
                    shadow="lg"
                    className="p-5 text-white"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="yellow">Goal</Badge>
                        <h2 className="mt-2 font-display text-4xl">
                          $100K MRR
                        </h2>
                      </div>
                      <Gauge size={34} />
                    </div>
                    <div className="mt-8 h-5 overflow-hidden border-[3px] border-white bg-black/30">
                      <div className="h-full w-[84%] bg-yellow" />
                    </div>
                    <div className="mt-3 flex justify-between font-bold">
                      <span>$84,240</span>
                      <span>84%</span>
                    </div>
                    <p className="mt-4 font-bold text-white/75">
                      Only $15,760 to unlock the next milestone.
                    </p>
                  </ComicPanel>
                  <Card variant="panel">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-display text-3xl">
                          LIVE MODE
                        </CardTitle>
                        <Switch
                          checked={live}
                          onCheckedChange={setLive}
                          variant="success"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <SpeechBubble
                        tone={live ? "blue" : "cream"}
                        tail="bottomLeft"
                        size="sm"
                      >
                        <strong>
                          {live
                            ? "Real-time updates are on."
                            : "Updates are paused."}
                        </strong>
                      </SpeechBubble>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
                <ComicPanel
                  variant="default"
                  shadow="lg"
                  className="overflow-hidden p-0"
                >
                  <div className="flex flex-col gap-3 border-b-[3px] border-ink p-5 md:flex-row md:items-center">
                    <div>
                      <Badge variant="blue">Customers</Badge>
                      <h2 className="mt-2 font-display text-4xl">
                        LATEST SIGNUPS
                      </h2>
                    </div>
                    <div className="relative ml-auto w-full md:max-w-xs">
                      <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        size={17}
                      />
                      <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="pl-10"
                        placeholder="Search customers..."
                      />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left">
                      <thead className="bg-yellow">
                        <tr>
                          {["Customer", "Plan", "Status", "MRR", ""].map(
                            (h) => (
                              <th
                                key={h}
                                className="border-b-[3px] border-ink px-5 py-3 text-sm font-black uppercase"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((c, i) => (
                          <tr
                            key={c.email}
                            className="border-b-2 border-ink/15 hover:bg-yellow/20"
                          >
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <Avatar
                                  fallback={c.avatar}
                                  variant={i % 2 ? "blue" : "pink"}
                                />
                                <div>
                                  <p className="font-black">{c.name}</p>
                                  <p className="text-sm text-ink/55">
                                    {c.email}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-4">
                              <Badge
                                variant={
                                  c.plan === "Team"
                                    ? "pink"
                                    : c.plan === "Pro"
                                      ? "blue"
                                      : "outline"
                                }
                              >
                                {c.plan}
                              </Badge>
                            </td>
                            <td className="px-5 py-4">
                              <Badge
                                variant={
                                  c.status === "Active"
                                    ? "green"
                                    : c.status === "Trial"
                                      ? "yellow"
                                      : "red"
                                }
                              >
                                {c.status}
                              </Badge>
                            </td>
                            <td className="px-5 py-4 font-black">{c.mrr}</td>
                            <td className="px-5 py-4">
                              <Button icon variant="ghost" aria-label="More">
                                <MoreHorizontal size={18} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ComicPanel>

                <ComicPanel variant="sky" shadow="lg" className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="ink">Activity</Badge>
                      <h2 className="mt-2 font-display text-4xl">
                        WHAT'S NEW?
                      </h2>
                    </div>
                    <Activity />
                  </div>
                  <Divider variant="zigzag" tone="ink" className="my-5" />
                  <div className="space-y-4">
                    {activities.map(([title, desc, color]) => (
                      <div key={title} className="flex gap-3">
                        <span
                          className={`mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-ink ${color === "green" ? "bg-green" : color === "blue" ? "bg-blue" : color === "yellow" ? "bg-yellow" : "bg-pink"}`}
                        />
                        <div>
                          <p className="font-black">{title}</p>
                          <p className="text-sm font-bold text-ink/60">
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="mt-6 w-full"
                    onClick={() => notify("Activity center opened.")}
                  >
                    View all activity
                  </Button>
                </ComicPanel>
              </section>

              <section className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    icon: CircleDollarSign,
                    title: "Recover revenue",
                    text: "12 failed payments need attention.",
                    badge: "$1,842",
                  },
                  {
                    icon: Users,
                    title: "Invite your team",
                    text: "Collaborate with role-based access.",
                    badge: "3 seats",
                  },
                  {
                    icon: Sparkles,
                    title: "Create automation",
                    text: "Turn repetitive work into workflows.",
                    badge: "New",
                  },
                ].map(({ icon: Icon, title, text, badge }, i) => (
                  <Card key={title} variant="pop" effect="pop">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <span className="grid h-12 w-12 place-items-center border-[3px] border-ink bg-yellow shadow-[4px_4px_0_#171717]">
                          <Icon />
                        </span>
                        <Badge
                          variant={i === 0 ? "red" : i === 1 ? "blue" : "pink"}
                        >
                          {badge}
                        </Badge>
                      </div>
                      <h3 className="mt-5 font-display text-3xl">{title}</h3>
                      <p className="mt-2 font-bold text-ink/65">{text}</p>
                      <Button
                        className="mt-5"
                        variant="outline"
                        onClick={() => notify(`${title} action started.`)}
                      >
                        Take action
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </section>
            </div>
          </main>
        </div>

        <Dialog open={dialog} onOpenChange={setDialog}>
          <DialogContent variant="panel">
            <DialogHeader>
              <DialogTitle className="font-display text-4xl">
                ADD A NEW CUSTOMER
              </DialogTitle>
              <DialogDescription>
                Create a customer record and assign a subscription plan.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input placeholder="Customer name" />
              <Input type="email" placeholder="Email address" />
              <Select
                placeholder="Choose a plan"
                options={[
                  { value: "starter", label: "Starter — $39" },
                  { value: "pro", label: "Pro — $129" },
                  { value: "team", label: "Team — $249" },
                ]}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialog(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setDialog(false);
                  notify("Customer added successfully.");
                }}
              >
                Create customer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ToastProvider>
    </ComixaProvider>
  );
}

function Sidebar({ notify }: { notify: (s: string) => void }) {
  return (
    <>
      <div className="border-b-[3px] border-white/20 p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 rotate-[-4deg] place-items-center border-[3px] border-white bg-pink font-display text-2xl text-white shadow-[4px_4px_0_#ffe566]">
            L
          </span>
          <div>
            <p className="font-display text-3xl leading-none">LAUNCHBOARD</p>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-white/55">
              SaaS OS
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {nav.map(([label, Icon], i) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 border-[3px] px-4 py-3 text-left font-black uppercase transition ${i === 0 ? "border-white bg-yellow text-white shadow-[4px_4px_0_#ff4f91]" : "border-transparent hover:border-white hover:bg-white/10"}`}
          >
            <Icon size={19} />
            {label}
            {label === "Customers" && (
              <Badge className="ml-auto" variant="pink">
                24
              </Badge>
            )}
          </button>
        ))}
      </nav>
      <div className="p-4">
        <ComicPanel variant="pop" shadow="sm" className="p-4 text-ink">
          <Badge variant="ink">Pro tip</Badge>
          <p className="mt-3 font-black">Invite your team and ship faster.</p>
          <Button
            size="sm"
            className="mt-4 w-full"
            onClick={() => notify("Invite link copied.")}
          >
            Invite members
          </Button>
        </ComicPanel>
        <div className="mt-5 flex items-center gap-3">
          <Avatar fallback="YN" variant="yellow" />
          <div className="min-w-0">
            <p className="truncate font-black">[YOUR NAME]</p>
            <p className="truncate text-xs text-white/55">
              admin@launchboard.dev
            </p>
          </div>
          <ChevronDown className="ml-auto" size={17} />
        </div>
      </div>
    </>
  );
}

function RevenueChart() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden border-[3px] border-ink bg-white p-3">
      <div className="absolute inset-0 grid grid-rows-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border-b border-dashed border-ink/15" />
        ))}
      </div>
      <svg
        className="relative h-full w-full"
        viewBox="0 0 700 260"
        preserveAspectRatio="none"
        aria-label="Revenue growth chart"
      >
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#ff4f91" stopOpacity=".4" />
            <stop offset="1" stopColor="#ff4f91" stopOpacity=".02" />
          </linearGradient>
        </defs>
        <path
          d="M0,230 C60,210 90,190 140,200 C210,210 225,145 285,160 C340,173 365,105 420,120 C485,138 510,62 570,78 C620,91 650,42 700,32 L700,260 L0,260 Z"
          fill="url(#area)"
        />
        <path
          className="chart-line"
          d="M0,230 C60,210 90,190 140,200 C210,210 225,145 285,160 C340,173 365,105 420,120 C485,138 510,62 570,78 C620,91 650,42 700,32"
          fill="none"
          stroke="#171717"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle
          cx="700"
          cy="32"
          r="9"
          fill="#ffe566"
          stroke="#171717"
          strokeWidth="5"
        />
      </svg>
      <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs font-black uppercase text-ink/45">
        <span>Week 1</span>
        <span>Week 2</span>
        <span>Week 3</span>
        <span>Week 4</span>
      </div>
    </div>
  );
}
