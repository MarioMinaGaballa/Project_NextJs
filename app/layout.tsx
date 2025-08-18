import '@/app/ui/global.css';
import { inter1 } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter1.className} antialiased`}>{children}</body>
    </html>
  );
}