import type { AppProps } from 'next/app';
import "@/styles/styles.scss";
import RootLayout from '@/layouts/Rootlayout';

interface ComponentWithLayout {
  layout?: React.ComponentType;
}

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as ComponentWithLayout)?.layout || RootLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
