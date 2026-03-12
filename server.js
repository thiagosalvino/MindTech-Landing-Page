import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Caminhos absolutos
const distPath = path.join(__dirname, "dist");
const publicPath = path.join(__dirname, "public");

// Middleware para logs (ajuda a debugar no painel da Hostinger)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Rota de teste direto para a imagem
app.get("/debug-logo", (req, res) => {
  const logoPath = path.join(publicPath, "logo.png");
  if (fs.existsSync(logoPath)) {
    res.setHeader("Content-Type", "image/png");
    res.sendFile(logoPath);
  } else {
    res.status(404).send("Logo não encontrado no caminho: " + logoPath);
  }
});

// Configuração de arquivos estáticos com headers explícitos
const staticOptions = {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".png")) {
      res.setHeader("Content-Type", "image/png");
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
};

// 1. Tenta servir da pasta 'dist' (arquivos do build)
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, staticOptions));
}

// 2. Tenta servir da pasta 'public' (arquivos originais)
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath, staticOptions));
}

// Rota de saúde
app.get("/api/health", (req, res) => {
  res.send("OK");
});

// Fallback para SPA (React)
app.get("*", (req, res) => {
  const indexPath = path.join(distPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Site em manutenção ou build não encontrado.");
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
