import { Typography, Box, List, ListItem, Link } from "@mui/material";

export default function WebDevGuide() {
  return (
    <Box sx={{ mt: 4 }}>
      {/* What web development really is */}
      <Typography variant="h5" color="info.main" sx={{ mt: 5 }}>
        What Web Development Really Is
        <hr />
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        Web development is the practical, hands-on skill of creating the sites
        and web applications people interact with every day. News websites,
        dashboards, portfolios, video platforms—all of them are built piece by
        piece.
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        This guide focuses on that process. You learn a fundamental, you use it
        immediately, and you see the results in your browser. The goal is to
        learn how to make functional, public things by practicing and iterating
        on what you build.
      </Typography>

      {/* Front-End vs Back-End */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        Front-End vs Back-End
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        Web development has two major arenas. You will touch both eventually,
        but you start where results are visible.
      </Typography>

      {/* Front-End */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        Front-End — where the interface lives
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        If a website were a building, the front-end is everything the visitor
        experiences directly: walls, doors, lighting, furniture, signs, elevator
        buttons. You are crafting what users see, click, read, scroll, and type
        into.
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        It covers:
      </Typography>
      <List sx={{ color: "white", listStyleType: "disc", pl: 4, mb: 2 }}>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>HTML</strong> — the structural skeleton
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>CSS</strong> — the layout, spacing, colours, and visual
          hierarchy
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>JavaScript</strong> — the behaviours, animations, and dynamic
          interactions
        </ListItem>
      </List>

      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        In practice, front-end means thinking about accessibility, responsive
        layouts, typography, component design, and performance. It is not just
        "make it pretty." It is making it usable, clear, and pleasant for actual
        humans who will absolutely close your site the moment something feels
        clumsy.
      </Typography>

      {/* Back-End */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        Back-End — everything the user never sees but always relies on
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        The back-end is plumbing, wiring, water tanks, and generators. Invisible
        until it breaks. It handles:
      </Typography>

      <List sx={{ color: "white", listStyleType: "disc", pl: 4, mb: 2 }}>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>Databases</strong> storing user data, content, auth tokens,
          the works
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>APIs</strong> that shuttle information between systems
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>Application logic</strong> that decides what happens when
          someone logs in, posts data, or buys something
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>Security,</strong> permissions, reliability, and scaling
        </ListItem>
      </List>

      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        If front-end says "Here is your table and menu," back-end says "I know
        who you are, I processed your order, here is your food, and yes, the
        payment went through."
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        Think less glamour, more engineering under pressure. Back-end is where
        bugs have consequences and nobody claps for you unless you fail.
      </Typography>

      {/* Tools worth your attention */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        Tools worth your attention
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        The goal is not to hoard every shiny developer toy. The goal is to get
        productive with the basics, consistently.
      </Typography>

      <List sx={{ color: "white", listStyleType: "disc", pl: 4, mb: 3 }}>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>Command Line</strong> — Faster, cleaner, and ironically less
          frustrating than clicking through folders like a lost civilian. It is
          not romantic; it is efficient.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>Git</strong> — Your time machine. Makes mistakes survivable.
          Anyone building without version control either enjoys chaos or has not
          built anything that matters yet.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>GitHub</strong> — Your portfolio, collaboration space, and
          very public evidence of whether you actually build things or just talk
          about building things.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          <strong>IDE / Code Editor</strong> — Your workstation. Visual Studio
          Code is the practical default: extensions, debugging tools, version
          control integration, browser tools — everything you need without
          trying to reinvent a workspace from scratch. It is not about flair; it
          is about not fighting your own tools.
        </ListItem>
      </List>

      {/* What You'll Learn */}
      <Typography variant="h5" color="error.main" sx={{ mt: 5 }}>
        What You'll Learn
        <hr />
      </Typography>

      {/* HTML Section */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        1. HTML: The "Bones"
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        This is the meaning and structure of a webpage. It's the "what," not the
        "how it looks." You'll learn to stop using{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;div&gt;
        </Box>{" "}
        for everything and start using the right tags for the job.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        <strong>Why?</strong> Clean, "semantic" HTML is professional. It's
        easier for you to maintain, easier for screen readers to understand
        (that's accessibility!), and search engines love it.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        <strong>You'll learn:</strong> How to structure a page with{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;header&gt;
        </Box>
        ,{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;nav&gt;
        </Box>
        ,{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;main&gt;
        </Box>
        , and{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;footer&gt;
        </Box>
        , and how to build a working contact form.
      </Typography>

      {/* CSS Section */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        2. CSS: The "Style"
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        This is the magic that makes your site look amazing. But it's also the
        part where most beginners get stuck. We're going to skip the old,
        painful ways and jump straight to the modern tools.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        <strong>Why?</strong> Because you want to build layouts that don't fall
        apart the second you resize the window.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        <strong>You'll learn:</strong> Typography, spacing, and the two tools
        you must know: Flexbox and Grid. These are your superpowers for building
        any modern layout you see.
      </Typography>

      {/* Toolkit Section */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        Your New Toolkit (Escape "Tutorial Hell")
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        The biggest trap for new developers is "tutorial hell" — watching 50
        hours of videos but not being able to build a simple webpage.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        We're not doing that. Your toolkit is small, focused, and all you need.
      </Typography>

      <Typography
        color="white"
        fontStyle="italic"
        variant="subtitle1"
        sx={{ mt: 2, mb: 1 }}
      >
        <Link
          href="https://developer.mozilla.org/en-US/"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "color 0.3s",
            "&:hover": { color: "#667eea" },
            color: "#ADD8E6",
          }}
        >
          MDN Web Docs: The Dictionary
        </Link>
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        This is the official truth. When you're wondering, "How does this CSS
        property actually work?" or "What's this HTML tag for?" — this is your
        first stop. No exceptions. It's the reference trusted by every senior
        engineer.
      </Typography>

      <Typography
        color="white"
        fontStyle="italic"
        variant="subtitle1"
        sx={{ mt: 2, mb: 1 }}
      >
        <Link
          href="https://www.theodinproject.com"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "color 0.3s",
            "&:hover": { color: "#667eea" },
            color: "#ADD8E6",
          }}
        >
          The Odin Project: The Path
        </Link>
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        This is the "Stop-Watching-Start-Building" curriculum. It's a structured
        path that forces you to build real projects, not just isolated
        exercises. This is how you actually learn.
      </Typography>

      <Typography
        color="white"
        fontStyle="italic"
        variant="subtitle1"
        sx={{ mt: 2, mb: 1 }}
      >
        <Link
          href="https://web.dev"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "color 0.3s",
            "&:hover": { color: "#667eea" },
            color: "#ADD8E6",
          }}
        >
          web.dev: The Pro Standard
        </Link>
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        This is Google's guide to building good websites, not just working ones.
        Once you have the basics down, you'll come here to learn how to make
        your sites fast, accessible to everyone, and professional-grade.
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        <strong>Your workflow:</strong> Use Odin as your main curriculum. Use
        MDN as your reference for everything. Use web.dev to check your work and
        make it better.
      </Typography>

      {/* Path: Skill → Superpower */}
      <Typography
        color="white"
        fontStyle="italic"
        variant="h6"
        sx={{ mt: 3, mb: 2 }}
      >
        Here's the Path: Skill → Superpower
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        Learn{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;h1&gt;
        </Box>
        ,{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;p&gt;
        </Box>
        , and{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;li&gt;
        </Box>
        ...
        <br />
        Then you can build: A clean, structured blog post.
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        Learn{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;img&gt;
        </Box>{" "}
        and{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;a&gt;
        </Box>
        ...
        <br />
        Then you can build: A portfolio page with a gallery.
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        Learn{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;form&gt;
        </Box>
        ,{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;input&gt;
        </Box>
        , and{" "}
        <Box
          component="code"
          sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
        >
          &lt;button&gt;
        </Box>
        ...
        <br />
        Then you can build: A real login or contact form.
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        Learn <strong>Flexbox</strong> & <strong>Grid</strong>...
        <br />
        Then you can build: Any modern landing page layout you see.
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        Learn <strong>Media Queries</strong>...
        <br />
        Then you can build: Sites that look incredible on a phone.
      </Typography>

      {/* Tasks */}
      <Typography variant="h5" color="error.main" sx={{ mt: 5 }}>
        Tasks
        <hr />
      </Typography>

      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        The tasks below are meant to give you motion, not perfection. You
        already have the resources; use them. Search, read docs, break things,
        fix them. That is the point.
      </Typography>

      {/* Task 1 */}
      <Typography color="white" variant="h6" sx={{ mt: 3, mb: 1 }}>
        Task 1: Build a Minimal Webpage (No styling yet)
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Goal:</strong> Create a basic webpage that displays text on
        screen.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Expected outcome:</strong> A page that shows your name, a
        one-sentence intro, and a heading that says "Learning HTML".
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Steps:</strong>
      </Typography>
      <List sx={{ color: "white", listStyleType: "decimal", pl: 3, mb: 2 }}>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Open VS Code.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Create a new folder for the project.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Inside it, create a new file named{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            index.html
          </Box>
          .
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Add the basic HTML structure. (Hint: type{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            !
          </Box>{" "}
          in VS Code and press Enter.)
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Inside the{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            &lt;body&gt;
          </Box>{" "}
          tag, add:
          <List sx={{ pl: 3, listStyleType: "disc", mt: 1 }}>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              A heading (
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                &lt;h1&gt;
              </Box>
              )
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              A paragraph (
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                &lt;p&gt;
              </Box>
              )
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              Your name somewhere on the page
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        <strong>Encouraged:</strong> Search MDN for "HTML headings," "HTML
        paragraphs," and "HTML body tag." Browse until the syntax feels boring.
        Boring means you absorbed it.
      </Typography>

      {/* Task 2 */}
      <Typography color="white" variant="h6" sx={{ mt: 3, mb: 1 }}>
        Task 2: Add Basic CSS Styling
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Goal:</strong> Connect CSS and make the page less like a 1999
        school project.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Expected outcome:</strong> The background colour changes, text
        has padding/spacing, and the heading is clearly larger and styled.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Steps:</strong>
      </Typography>
      <List sx={{ color: "white", listStyleType: "decimal", pl: 3, mb: 2 }}>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          In the same folder, create a file named{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            style.css
          </Box>
          .
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Link this file inside your HTML{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            &lt;head&gt;
          </Box>{" "}
          using{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            &lt;link rel="stylesheet"...&gt;
          </Box>
          .
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Set a background colour for the page.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Change font size and colour for your heading and paragraph.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Use{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            padding
          </Box>{" "}
          or{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            margin
          </Box>{" "}
          to add breathing room around text.
        </ListItem>
      </List>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        <strong>Helpful things to search on MDN:</strong>
        <br />• "how to link CSS file"
        <br />• "CSS background-color"
        <br />• "CSS font-size"
        <br />• "CSS margin vs padding"
        <br />
        <br />
        If it looks slightly less tragic than before, you did it right.
      </Typography>

      {/* Task 3A */}
      <Typography color="white" variant="h6" sx={{ mt: 3, mb: 1 }}>
        Task 3A: Add a Button (no hover yet)
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Goal:</strong> Introduce an interactive element, even if it does
        nothing meaningful yet.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Expected outcome:</strong> A visible button that is pleasant to
        look at.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Steps:</strong>
      </Typography>
      <List sx={{ color: "white", listStyleType: "decimal", pl: 3, mb: 2 }}>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Add a{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            &lt;button&gt;
          </Box>{" "}
          in your HTML under your paragraph.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Style it in{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            style.css
          </Box>
          :
          <List sx={{ pl: 3, listStyleType: "disc", mt: 1 }}>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              Add{" "}
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                padding
              </Box>
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              Use a{" "}
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                border-radius
              </Box>{" "}
              to round corners
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              Change{" "}
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                background
              </Box>{" "}
              and text{" "}
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                color
              </Box>
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              Set a bigger{" "}
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                font-size
              </Box>
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        <strong>Search prompts:</strong>
        <br />• "HTML button element"
        <br />• "CSS button styling basics"
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        <strong>Result expectation:</strong> A button exists and it looks
        intentional.
      </Typography>

      {/* Task 3B */}
      <Typography color="white" variant="h6" sx={{ mt: 3, mb: 1 }}>
        Task 3B: Add a Button Hover Effect
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Goal:</strong> Introduce user feedback with CSS pseudo-classes.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Expected outcome:</strong> When the mouse hovers over the
        button, colours or size change subtly.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 1 }}>
        <strong>Steps:</strong>
      </Typography>
      <List sx={{ color: "white", listStyleType: "decimal", pl: 3, mb: 2 }}>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          In{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            style.css
          </Box>
          , add a{" "}
          <Box
            component="code"
            sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
          >
            button:hover {"{ ... }"}
          </Box>{" "}
          selector.
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0.5 }}>
          Change at least one property on hover:
          <List sx={{ pl: 3, listStyleType: "disc", mt: 1 }}>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                background-color
              </Box>
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                text-color
              </Box>
            </ListItem>
            <ListItem sx={{ display: "list-item", py: 0.25 }}>
              scale slightly with{" "}
              <Box
                component="code"
                sx={{ bgcolor: "#0d1b2a", px: 0.5, borderRadius: 0.5 }}
              >
                transform: scale()
              </Box>
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Typography variant="body1" color="white" sx={{ mb: 2 }}>
        <strong>Search prompts:</strong>
        <br />• "CSS :hover pseudo-class"
        <br />• "CSS transform scale"
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 4 }}>
        If the button reacts when hovered, you nailed it.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        First community event drops soon: A Kahoot quiz goes live on November
        5th. Stay tuned for upcoming tasks and mini-projects that will test your
        skills and commitment.
      </Typography>
    </Box>
  );
}
