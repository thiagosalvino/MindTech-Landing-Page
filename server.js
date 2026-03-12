import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  // A Hostinger pode injetar a porta automaticamente via variável de ambiente
  const PORT = process.env.PORT || 3000;

  if (process.env.NODE_ENV === "production") {
    const distPath = path.resolve(__dirname, "dist");
    if (fs.existsSync(distPath)) {
      console.log("Arquivos no diretório dist:");
      console.log(fs.readdirSync(distPath));
    } else {
      console.error("Diretório dist não encontrado!");
    }
  }

  // Rotas de API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (process.env.NODE_ENV !== "production") {
    // Middleware do Vite para desenvolvimento
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Servir arquivos estáticos em produção (após o npm run build)
    const distPath = path.resolve(__dirname, "dist");
    console.log(`Servindo arquivos estáticos de: ${distPath}`);
    
    // Servir arquivos da raiz do dist (imagens do public)
    app.use(express.static(distPath));
    
    // Rotas explícitas para imagens comuns (fallback de segurança)
    const images = ["logo.png", "catalogo.png", "thiago.png", "ts.png"];
    images.forEach(img => {
      app.get(`/${img}`, (req, res) => {
        const imgPath = path.resolve(distPath, img);
        if (fs.existsSync(imgPath)) {
          res.sendFile(imgPath);
        } else {
          console.error(`Imagem não encontrada no servidor: ${imgPath}`);
          res.status(404).send("Imagem não encontrada");
        }
      });
    });
    
    // Servir especificamente a pasta assets se necessário
    app.use("/assets", express.static(path.join(distPath, "assets")));
    
    // Fallback para index.html (essencial para React/SPA)
    app.get("*", (req, res) => {
      const indexPath = path.resolve(distPath, "index.html");
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error(`Erro ao enviar index.html: ${err.message}`);
          res.status(500).send("Erro interno do servidor");
        }
      });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startServer();
