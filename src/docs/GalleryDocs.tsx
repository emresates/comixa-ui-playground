import { Gallery, type GalleryItem } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel } from "./shared";

const items: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    alt: "City skyline at dusk",
    title: "Neon Alley",
    description: "Wide establishing shot for the opening page.",
    badge: "New",
  },
  {
    src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=900&q=80",
    alt: "Sunlit landscape",
    title: "Solar Beat",
    description: "Warm colors for a heroic scene.",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "House near a lake",
    title: "Quiet Panel",
    description: "A calmer card in the sequence.",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    alt: "Desert road",
    title: "Road Cut",
    description: "Good for travel arcs and chapter breaks.",
    badge: "Hot",
  },
];

export function GalleryDocs() {
  return (
    <DocPage
      title="Gallery"
      description="Ink-framed image galleries for covers, panels, art boards, or product shots."
      importCode={`import { Gallery } from "comixa-ui";`}
      exampleCode={`const items = [
  {
    src: "/covers/neon-alley.jpg",
    alt: "City skyline at dusk",
    title: "Neon Alley",
    description: "Wide establishing shot for the opening page.",
    badge: "New", // Shows the tilted yellow corner label
  },
  {
    src: "/covers/solar-beat.jpg",
    alt: "Sunlit landscape",
    title: "Solar Beat",
    description: "No badge field means no corner label.",
  },
  {
    src: "/covers/road-cut.jpg",
    alt: "Desert road",
    title: "Road Cut",
    description: "Good for travel arcs and chapter breaks.",
    badge: "Hot", // Any string works: "Hot", "Sale", "Featured"
  },
];

<Gallery variant="featured" items={items} />
<Gallery variant="strip" items={items} />`}
      props={
        [
          {
            name: "items",
            type: "GalleryItem[]",
            description: "Images with src/alt plus optional title, description, and badge",
          },
          {
            name: "items[].badge",
            type: "string",
            description:
              "Optional corner label. Set badge to values like New or Hot to show the tilted yellow tag; omit it to hide the tag.",
          },
          {
            name: "variant",
            type: `"grid" | "strip" | "featured"`,
            default: `"grid"`,
            description: "Gallery layout",
          },
          {
            name: "framed",
            type: "boolean",
            default: "true",
            description: "Rounded comic frame styling",
          },
        ] satisfies PropRow[]
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <DemoLabel>Featured</DemoLabel>
          <Gallery variant="featured" items={items} />
        </div>
        <div>
          <DemoLabel>Horizontal strip</DemoLabel>
          <Gallery variant="strip" items={items} className="pg-hide-scrollbar" />
        </div>
      </div>
    </DocPage>
  );
}
