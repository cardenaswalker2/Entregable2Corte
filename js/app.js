/**
 * ClinicaApp - Main Application Controller
 * Handles DOM rendering, dynamic tabs, problem tree interactivity, and math calculations
 */

document.addEventListener('DOMContentLoaded', () => {
  renderTeam();
  renderProblemTree();
  renderTraceabilityTable();
  renderTimeline();
  renderMongoDictionary();
  initSubjectTabs();
  initHaversineSimulator();
});

function initSubjectTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchSubjectTab(targetTab, false);
    });
  });
}

function switchSubjectTab(tabId, shouldScroll = true) {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-content-panel');

  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  panels.forEach(panel => {
    if (panel.id === `tab-${tabId}`) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  if (shouldScroll) {
    const targetElem = document.getElementById('subjectDetailContainer');
    if (targetElem) {
      const headerOffset = 90;
      const elementPosition = targetElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

function renderProblemTree() {
  const tree = CLINICA_DATA.problema.arbol;

  const causasContainer = document.getElementById('treeCausasList');
  const efectosContainer = document.getElementById('treeEfectosList');

  if (causasContainer) {
    causasContainer.innerHTML = tree.causasDirectas.map(c => `
      <div class="tree-node-card" onclick="highlightProblemDetail('${escapeJsString(c.titulo)}', '${escapeJsString(c.detalle)}', 'Causa Directa')">
        <div class="tree-node-title">${c.titulo}</div>
        <div class="tree-node-desc">${c.detalle}</div>
      </div>
    `).join('');
  }

  if (efectosContainer) {
    efectosContainer.innerHTML = tree.efectos.map(e => `
      <div class="tree-node-card" onclick="highlightProblemDetail('${escapeJsString(e.titulo)}', '${escapeJsString(e.detalle)}', 'Efecto / Consecuencia')">
        <div class="tree-node-title">${e.titulo}</div>
        <div class="tree-node-desc">${e.detalle}</div>
      </div>
    `).join('');
  }
}

function highlightProblemDetail(title, desc, type) {
  const previewBox = document.getElementById('problemTreeFocusDetail');
  if (!previewBox) return;

  previewBox.innerHTML = `
    <div style="padding: 16px; background-color: var(--brand-primary-light); border: 1px solid var(--brand-primary-border); border-radius: var(--radius-md); animation: fadeIn 0.3s ease;">
      <div style="font-size: 0.75rem; font-weight: 700; color: var(--brand-primary); text-transform: uppercase; margin-bottom: 4px;">${type} Seleccionada</div>
      <strong style="color: var(--text-primary); font-size: 0.95rem;">${title}</strong>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px; line-height: 1.5;">${desc}</p>
    </div>
  `;
}

function renderTraceabilityTable() {
  const tableBody = document.getElementById('traceabilityTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = CLINICA_DATA.objetivos.especificos.map(obj => {
    let badgeClass = 'completado';
    if (obj.estado === 'EN DESARROLLO') badgeClass = 'en-desarrollo';
    if (obj.estado === 'PLANEADO') badgeClass = 'planeado';

    return `
      <tr>
        <td style="font-weight: 700; width: 140px;">
          Obj. ${obj.numero} (${obj.fase})
        </td>
        <td>
          <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">${obj.descripcion}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);"><strong>Evidencia:</strong> ${obj.evidencias}</div>
        </td>
        <td style="width: 130px; text-align: center;">
          <div style="font-weight: 800; font-size: 1rem; color: var(--text-primary);">${obj.avance}%</div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${obj.avance}%;"></div>
          </div>
        </td>
        <td style="width: 140px; text-align: center;">
          <span class="badge-status ${badgeClass}">${obj.estado}</span>
        </td>
        <td style="font-size: 0.82rem; color: var(--text-secondary); width: 220px;">
          ${obj.pendientesVIII}
        </td>
      </tr>
    `;
  }).join('');
}

function renderTimeline() {
  const timelineContainer = document.getElementById('timelineTrackContainer');
  if (!timelineContainer) return;

  timelineContainer.innerHTML = CLINICA_DATA.cronograma.map(item => `
    <div class="timeline-item ${item.tipo}">
      <div class="timeline-dot"></div>
      <div class="timeline-content-card">
        <div class="timeline-header">
          <span class="timeline-phase">${item.fase}</span>
          <span class="badge-status ${item.tipo === 'ejecutado' ? 'completado' : 'planeado'}">${item.estado}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 8px;">${item.descripcion}</p>
        <div class="timeline-meta">
          <span>Duración: ${item.duracion}</span> • <span>Periodo: ${item.periodo}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderMongoDictionary() {
  const tableBody = document.getElementById('mongoDictionaryBody');
  if (!tableBody) return;

  tableBody.innerHTML = CLINICA_DATA.asignaturas[0].entidadesMongo.map(ent => `
    <tr>
      <td style="font-weight: 700; color: var(--brand-primary); font-family: var(--font-mono);">${ent.coleccion}</td>
      <td><code style="font-size: 0.8rem; background: var(--bg-subtle); padding: 2px 6px; border-radius: 4px;">${ent.campos}</code></td>
      <td style="font-size: 0.82rem; color: var(--text-muted);">${ent.tipo}</td>
      <td style="font-size: 0.85rem;">${ent.descripcion}</td>
      <td style="font-size: 0.8rem; font-weight: 600;">${ent.relacion}</td>
    </tr>
  `).join('');
}

function renderTeam() {
  const teamGrid = document.getElementById('teamGridContainer');
  if (!teamGrid) return;

  teamGrid.innerHTML = CLINICA_DATA.proyecto.autores.map(author => `
    <div class="team-member-card">
      <div class="avatar-initials">${author.iniciales}</div>
      <h4 class="member-name">${author.nombre}</h4>
      <p class="member-role">${author.rol}</p>
      <span class="member-institution">Ingeniería de Sistemas (VII Sem.)</span>
      <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 6px;">Tecnológico Comfenalco</div>
    </div>
  `).join('');

  const committeeList = document.getElementById('committeeListContainer');
  if (committeeList) {
    committeeList.innerHTML = CLINICA_DATA.proyecto.docentesAsignaturas.map(d => `
      <div style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 18px 22px; text-align: left; display: flex; flex-direction: column; gap: 6px; box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="tag-pill" style="font-weight: 700; color: var(--brand-primary); background-color: var(--brand-primary-light);">${d.codigo}</span>
          <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">Docente Evaluador</span>
        </div>
        <strong style="font-size: 1.05rem; color: var(--text-primary);">${d.docente}</strong>
        <div style="font-size: 0.86rem; font-weight: 600; color: var(--brand-secondary);">${d.asignatura}</div>
        <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.4;">${d.area}</p>
      </div>
    `).join('');
  }
}

// Simulador Didáctico de Optimización PLEB + Haversine
function initHaversineSimulator() {
  const userLatInput = document.getElementById('simUserLat');
  const userLonInput = document.getElementById('simUserLon');
  const radioInput = document.getElementById('simRadioMax');
  const btnRun = document.getElementById('btnRunOptimizationSim');

  if (!btnRun) return;

  btnRun.addEventListener('click', runSimulation);

  function runSimulation() {
    const latU = parseFloat(userLatInput.value);
    const lonU = parseFloat(userLonInput.value);
    const radioMax = parseFloat(radioInput.value);

    const resultsContainer = document.getElementById('optimizationSimResults');
    if (!resultsContainer) return;

    let menorDistancia = Infinity;
    let clinicaGanadora = null;
    const evaluadas = [];

    CLINICA_DATA.clinicasSemilla.forEach(clinica => {
      const d = calcHaversine(latU, lonU, clinica.lat, clinica.lon);
      const disponible = clinica.estado === 'APROBADA';
      const cumpleRadio = d <= radioMax;
      const esFactible = disponible && cumpleRadio;

      const info = {
        nombre: clinica.nombre,
        barrio: clinica.barrio,
        distanciaKm: d.toFixed(2),
        disponible,
        cumpleRadio,
        esFactible
      };

      if (esFactible && d < menorDistancia) {
        menorDistancia = d;
        clinicaGanadora = clinica;
      }

      evaluadas.push(info);
    });

    let html = `
      <div style="margin-top: 20px; padding: 20px; background: #ffffff; border: 1px solid var(--border-medium); border-radius: var(--radius-md);">
        <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 12px; font-weight: 800;">
          Resultado del Modelo de Optimización Lineal Entera Binaria (PLEB):
        </h4>
    `;

    if (clinicaGanadora) {
      html += `
        <div style="padding: 14px; background: #dcfce7; border: 1px solid #86efac; border-radius: var(--radius-sm); margin-bottom: 16px;">
          <strong style="color: var(--color-success); font-size: 0.95rem;">✓ Solución Óptima Encontrada: X_{${clinicaGanadora.barrio}} = 1 (Min Z = ${menorDistancia.toFixed(2)} km)</strong>
          <p style="font-size: 0.85rem; color: #166534; margin-top: 4px;">
            <strong>${clinicaGanadora.nombre}</strong> (${clinicaGanadora.barrio}) • Tel: ${clinicaGanadora.telefono} • Estado: Operativa
          </p>
        </div>
      `;
    } else {
      html += `
        <div style="padding: 14px; background: #fee2e2; border: 1px solid #fca5a5; border-radius: var(--radius-sm); margin-bottom: 16px;">
          <strong style="color: var(--color-danger); font-size: 0.95rem;">⚠️ No se encontró solución factible dentro del radio de ${radioMax} km.</strong>
        </div>
      `;
    }

    html += `
      <table class="academic-table" style="font-size: 0.82rem;">
        <thead>
          <tr>
            <th>Sede Veterinaria</th>
            <th>Distancia (d_i)</th>
            <th>Operatividad (A_i)</th>
            <th>d_i ≤ D_max</th>
            <th>Factibilidad</th>
            <th>Decisión (X_i)</th>
          </tr>
        </thead>
        <tbody>
          ${evaluadas.map(c => {
            const isWinner = clinicaGanadora && clinicaGanadora.nombre === c.nombre;
            return `
              <tr style="${isWinner ? 'background-color: #f0fdf4; font-weight: 700;' : ''}">
                <td>${c.nombre} (${c.barrio})</td>
                <td>${c.distanciaKm} km</td>
                <td>${c.disponible ? '1 (Aprobada)' : '0 (Pendiente)'}</td>
                <td>${c.cumpleRadio ? 'Sí' : 'No'}</td>
                <td>${c.esFactible ? '<span style="color: var(--color-success);">Factible</span>' : '<span style="color: var(--color-danger);">No Factible</span>'}</td>
                <td><strong style="color: ${isWinner ? 'var(--brand-primary)' : 'var(--text-muted)'}; font-family: var(--font-mono);">${isWinner ? 'X_i = 1' : 'X_i = 0'}</strong></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>`;

    resultsContainer.innerHTML = html;
  }
}

function calcHaversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio medio de la Tierra en km
  const toRad = deg => (deg * Math.PI) / 180;
  
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function escapeJsString(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
