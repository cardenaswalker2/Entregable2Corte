/**
 * ClinicaApp - Datos Maestros y Estructura de Conocimiento Oficial
 * Fundación Universitaria Tecnológico Comfenalco - Facultad de Ingeniería - Programa de Ingeniería de Sistemas
 * VII Semestre - Proyecto de Aula Interdisciplinar (Segundo Seguimiento, Octubre 2026)
 */

const CLINICA_DATA = {
  proyecto: {
    nombre: "ClinicaApp",
    subtitulo: "Plataforma Integral para la Gestión Veterinaria",
    descripcionLarga: "Plataforma integral e inteligente para la gestión unificada de centros veterinarios en Cartagena, que articula sinérgicamente una arquitectura segura en Spring Boot 3.5 con agente conversacional basado en LLM (Nova Brain vía Groq Cloud), un modelo analítico dimensional con identificación de fuentes de datos bajo la metodología Kimball para Power BI, y un modelo de optimización matemática de Programación Lineal Entera Binaria (PLEB) acoplado a la distancia geodésica de Haversine para la asignación geoespacial de recursos clínicos.",
    institucion: "Fundación Universitaria Tecnológico Comfenalco",
    facultad: "Facultad de Ingeniería",
    programa: "Ingeniería de Sistemas",
    semestre: "VII Semestre",
    periodo: "Octubre 2026",
    ubicacion: "Cartagena de Indias D. T. y C., Colombia",
    githubRepo: "https://github.com/cardenaswalker2/ClinicaApp.git",
    pdfOficialPath: "ClinicaApp_Inf_Metodologico_7mo_FINAL_Oficial.pdf",
    autores: [
      { nombre: "Luis Cárdenas", rol: "Investigador / Desarrollador", iniciales: "LC" },
      { nombre: "Cristóbal Villamil", rol: "Investigador / Desarrollador", iniciales: "CV" },
      { nombre: "Jose Castillo", rol: "Investigador / Desarrollador", iniciales: "JC" },
      { nombre: "Daniel Gutiérrez", rol: "Investigador / Desarrollador", iniciales: "DG" }
    ],
    docentesAsignaturas: [
      {
        asignatura: "Desarrollo Web Avanzado",
        docente: "Ing. Fabio García Ramírez",
        area: "Arquitectura Spring Boot, Integración LLM / Agentes Inteligentes, Seguridad y Persistencia",
        codigo: "DWA"
      },
      {
        asignatura: "Visualización de Datos II",
        docente: "Ing. Walter Alberto Espriella Castellar",
        area: "Identificación de Fuentes, Modelado Dimensional Kimball (Esquema Estrella) y Dashboards en Power BI",
        codigo: "VD II"
      },
      {
        asignatura: "Investigación de Operaciones",
        docente: "Ing. Lucía Margarita Mestre Tapia",
        area: "Planteamiento de Problema Real, Formulación Matemática PLEB y Optimización Geodésica Haversine",
        codigo: "IO"
      }
    ],
    declaracionEticaIA: "En conformidad con las directrices institucionales de la Fundación Universitaria Tecnológico Comfenalco sobre integridad académica, los autores declaran que se emplearon herramientas de Inteligencia Artificial Generativa (Llama 3.3 70B vía Groq Cloud y ChatGPT de OpenAI) exclusivamente como apoyo en tareas de depuración sintáctica de código, asistencia en redacción preliminar y consulta bibliográfica. Todos los análisis conceptuales, diseños de arquitectura, modelos matemáticos, lógica de negocio y validaciones fueron concebidos, auditados y asumidos con responsabilidad plena por los integrantes del equipo de investigación."
  },

  problema: {
    central: "Fragmentación de la información sanitaria animal, deficiente asignación de recursos geográficos y carencia de canales inteligentes para la gestión, el triaje y la toma de decisiones clínicas y directivas en el sector veterinario de Cartagena.",
    pregunta: "¿De qué manera el diseño, desarrollo e integración de una plataforma web avanzada (Spring Boot + LLM), sustentada en un modelo dimensional analítico para la toma de decisiones y un modelo matemático de optimización geoespacial de recursos, permite optimizar la gestión integral, la continuidad de la atención clínica y la satisfacción de usuarios en el ecosistema veterinario?",
    dimensiones: [
      {
        id: "dwa",
        titulo: "Inasistencias y Falta de Canales Inteligentes de Orientación",
        asignatura: "Desarrollo Web Avanzado",
        docente: "Ing. Fabio García Ramírez",
        descripcion: "Los dueños de mascotas carecen de canales automatizados 24/7 para resolver inquietudes frecuentes sobre servicios, preparación previa a consultas y recordatorios de citas. Esto satura las líneas de recepción y genera tasas de inasistencia («no-show») que ocasionan pérdidas económicas en horas profesionales desaprovechadas."
      },
      {
        id: "vd",
        titulo: "Opacidad Analítica y Carencia de Modelos Dimensionales",
        asignatura: "Visualización de Datos II",
        docente: "Ing. Walter Alberto Espriella Castellar",
        descripcion: "Las clínicas veterinarias no consolidan su información transaccional diaria en esquemas analíticos estructurados. La información permanece confinada en bases operacionales (OLTP), impidiendo que los directores médicos identifiquen el origen de datos, tipos de fuentes o la interrelación entre hechos asistenciales y dimensiones para decisiones estratégicas."
      },
      {
        id: "io",
        titulo: "Asignación Ineficiente de la Demanda y Recursos",
        asignatura: "Investigación de Operaciones",
        docente: "Ing. Lucía Margarita Mestre Tapia",
        descripcion: "Ante situaciones de consulta o urgencia, los propietarios realizan búsquedas desordenadas sin asistencia algorítmica que considere restricciones de proximidad geográfica geodésica, disponibilidad operativa de las sedes y radios máximos de desplazamiento, incrementando tiempos de traslado y estrés animal."
      }
    ],
    arbol: {
      efectos: [
        { id: "e1", titulo: "Incremento de morbilidad prevenible", detalle: "Retrasos y extravío de esquemas de vacunación en mascotas por falta de registros clínicos unificados e interoperables." },
        { id: "e2", titulo: "Pérdida financiera sistemática en clínicas", detalle: "Citas desaprovechadas por inasistencias ('no-show') e ineficiencia en el dimensionamiento de insumos veterinarios." },
        { id: "e3", titulo: "Insatisfacción y angustia en propietarios", detalle: "Desorientación ante emergencias nocturnas o traslados innecesarios a sedes inactivas o lejanas." },
        { id: "e4", titulo: "Ausencia de planeación estratégica", detalle: "Carencia de cuadros de mando e indicadores clave (KPIs) fundamentados en evidencia histórica de atenciones." }
      ],
      causasDirectas: [
        { id: "cd1", titulo: "Registros aislados y físicos", detalle: "Uso preponderante de carnets en papel y bases de datos locales sin sincronización en tiempo real." },
        { id: "cd2", titulo: "Inexistencia de asistentes 24/7", detalle: "Falta de agentes conversacionales inteligentes dotados de contexto clínico para triaje y orientación." },
        { id: "cd3", titulo: "Ausencia de modelos matemáticos", detalle: "Inexistencia de algoritmos que guíen al usuario hacia la clínica más cercana, factible y operativa." },
        { id: "cd4", titulo: "Falta de modelos dimensionales", detalle: "Carencia de esquemas estrella catalogados y orientados a KPIs para Business Intelligence." }
      ],
      causasRaiz: [
        { id: "cr1", titulo: "Baja adopción de estándares modernos", detalle: "Uso limitado de APIs seguras, frameworks desacoplados y control de acceso en el gremio veterinario local." },
        { id: "cr2", titulo: "Inexistencia de plataformas unificadas", detalle: "Falta de plataformas que integren transacciones OLTP con capas dimensionales analíticas." },
        { id: "cr3", titulo: "Dependencia de canales informales", detalle: "Uso de WhatsApp y llamadas manuales propensos a saturación, demoras y errores humanos." }
      ]
    }
  },

  objetivos: {
    general: "Desarrollar y evaluar una plataforma web integral e inteligente («ClinicaApp») para la gestión unificada de centros veterinarios en Cartagena, que integre un agente conversacional basado en Modelos de Lenguaje Masivos (LLM) con arquitectura segura en Spring Boot, un modelo analítico dimensional con identificación de fuentes de datos, y un modelo de optimización matemática para la asignación geoespacial de recursos clínicos.",
    especificos: [
      {
        numero: 1,
        fase: "Analizar",
        descripcion: "Analizar los requerimientos funcionales, no funcionales, arquitecturales, fuentes de datos operacionales y patrones de asignación de servicios en clínicas veterinarias, definiendo las especificaciones del agente conversacional, el modelo dimensional y el problema de optimización lineal.",
        evidencias: "Documento SRS, catálogo de fuentes de datos en MongoDB, caracterización de datos sintéticos y matriz PLEB.",
        avance: 100,
        estado: "COMPLETADO",
        pendientesVIII: "Ninguna. Requerimientos interdisciplinares completamente formalizados."
      },
      {
        numero: 2,
        fase: "Diseñar",
        descripcion: "Diseñar la arquitectura de software en capas de Spring Boot integrada con el LLM, el modelo de datos relacional-documental con su diccionario, el esquema dimensional estrella con sus métricas y la formulación matemática de Programación Lineal Entera Binaria (PLEB).",
        evidencias: "Diagrama de arquitectura Spring Boot + LLM (Anexo B), Diccionario de Datos (Anexo C), Esquema Estrella (Anexo D) y Formulación PLEB (Anexo E).",
        avance: 95,
        estado: "COMPLETADO",
        pendientesVIII: "Ajustes menores de particionamiento dimensional si se incorporan sedes fuera de Cartagena."
      },
      {
        numero: 3,
        fase: "Codificar",
        descripcion: "Codificar los componentes backend en Spring Boot (controladores REST, servicios de negocio, seguridad perimetral, integración con LLM, motor matemático de optimización Haversine/PLEB) y las vistas interactivas frontend en Thymeleaf con JavaScript reactivo y CSS adaptable.",
        evidencias: "Controlador NovaAIController, SecurityConfig, asistente_voz.html, OptimizacionServiceImpl y datasets CSV en docs/powerbi_datawarehouse/.",
        avance: 90,
        estado: "COMPLETADO",
        pendientesVIII: "Automatización de pipeline ETL periódico desde MongoDB hacia base relacional OLAP."
      },
      {
        numero: 4,
        fase: "Verificar",
        descripcion: "Verificar la operatividad, seguridad y consistencia del sistema mediante pruebas funcionales de endpoints, validación de esquemas de autorización por roles (RBAC), auditoría de respuestas del agente inteligente, consistencia del modelo dimensional y evaluación de soluciones del modelo de optimización.",
        evidencias: "Logs de inferencia en LogInferenciaRepository, validación de distancias Haversine, pruebas de roles RBAC y cálculo de métricas sobre datos sintéticos.",
        avance: 85,
        estado: "EN DESARROLLO",
        pendientesVIII: "Pruebas de carga y concurrencia multiusuario con Apache JMeter; pruebas formales de usabilidad con usuarios y clínicas reales."
      },
      {
        numero: 5,
        fase: "Implementar",
        descripcion: "Implementar el prototipo funcional de ClinicaApp en un entorno de desarrollo integrado con datos de prueba estructurados y semillas de simulación, preparando la infraestructura técnica para su posterior despliegue y validación experimental en el VIII semestre.",
        evidencias: "ClinicaApp ejecutándose localmente con DataSeeder, interfaz web conectada a Nova Brain y datasets dimensionales de prueba verificados.",
        avance: 80,
        estado: "EN DESARROLLO",
        pendientesVIII: "Despliegue en infraestructura cloud (AWS/Azure) con contenedor Docker y certificación SSL."
      }
    ]
  },

  asignaturas: [
    {
      id: "dwa",
      codigo: "DWA",
      nombre: "Desarrollo Web Avanzado",
      docente: "Ing. Fabio García Ramírez",
      subtitulo: "Arquitectura Spring Boot 3.5, Agente Inteligente Nova Brain, Seguridad y Persistencia",
      icon: "code",
      avance: "95%",
      resumen: "Implementación de una arquitectura robusta desacoplada en capas con Java 21 LTS y Spring Boot 3.5, potenciada con el asistente conversacional inteligente 'Nova Brain' (LLM Llama 3.3 70B vía Groq Cloud + motor de contingencia heurístico local), autenticación federada OAuth2/OIDC, control de acceso RBAC y biometría facial por distancia euclidiana.",
      pilares: [
        {
          titulo: "1. Arquitectura en Capas de Spring Boot 3.5 (Java 21 LTS)",
          items: [
            "Capa de Presentación (Navegador Web): HTML5 renderizado por Thymeleaf, CSS adaptable y JavaScript interactivo (asistente_voz.html / app.js). Peticiones asíncronas vía fetch REST y soporte de Web Speech API (STT / TTS).",
            "Capa Controller (@RestController / @Controller): Mapeos RESTful como `NovaAIController.java` (/api/nova-brain/think), `UsuarioController`, `ClinicaController`, `CitaController` y `OptimizacionController`.",
            "Capa Service (@Service): Lógica de negocio y orquestación contextual. Incluye `NovaAIService`, `UsuarioServiceImpl`, `CitaService` y `OptimizacionServiceImpl`.",
            "Capa Repository (Spring Data MongoDB): Interfaces que extienden `MongoRepository` (`UsuarioRepository`, `MascotaRepository`, `ClinicaRepository`, `CitaRepository`, `LogInferenciaRepository`) con consultas optimizadas vía Aggregation Framework.",
            "Capa Model (@Document): Entidades mapeadas en MongoDB Atlas 7.0 con validaciones de integridad y auditoría.",
            "Manejo Global de Excepciones: Manejador centralizado con `@ControllerAdvice` y DTOs fuertemente tipados (`NovaRequest`, `NovaResponse`)."
          ]
        },
        {
          titulo: "2. Agente Inteligente Nova Brain & RAG en Memoria (Referencia Educhat-notes)",
          items: [
            "Controlador RESTful `NovaAIController.java`: Gestiona el ciclo conversacional, herramientas de triaje clínico y fallback ante contingencias.",
            "Arquitectura RAG ligera en Memoria: Al recibir una consulta, extrae la identidad del usuario desde el contexto de Spring Security, recupera de MongoDB sus mascotas y citas pendientes, e inyecta dinámicamente este contexto en el prompt del sistema antes de invocar al LLM.",
            "Integración Externa con Groq Cloud: Petición HTTP REST al endpoint de Groq Cloud consumiendo el modelo masivo `Llama 3.3 70B Versatile` (gestionado mediante la variable de entorno `${GROQ_API_KEY}`).",
            "Motor de Contingencia Heurístico (`MOTOR_LOGICO`): Ante cortes de conexión a internet o ausencia de API key externa, un motor de reglas regex local responde de inmediato para garantizar disponibilidad ininterrumpida.",
            "Auditoría y Trazabilidad: Persistencia de cada interacción en la colección `logs_inferencia` (`LogInferencia.java` y `LogInferenciaRepository.java`) registrando usuario, prompt, respuesta, tokens consumidos y latencia en ms."
          ]
        },
        {
          titulo: "3. Seguridad Perimetral, RBAC y Biometría Facial",
          items: [
            "Filtros de Seguridad: Configuración en `SecurityConfig.java` mediante `SecurityFilterChain`, filtros de red (`NetworkDeviceFilter`) y filtros de modo mantenimiento (`MaintenanceFilter`).",
            "Autenticación Federada: Integración OAuth2 / OIDC con Google y GitHub como proveedores de identidad.",
            "Control de Acceso Basado en Roles (RBAC): 6 roles diferenciados (`ROLE_ADMIN`, `ROLE_CLINICA`, `ROLE_VETERINARIO`, `ROLE_RECEPCIONISTA`, `ROLE_AUXILIAR`, `ROLE_CLIENTE`).",
            "Criptografía: Encriptación de contraseñas de usuarios mediante algoritmo BCrypt con salting.",
            "Reconocimiento Biométrico Facial: Implementado en `UsuarioServiceImpl.java` mediante cálculo de distancia euclidiana sobre vectores de 128 dimensiones con umbral estricto (< 0.38)."
          ]
        },
        {
          titulo: "4. Vistas Frontend Integradas & Reconocimiento de Voz",
          items: [
            "Widget interactivo en `asistente_voz.html` con estética limpia y moderna.",
            "Integración de Web Speech API para reconocimiento de voz (Speech-to-Text) y sintetizador por audio (Text-to-Speech).",
            "Validaciones reactivas del lado del cliente para evitar envíos vacíos y retroalimentación de estados de carga."
          ]
        }
      ],
      entidadesMongo: [
        { coleccion: "usuarios", campos: "id, email, password, roles, rostroEmbedding", tipo: "String, List<Role>, List<Double>", descripcion: "Identidad del usuario, credenciales BCrypt y embedding facial 128D.", relacion: "PK (_id), Unique (email)" },
        { coleccion: "mascotas", campos: "id, nombre, especie, raza, peso, propietarioId", tipo: "String, Especie, String, Double, String", descripcion: "Perfil biológico del paciente animal vinculado a su dueño.", relacion: "PK (_id), FK (propietarioId -> usuarios)" },
        { coleccion: "clinicas", campos: "id, nombre, latitud, longitud, estado, telefono", tipo: "String, Double, Double, EstadoClinica, String", descripcion: "Centro veterinario afiliado con georreferenciación y estado.", relacion: "PK (_id), Estado in {APROBADA, PENDIENTE}" },
        { coleccion: "citas", campos: "id, mascotaId, clinicaId, fechaHora, estado, servicioId", tipo: "String, String, LocalDateTime, String, String", descripcion: "Reserva de atención clínica con estado de cumplimiento.", relacion: "PK (_id), FK (mascotaId, clinicaId, servicioId)" },
        { coleccion: "servicios", campos: "id, nombre, precio, duracionMinutos, clinicaId", tipo: "String, String, BigDecimal, Integer, String", descripcion: "Portafolio de procedimientos médicos ofertados por sede.", relacion: "PK (_id), FK (clinicaId -> clinicas)" },
        { coleccion: "visitas", campos: "id, citaId, diagnostico, tratamiento, totalFacturado", tipo: "String, String, String, String, BigDecimal", descripcion: "Registro clínico de atención y factura asociada.", relacion: "PK (_id), FK (citaId -> citas)" },
        { coleccion: "logs_inferencia", campos: "id, usuarioId, prompt, respuesta, tokens, latenciaMs", tipo: "String, String, String, Integer, Long", descripcion: "Trazabilidad y auditoría de consultas procesadas por Nova AI.", relacion: "PK (_id), FK (usuarioId -> usuarios)" }
      ]
    },
    {
      id: "vd",
      codigo: "VD II",
      nombre: "Visualización de Datos II",
      docente: "Ing. Walter Alberto Espriella Castellar",
      subtitulo: "Fuentes de Datos, Modelado Dimensional Kimball y Preparación para Power BI",
      icon: "bar-chart",
      avance: "90%",
      resumen: "Caracterización exhaustiva de fuentes operacionales (MongoDB OLTP) y construcción de un repositorio analítico de prueba en CSV (3.469 hechos simulados) bajo la metodología Kimball en Esquema Estrella puro (Star Schema), con formulación de métricas DAX para cuadros de mando interactivos en Power BI.",
      pilares: [
        {
          titulo: "1. Identificación y Clasificación de Fuentes de Datos (Tipos y Acceso)",
          items: [
            "Fuente Operacional (OLTP - MongoDB Atlas 7.0): Almacena transacciones en tiempo real (usuarios, mascotas, citas, servicios, visitas, logs). Acceso vía Spring Data MongoRepository y Aggregation Framework.",
            "Fuentes Sintéticas / De Prueba (Datasets CSV en docs/powerbi_datawarehouse/): Diseñadas expresamente bajo la Ley 1581 de 2012 para validar la arquitectura analítica sin exponer datos confidenciales de usuarios.",
            "Mecanismos de Acceso: Conector nativo de archivos de texto/CSV en Power BI Desktop y librerías de análisis de datos en Python (Pandas)."
          ]
        },
        {
          titulo: "2. Modelo Dimensional en Esquema Estrella (Star Schema)",
          items: [
            "Metodología Ralph Kimball: Selección del esquema estrella por encima de copo de nieve para desnormalizar dimensiones, eliminar JOINs redundantes y maximizar la velocidad de agregación temporal y espacial.",
            "Tabla de Hechos Central: `Fact_Atenciones_Citas` con grano atómico por cita individual atendida (3.469 registros históricos del periodo 2025-2026).",
            "5 Tablas Dimensionales Descriptivas: Dim_Tiempo (730 días), Dim_Clinica (6 sedes en Cartagena), Dim_Servicio (8 procedimientos), Dim_Mascota (150 pacientes), Dim_Veterinario (10 especialistas).",
            "Relaciones estrictas 1:N con integridad referencial y dirección de filtrado unidireccional desde dimensiones hacia la tabla de hechos."
          ]
        },
        {
          titulo: "3. Repositorio de Datasets CSV (docs/powerbi_datawarehouse/)",
          items: [
            "Dim_Tiempo.csv: 730 registros (id_fecha [PK], fecha_completa, anio, trimestre, mes_numero, mes_nombre, dia_mes, dia_semana, es_fin_semana).",
            "Dim_Clinica.csv: 6 sedes en Cartagena (id_clinica [PK], nombre, direccion, barrio, ciudad, telefono, estado_operativo, capacidad_diaria, latitud, longitud).",
            "Dim_Servicio.csv: 8 servicios tipificados (id_servicio [PK], nombre, categoria, precio_base, duracion_min, requiere_veterinario).",
            "Dim_Mascota.csv: 150 animales (id_mascota [PK], nombre, especie, raza, sexo, edad_anios, tamano, peso_kg, condicion_previa).",
            "Dim_Veterinario.csv: 10 médicos (id_veterinario [PK], nombre_completo, especialidad, experiencia_anios, id_clinica).",
            "Fact_Atenciones_Citas.csv: 3.469 atenciones (18 columnas: FKs, canal_agendamiento, estado_cita, metodo_pago, tiempo_espera_min, duracion_atencion_min, montos bruto/descuento/neto, satisfacción 1-5, indicadores binarios asistió/no_show/cancelada)."
          ]
        },
        {
          titulo: "4. Métricas e Indicadores de Negocio Formalizados (DAX para Power BI)",
          items: [
            "Tasa de Asistencia = [Total Citas Asistidas] / [Total Citas Programadas]",
            "Tasa de Inasistencia (No-Show) = [Total Citas No Asistidas] / [Total Citas Programadas]",
            "Ingresos Netos Totales = SUM(Fact_Atenciones_Citas[monto_neto])",
            "Porcentaje de Adopción de Canales Digitales = [Citas por Nova AI + PLEB] / [Total Citas]",
            "Tiempo Promedio de Espera por Clínica = AVERAGE(Fact_Atenciones_Citas[tiempo_espera_min])",
            "Demanda Relativa por Especie (Caninos vs Felinos) y Distribución por Categoría de Servicio."
          ]
        }
      ],
      notaRigor: "Nota de Rigor Académico: Se aclara explícitamente que este modelo dimensional corresponde a un prototipo analítico validado mediante el dataset sintético/de prueba de 3.469 hechos, diseñado específicamente para demostrar la viabilidad analítica y dejar la estructura preparada para su consumo en Power BI sin constituir aún un cuadro de mando productivo conectado a bases de datos en producción real."
    },
    {
      id: "io",
      codigo: "IO",
      nombre: "Investigación de Operaciones",
      docente: "Ing. Lucía Margarita Mestre Tapia",
      subtitulo: "Optimización Geoespacial mediante Programación Lineal Entera Binaria (PLEB) y Haversine",
      icon: "compass",
      avance: "90%",
      resumen: "Formalización matemática e implementación en Java (`OptimizacionServiceImpl.java`) de un modelo de Programación Lineal Entera Binaria (PLEB) acoplado a la fórmula geodésica del Semiverseno (Haversine) para la asignación óptima de la clínica veterinaria factible más cercana al usuario dentro de su radio de cobertura.",
      pilares: [
        {
          titulo: "1. Planteamiento del Problema Real",
          items: [
            "Problema Real: Los propietarios de mascotas en Cartagena enfrentan desorientación espacial en emergencias, acudiendo a clínicas cerradas o distantes con aumento del estrés animal.",
            "Objetivo: Determinar de manera exacta y algorítmica cuál es la clínica veterinaria aprobada más cercana al punto de origen del usuario que cumpla con el radio máximo de traslado D_max."
          ]
        },
        {
          titulo: "2. Formulación Matemática Formal del Modelo PLEB",
          items: [
            "Conjunto: I = {1, 2, ..., n}, conjunto de clínicas veterinarias registradas en ClinicaApp.",
            "Parámetros:",
            "  • (lat_u, lon_u): Coordenadas GPS de latitud y longitud del usuario.",
            "  • (lat_i, lon_i): Coordenadas GPS de la clínica veterinaria i ∈ I.",
            "  • d_i: Distancia geodésica en kilómetros calculada mediante la fórmula del Semiverseno (Haversine).",
            "  • A_i ∈ {0, 1}: Parámetro binario de operatividad (1 si estado = APROBADA, 0 en caso contrario).",
            "  • D_max: Radio máximo de desplazamiento permitido (ej. 15.0 km).",
            "Variable de Decisión: X_i ∈ {0, 1} para todo i ∈ I (1 si la clínica i es seleccionada para atender al usuario, 0 en caso contrario).",
            "Función Objetivo: Min Z = ∑_{i ∈ I} (d_i × X_i) [Minimizar distancia geodésica de traslado].",
            "Restricciones:",
            "  a) Selección Única: ∑_{i ∈ I} X_i = 1 (Asignar exactamente una clínica factible).",
            "  b) Disponibilidad Operativa: X_i ≤ A_i, ∀i ∈ I (Solo clínicas aprobadas y activas).",
            "  c) Cobertura Geográfica Máxima: d_i × X_i ≤ D_max, ∀i ∈ I (No exceder radio límite).",
            "  d) No Negatividad y Binariedad: X_i ∈ {0, 1}, d_i ≥ 0, ∀i ∈ I."
          ]
        },
        {
          titulo: "3. Ecuación Geodésica del Semiverseno (Haversine)",
          items: [
            "Fórmula: d_i = 2 · R · arcsin( √( sin²(Δlat/2) + cos(lat_u) · cos(lat_i) · sin²(Δlon/2) ) )",
            "Radio terrestre medio: R = 6.371 km.",
            "Garantía de distancias: d_i ≥ 0 con corrección de curvatura terrestre sobre coordenadas esféricas exactas."
          ]
        },
        {
          titulo: "4. Implementación y Código en el Software",
          items: [
            "Clase backend: `OptimizacionServiceImpl.java` implementando la interfaz `IOptimizacionService`.",
            "Ruta web: `/usuario/optimizacion-clinicas` conectada con mapas interactivos Leaflet.",
            "Algoritmo: Evalúa la factibilidad de cada clínica i (disponible && cumpleRadio), calcula d_i y selecciona la variable ganadora que minimiza la función objetivo Z."
          ]
        }
      ]
    }
  ],

  cronograma: [
    { fase: "Fase 1: Requerimientos y Base", duracion: "8 semanas", periodo: "VI Semestre (2025-2)", estado: "EJECUTADA (100%)", tipo: "ejecutado", descripcion: "Levantamiento de requerimientos y diseño de arquitectura base transaccional." },
    { fase: "Fase 2: Backend y Persistencia", duracion: "10 semanas", periodo: "VI Semestre (2025-2)", estado: "EJECUTADA (100%)", tipo: "ejecutado", descripcion: "Desarrollo de entidades, repositorios MongoDB y autenticación básica." },
    { fase: "Fase 3: Integración LLM / Nova Brain", duracion: "6 semanas", periodo: "VII Semestre (2026-1)", estado: "EJECUTADA (100%)", tipo: "ejecutado", descripcion: "Diseño de prompts contextuales RAG, NovaAIController, asistente de voz y fallback heurístico." },
    { fase: "Fase 4: Fuentes y Modelo Dimensional", duracion: "6 semanas", periodo: "VII Semestre (2026-1)", estado: "EJECUTADA (100%)", tipo: "ejecutado", descripcion: "Identificación de fuentes, modelado dimensional en estrella, datasets sintéticos y métricas." },
    { fase: "Fase 5: Optimización Geoespacial (IO)", duracion: "5 semanas", periodo: "VII Semestre (2026-1)", estado: "EJECUTADA (100%)", tipo: "ejecutado", descripcion: "Formulación matemática PLEB, codificación de IOptimizacionService y vista interactiva." },
    { fase: "Fase 6: Seguridad Avanzada y Biometría", duracion: "4 semanas", periodo: "VII Semestre (2026-2)", estado: "EJECUTADA (100%)", tipo: "ejecutado", descripcion: "Implementación de login facial por distancia euclidiana, OAuth2/OIDC y filtros de sesión." },
    { fase: "Fase 7: Pruebas de Carga y Concurrencia", duracion: "4 semanas", periodo: "VIII Semestre (2027-1)", estado: "PLANEADA (0%)", tipo: "planeado", descripcion: "Pruebas de estrés de inferencia LLM y concurrencia multiusuario con Apache JMeter." },
    { fase: "Fase 8: Despliegue en Producción Cloud", duracion: "6 semanas", periodo: "VIII Semestre (2027-1)", estado: "PLANEADA (0%)", tipo: "planeado", descripcion: "Aprovisionamiento en infraestructura cloud (AWS/Azure), contenerización Docker y SSL." },
    { fase: "Fase 9: Validación de Campo y Usabilidad", duracion: "6 semanas", periodo: "VIII Semestre (2027-1)", estado: "PLANEADA (0%)", tipo: "planeado", descripcion: "Prueba piloto formal con clínicas veterinarias reales en Cartagena y evaluación SUS." }
  ],

  marcoLegal: [
    { norma: "Constitución Política de Colombia (Art. 15)", resumen: "Garantiza el derecho fundamental al Habeas Data y a la intimidad." },
    { norma: "Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013", resumen: "Régimen General de Protección de Datos Personales. Regula el tratamiento de datos y captura biométrica facial mediante consentimiento informado." },
    { norma: "Ley 1774 de 2016 y Ley 84 de 1989", resumen: "Reconoce a los animales como seres sintientes y promueve herramientas que velen por su salud y bienestar." },
    { norma: "Ley 527 de 1999", resumen: "Reglamenta el comercio electrónico y la validez probatoria de mensajes de datos para facturación y certificados PDF." },
    { norma: "Lineamientos de Ética en IA (CONPES 3975 y MinTIC)", resumen: "Promueve la transparencia, explicabilidad y supervisión humana en el uso de modelos de lenguaje masivo." }
  ],

  antecedentes: [
    {
      tipo: "Internacional",
      titulo: "Evaluation of Large Language Models and Artificial Intelligence for Emergency Triage in Veterinary Clinical Practice",
      fuente: "Veterinary Record Journal (2024). PMC / PubMed Central. https://doi.org/10.1002/vetr.3892",
      hallazgo: "Sensibilidad del 85% al 90% en la detección de casos críticos mediante LLMs supervisados.",
      aporte: "Sustentó el diseño de NovaAIController y directivas de triaje con derivación inmediata a emergencias."
    },
    {
      tipo: "Internacional",
      titulo: "The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling (3.ª ed.)",
      fuente: "Kimball, R., & Ross, M. (2013). John Wiley & Sons.",
      hallazgo: "Estandarización de hechos transaccionales y dimensiones descriptivas en esquema estrella.",
      aporte: "Guió la definición formal del esquema estrella centrado en Fact_Atenciones_Citas y sus 5 dimensiones."
    },
    {
      tipo: "Nacional",
      titulo: "Aplicaciones de la Investigación de Operaciones y Programación Matemática en la Gestión de Cadenas de Suministro y Asignación de Recursos en Salud en Colombia",
      fuente: "Universidad del Rosario & Universidad de los Andes (2023).",
      hallazgo: "La formulación matemática de restricciones de cobertura y proximidad reduce tiempos muertos de traslado y mejora la equidad.",
      aporte: "Proporcionó el marco conceptual para estructurar la función objetivo Min Z = ∑(d_i × X_i) y restricciones en IOptimizacionService."
    },
    {
      tipo: "Nacional",
      titulo: "Desarrollo e Impacto de Soluciones Tecnológicas Móviles para la Interacción entre Tutores y Veterinarios: Caso Medicalvett",
      fuente: "Universidad CES (2024). Revista CES Medicina Veterinaria y Zootecnia.",
      hallazgo: "Reducción sustancial en la tasa de citas olvidadas y mayor adherencia preventiva.",
      aporte: "Validó la relevancia de historiales digitales unificados y recordatorios automáticos."
    },
    {
      tipo: "Regional",
      titulo: "Diagnóstico sobre la Digitalización de Procesos Administrativos en Pequeñas y Medianas Empresas de Servicios en Cartagena D.T. y C.",
      fuente: "Cámara de Comercio de Cartagena & Grupos de Investigación Regionales (2024).",
      hallazgo: "Más del 70% de establecimientos consultados operaban con registros informales y requieren SaaS en la nube.",
      aporte: "Justificó la pertinencia contextual del desarrollo de ClinicaApp adaptado a Cartagena."
    }
  ],

  conclusiones: [
    "Se logró una articulación interdisciplinar armónica y demostrable entre Desarrollo Web Avanzado (Ing. Fabio García Ramírez), Visualización de Datos II (Ing. Walter Alberto Espriella Castellar) e Investigación de Operaciones (Ing. Lucía Margarita Mestre Tapia), consolidando a ClinicaApp como una plataforma integral de gestión, analítica y optimización.",
    "La integración del agente conversacional Nova Brain con LLMs (Llama 3.3 70B vía Groq Cloud) y motor de contingencia heurístico demostró la viabilidad de incorporar IA generativa con contexto clínico dinámico y altos estándares de seguridad perimetral.",
    "La caracterización formal de fuentes de datos y el diseño del modelo dimensional en esquema estrella validaron la estructura analítica requerida para el cálculo de indicadores de gestión preparados para Power BI mediante datasets de prueba de 3.469 hechos.",
    "El modelo PLEB permite seleccionar algorítmicamente la clínica factible de menor distancia bajo restricciones de operatividad y radio máximo mediante la formulación geodésica de Haversine.",
    "Para el VIII semestre se proyecta la ejecución de pruebas de carga con Apache JMeter, contenerización Docker, despliegue cloud con SSL y validación de campo con clínicas de Cartagena."
  ],

  evidencias: [
    {
      id: "ev1",
      titulo: "Diagrama del Árbol del Problema y Estructura Causal",
      asignatura: "Todas",
      asignaturaId: "todas",
      tipo: "Diagrama Metodológico",
      anexo: "Anexo A",
      descripcion: "Estructura causal completa con efectos negativos, problema central de fragmentación y causas directas/indirectas del ecosistema veterinario.",
      badge: "Metodología",
      destacado: true
    },
    {
      id: "ev2",
      titulo: "Diagrama de Arquitectura de 5 Capas Spring Boot 3.5 + LLM (Nova Brain)",
      asignatura: "Desarrollo Web Avanzado",
      asignaturaId: "dwa",
      tipo: "Diagrama de Arquitectura",
      anexo: "Anexo B",
      descripcion: "Capa Cliente (Thymeleaf/JS/Voice), Backend Spring Boot (Security, Controllers, Context RAG, PLEB), MongoDB Atlas 7.0, Proveedor LLM Groq Cloud y Analítica Power BI.",
      badge: "Arquitectura Backend",
      destacado: true
    },
    {
      id: "ev3",
      titulo: "Diccionario de Datos del Modelo E-R (MongoDB Documental)",
      asignatura: "Desarrollo Web Avanzado",
      asignaturaId: "dwa",
      tipo: "Diccionario de Datos",
      anexo: "Anexo C",
      descripcion: "Catálogo de 7 colecciones verificadas: usuarios, mascotas, clinicas, citas, servicios, visitas y logs_inferencia con tipos, restricciones y claves.",
      badge: "Base de Datos OLTP",
      destacado: false
    },
    {
      id: "ev4",
      titulo: "Diagrama del Modelo Dimensional en Esquema Estrella (Star Schema)",
      asignatura: "Visualización de Datos II",
      asignaturaId: "vd",
      tipo: "Modelo Dimensional",
      anexo: "Anexo D",
      descripcion: "Tabla de hechos central Fact_Atenciones_Citas conectada en relación 1:N con Dim_Tiempo, Dim_Clinica, Dim_Servicio, Dim_Mascota y Dim_Veterinario.",
      badge: "Data Warehouse",
      destacado: true
    },
    {
      id: "ev5",
      titulo: "Formulación Matemática PLEB y Código Java de Optimización",
      asignatura: "Investigación de Operaciones",
      asignaturaId: "io",
      tipo: "Modelo Matemático & Código",
      anexo: "Anexo E",
      descripcion: "Formulación Min Z = ∑(d_i × X_i) con ecuación de Haversine y extracto del código fuente Java implementado en OptimizacionServiceImpl.java.",
      badge: "Optimización Binaria",
      destacado: true
    },
    {
      id: "ev6",
      titulo: "Datasets CSV Sintéticos para Power BI (3.469 Hechos)",
      asignatura: "Visualización de Datos II",
      asignaturaId: "vd",
      tipo: "Datasets de Prueba",
      anexo: "Capítulo 4.2.1",
      descripcion: "6 archivos CSV normalizados en docs/powerbi_datawarehouse/ para validación analítica cumpliendo la Ley 1581 de protección de datos personales.",
      badge: "Datasets CSV",
      destacado: false
    },
    {
      id: "ev7",
      titulo: "Seguridad Perimetral, Filtros de Red y Biometría Facial 128D",
      asignatura: "Desarrollo Web Avanzado",
      asignaturaId: "dwa",
      tipo: "Seguridad & IA",
      anexo: "Capítulo 4.1",
      descripcion: "Implementación en SecurityConfig.java, NetworkDeviceFilter, MaintenanceFilter, OAuth2 y algoritmo de distancia euclidiana (< 0.38).",
      badge: "Seguridad RBAC",
      destacado: false
    }
  ],

  clinicasSemilla: [
    { nombre: "Clínica Veterinaria Manga", barrio: "Manga", lat: 10.4082, lon: -75.5361, estado: "APROBADA", telefono: "+57 (605) 660-1234", capacidad: 25 },
    { nombre: "Centro Médico Veterinario Bocagrande", barrio: "Bocagrande", lat: 10.4005, lon: -75.5562, estado: "APROBADA", telefono: "+57 (605) 665-5678", capacidad: 30 },
    { nombre: "Hospital Veterinario Crespo", barrio: "Crespo", lat: 10.4481, lon: -75.5185, estado: "APROBADA", telefono: "+57 (605) 658-9012", capacidad: 20 },
    { nombre: "Clínica Animal Pie de la Popa", barrio: "Pie de la Popa", lat: 10.4193, lon: -75.5312, estado: "APROBADA", telefono: "+57 (605) 669-3456", capacidad: 20 },
    { nombre: "Veterinaria Los Alpes", barrio: "Los Alpes", lat: 10.3951, lon: -75.4983, estado: "APROBADA", telefono: "+57 (605) 661-7890", capacidad: 15 },
    { nombre: "Servicios Veterinarios San Fernando", barrio: "San Fernando", lat: 10.3842, lon: -75.4851, estado: "PENDIENTE", telefono: "+57 (605) 653-2345", capacidad: 12 }
  ]
};
