import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gradient-to-r from-indigo-500bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        {children}
      </body>
    </html>
  );
}
