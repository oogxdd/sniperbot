import { ThemeProvider } from "@/context";
import "@/styles/globals.css";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </>
  );
}
