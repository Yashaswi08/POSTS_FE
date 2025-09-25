import "./globals.css";

export const metadata = {
  title: "Next.js + NestJS Posts",
  description: "Frontend for posts API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto">{children}</body>
    </html>
  );
}
