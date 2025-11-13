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
const BoxModelLayer = ({ label, size, color, children }) => (
  <div
    className="absolute inset-0 flex items-center justify-center"
    style={{ backgroundColor: color, opacity: 0.85 }}
  >
    <span className="absolute top-1 left-1 text-[10px] font-semibold text-gray-900 opacity-90">
      {label}
    </span>
    <span className="absolute top-1/2 -translate-y-1/2 left-0.5 text-[10px] font-bold text-gray-900 opacity-90">
      {size}
    </span>
    <span className="absolute top-0.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-900 opacity-90">
      {size}
    </span>
    {children}
  </div>
);

const BoxModel = ({
  margin = 27,
  border = 40,
  padding = 23,
  width = 50,
  height = 50,
  colors,
}) => {
  const layers = [
    { name: "margin", value: margin, color: colors?.margin || "#b48558" },
    { name: "border", value: border, color: colors?.border || "#F7DC6F" },
    { name: "padding", value: padding, color: colors?.padding || "#98D8C8" },
  ];

  let currentWidth = width + padding * 2 + border * 2 + margin * 2;
  let currentHeight = height + padding * 2 + border * 2 + margin * 2;

  const renderLayers = (index = 0) => {
    if (index >= layers.length) {
      return (
        <div
          className="flex items-center justify-center text-white font-medium text-center"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: colors?.content || "#4A90E2",
          }}
        >
          <div>
            <div className="text-xs">content</div>
            <div className="text-[10px] mt-1">
              {width} × {height}
            </div>
          </div>
        </div>
      );
    }

    const layer = layers[index];
    const nextWidth = currentWidth - layer.value * 2;
    const nextHeight = currentHeight - layer.value * 2;
    currentWidth = nextWidth;
    currentHeight = nextHeight;

    return (
      <BoxModelLayer label={layer.name} size={layer.value} color={layer.color}>
        <div
          style={{
            width: `${nextWidth}px`,
            height: `${nextHeight}px`,
            position: "relative",
          }}
        >
          {renderLayers(index + 1)}
        </div>
      </BoxModelLayer>
    );
  };

  const totalW = width + padding * 2 + border * 2 + margin * 2;
  const totalH = height + padding * 2 + border * 2 + margin * 2;

  return (
    <div className="flex items-center justify-center py-8 bg-gray-900 rounded-lg">
      <div
        className="relative"
        style={{ width: `${totalW}px`, height: `${totalH}px` }}
      >
        {renderLayers()}
      </div>
    </div>
  );
};
const Card2Blue = ({
  titles,
  desp,
  iconFill,
  iconCategory,
  underlines = false, // default: no underline
}) => {
  return (
    <div className="bg-black p-3 border-[#0a1929] border-2 ">
      <div className="flex flex-row justify-start items-center gap-1.5 mb-2">
        <i className={`${iconFill} ${iconCategory} text-white text-2xl`}></i>
        <p
          className={`text-white text-2xl lg:text-3xl ${
            underlines ? "underline underline-offset-4" : ""
          }`}
        >
          {titles}
        </p>
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
                  {isMobile ? "GDGoC" : "Google Developer Groups on Campus"}
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
                  to="task2"
                  smooth={true}
                  duration={3000}
                  offset={-50}
                  className="border border-white bg-white p-2 text-center cursor-pointer lg:p-5 hover:border-[#0a3931] hover:bg-[#0a3931] hover:text-white transition duration-300 ease-in-out  "
                >
                  Task 2
                </ScrollLink>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdvS43_EXfdzgfQVfmfHvmjx555_Rh0dA8un0-Cqi8-T4B-hQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-white p-2 text-center cursor-pointer lg:p-5 lg:px-7  hover:border-[#0a3931] hover:bg-[#0a3931] hover:text-white transition duration-300 ease-in-out "
                >
                  Submit
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
                <p className="text-center mx-6 mt-5 lg:text-3xl lg:w-250 xl:w-350 xl:px-10  ">
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
                head="Front-End"
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
                head="Data bases"
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
          </section>
          {/* NEW TASK 4 */}
          <div className="mt-3" id="task2">
            <div className="mb-3 xl:mx-20 mx-3" data-aos="fade-up">
              <Cards
                head="Task 1: HTML and CSS Fundamentals Quiz"
                des="Status: Completed"
                iconCategory="fa-circle"
                iconFill="fa-solid"
                bgColor="#0b1929"
              />
            </div>
            <div className="mb-3 xl:mx-20 mx-3" data-aos="fade-up">
              <Cards
                head="Task 2: Build a Simple 'About Me' Webpage"
                des="Goal: Create a one-page mini-profile website that combines HTML structure, CSS layout, and images..."
                iconCategory="fa-circle"
                iconFill="fa-solid"
                bgColor="#0b1929"
              />
            </div>

            <div className="mb-5 xl:mx-20 mx-3" data-aos="fade-up">
              <Card2Blue
                titles="Structure (HTML)"
                desp="Create a new file: index.html. After adding the boilerplate using ! or manually entering it to VS Code."
                iconFill="fa-solid"
                iconCategory="fa-file-code"
              />
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:mx-20 xl:grid-cols-3 mx-3"
              data-aos="fade-up"
            >
              <Card2Blue
                titles="Inside the body, add:"
                desp="<header> → Contains your name and tagline."
                iconFill="fa-solid"
                iconCategory="fa-1"
              />
              <Card2Blue
                desp="<section> → Contains your profile image and short intro paragraph."
                iconFill="fa-solid"
                iconCategory="fa-2"
              />
              <Card2Blue
                desp="<ul> or <ol> → A list of hobbies/interests."
                iconFill="fa-solid"
                iconCategory="fa-3"
              />
              <Card2Blue
                desp="<a> → A clickable link."
                iconFill="fa-solid"
                iconCategory="fa-4"
              />
              <Card2Blue
                desp="<footer> → Add © 2025 Your Name or a quote."
                iconFill="fa-solid"
                iconCategory="fa-5"
              />
              <div className="lg:col-span-2 xl:col-span-1">
                <Card2Blue
                  titles="Search prompts"
                  desp='"HTML header element" • "HTML section element" • "HTML lists (ul vs ol)" • "HTML links (a tag)"'
                  iconFill="fa-solid"
                  iconCategory="fa-search"
                />
              </div>
            </div>

            <div className="mt-5 mb-5 xl:mx-20 mx-3" data-aos="fade-up">
              <Card2Blue
                titles="Styling (CSS)"
                desp="Create your style.css."
                iconFill="fa-solid"
                iconCategory="fa-palette"
              />
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:mx-20 xl:grid-cols-3 mx-3"
              data-aos="fade-up"
            >
              <Card2Blue
                desp="Give the header a background color and center the text."
                iconFill="fa-solid"
                iconCategory="fa-1"
              />
              <Card2Blue
                desp="Make the image circular using border-radius: 50%."
                iconFill="fa-solid"
                iconCategory="fa-2"
              />
              <Card2Blue
                desp="Use max-width and margin: auto to center the main content."
                iconFill="fa-solid"
                iconCategory="fa-3"
              />
              <Card2Blue
                desp="Add line-height, font-family, and some color scheme consistency."
                iconFill="fa-solid"
                iconCategory="fa-4"
              />
              <div className="lg:col-span-2 xl:col-span-1">
                <Card2Blue
                  desp="Use :hover on the link — change color or underline it smoothly."
                  iconFill="fa-solid"
                  iconCategory="fa-5"
                />
              </div>
              <div className="lg:col-span-2 xl:col-span-3">
                <Card2Blue
                  titles="Search prompts"
                  desp='"CSS centering block elements" • "CSS border-radius circle image" • "CSS hover underline transition" • "CSS layout using margin and padding"'
                  iconFill="fa-solid"
                  iconCategory="fa-search"
                />
              </div>
            </div>

            <div className="mt-5 mb-3 xl:mx-20 mx-3" data-aos="fade-up">
              <Card2Blue
                titles="Challenge (Optional Bonus)"
                iconFill="fa-solid"
                iconCategory="fa-trophy"
              />
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:mx-20 xl:grid-cols-3 mx-3"
              data-aos="fade-up"
            >
              <Card2Blue
                desp='Use a Google Font (hint: search "How to use Google Fonts in CSS").'
                iconFill="fa-solid"
                iconCategory="fa-star"
              />
              <Card2Blue
                desp="Add a box-shadow to the image or a section."
                iconFill="fa-solid"
                iconCategory="fa-star"
              />
              <Card2Blue
                desp="Add a subtle hover zoom on the image using transform: scale()."
                iconFill="fa-solid"
                iconCategory="fa-star"
              />
            </div>
          </div>
          {/* END OF NEW TASK 4 */}

          {/* CSS LEARNING SECTION */}
          <section className="mx-3 mt-15 xl:mx-20" data-aos="fade-up">
            <div className="text-white mb-8">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5 mb-5">
                <h2 className="text-3xl text-center lg:text-5xl">
                  Introduction to CSS
                </h2>
              </div>
            </div>

            {/* What is CSS */}
            <div className="mb-5" data-aos="fade-up">
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  What is CSS?
                </p>
                <p className="text-base text-white lg:text-2xl">
                  CSS (Cascading Style Sheets) is a style sheet language used to
                  describe the appearance and formatting of a webpage written in
                  HTML. It helps control text color, font, and size; backgrounds
                  and borders; spacing and layout of elements; and how pages
                  look on different devices (responsive design). In short, HTML
                  is the structure, and CSS is the style.
                </p>
              </div>
            </div>

            {/* Why Use CSS */}
            <div className="mb-8" data-aos="fade-up">
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Why Use CSS?
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Before CSS, all styling was done directly inside HTML tags,
                  which made web pages messy and hard to maintain. CSS separates
                  content (HTML) from presentation (style). Advantages: Easier
                  to maintain and update styles • Cleaner and more readable code
                  • Same stylesheet can be applied to multiple pages • Better
                  control over layout and design • Improves page loading speed.
                </p>
              </div>
            </div>

            {/* Types of CSS */}
            <div className="mb-5" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h3 className="text-white text-2xl text-center lg:text-4xl">
                  Types of CSS
                </h3>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Inline CSS
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Written inside the HTML tag using the style attribute.
                  Example: &lt;p style="color: red;"&gt;Text&lt;/p&gt;. Use
                  case: Quick styling for a single element.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Internal CSS
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Written inside a &lt;style&gt; tag in the &lt;head&gt; section
                  of the HTML page. Used for styling a single page.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  External CSS
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Written in a separate .css file and linked to the HTML using
                  &lt;link rel="stylesheet" href="style.css"&gt;. Used for
                  multiple pages with the same design. ✅ Best Practice for
                  large projects.
                </p>
              </div>
            </div>

            {/* CSS Syntax */}
            <div className="mb-5" data-aos="fade-up">
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  CSS Syntax
                </p>
                <p className="text-base text-white lg:text-2xl">
                  CSS works through rules. Each rule has two main parts:
                  Selector (the HTML element you want to style) and
                  Property-Value pairs (the style attributes you want to
                  change). Format: selector &#123; property: value; &#125;
                </p>
              </div>
            </div>

            {/* CSS Selectors */}
            <div className="mb-5 mt-8" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5 mb-5">
                <h3 className="text-white text-2xl text-center lg:text-4xl">
                  CSS Selectors
                </h3>
              </div>
              <p className="text-white text-center mb-5 lg:text-xl">
                Selectors decide which elements the styles apply to
              </p>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Element Selector
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Styles all elements of that type. Example: p &#123; &#125;
                  styles all &lt;p&gt; elements.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Class Selector
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Styles all elements with that class. Example: .note &#123;
                  &#125; styles all elements with class="note".
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  ID Selector
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Styles the element with that ID. Example: #header &#123;
                  &#125; styles the element with id="header".
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Group Selector
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Styles multiple elements at once. Example: h1, h2, h3 &#123;
                  &#125; styles all heading elements.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Universal Selector
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Styles everything on the page. Example: * &#123; &#125;
                  applies to all elements.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Descendant Selector
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Styles nested elements. Example: div p &#123; &#125; styles
                  &lt;p&gt; only when inside &lt;div&gt;.
                </p>
              </div>
            </div>

            {/* CSS Box Model */}
            <div className="mb-5 mt-8" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h3 className="text-white text-2xl text-center lg:text-4xl">
                  The CSS Box Model
                </h3>
              </div>
            </div>

            <div className="mb-5" data-aos="fade-up">
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  What is the Box Model?
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Every element on a webpage is a rectangular box. The CSS Box
                  Model describes how space is used around and inside elements.
                  Each box has 4 layers (from inside to outside): Content (text
                  or image inside) → Padding (space between content and border)
                  → Border (line surrounding padding and content) → Margin
                  (space outside the border).
                </p>
              </div>
            </div>

            <div className="mb-8" data-aos="fade-up">
              <BoxModel
                margin={27}
                border={40}
                padding={23}
                width={50}
                height={50}
                colors={{
                  margin: "#F8B88B",
                  border: "#F7DC6F",
                  padding: "#98D8C8",
                  content: "#4A90E2",
                }}
              />
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">Margin</p>
                <p className="text-base text-white lg:text-2xl">
                  Outer spacing around the element. Example: margin: 10px;
                  creates space outside the border.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">Padding</p>
                <p className="text-base text-white lg:text-2xl">
                  Inner spacing between content and border. Example: padding:
                  20px; creates space inside the border.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">Border</p>
                <p className="text-base text-white lg:text-2xl">
                  Edge outline around the element. Example: border: 2px solid
                  red; creates a red line around the element.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Width & Height
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Controls the inner content size. Example: width: 300px;
                  height: 200px; sets the content dimensions.
                </p>
              </div>
              <div className="lg:col-span-2 xl:col-span-2 bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Total Element Width Calculation
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Total width = width + padding-left + padding-right +
                  border-left + border-right + margin-left + margin-right.
                  Example: For width: 200px, padding: 20px, border: 5px, margin:
                  10px → Total = 200 + 20 + 20 + 5 + 5 + 10 + 10 = 270px
                </p>
              </div>
            </div>

            {/* Display Types */}
            <div className="mb-5 mt-8" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5 mb-5">
                <h3 className="text-white text-2xl text-center lg:text-4xl">
                  CSS Display and Positioning
                </h3>
              </div>
              <p className="text-white text-center mb-5 lg:text-xl">
                Before learning Flexbox and Grid, understand display types
              </p>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-4 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">Block</p>
                <p className="text-base text-white lg:text-2xl">
                  Takes full width, starts on a new line. Examples: &lt;div&gt;,
                  &lt;p&gt;, &lt;h1&gt;
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">Inline</p>
                <p className="text-base text-white lg:text-2xl">
                  Takes only as much width as needed. Examples: &lt;span&gt;,
                  &lt;a&gt;
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Inline-Block
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Behaves like inline but allows width and height to be set.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">None</p>
                <p className="text-base text-white lg:text-2xl">
                  Hides the element completely from the page.
                </p>
              </div>
            </div>

            {/* Flexbox */}
            <div className="mb-5 mt-8" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h3 className="text-white text-2xl text-center lg:text-4xl">
                  CSS Flexbox (Flexible Box Layout)
                </h3>
              </div>
            </div>

            <div className="mb-5" data-aos="fade-up">
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  What is Flexbox?
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Flexbox is a layout system designed to arrange items in one
                  dimension — either row (horizontal) or column (vertical). It's
                  perfect for navigation bars, cards, and responsive layouts. To
                  enable: display: flex; — All child elements now line up
                  horizontally by default.
                </p>
              </div>
            </div>

            <div className="mb-5" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h4 className="text-white text-xl text-center lg:text-3xl">
                  Flex Container Properties
                </h4>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  flex-direction
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Direction of items. Values: row (horizontal), column
                  (vertical), row-reverse, column-reverse
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  justify-content
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Horizontal alignment. Values: center, flex-start, flex-end,
                  space-between, space-around, space-evenly
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  align-items
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Vertical alignment. Values: center, flex-start, flex-end,
                  stretch, baseline
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  flex-wrap
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Allows wrapping onto multiple lines. Values: nowrap, wrap,
                  wrap-reverse
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">gap</p>
                <p className="text-base text-white lg:text-2xl">
                  Space between flex items. Example: gap: 10px; creates spacing
                  between all items.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Centering with Flexbox
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Perfect centering: display: flex; justify-content: center;
                  align-items: center; — Centers items both vertically and
                  horizontally.
                </p>
              </div>
            </div>

            <div className="mb-5" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h4 className="text-white text-xl text-center lg:text-3xl">
                  Flex Item Properties
                </h4>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-4 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  flex-grow
                </p>
                <p className="text-base text-white lg:text-2xl">
                  How much the item grows relative to others. Example:
                  flex-grow: 1;
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  flex-shrink
                </p>
                <p className="text-base text-white lg:text-2xl">
                  How much the item shrinks. Example: flex-shrink: 0; prevents
                  shrinking.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  flex-basis
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Default size before growing/shrinking. Example: flex-basis:
                  100px;
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  align-self
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Overrides container alignment for individual items. Example:
                  align-self: flex-end;
                </p>
              </div>
            </div>

            <div className="mb-8" data-aos="fade-up">
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Real-World Uses of Flexbox
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Navigation menus • Centering content easily • Card layouts •
                  Toolbars or footers • Responsive button groups • Image
                  galleries in a row
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="mb-5 mt-8" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h3 className="text-white text-2xl text-center lg:text-4xl">
                  CSS Grid Layout
                </h3>
              </div>
            </div>

            <div className="mb-5" data-aos="fade-up">
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  What is CSS Grid?
                </p>
                <p className="text-base text-white lg:text-2xl">
                  CSS Grid is a two-dimensional layout system — meaning it can
                  handle both rows and columns at the same time. It's ideal for
                  page layouts, image galleries, and dashboards. To enable:
                  display: grid;
                </p>
              </div>
            </div>

            <div className="mb-5" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h4 className="text-white text-xl text-center lg:text-3xl">
                  Grid Container Properties
                </h4>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  grid-template-columns
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Defines columns. Example: 1fr 1fr 1fr (3 equal columns) or
                  repeat(3, 1fr)
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  grid-template-rows
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Defines rows. Example: 100px 200px (first row 100px, second
                  200px)
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">gap</p>
                <p className="text-base text-white lg:text-2xl">
                  Space between grid items. Example: gap: 15px; creates spacing
                  between rows and columns.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  justify-items
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Aligns items horizontally within their cells. Values: center,
                  start, end, stretch
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  align-items
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Aligns items vertically within their cells. Values: center,
                  start, end, stretch
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  Example: 3-Column Grid
                </p>
                <p className="text-base text-white lg:text-2xl">
                  display: grid; grid-template-columns: repeat(3, 1fr); gap:
                  15px; — Creates a 3-column layout with equal widths.
                </p>
              </div>
            </div>

            <div className="mb-5" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h4 className="text-white text-xl text-center lg:text-3xl">
                  Grid Item Properties
                </h4>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-4 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  grid-column
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Defines column span. Example: grid-column: 1 / 3; spans from
                  column 1 to 3.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">grid-row</p>
                <p className="text-base text-white lg:text-2xl">
                  Defines row span. Example: grid-row: 1 / 2; occupies row 1
                  only.
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  justify-self
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Align individual item horizontally. Example: justify-self:
                  center;
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">
                  align-self
                </p>
                <p className="text-base text-white lg:text-2xl">
                  Align individual item vertically. Example: align-self: end;
                </p>
              </div>
            </div>

            {/* Flexbox vs Grid */}
            <div className="mb-5 mt-8" data-aos="fade-up">
              <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5">
                <h3 className="text-white text-2xl text-center lg:text-4xl">
                  Flexbox vs Grid
                </h3>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-3 lg:grid-cols-2 mb-8"
              data-aos="fade-up"
            >
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">Flexbox</p>
                <p className="text-base text-white lg:text-2xl">
                  Layout Type: One-dimensional (row OR column) • Direction: Row
                  or Column • Best For: Aligning items in a line • Example Use:
                  Navbars, cards, button groups • Control Over Gaps: Partial
                </p>
              </div>
              <div className="bg-black p-3 border-[#0a1929] border-2">
                <p className="text-white text-2xl lg:text-3xl mb-2">Grid</p>
                <p className="text-base text-white lg:text-2xl">
                  Layout Type: Two-dimensional (rows AND columns) • Direction:
                  Rows and Columns • Best For: Building full layouts • Example
                  Use: Web page layout, galleries, dashboards • Control Over
                  Gaps: Full (rows + columns)
                </p>
              </div>
            </div>
          </section>
          {/* SUBMISSION INSTRUCTIONS */}
          <section className="mx-3 mt-15 xl:mx-20" data-aos="fade-up">
            <div className="text-white mb-5">
              <h2 className="text-3xl text-center mb-3 lg:text-5xl">
                Submission Instructions for 12th November
              </h2>
              <p className="text-center lg:text-2xl mb-8">
                You'll be prompted to:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 mb-8">
              <Card2Blue
                titles="1. Upload to GitHub"
                desp="Upload your project to GitHub using a repository (repo)."
                iconFill="fa-brands"
                iconCategory="fa-github"
              />
              <Card2Blue
                titles="2. Publish Live"
                desp="Publish your page live using GitHub Pages — so anyone can open it in a browser."
                iconFill="fa-solid"
                iconCategory="fa-globe"
              />
            </div>

            <div className="mb-8">
              <Card2Blue
                titles="Your page will be evaluated based on:"
                desp=" HTML semantics and structure •  Creativity and visual appeal •  Clean, readable CSS •  Proper linking between files (HTML ↔ CSS)"
              />
            </div>

            <div className="mb-5">
              <h3 className="text-white text-2xl text-center mb-5 lg:text-4xl">
                Helpful Resources
              </h3>
              <p className="text-white text-center mb-5 lg:text-xl">
                Use these tutorials from The Odin Project to guide you through
                setup and deployment:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <a
                href="https://www.theodinproject.com/lessons/foundations-setting-up-git"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                <Card2Blue
                  titles="Setting up Git"
                  desp="Learn how to install and configure Git for version control. Click here to open the tutorial →"
                  iconFill="fa-brands"
                  iconCategory="fa-git-alt"
                  underlines={true}
                />
              </a>
              <a
                href="https://www.theodinproject.com/lessons/foundations-recipes#viewing-your-project-on-the-web"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                <Card2Blue
                  titles="Viewing Your Project on the Web (GitHub Pages)"
                  desp="Deploy your website live using GitHub Pages. Click here to open the tutorial →"
                  iconFill="fa-solid"
                  iconCategory="fa-rocket"
                  underlines={true}
                />
              </a>
            </div>
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
