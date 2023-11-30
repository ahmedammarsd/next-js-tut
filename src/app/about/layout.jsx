//function AboutLayout({children,}: {children: React.ReactNode}) IN TYPE SCRIPT
export default function AboutLayout({ children }) {
  return (
    <html>
      <body>
        <header>This is the about header</header>
        {children}
      </body>
    </html>
  );
}
