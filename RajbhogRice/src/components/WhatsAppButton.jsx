const whatsappUrl = "https://wa.me/910000000000";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-5 left-5 z-[110]
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-[0_8px_24px_rgba(0,0,0,0.24)]
        transition-transform duration-300
        hover:scale-110 hover:bg-[#20bd5a]
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-[#193d2f]
        sm:bottom-7 sm:left-7 sm:h-16 sm:w-16
      "
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8 sm:h-9 sm:w-9"
      >
        <path d="M16.02 3C8.86 3 3.04 8.78 3.04 15.9c0 2.28.6 4.5 1.75 6.46L3 29l6.84-1.78a13.1 13.1 0 0 0 6.18 1.56h.01c7.15 0 12.97-5.79 12.97-12.9 0-3.45-1.35-6.68-3.8-9.11A12.9 12.9 0 0 0 16.02 3Zm0 23.58h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.23-4.06 1.06 1.08-3.94-.26-.41a10.7 10.7 0 0 1-1.65-5.66c0-5.97 4.87-10.82 10.86-10.82 2.9 0 5.62 1.13 7.67 3.17a10.72 10.72 0 0 1 3.18 7.65c0 5.97-4.88 10.82-10.9 10.82Zm5.97-8.1c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.16-1.38-.5-2.62-1.6-.97-.86-1.63-1.93-1.82-2.26-.19-.33-.02-.51.14-.67.15-.14.33-.38.5-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.22 2.31 3.52 5.59 4.93.78.33 1.39.53 1.86.68.78.25 1.5.21 2.06.13.63-.09 1.94-.79 2.22-1.56.27-.77.27-1.43.19-1.56-.09-.14-.3-.22-.63-.39Z" />
      </svg>
    </a>
  );
}
