import { useState } from "react";
import "./Explorer.css";
import { AgeCheckScreen, type LayoutVariant } from "./AgeCheckScreen";
import { ILLUSTRATIONS, type IllustrationId } from "./Pictogram";

type VariantInfo = {
  id: LayoutVariant;
  tab: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  best: string;
};

const VARIANTS: VariantInfo[] = [
  {
    id: "original",
    tab: "Baseline",
    title: "No pictogram",
    description:
      "The current screen, shown for comparison. Text-forward, with a large empty region between the list and the legal block.",
    pros: ["Maximum room for copy", "Nothing competes with the CTA"],
    cons: ["Feels utilitarian / bare", "Wastes the middle whitespace"],
    best: "Reference point for the options below.",
  },
  {
    id: "top-hero",
    tab: "Top hero",
    title: "Hero above the heading",
    description:
      "Pictogram sits centered between the nav bar and the title as a classic hero. It sets an approachable tone before the user reads anything.",
    pros: [
      "Strong first impression, clear subject",
      "Reads top-to-bottom naturally",
    ],
    cons: [
      "Pushes the dense text further down",
      "Tallest layout — least breathing room with all the copy",
    ],
    best: "When you want the illustration to lead the story.",
  },
  {
    id: "middle-icons",
    tab: "Middle + icons",
    title: "Under the title, full list",
    description:
      "The pictogram sits directly under the heading, followed by all three assurances, each with its own icon — the more detailed version of the middle-space layout.",
    pros: [
      "Illustration reinforces the headline",
      "Every assurance is called out separately",
      "Icons make each point scannable",
    ],
    cons: [
      "Most text of the middle-space options",
      "Pushes the list and legal copy down",
    ],
    best: "When you want the image up top but still want each assurance spelled out.",
  },
  {
    id: "middle",
    tab: "Middle no icons",
    title: "Under the title",
    description:
      "The pictogram sits directly under the heading, between the title and the list, tying the illustration to the message.",
    pros: [
      "Illustration reinforces the headline",
      "Larger illustration reads clearly",
      "Natural reading order: title → image → details",
    ],
    cons: [
      "Separates the title from the list items",
      "Pushes the list and legal copy down",
    ],
    best: "When you want the image to support the headline directly.",
  },
  {
    id: "sentence",
    tab: "Concise copy",
    title: "Left-aligned, concise summary",
    description:
      "A left-aligned title with the three bullets collapsed into a short two-sentence summary beneath it, and the illustration in the space below.",
    pros: [
      "Much less text to read",
      "Illustration becomes a clear focal point",
      "Left alignment keeps body copy easy to read",
    ],
    cons: ["Individual assurances are less scannable"],
    best: "When reducing the wall of text is the priority.",
  },
  {
    id: "friendly",
    tab: "Friendly",
    title: "Top illustration, friendly headline",
    description:
      "Warm, low-friction concept: the illustration sits up top, with a large action-oriented headline and one short reassuring line. The detailed assurances live in the legal copy below.",
    pros: [
      "Warmest, most human tone",
      "Very little to read before acting",
      "Illustration leads and the CTA is unmissable",
    ],
    cons: [
      "Specific assurances move into the fine print",
      "Least information shown up front",
    ],
    best: "Consumer onboarding where a friendly, low-friction first impression matters most.",
  },
  {
    id: "steps",
    tab: "Steps",
    title: "“Here’s what happens” timeline",
    description:
      "A centered illustration up top, then a three-step vertical timeline (selfie → age estimate → photo deleted) that sets expectations before the user continues.",
    pros: [
      "Sets clear expectations up front",
      "Scannable, sequential, reassuring",
      "Deletion promise is called out as its own step",
    ],
    cons: [
      "Tallest content block of the options",
      "More UI to build and localize",
    ],
    best: "When easing hesitation by showing exactly what will happen is the priority.",
  },
  {
    id: "big-type",
    tab: "Big Type",
    title: "Oversized two-tone headline",
    description:
      "Typography is the hero: one big statement broken across lines, with the key promise in white and the rest dimmed. A small illustration sits in the corner and the details stay in the legal copy.",
    pros: [
      "Bold, confident, editorial feel",
      "Communicates speed and simplicity instantly",
      "Almost nothing to read or parse",
    ],
    cons: [
      "No explicit privacy assurances up front",
      "Very type-driven; leans on tone over detail",
    ],
    best: "Brand-forward moments where confidence and simplicity matter more than detail.",
  },
];

export default function App() {
  const [active, setActive] = useState<LayoutVariant>("middle");
  const [illustration, setIllustration] = useState<IllustrationId>("trio");
  const [showInfo, setShowInfo] = useState(false);
  const info = VARIANTS.find((v) => v.id === active)!;

  return (
    <div className="explorer">
      <aside className="sidebar">
        <header className="explorer-head">
          <h1>FAE illustration explorer</h1>
          <p>
            The age-check screen shown a few different ways. Switch tabs to
            compare, swap the illustration, then pick the direction you want.
          </p>
        </header>

        <div className="illo-switch" role="group" aria-label="Illustration">
          <span className="illo-switch-label">Illustration</span>
          <div className="segmented">
            {ILLUSTRATIONS.map((i) => (
              <button
                key={i.id}
                type="button"
                aria-pressed={illustration === i.id}
                className={`segment ${illustration === i.id ? "segment--active" : ""}`}
                onClick={() => setIllustration(i.id)}
              >
                {i.label}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-group">
          <span className="illo-switch-label">Concepts</span>
          <nav className="tabbar" role="tablist" aria-label="Layout options">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                role="tab"
                aria-selected={active === v.id}
                className={`tab ${active === v.id ? "tab--active" : ""}`}
                onClick={() => setActive(v.id)}
              >
                {v.tab}
              </button>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="detail-toggle"
          aria-pressed={!showInfo}
          onClick={() => setShowInfo((v) => !v)}
        >
          {showInfo ? "Hide details" : "Show details"}
        </button>
      </aside>

      <main className={`explorer-body ${showInfo ? "" : "explorer-body--solo"}`}>
        <div className="stage">
          <AgeCheckScreen variant={active} illustration={illustration} />
        </div>

        <aside
          className={`info ${showInfo ? "" : "info--hidden"}`}
          role="tabpanel"
          aria-hidden={!showInfo}
        >
          <div className="info-inner">
            <span className="info-eyebrow">Option</span>
            <h2 className="info-title">{info.title}</h2>
            <p className="info-desc">{info.description}</p>

            <div className="info-cols">
              <div>
                <h3 className="info-h3 info-h3--pro">Pros</h3>
                <ul>
                  {info.pros.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="info-h3 info-h3--con">Cons</h3>
                <ul>
                  {info.cons.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info-best">
              <span className="info-best-label">Best for</span>
              <p>{info.best}</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
