// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <header>
            <h1>My Next.js App</h1>
            {/* Add your navigation or other elements */}
          </header>
          <main>{children}</main>
          <footer>© 2024 My App</footer>
        </body>
      </html>
    );
  }
  