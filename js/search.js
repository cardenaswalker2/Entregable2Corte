/**
 * ClinicaApp - Academic Global Search & Quick Index
 */

let searchIndex = [];

function buildSearchIndex() {
  searchIndex = [
    // Asignaturas y Docentes
    { title: "Desarrollo Web Avanzado (Ing. Fabio García Ramírez)", section: "asignaturas", subject: "DWA", snippet: "Arquitectura Spring Boot 3.5, Java 21, Nova Brain LLM, Spring Security, RBAC, Biometría Facial 128D.", anchor: "#asignaturas" },
    { title: "Visualización de Datos II (Ing. Walter Alberto Espriella Castellar)", section: "asignaturas", subject: "VD II", snippet: "Fuentes MongoDB y CSV sintéticos, Data Warehouse, Esquema Estrella Kimball, Métricas DAX, Power BI.", anchor: "#asignaturas" },
    { title: "Investigación de Operaciones (Ing. Lucía Margarita Mestre Tapia)", section: "asignaturas", subject: "IO", snippet: "Optimización geoespacial, Programación Lineal Entera Binaria (PLEB), Distancia Haversine, OptimizacionServiceImpl.", anchor: "#asignaturas" },

    // Conceptos Clave
    { title: "Nova Brain & LLM (Llama 3.3 70B)", section: "tecnologias", subject: "DWA", snippet: "Agente conversacional inteligente integrado vía Groq Cloud con prompts contextuales RAG y motor de contingencia MOTOR_LOGICO.", anchor: "#asignaturas" },
    { title: "Modelo PLEB (Programación Lineal Entera Binaria)", section: "matematica", subject: "IO", snippet: "Min Z = ∑(d_i × X_i) con restricciones de selección única, operatividad y cobertura máxima D_max.", anchor: "#asignaturas" },
    { title: "Fórmula del Semiverseno (Haversine)", section: "matematica", subject: "IO", snippet: "Cálculo trigonométrico geodésico sobre coordenadas GPS con corrección de curvatura terrestre (R=6371km).", anchor: "#asignaturas" },
    { title: "Modelo Dimensional en Esquema Estrella", section: "analitica", subject: "VD II", snippet: "Tabla central Fact_Atenciones_Citas vinculada en relación 1:N con 5 dimensiones descriptivas.", anchor: "#asignaturas" },
    { title: "Data Warehouse & Datasets CSV", section: "datos", subject: "VD II", snippet: "6 archivos tabulares en docs/powerbi_datawarehouse/ con 3.469 hechos simulados conforme a Ley 1581.", anchor: "#asignaturas" },
    { title: "Seguridad RBAC y Biometría Facial 128D", section: "seguridad", subject: "DWA", snippet: "Filtros de red, OAuth2/OIDC, 6 roles de usuario y comparación biométrica por distancia euclidiana (< 0.38).", anchor: "#asignaturas" },
    { title: "MongoDB Atlas & Modelo E-R Documental", section: "persistencia", subject: "DWA / VD II", snippet: "Colecciones operacionales: usuarios, mascotas, clinicas, citas, servicios, visitas y logs_inferencia.", anchor: "#asignaturas" },
    { title: "Árbol del Problema y Causas", section: "metodologia", subject: "Metodología", snippet: "Estructura causal: fragmentación de información, saturación de canales y carencia de optimización.", anchor: "#problema" },
    { title: "Matriz de Trazabilidad y Avance", section: "gestion", subject: "Gestión", snippet: "Cumplimiento auditado por objetivo (100%, 95%, 90%, 85%, 80%) y proyección a VIII semestre.", anchor: "#trazabilidad" },
    { title: "Informe Metodológico Oficial (PDF)", section: "documentacion", subject: "Documentación", snippet: "Descarga y visualización directa del documento PDF oficial del segundo seguimiento de proyecto de aula.", anchor: "#documentacion" },
    { title: "Equipo de Investigación & Docentes", section: "equipo", subject: "Institucional", snippet: "Investigadores Luis Cárdenas, Cristóbal Villamil, Jose Castillo, Daniel Gutiérrez y los 3 docentes evaluadores.", anchor: "#equipo" }
  ];
}

function openSearchModal() {
  const modal = document.getElementById('searchModalBackdrop');
  const input = document.getElementById('searchGlobalInput');
  if (!modal || !input) return;

  modal.classList.add('open');
  input.value = '';
  input.focus();
  renderSearchResults('');
}

function closeSearchModal() {
  const modal = document.getElementById('searchModalBackdrop');
  if (modal) {
    modal.classList.remove('open');
  }
}

function renderSearchResults(query) {
  const container = document.getElementById('searchResultsContainer');
  if (!container) return;

  const cleanQuery = query.toLowerCase().trim();
  const results = cleanQuery === '' 
    ? searchIndex.slice(0, 5) // Mostrar sugerencias iniciales
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(cleanQuery) ||
        item.snippet.toLowerCase().includes(cleanQuery) ||
        item.subject.toLowerCase().includes(cleanQuery)
      );

  if (results.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
        No se encontraron resultados para "<strong>${escapeHtml(query)}</strong>"
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(item => `
    <div class="search-item" onclick="selectSearchResult('${item.anchor}', '${item.subject}')">
      <div class="search-item-subject">${item.subject}</div>
      <div class="search-item-title">${highlightText(item.title, cleanQuery)}</div>
      <div class="search-item-desc">${highlightText(item.snippet, cleanQuery)}</div>
    </div>
  `).join('');
}

function selectSearchResult(anchor, subject) {
  closeSearchModal();
  
  if (anchor === '#asignaturas') {
    let tabId = 'dwa';
    if (subject === 'VD II' || subject.includes('Visualización')) tabId = 'vd';
    if (subject === 'IO' || subject.includes('Investigación')) tabId = 'io';
    
    if (typeof switchSubjectTab === 'function') {
      switchSubjectTab(tabId);
    }
  }

  const targetElem = document.querySelector(anchor);
  if (targetElem) {
    const headerOffset = 80;
    const elementPosition = targetElem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark style="background-color: #fef08a; color: #854d0e; padding: 0 2px; border-radius: 2px;">$1</mark>');
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildSearchIndex();

  const searchTriggerBtn = document.getElementById('btnOpenSearch');
  const searchCloseBtn = document.getElementById('btnCloseSearchModal');
  const searchModalBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('searchGlobalInput');

  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener('click', openSearchModal);
  }

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', closeSearchModal);
  }

  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener('click', (e) => {
      if (e.target === searchModalBackdrop) {
        closeSearchModal();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // Atajo de teclado: Ctrl + K o Cmd + K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    }
  });
});
