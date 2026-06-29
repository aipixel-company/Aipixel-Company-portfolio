const http = require("http");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

// List of all static and dynamic paths to prerender (Section 5 and 8.1)
const routes = [
  "/",
  "/aboutus",
  "/contact-us",
  "/services",
  "/services/web-development",
  "/services/mobile-app-development",
  "/services/ai-machine-learning",
  "/services/ui-ux-design",
  "/services/cloud-devops",
  "/services/cybersecurity",
  "/clients",
  "/clients/dtec",
  "/clients/moosa",
  "/clients/bankmusqat",
  "/clients/adventureclub",
  "/clients/arkaan",
  "/clients/larace",
  "/clients/seedlogo",
  "/clients/techgalaxy",
  "/clients/turing",
  "/clients/universalskills",
  "/clients/absher",
  "/clients/airhub",
  "/clients/birdsworld",
  "/clients/halalchef",
  "/clients/royaldelhi",
  "/clients/singaf",
  "/expertise",
  "/expertise/web-development",
  "/expertise/user-interface-design",
  "/expertise/artificial-intelligence",
  "/expertise/devops",
  "/expertise/mobile-app-development",
  "/expertise/blockchain",
  "/expertise/quality-assurance",
  "/expertise/software-testing",
  "/expertise/wordpress",
  "/expertise/fintech",
  "/expertise/application-maintenance",
  "/industries",
  "/industries/logistics",
  "/industries/ecommerce",
  "/industries/fintech",
  "/industries/trading",
  "/industries/tourism",
  "/industries/automotive",
  "/industries/finance",
  "/industries/insurance",
  "/industries/marketplace",
  "/industries/augmented-reality",
  "/industries/education",
  "/industries/food",
  "/blogs",
  "/privacy-policy",
  "/blog/1",
  "/blog/2",
  "/blog/3",
  "/blog/4",
  "/blog/5",
];

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
};

const PORT = 3456;
const DIST_DIR = path.join(__dirname, "../dist");

// Start a lightweight HTTP static file server
const startServer = () => {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      // Clean request URL to match static file path
      const urlPath = req.url.split("?")[0];
      let filePath = path.join(DIST_DIR, urlPath === "/" ? "index.html" : urlPath);

      // Handle client side routing paths (without extension, serve index.html)
      const ext = path.extname(filePath);
      if (!ext) {
        filePath = path.join(DIST_DIR, "index.html");
      }

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
          return;
        }
        const contentType = mimeTypes[ext] || "text/html";
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      });
    });

    server.listen(PORT, () => {
      console.log(`[Static Server] Running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
};

// Main prerender process
const run = async () => {
  console.log("[Prerender] Starting static pre-rendering (SSG)...");

  // Verify build directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`[Prerender] Error: dist/ directory not found. Run "vite build" first.`);
    process.exit(1);
  }

  // Backup original dist/index.html to use as our routing template
  const templatePath = path.join(DIST_DIR, "index.html");
  const templateBackupPath = path.join(DIST_DIR, "index.html.template");
  fs.copyFileSync(templatePath, templateBackupPath);
  console.log("[Prerender] Backed up index.html as template.");

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Set viewport to a desktop resolution
  await page.setViewport({ width: 1200, height: 800 });

  for (const route of routes) {
    console.log(`[Prerender] Rendering route: ${route}`);
    const url = `http://localhost:${PORT}${route}`;

    try {
      // Visit route
      await page.goto(url, { waitUntil: "networkidle0", timeout: 10000 });
      // Extra small wait to ensure all client-side layout effects paint
      await new Promise((r) => setTimeout(r, 600));

      // Get page HTML content (fully serialized DOM including metadata and schemas)
      const content = await page.content();

      // Determine folder & file destination paths
      let targetFile;
      if (route === "/") {
        targetFile = path.join(DIST_DIR, "index.html");
      } else {
        const targetDir = path.join(DIST_DIR, route);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        targetFile = path.join(targetDir, "index.html");
      }

      // Write prerendered HTML file
      fs.writeFileSync(targetFile, content, "utf-8");
      console.log(`[Prerender] Saved static file to: ${targetFile}`);
    } catch (err) {
      console.error(`[Prerender] Failed to render route ${route}:`, err.message);
    }
  }

  console.log("[Prerender] Prerendering finished.");

  // Clean up template backup
  if (fs.existsSync(templateBackupPath)) {
    fs.unlinkSync(templateBackupPath);
    console.log("[Prerender] Removed template backup.");
  }

  // Close browser and server
  await browser.close();
  server.close(() => {
    console.log("[Static Server] Server stopped. Build complete!");
    process.exit(0);
  });
};

run().catch((err) => {
  console.error("[Prerender] Execution error:", err);
  process.exit(1);
});
