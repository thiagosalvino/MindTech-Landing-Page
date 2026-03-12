import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  const root = process.cwd();
  
  // Caminhos importantes
  const distPath = path.join(root, "dist");
  const publicPath = path.join(root, "public");
  
  // Detecta se estamos em produção (se a pasta dist existe)
  const isProd = fs.existsSync(distPath);

  console.log(`Ambiente: ${isProd ? "Produção" : "Desenvolvimento"}`);

  if (isProd) {
    // 1. Servir arquivos da pasta dist (resultado do build)
    app.use(express.static(distPath));
    
    // 2. Reserva: Servir arquivos da pasta public (caso o build não tenha movido algo)
    app.use(express.static(publicPath));

    // Rotas de API (se houver)
    app.get("/api/health", (req, res) => {
      res.json({ status: "ok" });
    });

    // Fallback para SPA (essencial para React)
    app.get("*", (req, res) => {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Build não encontrado. Verifique se o comando 'npm run build' foi executado.");
      }
    });
  } else {
    // Modo Desenvolvimento
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Erro ao iniciar o servidor:", err);
  process.exit(1);
});
