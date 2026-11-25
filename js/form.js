const STORAGE_KEY = 'suara-kita-draft';

function readDraft() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function writeDraft(draft) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch (error) {
    // Form tetap dapat digunakan jika penyimpanan sesi tidak tersedia.
  }
}

function clearDraft() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Tidak ada tindakan tambahan.
  }
}

function getRadioValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : '';
}

function showError(message) {
  const box = document.getElementById('form-error');
  if (!box) return;
  box.textContent = `[GAGAL] ${message}`;
  box.hidden = false;
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideError() {
  const box = document.getElementById('form-error');
  if (box) box.hidden = true;
}

function collectStepOne() {
  return {
    pernah_keluhan: getRadioValue('pernah_keluhan'),
    disampaikan_ke: getRadioValue('disampaikan_ke'),
    ditanggapi: getRadioValue('ditanggapi'),
    tahu_alur: getRadioValue('tahu_alur')
  };
}

function collectStepTwo() {
  return {
    kategori: getRadioValue('kategori'),
    aspirasi: document.getElementById('aspirasi')?.value.trim() || '',
    saran: document.getElementById('saran')?.value.trim() || '',
    website: document.getElementById('website')?.value || ''
  };
}

function validateStepOne(draft) {
  if (!draft.pernah_keluhan) return 'Pilih jawaban untuk pertanyaan pertama.';
  if (!draft.disampaikan_ke) return 'Pilih saluran penyampaian.';
  if (!draft.ditanggapi) return 'Pilih status tanggapan.';
  if (!draft.tahu_alur) return 'Pilih tingkat pemahaman alur.';
  return '';
}

function validateStepTwo(draft) {
  if (!draft.kategori) return 'Pilih kategori aspirasi.';
  if (draft.aspirasi.length < 10) return 'Aspirasi minimal 10 karakter.';
  if (draft.aspirasi.length > 500) return 'Aspirasi maksimal 500 karakter.';
  if (draft.saran.length > 300) return 'Saran maksimal 300 karakter.';
  return '';
}

function initFormPage() {
  const form = document.getElementById('aspirasi-form');
  if (!form) return;

  let draft = readDraft();
  const stepOne = document.getElementById('step-one');
  const stepTwo = document.getElementById('step-two');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const desktopLayout = window.matchMedia('(min-width: 1024px)');

  const applyDesktopLayout = () => {
    if (desktopLayout.matches) {
      stepOne.hidden = false;
      stepTwo.hidden = false;
      progressFill.style.width = '100%';
      progressText.textContent = 'LANGKAH 01/02 & 02/02';
      return;
    }

    stepOne.hidden = false;
    stepTwo.hidden = true;
    progressFill.style.width = '50%';
    progressText.textContent = 'LANGKAH 01/02';
  };
  applyDesktopLayout();
  desktopLayout.addEventListener('change', applyDesktopLayout);

  ['pernah_keluhan', 'disampaikan_ke', 'ditanggapi', 'tahu_alur', 'kategori'].forEach(name => {
    const input = form.querySelector(`input[name="${name}"][value="${CSS.escape(draft[name] || '')}"]`);
    if (input) input.checked = true;
  });
  if (draft.aspirasi) document.getElementById('aspirasi').value = draft.aspirasi;
  if (draft.saran) document.getElementById('saran').value = draft.saran;

  const updateCounters = () => {
    const aspirasi = document.getElementById('aspirasi');
    const saran = document.getElementById('saran');
    document.getElementById('aspirasi-count').textContent = `${aspirasi.value.length}/500`;
    document.getElementById('saran-count').textContent = `${saran.value.length}/300`;
  };
  document.getElementById('aspirasi').addEventListener('input', updateCounters);
  document.getElementById('saran').addEventListener('input', updateCounters);
  updateCounters();

  document.getElementById('to-step-two').addEventListener('click', () => {
    hideError();
    draft = { ...draft, ...collectStepOne() };
    const error = validateStepOne(draft);
    if (error) return showError(error);
    writeDraft(draft);

    if (desktopLayout.matches) {
      stepTwo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    stepOne.hidden = true;
    stepTwo.hidden = false;
    progressFill.style.width = '100%';
    progressText.textContent = 'LANGKAH 02/02';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('to-step-one').addEventListener('click', () => {
    hideError();
    draft = { ...draft, ...collectStepTwo() };
    writeDraft(draft);

    if (desktopLayout.matches) {
      stepOne.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    stepTwo.hidden = true;
    stepOne.hidden = false;
    progressFill.style.width = '50%';
    progressText.textContent = 'LANGKAH 01/02';
  });

  document.getElementById('to-confirmation').addEventListener('click', () => {
    hideError();
    draft = { ...draft, ...collectStepOne(), ...collectStepTwo() };
    const error = validateStepTwo(draft);
    if (error) return showError(error);
    writeDraft(draft);
    window.location.href = 'konfirmasi.html';
  });
}

function initConfirmationPage() {
  const summary = document.getElementById('aspirasi-summary');
  if (!summary) return;

  const draft = readDraft();
  if (!draft.aspirasi) {
    window.location.href = 'form.html';
    return;
  }

  const rows = [
    ['Pernah memiliki keluhan', draft.pernah_keluhan],
    ['Disampaikan ke', draft.disampaikan_ke],
    ['Ditanggapi', draft.ditanggapi],
    ['Memahami alur', draft.tahu_alur],
    ['Kategori', draft.kategori],
    ['Aspirasi', draft.aspirasi],
    ['Saran', draft.saran || 'Tidak ada']
  ];

  summary.innerHTML = rows.map(([key, value]) => `
    <div class="summary-row">
      <div class="summary-key">${key}</div>
      <div class="summary-value"></div>
    </div>
  `).join('');
  summary.querySelectorAll('.summary-value').forEach((node, index) => {
    node.textContent = rows[index][1];
  });

  const pact = document.getElementById('pact');
  const submit = document.getElementById('submit-aspirasi');
  const status = document.getElementById('submit-status');

  pact.addEventListener('change', () => {
    submit.disabled = !pact.checked;
  });
  submit.disabled = true;

  submit.addEventListener('click', async () => {
    hideError();
    if (!pact.checked) return showError('Centang pakta etika terlebih dahulu.');

    if (!APPS_SCRIPT_URL) {
      return showError('URL Google Apps Script belum dikonfigurasi di js/config.js.');
    }

    try {
      const submitted = sessionStorage.getItem('suara-kita-submitted');
      if (submitted === 'true') {
        window.location.href = 'terima-kasih.html';
        return;
      }
    } catch (error) {}

    submit.disabled = true;
    status.hidden = false;
    status.textContent = '[PROSES] Aspirasi sedang dikirim.';

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(draft)
      });
      try {
        sessionStorage.setItem('suara-kita-submitted', 'true');
      } catch (error) {}
      clearDraft();
      status.textContent = '[SUKSES] Aspirasi telah dikirim.';
      window.location.href = 'terima-kasih.html';
    } catch (error) {
      status.textContent = '[GAGAL] Belum terkirim, coba lagi.';
      submit.disabled = false;
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initFormPage();
  initConfirmationPage();
});
