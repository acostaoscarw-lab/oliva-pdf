# Avisos de terceros

Oliva PDF incluye en `vendor/` las siguientes bibliotecas, sin modificar. PDF.js se descargó de cdnjs y se verificó contra sus hashes SRI; @cantoo/pdf-lib y @pdf-lib/fontkit se extrajeron de sus paquetes oficiales de npm tras verificar su hash de integridad.

## PDF.js 3.11.174

- Archivos: `vendor/pdf.min.js`, `vendor/pdf.worker.min.js`
- Copyright 2023 Mozilla Foundation
- Licencia: Apache License 2.0 — https://www.apache.org/licenses/LICENSE-2.0
- Proyecto: https://github.com/mozilla/pdf.js

Los archivos conservan su aviso de licencia original en la cabecera.

## @cantoo/pdf-lib 2.11.1 (versión de pdf-lib con soporte de cifrado)

- Archivo: `vendor/pdf-lib.min.js`
- Basado en pdf-lib, Copyright (c) 2019 Andrew Dillon; mantenido por Cantoo
- Licencia: MIT — https://github.com/cantoo-scribe/pdf-lib
- Se usa para abrir PDF protegidos con contraseña, quitar la contraseña y proteger documentos.

## @pdf-lib/fontkit 1.1.1

- Archivo: `vendor/fontkit.umd.min.js`
- Basado en fontkit, Copyright (c) Devon Govett; licencia MIT — https://github.com/Hopding/fontkit
- Se usa para incrustar la fuente original de un texto editado.

## Licencia MIT (pdf-lib y fontkit)

```
MIT License

Copyright (c) 2019 Andrew Dillon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Cargadas bajo demanda desde internet (no incluidas)

- Tesseract.js 5.1.1 (Apache License 2.0), para el reconocimiento de texto (OCR).
- JSZip 3.10.1 (MIT o GPLv3), para descargar varias páginas o archivos en un ZIP.
- Fuentes Archivo e IBM Plex Mono de Google Fonts (SIL Open Font License 1.1).
