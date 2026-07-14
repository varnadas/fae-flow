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

/* Avatar — smiling-face used in the pictograms, as a standalone icon */
export function AvatarIcon({ size = 72, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.7755 47.6381C47.1933 42.3468 52.6326 39.2067 57.9239 40.6245L58.4845 40.7749C64.0858 42.2757 67.4101 48.0328 65.9093 53.6342L64.1622 60.1538C62.6613 65.7551 56.9041 69.0793 51.3028 67.5786L46.21 66.2143C43.5206 65.4936 41.2274 63.7339 39.835 61.3227L35.3741 53.5961C34.0637 51.3264 34.5639 48.445 36.5177 46.728C39.0801 44.4763 43.1111 45.0878 44.8341 48.0717C45.0419 48.4318 45.5819 48.361 45.6895 47.9594L45.7755 47.6381ZM57.1466 43.5219C53.4557 42.5332 49.6619 44.7237 48.6729 48.4145L48.587 48.7358C47.7876 51.719 43.7807 52.2464 42.2364 49.5717C41.4773 48.2571 39.6655 47.9574 38.4991 48.9819C37.6046 49.768 37.3863 51.082 37.9718 52.0961L42.4327 59.8227C43.4272 61.545 45.0654 62.802 46.9864 63.3169L52.0792 64.6811C56.0801 65.753 60.1927 63.3783 61.2647 59.3774L63.0118 52.8579C64.0839 48.8569 61.7091 44.7444 57.7081 43.6723L57.1466 43.5219ZM12.6759 16.1665C14.4984 9.36482 21.4894 5.32834 28.2911 7.15084L54.3712 14.1391C59.4127 15.4902 62.9322 19.6797 63.6768 24.5219C63.8027 25.3407 63.2407 26.107 62.422 26.2329C61.6032 26.3587 60.8369 25.7968 60.711 24.978C60.1407 21.2691 57.4461 18.0687 53.5948 17.0366L27.5147 10.0483C22.3135 8.65462 16.967 11.7416 15.5733 16.9428L8.58504 43.0229C7.19153 48.2241 10.2784 53.5707 15.4796 54.9643L29.6387 58.7583C30.4386 58.9729 30.9136 59.7952 30.6993 60.5952C30.4848 61.3953 29.6615 61.8701 28.8614 61.6557L14.7032 57.8618C7.9016 56.0393 3.86525 49.0481 5.68758 42.2465L12.6759 16.1665ZM34.8204 36.7504C36.1702 36.7505 37.3807 38.1707 36.6524 39.6469C35.3083 42.371 32.4997 44.2503 29.2501 44.2504C26.0004 44.2504 23.1919 42.371 21.8477 39.6469C21.1195 38.1708 22.33 36.7506 23.6798 36.7504H34.8204ZM53.3839 31.559C55.8038 31.2604 58.3195 31.413 60.8145 32.0815C63.3094 32.7501 65.5645 33.8756 67.5108 35.3442C68.1717 35.8432 68.3035 36.7836 67.8048 37.4448C67.3059 38.1059 66.3654 38.2374 65.7042 37.7387C64.0605 36.4984 62.1534 35.546 60.0372 34.979C57.9211 34.412 55.7935 34.2843 53.7501 34.5366C52.9283 34.6375 52.1797 34.0528 52.0782 33.2309C51.9768 32.4088 52.5618 31.6605 53.3839 31.559ZM21.3751 22.5004C23.239 22.5005 24.7501 24.0115 24.7501 25.8754C24.7499 27.7392 23.2389 29.2504 21.3751 29.2504C19.5113 29.2504 18.0003 27.7392 18.0001 25.8754C18.0001 24.0115 19.5111 22.5004 21.3751 22.5004ZM37.1251 22.5004C38.989 22.5005 40.5001 24.0115 40.5001 25.8754C40.4999 27.7392 38.9889 29.2504 37.1251 29.2504C35.2613 29.2504 33.7503 27.7392 33.7501 25.8754C33.7501 24.0115 35.2611 22.5004 37.1251 22.5004Z"
        fill="currentColor"
      />
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
