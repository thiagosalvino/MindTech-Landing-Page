import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para logs detalhados
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// ROTA DE DIAGNÓSTICO: Lista todos os arquivos no servidor
app.get("/api/files", (req, res) => {
  const getFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const name = path.join(dir, file);
      if (fs.statSync(name).isDirectory()) {
        if (!name.includes("node_modules")) getFiles(name, fileList);
      } else {
        fileList.push(name.replace(__dirname, ""));
      }
    });
    return fileList;
  };
  try {
    const files = getFiles(__dirname);
    res.json({ root: __dirname, files });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// SERVIDOR DE IMAGENS MANUAL: Garante que a imagem saia pura do disco
app.get("/assets/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "dist", "assets", filename);
  
  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } else {
    res.status(404).send("Arquivo não encontrado no servidor.");
  }
});

// Caminhos absolutos usando process.cwd() como fallback
const rootDir = process.env.PWD || process.cwd() || __dirname;
const distPath = path.resolve(rootDir, "dist");
const publicPath = path.resolve(rootDir, "public");

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
