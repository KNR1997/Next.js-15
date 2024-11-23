import type { AppProps } from "next/app";
// import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
// import "@/assets/css/main.css";
import "react-toastify/dist/ReactToastify.css";
// import { ModalProvider } from '@/components/ui/modal/modal.context';
// import ManagedModal from '@/components/ui/modal/managed-modal';
// import ManagedDrawer from '@/components/ui/drawer/managed-drawer';
// import DefaultSeo from '@/components/seo/default-seo';
// import { SearchProvider } from '@/components/ui/search/search.context';
// import PrivateRoute from '@/lib/private-route';
// import { CartProvider } from '@/store/quick-cart/cart.context';
// import SocialLogin from '@/components/auth/social-login';
import { NextPageWithLayout } from "@/types";
// import QueryProvider from '@/framework/client/query-provider';
// import { getDirection } from '@/lib/constants';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ToastContainer = dynamic(
  () => import("react-toastify").then((module) => module.ToastContainer),
  { ssr: false }
);
// import Maintenance from '@/components/maintenance/layout';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: {
    //@ts-ignore
    session,
    ...pageProps
  },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const authenticationRequired = Component.authenticationRequired ?? false;
  const { locale } = useRouter();
  //   const dir = getDirection(locale);

  return getLayout(<Component {...pageProps} />);
  // return (
  //   <div>
  //     <SessionProvider session={session}>
  //       <Component {...pageProps} />
  //     </SessionProvider>
  //   </div>
  // );
}

export default CustomApp;
