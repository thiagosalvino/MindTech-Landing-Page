import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  // Detecta se estamos em produção verificando a existência da pasta dist
  const distPath = path.resolve(__dirname, "dist");
  const isProd = process.env.NODE_ENV === "production" || fs.existsSync(distPath);

  console.log(`Modo: ${isProd ? "Produção" : "Desenvolvimento"}`);

  if (isProd) {
    // Em produção, servimos os arquivos estáticos da pasta dist
    app.use(express.static(distPath));

    // Rotas de API (se houver)
    app.get("/api/health", (req, res) => {
      res.json({ status: "ok" });
    });

    // Fallback para SPA (essencial para React)
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  } else {
    // Em desenvolvimento, usamos o middleware do Vite
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
  });
}

startServer();
