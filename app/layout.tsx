import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodoProvider } from "./context/TodoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List App",
  description: "create simple to do list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
