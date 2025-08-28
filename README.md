# 🚀 Portafolio de Dashboards Power BI - Nixon López

Un portafolio profesional y elegante para mostrar proyectos de Power BI con animaciones modernas y diseño responsive.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con gradientes y efectos de glassmorphism
- **⚡ Animaciones Suaves**: Transiciones fluidas y efectos de hover profesionales
- **📱 Responsive**: Optimizado para todos los dispositivos
- **🎯 Navegación Intuitiva**: Scroll suave y transiciones entre secciones
- **🔗 Integración Power BI**: Enlaces directos a dashboards para visualización
- **🎪 Iconos Flotantes**: Elementos visuales dinámicos que solo aparecen en la sección principal

## 🛠️ Configuración de URLs de Power BI

### Para Visualización Directa (Recomendado)

Para que los usuarios puedan ver tus dashboards directamente sin acceso de edición, usa este formato:

```javascript
// En script.js, línea 4-8
const dashboardUrls = {
    'dashboard1': 'https://app.powerbi.com/view?r=eyJrIjoiTUJERF9JRF9BUVVJ&embed=true&ctid=TU_TENANT_ID',
    'dashboard2': 'https://app.powerbi.com/view?r=eyJrIjoiTUJERF9JRF9BUVVJ&embed=true&ctid=TU_TENANT_ID', 
    'dashboard3': 'https://app.powerbi.com/view?r=eyJrIjoiTUJERF9JRF9BUVVJ&embed=true&ctid=TU_TENANT_ID'
};
```

### Cómo Obtener las URLs Correctas:

1. **Abrir tu dashboard en Power BI Desktop**
2. **Publicar** el dashboard a Power BI Service
3. **Ir a Power BI Service** y abrir el dashboard
4. **Hacer clic en "Compartir"** → "Obtener un vínculo"
5. **Seleccionar "Cualquier persona con el vínculo puede ver"**
6. **Copiar la URL** generada
7. **Reemplazar** en el código JavaScript

### URLs Actuales Configuradas:

- **Super Fresco**: `https://app.powerbi.com/links/czoGV3Oy9g?ctid=d8e3bd44-0bba-426b-952d-ada7bb17393c&pbi_source=linkShare` ✅ **ACTIVO**
- **Nixon Tours**: En desarrollo 🚧
- **Sistema de Calificaciones**: En desarrollo 🚧

### Configuración Actual en script.js:

```javascript
const dashboardUrls = {
    'dashboard1': 'https://app.powerbi.com/links/czoGV3Oy9g?ctid=d8e3bd44-0bba-426b-952d-ada7bb17393c&pbi_source=linkShare',
    'dashboard2': null, // En desarrollo
    'dashboard3': null  // En desarrollo
};
```

### Parámetros Importantes:

- `embed=true`: Permite visualización embebida
- `ctid=`: Tu Tenant ID de Power BI
- `experience=power-bi`: Experiencia de visualización optimizada

## 📁 Estructura del Proyecto

```
Power BI Project/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación
```

## 🎨 Personalización

### Colores Principales:
- **Azul Cian**: `#00d4ff`
- **Azul Profundo**: `#0099cc`
- **Azul Oscuro**: `#0066ff`
- **Fondo**: `#0a0a0a`

### Fuentes:
- **Títulos**: Fira Code (monospace)
- **Texto**: Inter (sans-serif)

### Animaciones:
- **Transiciones**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Duración**: 0.6s - 0.8s
- **Efectos**: Fade, Scale, Transform

## 🚀 Uso

1. **Configurar URLs** de Power BI en `script.js`
2. **Personalizar contenido** en `index.html`
3. **Ajustar estilos** en `styles.css` si es necesario
4. **Subir a hosting** (GitHub Pages, Netlify, etc.)

## 📱 Responsive Design

El portafolio se adapta automáticamente a:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Gradientes
- **JavaScript**: ES6+, IntersectionObserver, Promises
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías

## 📝 Notas Importantes

- **Iconos Flotantes**: Solo aparecen en la sección hero para no distraer
- **Transiciones Suaves**: Scroll behavior nativo para mejor rendimiento
- **Optimización**: Partículas reducidas para mejor performance
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 🎯 Características Destacadas

### Navegación Profesional:
- **Scroll suave** entre secciones
- **Transiciones elegantes** con cubic-bezier
- **Indicadores visuales** de progreso
- **Efectos de profundidad** con transformaciones

### Experiencia de Usuario:
- **Cursor personalizado** con efectos de hover
- **Notificaciones elegantes** para feedback
- **Animaciones coordinadas** entre elementos
- **Carga progresiva** de contenido

### Integración Power BI:
- **Enlaces directos** a dashboards
- **Modo de visualización** sin acceso de edición
- **Apertura en nueva pestaña** para mejor UX
- **Fallback** para dashboards en desarrollo

---

**Desarrollado con ❤️ por Nixon López - IT Teacher**
