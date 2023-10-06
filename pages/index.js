export default function Home() {
  return <div>Next JS &amp; WordPress course.</div>;
}

export const getStaticProps = async () => {
  return {
    props: {
      data: "Hello World",
    },
  }
}