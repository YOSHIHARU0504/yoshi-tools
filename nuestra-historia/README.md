# Nuestra Historia · Adela & Yoshi

Sitio estático sin dependencias de build. Está preparado para probarse en GitHub Codespaces y publicarse más adelante cuando la autenticación y el almacenamiento privado estén configurados.

## Probar en GitHub Codespaces

1. Abre la rama `feature/nuestra-historia-v2`:
   https://github.com/YOSHIHARU0504/yoshi-tools/tree/feature/nuestra-historia-v2
2. Pulsa **Code → Codespaces → Create codespace on feature/nuestra-historia-v2**.
3. En la terminal del Codespace ejecuta:

   ```bash
   cd nuestra-historia
   python3 -m http.server 8000
   ```

4. Abre la pestaña **Ports**, busca el puerto **8000** y pulsa **Open in Browser**.

No hace falta instalar Node, npm ni paquetes. Para detener el servidor, vuelve a la terminal y pulsa Ctrl+C.

## Qué probar

- Navegación entre Historia, Recuerdos, Familia y Carta.
- Diseño adaptable reduciendo el ancho de la vista del navegador.
- Apertura y cierre de la carta.
- Aparición de las once tarjetas del álbum.
- Navegación por teclado y opción de movimiento reducido del sistema.

## Privacidad: estado actual

- La galería de esta versión no descarga las imágenes desde GitHub.
- Las once tarjetas son marcadores protegidos hasta conectar Supabase Storage privado y autenticación.
- El repositorio histórico todavía contiene las fotografías antiguas codificadas en Base64. Base64 no es cifrado. Eliminar archivos en un commit nuevo no elimina versiones antiguas del historial.
- No publicar ni considerar privada la página hasta migrar las imágenes a un bucket privado, configurar políticas de Storage/Auth y revisar el historial Git.
- No introducir claves secretas de Supabase en HTML, JavaScript ni en el repositorio.

## Siguiente integración

Conectar Supabase Auth y Storage privado. Tras autenticar al usuario, la capa de acceso podrá establecer `window.NUESTRA_HISTORIA_PRIVATE_PHOTOS` con una lista de objetos `{ url, alt, caption }` que contengan URLs firmadas de corta duración. El rol administrador podrá editar; el rol lector solo podrá consultar.

## Archivos

- `index.html`: estructura y contenido de la historia y carta original.
- `style.css`: diseño editorial minimalista y responsive.
- `app.js`: interacciones accesibles y galería protegida.
- `REFERENCIAS.md`: auditoría de repositorios y licencias.
