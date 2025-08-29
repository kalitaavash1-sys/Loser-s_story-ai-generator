import './globals.css';

export const metadata = {
  title: 'AI Novel Forge',
  description: 'AI-powered story generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          fontSize: '12px',
          opacity: 0.5,
        }}>
          Mr_Loser&apos;s
        </div>
        {children}
      </body>
    </html>
  );
}
