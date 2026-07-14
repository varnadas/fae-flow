import "./App.css";
import { Pictogram, type IllustrationId } from "./Pictogram";
import {
  AvatarIcon,
  CameraIcon,
  CameraIdIcon,
  ChevronDownIcon,
  CloseIcon,
  GlobeIcon,
  PersonaWordmark,
  ShieldCheckIcon,
  ShieldLockIcon,
  TrashIcon,
} from "./icons";

export type LayoutVariant =
  | "original"
  | "top-hero"
  | "middle-icons"
  | "middle"
  | "sentence"
  | "friendly"
  | "steps"
  | "big-type";

type StepItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const steps: StepItem[] = [
  {
    icon: <CameraIcon size={22} />,
    title: "Do a quick camera check",
    desc: "Follow the on-screen guide, just a few seconds.",
  },
  {
    icon: <ShieldCheckIcon size={22} />,
    title: "We estimate your age",
    desc: "Used to unlock the right features for you.",
  },
  {
    icon: <TrashIcon size={22} />,
    title: "Your camera image is deleted",
    desc: "Removed after processing.",
  },
];

type ListItem = {
  icon: React.ReactNode;
  content: React.ReactNode;
};

const unlockItem: ListItem = {
  icon: <ShieldLockIcon />,
  content: (
    <>
      An age check unlocks more features and helps keep you safe.{" "}
      <a className="inline-link" href="#">
        View details
      </a>
      .
    </>
  ),
};

const listItems: ListItem[] = [
  {
    icon: <CameraIdIcon />,
    content: <>We use the camera only for this check.</>,
  },
  {
    icon: <ShieldCheckIcon />,
    content: <>We delete your images and video after processing.</>,
  },
  unlockItem,
];

/* Middle space combines the camera + deletion lines into one concise point. */
const middleListItems: ListItem[] = [
  {
    icon: <CameraIdIcon />,
    content: (
      <>
        We use the camera only for this check, then delete your images and video
        afterward.
      </>
    ),
  },
  unlockItem,
];

function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-time">9:41</span>
      <div className="status-notch" />
      <div className="status-icons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
          <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
          <rect x="5" y="4.5" width="3" height="7.5" rx="1" fill="currentColor" />
          <rect x="10" y="2" width="3" height="10" rx="1" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden>
          <path
            d="M8.5 2.5c2.6 0 5 1 6.8 2.6l-1.4 1.5A8 8 0 008.5 4.6 8 8 0 003.1 6.6L1.7 5.1A9.9 9.9 0 018.5 2.5z"
            fill="currentColor"
          />
          <path
            d="M8.5 6.4c1.5 0 2.9.6 3.9 1.5l-1.5 1.6a3.4 3.4 0 00-4.8 0L4.6 7.9A5.6 5.6 0 018.5 6.4z"
            fill="currentColor"
          />
          <circle cx="8.5" cy="10.6" r="1.4" fill="currentColor" />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none" aria-hidden>
          <rect
            x="0.5"
            y="1"
            width="22"
            height="11"
            rx="3"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <rect x="2" y="2.5" width="19" height="8" rx="1.5" fill="currentColor" />
          <rect
            x="24"
            y="4"
            width="1.5"
            height="5"
            rx="0.75"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}

function List({
  hideIcons = false,
  items = listItems,
}: {
  hideIcons?: boolean;
  items?: ListItem[];
}) {
  return (
    <ul className="list">
      {items.map((item, i) => (
        <li className="list-item" key={i}>
          {!hideIcons && <span className="list-icon">{item.icon}</span>}
          <span className="list-text">{item.content}</span>
        </li>
      ))}
    </ul>
  );
}

function Steps() {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li className="step" key={i}>
          <div className="step-rail">
            <span className="step-badge">{s.icon}</span>
          </div>
          <div className="step-text">
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="legal">
        By clicking the “Continue” button below, you consent to Roblox and
        Roblox’s vendor, Persona, collecting, using, and utilizing service
        providers to process your biometric information to verify your identity,
        assess your age, identify fraud, and improve services in accordance
        with{" "}
        <a className="inline-link" href="#">
          Roblox’s Facial Media Capture Privacy Notice
        </a>{" "}
        and{" "}
        <a className="inline-link" href="#">
          Persona’s Privacy Policy
        </a>
        .
      </p>

      <button className="continue-btn">Continue</button>

      <div className="footer-row">
        <button className="lang-selector">
          <GlobeIcon />
          <span>English</span>
          <ChevronDownIcon />
        </button>
        <div className="persona">
          <span className="persona-label">SECURED WITH</span>
          <PersonaWordmark className="persona-wordmark" />
        </div>
      </div>

      <div className="home-indicator" />
    </footer>
  );
}

export function AgeCheckScreen({
  variant,
  illustration = "trio",
}: {
  variant: LayoutVariant;
  illustration?: IllustrationId;
}) {
  const isFriendly = variant === "friendly";
  const isSteps = variant === "steps";
  const isBigType = variant === "big-type";
  const title = isSteps
    ? "Here’s what happens"
      : isFriendly
        ? "Confirm your age in a few seconds"
        : "Let’s do a secure age check";

  return (
    <div className={`device`}>
      <div className={`screen screen--${variant}`}>
        <StatusBar />

        <div className="content">
          <header className="header">
            <button className="close-btn" aria-label="Close">
              <CloseIcon />
            </button>
          </header>

          {(variant === "top-hero" || isFriendly) && (
            <div className="picto-hero">
              <Pictogram
                width={isFriendly ? 344 : 288}
                illustration={illustration}
              />
            </div>
          )}

          {isSteps && (
            <div className="picto-topleft">
              <Pictogram width={288} illustration={illustration} />
            </div>
          )}

          {isBigType && (
            <div className="picto-corner">
              <AvatarIcon size={88} className="avatar-corner" />
            </div>
          )}

          <div className="body">
            {isBigType ? (
              <h1 className="title">
                A few seconds.
                <br />
                One quick check.{" "}
                <span className="title-dim">That’s the whole age check.</span>
              </h1>
            ) : (
              <h1 className="title">{title}</h1>
            )}

            {(variant === "middle" || variant === "middle-icons") && (
              <div className="picto-under-title">
                <Pictogram width={300} illustration={illustration} />
              </div>
            )}

            {variant === "sentence" ? (
              <p className="lead">
                We only use the camera for this check and delete your images and
                video afterward. An age check helps keep you safe and unlocks
                more features.{" "}
                <a className="inline-link" href="#">
                  View details
                </a>
                .
              </p>
            ) : isFriendly ? (
              <p className="lead">
                Your camera does a quick check, then it’s deleted.
              </p>
            ) : isSteps ? (
              <Steps />
            ) : isBigType ? null : (
              <List
                hideIcons={variant === "middle"}
                items={variant === "middle" ? middleListItems : listItems}
              />
            )}
          </div>
        </div>

        <div className="spacer">
          {variant === "sentence" && (
            <div className="picto-center">
              <Pictogram width={353} illustration={illustration} />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
