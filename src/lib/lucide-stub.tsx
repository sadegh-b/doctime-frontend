import React from 'react';

// تابع کمکی برای ساخت آیکون
const createIcon = (name: string, path: React.ReactNode, viewBox = "0 0 24 24") => {
  const Component = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    className = "",
    ...props
  }: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-${name} ${className}`}
      {...props}
    >
      {path}
    </svg>
  );
  Component.displayName = name;
  return Component;
};

// --- آیکون‌های موجود ---
const Search = createIcon('search', (
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
));

const Phone = createIcon('phone', (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
));

const MapPin = createIcon('map-pin', (
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
));

const Clock = createIcon('clock', (
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>
));

const Star = createIcon('star', (
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
));

const ChevronRight = createIcon('chevron-right', (
  <path d="m9 18 6-6-6-6" />
));

const ChevronLeft = createIcon('chevron-left', (
  <path d="m15 18-6-6 6-6" />
));

const Menu = createIcon('menu', (
  <>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </>
));

const X = createIcon('x', (
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>
));

const Facebook = createIcon('facebook', (
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
));

const Instagram = createIcon('instagram', (
  <>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </>
));

const Twitter = createIcon('twitter', (
  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
));

const Linkedin = createIcon('linkedin', (
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>
));

const Calendar = createIcon('calendar', (
  <>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </>
));

// --- آیکون‌های جدید اضافه‌شده ---
const Shield = createIcon('shield', (
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
));

const Award = createIcon('award', (
  <>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </>
));

const UserCheck = createIcon('user-check', (
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </>
));

export {
  Search,
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Calendar,
  Shield,
  Award,
  UserCheck,
};
