import Layout from "@/components/Layout";
import type { NextPage } from "next";

const AboutPage = () => {
  return <div>About Page</div>;
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
