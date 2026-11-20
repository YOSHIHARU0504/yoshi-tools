# Nuestra Historia 2.0 — auditoría y plan de integración

## Objetivo
Renovar la experiencia de Yoshi y Adela con una estética minimalista y sofisticada, conservando la historia, la carta y las 11 fotografías originales. El desarrollo se realiza en una rama aislada y no modifica producción ni Yoshi Fit.

## Repositorios evaluados

| Repositorio | Licencia verificada | Tecnologías / código revisado | Decisión |
|---|---|---|---|
| https://github.com/qzydustin/Love-Letter-Website | MIT | HTML, CSS y JavaScript sin dependencias; configuración separada y animaciones de carta, escritura y elementos gráficos. | Reutilizar patrones de animación y organización; adaptar al diseño sobrio. |
| https://github.com/NBlancs/digital-love-letter | MIT | HTML, CSS y JavaScript; sobre animado, modal, galería y reproductor HTML Audio. | Reutilizar el patrón de sobre/modal y galería. Rehacer el reproductor: los botones anterior/siguiente del original solo reinician la pista. |
| https://github.com/Navaneeth223/timeless-love-anniversary-app | MIT | React, Vite, React Router, Tailwind y Framer Motion; creador, línea de tiempo, recuerdos, exportación/importación JSON y opción Cloudinary. | Tomar ideas de flujo y organización, no migrar el proyecto completo para evitar dependencias y servicios adicionales innecesarios. |
| https://github.com/sachin-saroj/love-interactive-website | No se encontró una licencia explícita en la revisión inicial. | HTML, CSS y JavaScript; timeline, carta, galería y sorpresas. | No copiar código hasta verificar una licencia que permita reutilización. |

## Arquitectura elegida
- Mantener el sitio ligero en HTML, CSS y JavaScript para GitHub Pages.
- Separar contenido y configuración de presentación.
- Conservar las 11 fotos y la carta original.
- Añadir navegación por capítulos, línea de tiempo, galería con descripciones, carta interactiva y detalles sutiles.
- Usar Supabase Auth y Storage privado para las fotografías; servirlas solo después de autenticar y mediante URLs firmadas de corta duración.
- Roles: Yoshi administra; Adela solo consulta.
- No guardar contraseñas ni secretos de Supabase en el repositorio.
- No incluir música comercial protegida por derechos de autor; usar audio propio o con licencia compatible.

## Hallazgo de privacidad que requiere corrección
El repositorio YOSHIHARU0504/yoshi-tools es público. El archivo nuestra-historia/index.html carga las imágenes desde raw.githubusercontent.com, y existen archivos nuestra-historia/photos/photo-01.b64 con los bytes de la fotografía codificados en Base64. Base64 no cifra ni protege imágenes. Por tanto, cualquier persona que pueda acceder al repositorio puede recuperar esas fotos. No se debe considerar privada la galería actual.

Antes de publicar la nueva versión:
1. Migrar las fotos a un bucket privado de Supabase Storage.
2. Aplicar políticas de acceso para los usuarios autenticados y el rol correspondiente.
3. Dejar de servir las fotos desde GitHub.
4. Evaluar la limpieza del historial Git para retirar los archivos sensibles anteriores; borrar el archivo en un commit nuevo no elimina copias del historial.
5. Verificar el acceso con una sesión de Yoshi, una sesión de Adela y una sesión no autenticada.

## Rama de trabajo
feature/nuestra-historia-v2 creada desde main. Esta rama es el espacio de trabajo; no se han modificado archivos de producción.

## Atribución
Al reutilizar fragmentos de los proyectos MIT se conservarán sus avisos de copyright y licencia en el repositorio. Este documento registra las fuentes evaluadas; no implica copiar proyectos completos.
