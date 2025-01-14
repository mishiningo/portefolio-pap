const AboutPage = () => {
  return (
    <>
      <h3>Here we are going to understand why Leonardo is an awesome guy</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
