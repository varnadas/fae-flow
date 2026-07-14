import "./Pictogram.css";

export type IllustrationId = "trio" | "camera-smiley" | "shield-camera";

type IllustrationMeta = {
  id: IllustrationId;
  /** Short label named after what the illustration shows. */
  label: string;
  /** File under /public/assets. */
  file: string;
  alt: string;
};

/**
 * The available age-check illustrations, all sharing the same 320:180 viewBox
 * and near-white line-art style. Named after the cards they show.
 */
export const ILLUSTRATIONS: IllustrationMeta[] = [
  {
    id: "trio",
    label: "Shield · Camera · Smiley",
    file: "pictogram-trio.svg",
    alt: "Shield, camera and smiling-face age-check illustration",
  },
  {
    id: "camera-smiley",
    label: "Camera · Smiley",
    file: "pictogram-camera-smiley.svg",
    alt: "Camera and smiling-face age-check illustration",
  },
  {
    id: "shield-camera",
    label: "Shield · Camera",
    file: "pictogram-shield-camera.svg",
    alt: "Shield and camera age-check illustration",
  },
];

type PictogramProps = {
  /** Rendered width in px. Height follows the 320:180 aspect ratio. */
  width?: number;
  /** Which illustration to show. Defaults to the three-card "trio". */
  illustration?: IllustrationId;
  className?: string;
};

/**
 * Age-check pictogram from Figma: tilted cards drawn as near-white line art.
 * Composed into a single viewBox'd SVG so it always keeps its aspect ratio.
 */
export function Pictogram({
  width = 320,
  illustration = "trio",
  className = "",
}: PictogramProps) {
  const meta =
    ILLUSTRATIONS.find((i) => i.id === illustration) ?? ILLUSTRATIONS[0];

  return (
    <img
      className={`pictogram ${className}`}
      src={`${import.meta.env.BASE_URL}assets/${meta.file}`}
      width={width}
      height={(width * 180) / 320}
      alt={meta.alt}
    />
  );
}
