# ?? CompraHogar - E-commerce de Materiales de Construcci?n

Una landing page moderna y responsive para un e-commerce especializado en materiales de construcci?n. Desarrollada con HTML5, CSS3 y JavaScript vanilla.

## ? Caracter?sticas

### ? Dise?o Moderno
- **Responsive Design** - Adaptable a dispositivos m?viles y desktop
- **UI/UX Profesional** - Interfaz limpia y atractiva
- **Animaciones Suaves** - Transiciones y efectos CSS modernos
- **Colores Tem?ticos** - Paleta naranja espec?fica para construcci?n

### ? Funcionalidades E-commerce
- **Cat?logo de Productos** - Productos destacados con ratings
- **Categor?as** - Cemento, ladrillos, arena, hierro, herramientas, pintura
- **Carrito de Compras** - Contador din?mico y notificaciones
- **B?squeda** - Barra de b?squeda funcional
- **Filtros por Categor?a** - Navegaci?n intuitiva

### ? Experiencia de Usuario
- **Men? M?vil** - Navegaci?n optimizada para dispositivos m?viles
- **Slider de Testimonios** - Carrusel autom?tico con controles manuales
- **Scroll Suave** - Navegaci?n fluida entre secciones
- **Notificaciones** - Feedback visual para acciones del usuario

### ? Contenido Especializado
- **Productos de Construcci?n** - Cemento, ladrillos, arena, hierro
- **Testimonios Reales** - De constructores, arquitectos y maestros de obra
- **Informaci?n de Contacto** - Datos completos de la empresa
- **Call-to-Actions** - Botones para presupuestos y cat?logo

## ? Instalaci?n y Uso

### Opci?n 1: Descarga Directa
1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ChelabsWeb/compra-hogar.git
   ```

2. **Navega al directorio:**
   ```bash
   cd compra-hogar
   ```

3. **Abre index.html en tu navegador:**
   - Doble click en `index.html`
   - O usa Live Server en VS Code

### Opci?n 2: GitHub Pages
Visita: [https://chelabsweb.github.io/compra-hogar/](https://chelabsweb.github.io/compra-hogar/)

## ? Estructura del Proyecto

```
compra-hogar/
??? index.html          # P?gina principal
??? style.css           # Estilos CSS
??? script.js           # Funcionalidad JavaScript
??? enable-pages.js     # Script para activar GitHub Pages
??? README.md           # Documentaci?n
```

## ?? Tecnolog?as Utilizadas

- **HTML5** - Estructura sem?ntica
- **CSS3** - Estilos modernos con:
  - Flexbox y Grid Layout
  - Custom Properties (Variables CSS)
  - Animaciones y transiciones
  - Media queries para responsive design
- **JavaScript ES6+** - Funcionalidades interactivas:
  - Manipulaci?n del DOM
  - Event listeners
  - Intersection Observer API
  - Local notifications

## ? Paleta de Colores

- **Primary**: `#ea580c` (Naranja construcci?n)
- **Primary Dark**: `#c2410c`
- **Secondary**: `#f97316`
- **Grises**: Del `#f9fafb` al `#111827`

## ? Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## ? Funcionalidades JavaScript

### Slider de Testimonios
```javascript
// Auto-slider cada 4 segundos
setInterval(nextTestimonial, 4000);
```

### Men? M?vil
```javascript
function toggleMobileMenu() {
    // Toggle del men? responsive
}
```

### Carrito de Compras
```javascript
function addToCart(productName, price) {
    // Actualiza contador y muestra notificaci?n
}
```

### Animaciones en Scroll
```javascript
// Intersection Observer para animaciones
const observer = new IntersectionObserver((entries) => {
    // Anima elementos cuando entran en viewport
});
```

## ? Caracter?sticas Destacadas

### Header Completo
- Logo y branding
- Barra de b?squeda
- Navegaci?n principal
- Carrito con contador
- Informaci?n de contacto

### Hero Section
- T?tulo impactante
- Descripci?n del negocio
- Call-to-actions principales
- Gradiente atractivo

### Secciones Principales
1. **Features** - Entrega r?pida, calidad garantizada, mejores precios
2. **Categor?as** - 6 categor?as principales con iconos
3. **Productos** - 4 productos destacados con ratings
4. **Testimonios** - 3 testimonios con slider autom?tico
5. **CTA** - Llamada final a la acci?n
6. **Footer** - Informaci?n completa de contacto

## ? Funcionalidades Pendientes

- [ ] Integraci?n con sistema de pagos
- [ ] Base de datos de productos
- [ ] Sistema de usuarios y login
- [ ] Carrito persistente
- [ ] P?gina de producto individual
- [ ] Sistema de b?squeda avanzada
- [ ] Panel de administraci?n

## ? Optimizaciones SEO

- Meta tags apropiados
- Estructura sem?ntica HTML5
- Alt text en im?genes
- URLs amigables (preparado para)
- Carga r?pida y optimizada

## ? Compatibilidad

- ? Chrome (?ltimas 2 versiones)
- ? Firefox (?ltimas 2 versiones)
- ? Safari (?ltimas 2 versiones)
- ? Edge (?ltimas 2 versiones)
- ? Dispositivos m?viles iOS/Android

## ? Demo en Vivo

**P?gina web:** [https://chelabsweb.github.io/compra-hogar/](https://chelabsweb.github.io/compra-hogar/)

### Para activar GitHub Pages:
1. Ve a **Settings** del repositorio
2. Click en **Pages** en el men? lateral
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, selecciona **main**
5. Click **Save**

## ? Licencia

Este proyecto est? bajo la Licencia MIT - ve el archivo [LICENSE](LICENSE) para m?s detalles.

## ??? Autor

**ChelabsWeb**
- GitHub: [@ChelabsWeb](https://github.com/ChelabsWeb)
- Email: chelabsweb@gmail.com

## ? Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## ? Contacto

?Tienes preguntas o sugerencias? 
- ? Email: chelabsweb@gmail.com
- ? GitHub: [ChelabsWeb](https://github.com/ChelabsWeb)

---

? ?No olvides dar una estrella al repositorio si te fue ?til!