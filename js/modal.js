/**
 * ClinicaApp - Modal Viewers for Evidence and Technical Sheets
 */

function openEvidenceModal(evidenceId) {
  const ev = CLINICA_DATA.evidencias.find(e => e.id === evidenceId);
  if (!ev) return;

  const modalBackdrop = document.getElementById('evidenceModalBackdrop');
  const modalTitle = document.getElementById('modalEvidenceTitle');
  const modalContent = document.getElementById('modalEvidenceContent');

  if (!modalBackdrop || !modalTitle || !modalContent) return;

  modalTitle.textContent = ev.titulo;

  let bodyHtml = `
    <div style="margin-bottom: 16px; display: flex; gap: 8px; align-items: center;">
      <span class="tag-pill" style="background-color: var(--brand-primary-light); color: var(--brand-primary);">${ev.asignatura}</span>
      <span class="tag-pill">${ev.tipo}</span>
      <span class="tag-pill" style="font-weight: 700;">${ev.anexo}</span>
    </div>
    <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 24px;">${ev.descripcion}</p>
  `;

  // Render content according to evidence type
  if (ev.id === 'ev1') {
    // Árbol del problema visual
    bodyHtml += `
      <div style="background: var(--bg-elevated); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <h4 style="font-size: 0.95rem; margin-bottom: 12px; color: var(--text-primary);">Estructura Causal del Ecosistema</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="padding: 12px; background: #fee2e2; border-left: 4px solid #ef4444; border-radius: 4px;">
            <strong style="color: #991b1b; font-size: 0.85rem;">EFECTOS FINALES:</strong>
            <p style="font-size: 0.82rem; color: #7f1d1d; margin-top: 4px;">Morbilidad prevenible por esquemas de vacunación incompletos • Pérdidas financieras por no-show • Insatisfacción en urgencias nocturnas • Carencia de planeación basada en datos.</p>
          </div>
          <div style="padding: 12px; background: #ffffff; border: 2px solid #0f172a; border-radius: 4px; text-align: center;">
            <strong style="color: #0f172a; font-size: 0.9rem;">PROBLEMA CENTRAL: Fragmentación de información, deficiente asignación geográfica y carencia de canales inteligentes de triaje y decisión.</strong>
          </div>
          <div style="padding: 12px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <strong style="color: #92400e; font-size: 0.85rem;">CAUSAS DIRECTAS:</strong>
            <p style="font-size: 0.82rem; color: #78350f; margin-top: 4px;">Registros físicos aislados • Falta de agentes 24/7 con contexto clínico • Ausencia de optimización matemática • Inexistencia de esquemas dimensionales y KPIs.</p>
          </div>
        </div>
      </div>
    `;
  } else if (ev.id === 'ev2') {
    // Arquitectura 5 capas Spring Boot + LLM
    bodyHtml += `
      <div style="background: var(--bg-code); padding: 24px; border-radius: var(--radius-md); color: #e2e8f0; font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.7;">
        <div style="color: #38bdf8; font-weight: 700; margin-bottom: 8px;">[ARQUITECTURA DE INTEGRACIÓN EN 5 CAPAS]</div>
        <div style="color: #94a3b8;">1. CAPA CLIENTE / FRONTEND:</div>
        <div style="padding-left: 16px; color: #f8fafc;">• Thymeleaf UI + Web Speech API (Voz STT / TTS) + REST Client</div>
        <div style="color: #94a3b8; margin-top: 8px;">2. CAPA BACKEND SPRING BOOT 3.5 (Java 21 LTS):</div>
        <div style="padding-left: 16px; color: #4ade80;">• SecurityConfig (OAuth2 / OIDC / RBAC 6 Roles / Login Facial 128D)</div>
        <div style="padding-left: 16px; color: #4ade80;">• NovaAIController (/api/nova-brain/think) + Prompt Contextual RAG</div>
        <div style="padding-left: 16px; color: #4ade80;">• Motor de Contingencia Heurístico Local (MOTOR_LOGICO)</div>
        <div style="padding-left: 16px; color: #4ade80;">• IOptimizacionService & OptimizacionServiceImpl (PLEB + Haversine)</div>
        <div style="color: #94a3b8; margin-top: 8px;">3. CAPA PERSISTENCIA NOSQL:</div>
        <div style="padding-left: 16px; color: #facc15;">• MongoDB Atlas 7.0 (Colecciones: usuarios, mascotas, clinicas, citas, servicios, visitas, logs_inferencia)</div>
        <div style="color: #94a3b8; margin-top: 8px;">4. PROVEEDOR LLM EXTERNO:</div>
        <div style="padding-left: 16px; color: #c084fc;">• Groq Cloud API (Llama 3.3 70B Versatile vía \${GROQ_API_KEY})</div>
        <div style="color: #94a3b8; margin-top: 8px;">5. CAPA ANALÍTICA Y OPTIMIZACIÓN:</div>
        <div style="padding-left: 16px; color: #fb7185;">• Data Warehouse Prototipo (6 CSVs Kimball) + Modelos DAX para Power BI</div>
      </div>
    `;
  } else if (ev.id === 'ev3') {
    // Diccionario MongoDB
    bodyHtml += `
      <div class="academic-table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Colección</th>
              <th>Campos Principales</th>
              <th>Tipo de Dato</th>
              <th>Restricción</th>
            </tr>
          </thead>
          <tbody>
            ${CLINICA_DATA.asignaturas[0].entidadesMongo.map(e => `
              <tr>
                <td><strong>${e.coleccion}</strong></td>
                <td><code>${e.campos}</code></td>
                <td>${e.tipo}</td>
                <td>${e.relacion}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else if (ev.id === 'ev4') {
    // Modelo Dimensional Esquema Estrella
    bodyHtml += `
      <div style="background: #ffffff; border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 20px;">
        <h4 style="font-size: 0.95rem; margin-bottom: 14px; text-align: center; color: var(--brand-secondary);">Esquema Estrella: Fact_Atenciones_Citas & 5 Dimensiones</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px;">
          <div style="padding: 10px; background: var(--bg-elevated); border: 1px solid var(--border-light); border-radius: 6px;">
            <strong style="color: var(--text-primary); font-size: 0.85rem;">Dim_Tiempo</strong>
            <p style="font-size: 0.78rem; color: var(--text-muted);">730 días (2025-2026) • id_fecha [PK]</p>
          </div>
          <div style="padding: 10px; background: var(--bg-elevated); border: 1px solid var(--border-light); border-radius: 6px;">
            <strong style="color: var(--text-primary); font-size: 0.85rem;">Dim_Clinica</strong>
            <p style="font-size: 0.78rem; color: var(--text-muted);">6 sedes georreferenciadas Cartagena • id_clinica [PK]</p>
          </div>
          <div style="padding: 10px; background: var(--bg-elevated); border: 1px solid var(--border-light); border-radius: 6px;">
            <strong style="color: var(--text-primary); font-size: 0.85rem;">Dim_Servicio</strong>
            <p style="font-size: 0.78rem; color: var(--text-muted);">8 procedimientos tipificados • id_servicio [PK]</p>
          </div>
          <div style="padding: 10px; background: var(--bg-elevated); border: 1px solid var(--border-light); border-radius: 6px;">
            <strong style="color: var(--text-primary); font-size: 0.85rem;">Dim_Mascota</strong>
            <p style="font-size: 0.78rem; color: var(--text-muted);">150 animales con condiciones médicas • id_mascota [PK]</p>
          </div>
        </div>
        <div style="padding: 14px; background: #eef2ff; border: 2px solid var(--brand-secondary); border-radius: 8px; text-align: center;">
          <strong style="color: var(--brand-secondary); font-size: 0.95rem;">TABLA DE HECHOS CENTRAL: Fact_Atenciones_Citas</strong>
          <p style="font-size: 0.82rem; color: #3730a3; margin-top: 4px;">Grano atómico: Cita individual atendida (3.469 hechos simulados) • Relaciones 1:N unidireccionales desde todas las dimensiones.</p>
        </div>
      </div>
    `;
  } else if (ev.id === 'ev5') {
    // Formulación PLEB
    bodyHtml += `
      <div class="math-card">
        <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Función Objetivo:</div>
        <div class="math-formula-box">Min Z = ∑_{i ∈ I} (d_i × X_i)</div>
        
        <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-top: 14px; margin-bottom: 8px;">Sujeto a las restricciones:</div>
        <div class="math-variable-list">
          <div class="math-variable-item">
            <span class="math-sym">∑ X_i = 1</span>
            <span>Selección única: Asignar exactamente una clínica factible al usuario.</span>
          </div>
          <div class="math-variable-item">
            <span class="math-sym">X_i ≤ A_i</span>
            <span>Disponibilidad operativa: Solo clínicas aprobadas y operativas (A_i = 1).</span>
          </div>
          <div class="math-variable-item">
            <span class="math-sym">d_i·X_i ≤ D_max</span>
            <span>Cobertura máxima: La clínica elegida no puede superar el radio límite D_max.</span>
          </div>
          <div class="math-variable-item">
            <span class="math-sym">X_i ∈ {0,1}</span>
            <span>Variables de decisión estrictamente binarias.</span>
          </div>
        </div>
      </div>
    `;
  } else {
    bodyHtml += `
      <div style="padding: 16px; background: var(--bg-elevated); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Evidencia técnica documentada y auditada en el código fuente oficial y anexos del informe metodológico.</p>
      </div>
    `;
  }

  modalContent.innerHTML = bodyHtml;
  modalBackdrop.classList.add('open');
}

function closeEvidenceModal() {
  const modalBackdrop = document.getElementById('evidenceModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('btnCloseEvidenceModal');
  const modalBackdrop = document.getElementById('evidenceModalBackdrop');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeEvidenceModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeEvidenceModal();
      }
    });
  }

  // Tecla ESC para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEvidenceModal();
      if (typeof closeSearchModal === 'function') {
        closeSearchModal();
      }
    }
  });
});
