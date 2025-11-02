import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Snowfall from "react-snowfall";
import { Box, Typography, Link, Divider, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import WebDevGuide from "./components/WebDevGuide";
import { useMediaQuery } from "react-responsive";

const theme = createTheme({
  typography: {
    fontFamily: "'Wotfard', sans-serif",
  },
});

// Ice Crystal Component
const IceCrystal = ({ top, left, size, delay }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        background:
          "linear-gradient(135deg, rgba(147, 197, 253, 0.3), rgba(196, 181, 253, 0.3))",
        borderRadius: "50%",
        filter: "blur(2px)",
        animation: `float ${4 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        "@keyframes float": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.1)",
          },
        },
      }}
    />
  );
};

const FrostedGlass = ({ children }) => {
  return (
    <Box
      sx={{
        background: "rgba(15, 23, 42, 0.4)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "24px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        transition: "all 0.3s ease",
        "&:hover": {
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 12px 48px 0 rgba(31, 38, 135, 0.5)",
        },
      }}
    >
      {children}
    </Box>
  );
};

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
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <Box
          className="parallax"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-50%",
              left: "-25%",
              width: "150%",
              height: "150%",
              background:
                "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
              animation: "aurora1 15s ease-in-out infinite",
              "@keyframes aurora1": {
                "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                "50%": { transform: "translate(10%, 5%) scale(1.1)" },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "-30%",
              right: "-25%",
              width: "150%",
              height: "150%",
              background:
                "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
              animation: "aurora2 20s ease-in-out infinite",
              "@keyframes aurora2": {
                "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                "50%": { transform: "translate(-10%, -5%) scale(1.15)" },
              },
            }}
          />

          {[...Array(15)].map((_, i) => (
            <IceCrystal
              key={i}
              top={Math.random() * 100}
              left={Math.random() * 100}
              size={20 + Math.random() * 60}
              delay={Math.random() * 4}
            />
          ))}

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, transparent 30%, rgba(15, 23, 42, 0.4) 100%)",
              pointerEvents: "none",
            }}
          />
        </Box>

        <Snowfall snowflakeCount={1000} />

        <Box sx={{ position: "relative", zIndex: 10 }}>
          <AppBar
            position="static"
            sx={{
              background: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
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
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  px: 3,
                  py: 1,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
                    background:
                      "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                  },
                }}
              >
                Join Now
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, sm: 4 },
            py: 6,
          }}
        >
          <FrostedGlass>
            <Box sx={{ p: { xs: 3, sm: 6 } }}>
              <Box
                sx={{
                  textAlign: "center",
                  mb: 6,
                }}
              >
                <div className="flex flex-row justify-center items-center">
                  <Typography
                    color="white"
                    fontWeight="bold"
                    className="font-5xl"
                    sx={{
                      mb: 3,
                      fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                    }}
                  >
                    <Box
                      component="img"
                      src="/header.png"
                      alt="Winterarc Logo"
                      sx={{
                        height: { xs: 80, sm: 70, md: 120 },
                        width: "auto",
                      }}
                    />{" "}
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    maxWidth: "900px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  A two-month online tech adventure by GDGC MBCET, packed with
                  coding, AI, and problem-solving challenges that'll push your
                  creativity and skills to the next level!
                </Typography>
              </Box>

              <WebDevGuide />
            </Box>
          </FrostedGlass>
        </Box>

        <Box sx={{ position: "relative", zIndex: 10, mt: 8 }}>
          <FooterBar />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
