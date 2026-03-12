import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  // Resolve o caminho absoluto da pasta dist e public
  const distPath = path.resolve(__dirname, "dist");
  const publicPath = path.resolve(__dirname, "public");
  
  // Verifica se a pasta dist existe (indicador de produção)
  const isProd = fs.existsSync(distPath);

  console.log("--- DEBUG DE INICIALIZAÇÃO ---");
  console.log(`Diretório atual (__dirname): ${__dirname}`);
  console.log(`Caminho dist: ${distPath} (Existe: ${isProd})`);
  console.log(`Caminho public: ${publicPath} (Existe: ${fs.existsSync(publicPath)})`);
  console.log(`Ambiente (NODE_ENV): ${process.env.NODE_ENV}`);
  console.log("------------------------------");

  if (isProd) {
    // Ordem de prioridade para arquivos estáticos
    app.use(express.static(distPath));
    app.use(express.static(publicPath));
    // Fallback para buscar na pasta de assets do código fonte se necessário
    app.use("/src/assets", express.static(path.join(__dirname, "src", "assets")));

    // Rota de saúde para monitoramento
    app.get("/api/health", (req, res) => {
      res.json({ status: "ok", mode: "production" });
    });

    // Fallback para SPA (Single Page Application)
    app.get("*", (req, res) => {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Erro: Pasta 'dist' encontrada, mas 'index.html' não existe. Verifique o build.");
      }
    });
  } else {
    // Modo Desenvolvimento (Vite Middleware)
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`>>> Servidor MindTech rodando em http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("FALHA CRÍTICA AO INICIAR SERVIDOR:", err);
  process.exit(1);
});
