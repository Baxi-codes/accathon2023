import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import TeamCard from "../components/TeamCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Team - Accathon 2023 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Box marginBlock={16}>
          <Heading
            paddingBlock={8}
            textAlign={["center", "left"]}
            textDecoration="underline"
          >
            Meet Our Team
          </Heading>
          <Heading
            size={"lg"}
            color={"purple.400"}
            textAlign={["center", "left"]}
            paddingBlock={4}
          >
            Faculty Committee
          </Heading>
          <Advisor />

          <Heading
            size={"lg"}
            color={"purple.400"}
            textAlign={["center", "left"]}
            paddingBlock={4}
          >
            Student Committee
          </Heading>
          <Developers />
        </Box>
        <Footer />
      </Container>
    </>
  );
}


function Advisor() {
  const advisors = [
    {
      name: "Dr Udai Paliwal",
      designation: "Dean and Director, ICNU ",
      image: "/udai_paliwal.jpeg",
      linkedIn: "https://www.linkedin.com/in/prof-udai-paliwal-55aa709a",
    },
    {
      name: "Dr Sanjay Bhayani",
      designation: "General Secretary, Indian Accounting Association",
      image: "/sanjay_bhayani.jpeg",
      linkedIn: "https://www.linkedin.com/in/sanjay-bhayani-505b901a0",
    },

    {
      name: "Prof Gaurang Rawal",
      designation: "Associate Professor, ITNU",
      image: "/gaurang_raval.jpg",
      linkedIn: "https://www.linkedin.com/in/gaurang-raval-919b0017",
    },
    {
      name: "Prof Jitendra Bhatia",
      designation: "Associate Professor, ITNU",
      image: "/jitendra_bhatia.jpeg",
      linkedIn: "https://www.linkedin.com/in/jitendrabbhatia/",
    },
    {
      name: "Prof Gopika Juneja",
      designation: "Assistant Professor, ICNU",
      image: "/gopika_juneja.jpeg",
      linkedIn: "https://www.linkedin.com/in/gopika-juneja-a6534b156/",
    },
    {
      name: "Prof Sunil Gautam",
      designation: "Assistant Professor, ITNU",
      image: "/sunil_gautam.jpeg",
      linkedIn: "https://www.linkedin.com/in/sunil-g-a02658246/",
    },

  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4}
      alignItems={'center'}
      justifyContent={"start"}
      marginBottom={8}
    >
      {advisors.map((ad) => (
        <GridItem>
          <TeamCard
            url={ad.image}
            name={ad.name}
            description={ad.designation ?? "Advisor"}
            link={ad.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}

function Developers() {
  const developers = [
    {
      name: "Shruti Jain",
      institute: "ICNU",
      image: "/shruti.jpeg",
      linkedIn: "https://www.linkedin.com/in/shruti-jain-959aa9241/",
    },
    {
      name: "Parth Sanghvi",
      institute: "ICNU",
      image: "/parth.jpeg",
      linkedIn: "https://www.linkedin.com/in/parth-sanghvi-a0a052265/",
    },
    {
      name: "Disha Tank",
      institute: "ICNU",
      image: "/disha.jpeg",
      linkedIn: "https://www.linkedin.com/in/disha-tank-270274261/",
    },
    {
      name: "Gungun Gangwani",
      institute: "ICNU",
      image: "/gungun.jpeg",
      linkedIn: "https://www.linkedin.com/in/gungun-gangwani-692a71217/",
    },
    {
      name: "Raj Patel",
      institute: "ITNU",
      image: "/raj.jpeg",
      linkedIn: "https://www.linkedin.com/in/raj-k-patel21/",
    },
    {
      name: "Vikas Dhanani",
      institute: "ITNU",
      image: "vikas.jpeg",
      linkedIn: "https://www.linkedin.com/in/vikas-dhanani-a571321b8/",
    },
    {
      name: "Dhairya Baxi",
      institute: "ITNU",
      image: "/dhairya.jpg",
      linkedIn: "https://www.linkedin.com/in/dhairya-baxi-38908a1b9/",
    }
  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4}
      marginBottom={8}
    >
      {developers.map((dev) => (
        <GridItem>
          <TeamCard
            url={dev.image}
            name={dev.name}
            description={dev.institute}
            link={dev.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
