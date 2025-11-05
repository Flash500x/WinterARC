import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Snowfall from "react-snowfall";
import { Box, Typography, Link, Divider, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from "./components/Cards";

const Card2 = ({ titles, desp, iconFill, iconCategory }) => {
  return (
    <div className="bg-black p-3 border-[#092b24] border-2">
      <div className="flex flex-row justify-start items-center gap-1.5 mb-2">
        <i class={`${iconFill} ${iconCategory} text-white text-2xl`}></i>
        <p className="text-white text-2xl lg:text-3xl">{titles}</p>
      </div>
      <p className="text-base text-white lg:text-2xl">{desp}</p>
    </div>
  );
};
const theme = createTheme({
  typography: {
    fontFamily: "'Wotfard', sans-serif",
  },
});

const FooterBar = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(13, 17, 23, 0.8)",
        backdropFilter: "blur(10px)",
        color: "white",
        py: 4,
        px: { xs: 2, sm: 4 },
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box
              component="img"
              src="/google.svg"
              alt="Winterarc Logo"
              sx={{ height: 30 }}
            />
            <Typography variant="h6" fontWeight="normal">
              Google for Developers
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            justifyContent={{ xs: "center", sm: "flex-end" }}
            flexWrap="wrap"
          >
            <Link
              href="https://gdg.community.dev/gdg-on-campus-mar-baselios-college-of-engineering-and-technology-trivandrum-india/"
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: 14,
                transition: "color 0.3s",
                "&:hover": { color: "#667eea" },
              }}
            >
              About
            </Link>
            <Link
              href="mailto:gdgcmbcet@gmail.com"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: 14,
                transition: "color 0.3s",
                "&:hover": { color: "#667eea" },
              }}
            >
              E-mail
            </Link>
            <Link
              href="https://www.instagram.com/gdgcmbcet?igsh=cm8yemQzdG1pMDJ2"
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: 14,
                transition: "color 0.3s",
                "&:hover": { color: "#667eea" },
              }}
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/google-developer-clubs-on-campus-mar-baselios-college-of-engineering-and-technology/"
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: 14,
                transition: "color 0.3s",
                "&:hover": { color: "#667eea" },
              }}
            >
              LinkedIn
            </Link>
          </Stack>
        </Stack>
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ textAlign: "left", opacity: 0.7 }}>
            © {new Date().getFullYear()} GDGC-MBCET. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "right", opacity: 0.7 }}>
            Contact - Elvis:{" "}
            <Link
              href="tel:+917025736895"
              underline="hover"
              color="primary"
              sx={{ fontWeight: "normal", textDecoration: "underline" }}
            >
              7025736895
            </Link>{" "}
            | Gowri:{" "}
            <Link
              href="tel:+919072116022"
              underline="hover"
              color="primary"
              sx={{ fontWeight: "normal", textDecoration: "underline" }}
            >
              9072116022
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 10 }}>
          <AppBar
            position="static"
            sx={{
              background: "#01071c",
              backdropFilter: "blur(20px)",
            }}
            elevation={0}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
                px: { xs: 2, sm: 4 },
                py: 1,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  component="img"
                  src="/gdsc.svg"
                  alt="Winterarc Logo"
                  sx={{ height: 40 }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  color="white"
                  fontWeight="500"
                >
                  {isMobile
                    ? "GDG on Campus"
                    : "Google Developer Groups on Campus"}
                </Typography>
              </Stack>
              <Button
                variant="contained"
                href="https://gdg.community.dev/gdg-on-campus-mar-baselios-college-of-engineering-and-technology-trivandrum-india/"
                target="_blank"
                sx={{
                  background: "transparent",
                  color: "white",
                  px: 3,
                  py: 1,

                  textTransform: "none",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
                    background: "white",
                    color: "black",
                  },
                }}
              >
                Join Now
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <main>
          <section
            className="relative bg-cover bg-center h-screen flex flex-col justify-center "
            style={{ backgroundImage: "url('/bg.svg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

            <div className="relative z-10 flex flex-col justify-center items-center">
              <img
                src="/header.png"
                alt=""
                className="w-150 lg:w-200"
                data-aos="fade-up"
              />
              <p
                className="text-white text-center mb-20 mx-2 sm:w-160 text-3xl lg:text-5xl lg:w-200 xl:w-300"
                data-aos="fade-up"
              >
                A two-month online tech adventure by GDGC MBCET, packed with
                coding, AI, and problem-solving challenges that'll push your
                creativity and skills to the next level!
              </p>
              <div
                className="flex flex-col w-full p-2 gap-3 font-bold lg:flex-row lg:justify-center lg:text-3xl lg:p-5"
                data-aos="fade-up"
              >
                <ScrollLink
                  to="tasks"
                  smooth={true}
                  duration={3000}
                  offset={-50}
                  className="border border-white bg-white p-2 text-center cursor-pointer lg:p-5 hover:border-[#0a3931] hover:bg-[#0a3931] hover:text-white transition duration-300 ease-in-out  "
                >
                  Explore Tasks
                </ScrollLink>

                <a
                  href="https://gdg.community.dev/gdg-on-campus-mar-baselios-college-of-engineering-and-technology-trivandrum-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-white p-2 text-center cursor-pointer lg:p-5 hover:border-[#0a3931] hover:bg-[#0a3931] hover:text-white transition duration-300 ease-in-out "
                >
                  About GDGC
                </a>
              </div>
            </div>
          </section>
          <div className="h-[2px] bg-gradient-to-b from-transparent to-black"></div>
          <section className=" text-white bg-black">
            <div className="mb-5 ">
              <h2
                className="text-3xl mx-2 text-center font-bold lg:text-5xl"
                data-aos="fade-up"
              >
                What Web Development Really Is
              </h2>
              <div
                className="lg:flex lg: flex-col lg:items-center lg:justify-center"
                data-aos="fade-up"
              >
                <p className="text-center mx-6 mt-5 lg:text-3xl lg:w-250 xl:w-400  ">
                  Web development is the practical, hands-on skill of creating
                  the sites and web applications people interact with every day.
                  News websites, dashboards, portfolios, video platforms—all of
                  them are built piece by piece. This guide focuses on that
                  process. You learn a fundamental, you use it immediately, and
                  you see the results in your browser. The goal is to learn how
                  to make functional, public things by practicing and iterating
                  on what you build.
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-3 p-3 lg:grid-cols-2 xl:px-20 "
              data-aos="fade-up"
            >
              <Cards
                head="Front-End vs Back-End"
                des="Web development has two great arenas: front-end and back-end. One shapes what users see, the other powers what they don’t. You’ll master both in time, but you start where every pixel, color, and animation shows instant results and your creativity meets real, visible code.

"
                iconFill="fa-solid"
                iconCategory="fa-code"
              ></Cards>
              <Cards
                head="Front-End "
                des="If a website were a building, the front-end is everything the visitor experiences directly—walls, doors, lighting, furniture, signs, and elevator buttons. You’re crafting what users see, click, read, scroll, and type into, shaping every visible and interactive detail.

"
                iconFill="fa-solid"
                iconCategory="fa-laptop-code"
              ></Cards>
            </div>
            <div
              className="px-3 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:px-20"
              data-aos="fade-up"
            >
              <Cards
                head="HTML"
                des="Defines webpage structure, content hierarchy, and layout.
"
                iconFill="fa-brands"
                iconCategory="fa-html5"
              ></Cards>
              <Cards
                head="CSS"
                des="Styles webpage elements, colors, spacing, and responsiveness.
"
                iconFill="fa-brands"
                iconCategory="fa-css3-alt"
              ></Cards>
              <div className="col-span-2 lg:col-span-1">
                {" "}
                <Cards
                  head="JavaScript"
                  des="The behaviours, animations, and dynamic interactions
"
                  iconFill="fa-brands"
                  iconCategory="fa-js"
                ></Cards>
              </div>
            </div>
            <div
              className="border border-[#092b24] border-3 mx-3 my-3 xl:mx-20"
              data-aos="fade-up"
            >
              <p className="text-center mx-6 mt-5 mb-5 lg:text-2xl">
                In practice, front-end means thinking about accessibility,
                responsive layouts, typography, component design, and
                performance. It is not just "make it pretty." It is making it
                usable, clear, and pleasant for actual humans who will
                absolutely close your site the moment something feels clumsy.
              </p>
            </div>

            <div className="px-3 mb-3 xl:px-20" data-aos="fade-up">
              <Cards
                head="The Backend"
                des="The back-end is plumbing, wiring, water tanks, and generators. Invisible until it breaks."
                iconFill="fa-solid"
                iconCategory="fa-server"
              ></Cards>
            </div>
            <div
              className="px-3 grid grid-cols-2 gap-3 xl:px-20 xl:grid-cols-4"
              data-aos="fade-up"
            >
              <Cards
                head="Databases"
                des="Databases storing user data, content, auth tokens, the works"
                iconFill="fa-solid"
                iconCategory="fa-database"
              ></Cards>
              <Cards
                head="API"
                des="Shuttle information between systems"
                iconFill="fa-solid"
                iconCategory="fa-file-code"
              ></Cards>
              <Cards
                head="App logic"
                des="Decides what happens when someone logs in, posts data, or buys something"
                iconFill="fa-solid"
                iconCategory="fa-gears"
              ></Cards>
              <Cards
                head="Security"
                des="Permissions, reliability, and scaling"
                iconFill="fa-solid"
                iconCategory="fa-lock"
              ></Cards>
            </div>
            <div
              className="border border-[#092b24] border-3 mx-3 my-3 xl:mx-20"
              data-aos="fade-up"
            >
              <p className="text-center mx-6 mt-5 mb-5 lg:text-2xl">
                If front-end says "Here is your table and menu," back-end says
                "I know who you are, I processed your order, here is your food,
                and yes, the payment went through." Think less glamour, more
                engineering under pressure. Back-end is where bugs have
                consequences and nobody claps for you unless you fail.
              </p>
            </div>
          </section>

          <section className="text-white  flex flex-col justify-center items-center gap-3 mt-15 ">
            <div>
              <h2
                className="text-4xl text-center mx-3 mb-2 lg:text-5xl"
                data-aos="fade-up"
              >
                Tools worth your attention
              </h2>
              <p
                className="text-center text-base lg:text-2xl"
                data-aos="fade-up"
              >
                The goal is not to hoard every shiny developer toy. The goal is
                to get productive with the basics, consistently.
              </p>
            </div>
            <div
              className="grid grid-cols-1 gap-3 mx-3 lg:grid-cols-2 xl:mx-20"
              data-aos="fade-up"
            >
              <Card2
                titles="Command Line"
                desp="Faster, cleaner, and ironically less frustrating than clicking through folders like a lost civilian. It is not romantic; it is efficient."
                iconFill="fa-solid"
                iconCategory="fa-terminal"
              ></Card2>
              <Card2
                titles="Git"
                desp="Your time machine. Makes mistakes survivable. Anyone building without version control either enjoys chaos or has not built anything that matters yet."
                iconFill="fa-brands"
                iconCategory="fa-git-alt"
              ></Card2>
              <Card2
                titles="GitHub"
                desp="Your portfolio, collaboration space, and public proof of whether you genuinely build things or merely talk about building them. It showcases your curiosity, persistence, and craft—the living record of your growth as a maker who turns ideas into experiences others can see, use, and learn from."
                iconFill="fa-brands"
                iconCategory="fa-github"
              ></Card2>
              <Card2
                titles="IDE / Code Editor"
                desp="Your workstation. Visual Studio Code is the practical default: extensions, debugging tools, version control integration, browser tools — everything you need without trying to reinvent a workspace from scratch. It is not about flair; it is about not fighting your own tools."
                iconFill="fa-solid"
                iconCategory="fa-window-restore"
              ></Card2>
            </div>
          </section>

          <section>
            <h2
              className="text-3xl mx-2 mb-10 text-center font-bold text-white mt-20 lg:text-5xl"
              data-aos="fade-up"
            >
              What You'll Learn
            </h2>
            <div
              className="mx-3 mt-2  grid grid-cols-1 gap-3 lg:grid-cols-2 xl:mx-20"
              data-aos="fade-up"
            >
              <Cards
                head='HTML: The "Bones"'
                des="It’s the meaning and skeleton of a webpage — the “what,” not the “how it looks.” You’ll learn to stop using <div> for everything and choose the right tags for the job. Clean, semantic HTML makes you look professional: easier to maintain, friendly for screen readers, and loved by search engines. You’ll structure pages with <header>, <nav>, <main>, and <footer>, and build a fully working contact form."
                iconCategory="fa-html5"
                iconFill="fa-brands"
              ></Cards>
              <div>
                <Cards
                  head='CSS: The "Style"'
                  des="This is the magic that makes your site visually shine. It’s where most beginners stumble, but we’ll skip the painful old methods and leap to modern tools. With CSS, you’ll build layouts that stay solid when the window resizes. You’ll master typography, spacing, and the twin pillars of modern design — Flexbox and Grid — your true superpowers for creating beautiful, responsive, and reliable web layouts that simply work."
                  iconCategory="fa-html5"
                  iconFill="fa-brands"
                ></Cards>
              </div>
            </div>
          </section>

          <section className="mt-15 mx-3">
            <div className="text-white mb-5">
              <h2
                className="text-3xl text-center mb-3 lg:text-5xl"
                data-aos="fade-up"
              >
                Your New Toolkit<br></br> (Escape "Tutorial Hell")
              </h2>
              <p
                className="text-center lg:text-2xl xl:mx-20"
                data-aos="fade-up"
              >
                The biggest trap for new developers is "tutorial hell" —
                watching 50 hours of videos but not being able to build a simple
                webpage. We're not doing that. Your toolkit is small, focused,
                and all you need.
              </p>
            </div>
            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:mx-20 xl:grid-cols-3"
              data-aos="fade-up"
            >
              <Cards
                head="MDN Web Docs"
                des="This is the official truth. When you’re wondering, ‘How does this CSS property actually work?’ or ‘What’s this HTML tag for?’ — this is your first stop. No exceptions. It’s the reference trusted by every senior engineer."
                iconFill="fa-brands"
                iconCategory="fa-firefox"
              ></Cards>
              <Cards
                head="The Odin Project"
                des="This is the ‘Stop-Watching-Start-Building’ curriculum. It’s a structured path that forces you to build real projects, not just isolated exercises. This is how you actually learn."
                iconFill="fa-solid"
                iconCategory="fa-otter"
              ></Cards>
              <div className="lg:col-span-2 xl:col-span-1">
                <Cards
                  head="web.dev"
                  des="This is Google's guide to building good websites, not just working ones. Once you have the basics down, you'll come here to learn how to make your sites fast, accessible to everyone, and professional-grade.



"
                  iconFill="fa-brands"
                  iconCategory="fa-chrome"
                ></Cards>
              </div>
              <div className="lg:col-span-2 xl:col-span-3">
                <Card2
                  titles="Your Workflow"
                  desp="Use Odin as your main curriculum. Use MDN as your reference for everything. Use web.dev to check your work and make it better."
                  iconFill={"fa-solid"}
                  iconCategory={"fa-laptop"}
                ></Card2>
              </div>
            </div>
          </section>

          <section className="text-white mx-3 mt-15">
            <div>
              <h2
                className="text-3xl text-center mb-3 lg:text-5xl"
                data-aos="fade-up"
              >
                Here's the Path <br /> Skill → Superpower
              </h2>
            </div>
            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:mx-20 xl:grid-cols-3"
              data-aos="fade-up"
            >
              <Card2
                titles="Learn <h1>, <p>, and <li>"
                desp="Then you can build: A clean, structured blog post.

"
                iconFill="fa-solid"
                iconCategory="fa-i-cursor"
              ></Card2>

              <Card2
                titles="Learn <img> and <a>"
                desp="Then you can build: A portfolio page with a gallery.

"
                iconFill="fa-solid"
                iconCategory="fa-i-cursor"
              ></Card2>

              <div className="lg:col-span-2 xl:col-span-1">
                <Card2
                  titles="Learn <form>, <input>, & <button>"
                  desp="Then you can build something real — a working login or contact form that sends and processes data.

"
                  iconFill="fa-solid"
                  iconCategory="fa-i-cursor"
                ></Card2>
              </div>

              <Card2
                titles="Learn Flexbox & Grid"
                desp="Then you can build: Any modern landing page layout you see.



"
                iconFill="fa-solid"
                iconCategory="fa-layer-group"
              ></Card2>
              <div className="xl:col-span-2">
                <Card2
                  titles="Learn Media Queries"
                  desp="Then you can build: Sites that look incredible on a phone, tablet, and desktop. Media queries let you create responsive designs that adapt beautifully to any screen size..



"
                  iconFill="fa-solid"
                  iconCategory="fa-clone"
                ></Card2>
              </div>
            </div>
          </section>

          <section className="mx-3 mt-15" id="tasks">
            <div className="text-white mb-5">
              <h2
                className="text-3xl text-center mb-3 lg:text-5xl"
                data-aos="fade-up"
              >
                Tasks
              </h2>
              <p
                className="text-center lg:text-2xl xl:mx-50"
                data-aos="fade-up"
              >
                The tasks below are meant to give you motion, not perfection.
                You already have the resources; use them. Search, read docs,
                break things, fix them. That is the point.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 xl:mx-20" data-aos="fade-up">
              <Cards
                head="Task 1: Build a Minimal Webpage (No styling yet)"
                des='Goal: Create a basic webpage that displays text on screen.

Expected outcome: A page that shows your name, a one-sentence intro, and a heading that says "Learning HTML".'
                iconFill="fa-solid"
                iconCategory="fa-circle"
              ></Cards>
              <div
                className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3"
                data-aos="fade-up"
              >
                <Card2
                  titles="Open Vs Code"
                  iconFill="fa-solid"
                  iconCategory="fa-1"
                ></Card2>
                <Card2
                  titles="Create a new folder for the project."
                  iconFill="fa-solid"
                  iconCategory="fa-2"
                ></Card2>
                <Card2
                  titles="Inside it, create a new file named index.html."
                  iconFill="fa-solid"
                  iconCategory="fa-3"
                ></Card2>
                <Card2
                  titles="Add the basic HTML structure. (Hint: type ! in VS Code and press Enter.)"
                  iconFill="fa-solid"
                  iconCategory="fa-4"
                ></Card2>
                <div className="lg:col-span-2">
                  <Card2
                    titles="Inside the <body> tag, add: A heading using the <h1> element, a paragraph using the <p> element, and your name displayed somewhere on the page."
                    iconFill="fa-solid"
                    iconCategory="fa-5"
                  ></Card2>
                </div>
                <div className="lg:col-span-2 xl:col-span-3">
                  <Card2
                    desp='Encouraged: Search MDN for "HTML headings," "HTML paragraphs," and "HTML body tag." Browse until the syntax feels boring. Boring means you absorbed it.

'
                  ></Card2>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="mb-3 xl:mx-20" data-aos="fade-up">
                <Cards
                  head="Task 2: Add Basic CSS Styling"
                  iconFill="fa-solid"
                  iconCategory="fa-circle"
                  des="Goal: Connect CSS and make the page less like a 1999 school project.

Expected outcome: The background colour changes, text has padding/spacing, and the heading is clearly larger and styled."
                ></Cards>
              </div>
              <div
                className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:mx-20 xl:grid-cols-3"
                data-aos="fade-up"
              >
                <Card2
                  titles="In the same folder, create a file named style.css."
                  iconFill="fa-solid"
                  iconCategory="fa-1"
                ></Card2>
                <Card2
                  titles='Link this file inside your HTML <head> using <link rel="stylesheet"...>'
                  iconFill="fa-solid"
                  iconCategory="fa-2"
                ></Card2>
                <Card2
                  titles="Set a background colour for the page."
                  iconFill="fa-solid"
                  iconCategory="fa-3"
                ></Card2>
                <div className="xl:col-span-2">
                  <Card2
                    titles="Change font size and colour for your heading and paragraph. Make your text stand out with custom styling."
                    iconFill="fa-solid"
                    iconCategory="fa-4"
                  ></Card2>
                </div>
                <div className="lg:col-span-2 xl:col-span-1">
                  <Card2
                    titles="Use padding or margin to add breathing room around text."
                    iconFill="fa-solid"
                    iconCategory="fa-5"
                  ></Card2>
                </div>
                <div className="lg:col-span-2 xl:col-span-3">
                  <Card2
                    titles="Helpful things to search on MDN"
                    iconFill="fa-solid"
                    iconCategory="fa-circle-info"
                    desp={
                      "How to link CSS file • CSS background-color • CSS font-size • CSS margin vs padding"
                    }
                  ></Card2>
                </div>
              </div>
            </div>

            <div className="mt-3 xl:mx-20">
              <div className="mb-3" data-aos="fade-up">
                <Cards
                  head="Task 3A: Add a Button (no hover yet)"
                  des="Goal: Introduce an interactive element, even if it does nothing meaningful yet.

Expected outcome: A visible button that is pleasant to look at."
                  iconFill={"fa-solid"}
                  iconCategory={"fa-circle"}
                ></Cards>
              </div>
              <div
                className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3"
                data-aos="fade-up"
              >
                <Card2
                  titles="Add a <button> in your HTML under your paragraph."
                  iconFill={"fa-solid"}
                  iconCategory={"fa-1"}
                ></Card2>
                <Card2
                  titles="Style it in style.css"
                  iconFill={"fa-solid"}
                  iconCategory={"fa-2"}
                  desp="Add padding, Use a border-radius to round corners, Change background and text color, Set a bigger font-size "
                ></Card2>
                <div className="lg:col-span-2 xl:col-span-1">
                  <Card2
                    titles="Search prompts"
                    iconFill={"fa-solid"}
                    iconCategory={"fa-search"}
                    desp='"HTML button element" • "CSS button styling basics" • "CSS Position:Absolute & Relative" • "Cursor Properties"'
                  ></Card2>
                </div>
              </div>
            </div>

            <div className="mt-3 xl:mx-20">
              <div className="mb-3" data-aos="fade-up">
                <Cards
                  head="Task 3B: Add a Button Hover Effect"
                  des="Goal: Introduce user feedback with CSS pseudo-classes.

Expected outcome: When the mouse hovers over the button, colours or size change subtly.

"
                  iconCategory={"fa-solid"}
                  iconFill={"fa-circle"}
                ></Cards>
              </div>
              <div
                className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3"
                data-aos="fade-up"
              >
                <Card2
                  titles="In style.css file... add a button:hover { ... } selector."
                  iconFill={"fa-solid"}
                  iconCategory={"fa-1"}
                ></Card2>
                <Card2
                  titles="Change properties on hover"
                  desp="background-color, text-color, transform: scale() "
                  iconFill={"fa-solid"}
                  iconCategory={"fa-2"}
                ></Card2>
                <div className="lg:col-span-2 xl:col-span-1">
                  <Card2
                    titles="Search prompts"
                    desp='"CSS :hover pseudo-class",  "CSS transform scale"'
                    iconFill={"fa-solid"}
                    iconCategory={"fa-search"}
                  ></Card2>
                </div>
              </div>
            </div>
          </section>

          <section
            className="mx-3 mt-15 text-white text-center xl:mx-40"
            data-aos="fade-up"
          >
            <h3 className="text-2xl">
              First community event drops soon: A Kahoot quiz goes live on
              November 5th. Stay tuned for upcoming tasks and mini-projects that
              will test your skills and commitment.
            </h3>
          </section>
        </main>

        <Box
          sx={{ position: "relative", zIndex: 10, mt: 8 }}
          data-aos="fade-up"
        >
          <FooterBar />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
