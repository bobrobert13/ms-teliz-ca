# INFORME TÉCNICO Y COMERCIAL

## Multiservicios Teliz - Sitio Web E-commerce

---

## 1. CONTENIDO ACTUAL DEL SITIO

### Páginas Implementadas (4)

| Página | Propósito |
|--------|-----------|
| `index.html` | Landing page con botón "Ir a DEMO" |
| `ecommerce-home.html` | Home principal - navegación, productos destacados, categorías |
| `catalog.html` | Catálogo completo con filtros y búsqueda |
| `product-detail.html` | Detalle individual de producto |
| `presupuesto.html` | Carrito de presupuesto con envío por WhatsApp |

### Funcionalidades Implementadas

**Flujo de Navegación:**
```
index.html → ecommerce-home.html → catalog.html → product-detail.html → presupuesto.html
```

**Flujo de Presupuesto (Carrito):**
```
Seleccionar producto → Elegir cantidad → Agregar al presupuesto → Revisar presupuesto → Enviar por WhatsApp
```

**Flujo de Contacto:**
```
WhatsApp flotante (todas las páginas) → Abre chat directo
Sección "¿No encontraste lo que buscabas?" → WhatsApp con mensaje cordial
Detalle de producto → "Consultar por WhatsApp" → Mensaje preformateado detallado
```

---

## 2. ELEMENTOS GRÁFICOS

### Logo
- **Logo suministrado:** `https://i.ibb.co/d4NY7WDd/image.png`
- **Nombre:** Multiservicios Teliz
- **Tagline:** Limpieza y Oficina

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Navy | `#1a365d` | Fondo principal, header, footer |
| Mustard | `#f6ad55` | Acentos, CTAs, elementos destacados |
| White | `#ffffff` | Textos sobre fondos oscuros |
| Green (WhatsApp) | `#25d366` | Botón flotante de WhatsApp |
| Gray-300 | `#d1d5db` | Textos secundarios |

### Tipografía
- Sistema de fuentes estándar (Tailwind defaults)
- Texto en mayúsculas para títulos principales
- Peso: Bold para headings, Medium para body

---

## 3. FLUJOS CORE IMPLEMENTADOS

### Flujo de E-commerce (Versión Actual)

```
┌─────────────────────────────────────────────────────────────┐
│  VISITANTE                                                   │
├─────────────────────────────────────────────────────────────┤
│  1. Entra al home → Ve productos destacados                  │
│  2. Explora catálogo → Filtra por categoría/búsqueda       │
│  3. Ve detalle de producto → Consulta precio específico     │
│  4. Agrega al presupuesto → Selecciona cantidad             │
│  5. Revisa presupuesto → Ve lista de productos seleccionados│
│  6. Envía por WhatsApp → Recibe cotización en su móvil      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  NEGOCIO (Manual)                                           │
├─────────────────────────────────────────────────────────────┤
│  Recibe mensaje WhatsApp → Confirma disponibilidad           │
│  Calcula precio final → Envía propuesta al cliente          │
└─────────────────────────────────────────────────────────────┘
```

### Flujo de WhatsApp Detallado

| Punto de Contacto | Mensaje Enviado |
|------------------|----------------|
| Botón flotante | "Hola, me interesa un producto. ¿Podrían cotizarme?" |
| Detalle producto | Nombre + Precio + Categoría + Descripción + Especificaciones |
| Sección "¿No encontraste?" | "¡Con gusto te atenderemos!" |
| Presupuesto | Lista completa de productos con cantidades y totales |

---

## 4. SISTEMA ACTUAL VS LO NECESARIO

### Lo Que Existe (Sitio Estático Actual)

| Componente | Estado |
|------------|--------|
| Catálogo de productos | **Estático** - hardcoded en HTML |
| Categorías | 3 fijas (Limpieza, Oficina, Higiene) |
| Subcategorías | Predefinidas |
| Precios | Fijos en USD |
| Imágenes | URLs externas (Unsplash) |
| Presupuesto | Solo funciona con productos predefinidos |
| WhatsApp | Integración básica |

### Lo Que Falta (Sistema de Administración)

| Módulo | Descripción |
|--------|-------------|
| **CMS Catálogo** | Gestor de contenido para administrar productos |
| **Gestión de Categorías** | Crear, editar, eliminar categorías y subcategorías |
| **Fichas de Producto** | Código, nombre, descripción, especificaciones, imagenes |
| **Gestión de Precios** | Precio base, precios por cantidad (mayor) |
| **Descuentos** | Por volumen, por categoría, activos/inactivos |
| **Formato WhatsApp** | Generación de mensaje para compartir producto |
| **Carga de Imágenes** | Gestión de galería de productos |
| **Tasa de Cambio** | Integración con fuente de tasa USD/VES |
| **Inventario** | Formato exportable para control de stock |

---

## 5. BENEFICIOS PARA EL CLIENTE SEGÚN FLUJOS PLANTEADOS

### Según Flujo de Presupuesto
- **El cliente recibe consultas completas** - El mensaje de WhatsApp incluye todos los datos necesarios (producto, cantidad, precio) sin ambigüedad
- **Reducción de tiempo** - No necesita transcribir información manualmente
- **Historial de consultas** - Queda registro en WhatsApp de lo que el cliente pidió

### Según Flujo de Catálogo Online
- **Exposición 24/7** - Los productos están disponibles siempre sin depender de atención telefónica
- **Catálogo visual** - El cliente puede ver imágenes y descripciones antes de consultar
- **Filtros eficientes** - Búsqueda por categoría facilita encontrar productos

### Según Flujo de Presupuesto con WhatsApp
- **Contacto directo** - El cliente interactúa via WhatsApp (canal que ya usa)
- **Cotización inmediata** - El negocio recibe toda la info para responder rápido
- **Escalabilidad** - Permite manejar más consultas sin incrementar staff

---

## 6. ANÁLISIS DE COSTOS

### Fase 1: Sitio Web Actual (Completado)

| Ítem | Estado | Valor |
|------|--------|-------|
| Desarrollo sitio web estático | ✅ Completado | Incluido |
| Despliegue Vercel | ✅ Implementado | Incluido |
| Integración WhatsApp | ✅ Implementado | Incluido |
| Mapa de ubicación | ✅ Implementado | Incluido |

### Fase 2: Sistema de Administración (CMS) - **PENDIENTE**

| Módulo | Complejidad | Prioridad |
|--------|-------------|-----------|
| Panel admin básico | Media | Alta |
| CRUD de productos | Alta | Alta |
| CRUD de categorías | Media | Alta |
| Gestión de precios y descuentos | Alta | Alta |
| Carga de imágenes | Alta | Alta |
| Integración tasa de cambio | Media | Media |
| Formato de exportación/inventario | Baja | Media |
| Control de stock | Media | Baja |

---

## 7. PREGUNTAS ABIERTAS AL CLIENTE

### 7.1 Sistema de Descuentos por Volumen

- ¿Se aplicará descuento cuando el cliente compre al mayor?
- ¿Cuál es la cantidad mínima para precio mayorista?
- ¿El descuento es porcentual (% off) o precio fijo especial?
- ¿Aplica solo a ciertos productos o a toda la compra?

### 7.2 Integración de Tasa de Cambio

- ¿Desde qué fuente deben tomarse las tasas? (Bancos, páginas financieras, API específica)
- ¿Se requiere actualización manual o automática?
- ¿Los precios se muestran en USD, VES o ambas?
- ¿La conversión afecta también al mensaje de WhatsApp?

### 7.3 Formato de Datos para Inventario

- ¿Qué campos requiere para cada producto?
  - Código interno
  - Código de barras
  - Nombre comercial
  - Descripción
  - Categoría/Subcategoría
  - Proveedor
  - Stock actual
  - Precio compra
  - Precio venta
  - Otros: _______________
- ¿Necesita formato de exportación para su sistema actual?

### 7.4 Metodología de Carga de Productos

**OPCIÓN A: Carga masiva por Excel**
- Cliente proporciona archivo Excel con lista de productos
- Se importan datos básicos automáticamente
- Imágenes se cargan manualmente después

**OPCIÓN B: Carga uno a uno desde panel admin**
- Acceso directo al CMS
- Creación manual de cada ficha de producto
- Carga individual de imágenes

**OPCIÓN C: Híbrido (Recomendado)**
- Carga inicial por Excel (datos)
- Completación y enriquecimiento manual
- Carga de imágenes posterior

### 7.5 Control de Inventario/Stock

- ¿Se requiere control de stock en el sistema actual?
  - Sí, para todo el catálogo
  - Sí, pero solo para productos bajo pedido
  - No, solo se confirma disponibilidad por WhatsApp
- ¿El stock presupuestado debe descontarse automáticamente?
- ¿Se necesitan alertas de stock mínimo?
- ¿Debe haber historial de movimientos de inventario?

---

## 8. RESUMEN EJECUTIVO

| Aspecto | Estado Actual | Estado Deseado |
|---------|--------------|----------------|
| Catálogo | Estático (hardcoded) | Dinámico (CMS) |
| Gestión productos | No disponible | Panel administrativo |
| Categorías | Fijas | Editables |
| Precios | Fijos USD | Variables + descuentos |
| Imágenes | URLs externas | Carga propia |
| Tasa cambio | Sin integración | Actualización automática |
| Inventario | No | Formato exportable |
| Stock | Sin control | Opcional por WhatsApp |

---

## PRÓXIMOS PASOS SUGERIDOS

1. **Obtener respuestas del cliente** a las 5 preguntas abiertas
2. **Diseñar arquitectura del CMS** según respuestas
3. **Presupuestar Fase 2** (Sistema de Administración)
4. **Implementar piloto** con 10-20 productos para validar flujos
5. **Capacitar al cliente** en uso del panel administrativo

---

*Documento generado para Multiservicios Teliz*
*Fecha: Mayo 2026*