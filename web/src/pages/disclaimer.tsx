import HeroSection from "../components/HeroSection";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";

function Disclaimer() {
  return (
    <>
      <Layout>
        <HeroSection
          title="DISCLAIMER"
          subtitle="This is a PARODY WEBSITE not intended for commercial use. 
        The purpose of the website to be a design project. 
        All materials provideed are merely for educational use."
          textColor="black"
        />
      </Layout>
    </>
  );
}

export default withApollo({ ssr: false })(Disclaimer)