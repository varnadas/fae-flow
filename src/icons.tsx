type IconProps = {
  size?: number;
  className?: string;
};

export function CloseIcon({ size = 28, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 8L20 20M20 8L8 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* List item 1 — camera / ID capture */
export function CameraIdIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 16.5c.6-1.6 1.8-2.4 3-2.4s2.4.8 3 2.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.5 9.5H18M14.5 12.5H18M14.5 15.5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* List item 2 — shield with check */
export function ShieldCheckIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3l7 2.5v5.2c0 4.4-2.9 8.3-7 9.3-4.1-1-7-4.9-7-9.3V5.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2.2 2.2L15 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* List item 3 — shield with lock */
export function ShieldLockIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3l7 2.5v5.2c0 4.4-2.9 8.3-7 9.3-4.1-1-7-4.9-7-9.3V5.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="9.25"
        y="11.5"
        width="5.5"
        height="4.5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.25 11.5v-1a1.75 1.75 0 013.5 0v1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* Step 1 — plain camera / selfie */
export function CameraIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 9a2 2 0 012-2h1.2l.83-1.4A1.5 1.5 0 019.32 4.9h5.36a1.5 1.5 0 011.29.7L16.8 7H18a2 2 0 012 2v7.5a2 2 0 01-2 2H6a2 2 0 01-2-2V9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.5" r="3.1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* Step 3 — trash / deleted */
export function TrashIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 7h15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.5 7V5.6A1.6 1.6 0 0111.1 4h1.8a1.6 1.6 0 011.6 1.6V7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.6 7l.73 10.9A2 2 0 009.32 19.8h5.36a2 2 0 001.99-1.86L17.4 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.5v5M14 10.5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GlobeIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2.75 10h14.5M10 2.75c1.9 2 2.9 4.6 2.9 7.25S11.9 15.25 10 17.25C8.1 15.25 7.1 12.65 7.1 10S8.1 4.75 10 2.75z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PersonaWordmark({ className }: IconProps) {
  return (
    <svg
      width="72"
      height="16"
      viewBox="0 0 72 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <text
        x="0"
        y="13"
        fill="currentColor"
        fontFamily="Builder Sans, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        persona
      </text>
    </svg>
  );
}
