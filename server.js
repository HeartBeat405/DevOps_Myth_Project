const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file index.html dari root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Menyajikan file statis lainnya, jika ada (misalnya CSS, JS)
app.use(express.static(path.join(__dirname)));

// Menjalankan server di port 5000
app.listen(5000, () => {
  console.log('Server berjalan di port 5000');
});
