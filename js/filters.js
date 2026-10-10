/**
 * ClinicaApp - Dynamic Filtering for Evidence and Datasets
 */

let currentFilter = 'todas';

function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      currentFilter = filterValue;
      renderFilteredEvidence(filterValue);
    });
  });

  renderFilteredEvidence('todas');
}

function renderFilteredEvidence(filter) {
  const container = document.getElementById('evidenceGridContainer');
  if (!container) return;

  const filtered = filter === 'todas'
    ? CLINICA_DATA.evidencias
    : CLINICA_DATA.evidencias.filter(e => e.asignaturaId === filter);

  container.innerHTML = filtered.map(ev => `
    <div class="evidence-card">
      <div>
        <div class="evidence-card-header">
          <span class="tag-pill" style="font-weight: 700; color: var(--brand-primary); background-color: var(--brand-primary-light);">${ev.badge}</span>
          <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">${ev.anexo}</span>
        </div>
        <h4 class="evidence-title">${ev.titulo}</h4>
        <p class="evidence-desc">${ev.descripcion}</p>
      </div>
      <button class="btn-open-evidence" onclick="openEvidenceModal('${ev.id}')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        Examinar Evidencia
      </button>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
});
