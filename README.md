# FM T&T Associated Group — Angular MVP

Landing page responsive para internet rural y servicios tecnológicos, con catálogo de productos, planes por zona y panel de administración de demostración.

## Requisitos

- Node.js 22.12+ (compatible con Angular 20).
- npm.

## Ejecutar en desarrollo

```bash
npm install
npm start
```

Visita `http://localhost:4200`.

## Compilar

```bash
npm run build
```

## Estructura

```text
public/
  images/
    brand/       # Logo oficial
    hero/        # Fondos del hero (3 imágenes)
    products/    # Fotos del catálogo
src/app/
  core/
    models/      # Interfaces TypeScript
    services/    # Datos iniciales y persistencia local
  shared/components/
    header/
    footer/
  features/
    home/        # Hero, nosotros, cobertura y proyectos
    plans/       # Planes y diálogo de solicitud
    catalog/     # Catálogo de productos
    contact/     # Canales de contacto
    admin/       # Panel local de edición
```

## Reemplazar imágenes

Todas las imágenes se sirven desde `public/` y se referencian con rutas que empiezan por `/images/...`.

- **Logo:** guarda el logo como `public/images/brand/logo.png`. El lugar está marcado explícitamente en `src/app/shared/components/header/header.component.html`.
- **Fondos del hero:** reemplaza `slides` en `src/app/features/home/components/hero/hero.component.ts`. Rutas sugeridas:
  - `/images/hero/internet-rural-01.jpg`
  - `/images/hero/internet-rural-02.jpg`
  - `/images/hero/internet-rural-03.jpg`
- **Productos:** las rutas iniciales están en `src/app/core/services/site-data.service.ts`. Coloca fotos en `public/images/products/`:
  - `camara-seguridad.jpg`
  - `antena-ubiquiti.jpg`
  - `redes-datos.jpg`
  - `redes-electricas.jpg`
  - `domotica.jpg`
- **Mapa:** cambia el atributo `src` del iframe en `src/app/features/home/home.component.html` por la URL de inserción real de Google Maps.
- **Tarjetas de soluciones:** las clases `.project-image-01`, `.project-image-02` y `.project-image-03` de `projects.component.css` tienen fondos ilustrativos CSS. Puedes reemplazarlos por `background-image: url('/images/solutions/nombre.jpg')`.

## Panel de administración MVP

Abre `/admin`. Contraseña inicial de demostración: `FMAdmin2026!`.

El panel permite editar zonas y precios de planes, añadir/quitar ofertas y crear/editar/eliminar productos. Los datos se guardan en `localStorage` del navegador y se reflejan en la landing al volver a cargarla.

**No es un panel seguro para producción:** la clave se encuentra en el código cliente y no hay backend, autenticación real, permisos ni base de datos. Para producción se requiere API/backend con autenticación y persistencia real. `localStorage` solo persiste en el navegador actual; no sincroniza cambios entre clientes.

## Flujo de planes

El diálogo solicita nombre, teléfono y ubicación y muestra un mensaje de confirmación de demostración. No procesa pagos ni registra una orden en el servidor, tal como corresponde a un MVP sin backend.

## SEO y accesibilidad

- `lang="es"`, title, description, Open Graph y theme color.
- Etiquetas semánticas, textos alternativos y navegación con enlaces internos.
- Carga diferida para imágenes del catálogo.
- Diseño responsive con CSS separado por componente y respeto por `prefers-reduced-motion`.

## Datos que deben confirmarse antes de publicar

- Logo e imágenes oficiales.
- Correo real de la empresa.
- URL real de Telegram si la empresa lo utiliza.
- URL de inserción de Google Maps.
- Tarifas y condiciones actualizadas con el cliente.
