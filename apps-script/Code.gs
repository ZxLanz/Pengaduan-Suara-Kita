const SHEET_NAME = 'Sheet1';

const HEADERS = [
  'Waktu',
  'Pernah memiliki keluhan',
  'Disampaikan ke',
  'Ditanggapi',
  'Memahami alur',
  'Kategori',
  'Aspirasi',
  'Saran'
];

function setupSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.rename('Aspirasi Suara Kita Musyawarah Kita');
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  spreadsheet.setSpreadsheetTimeZone('Asia/Jakarta');
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 155);
  sheet.setColumnWidth(2, 190);
  sheet.setColumnWidth(3, 170);
  sheet.setColumnWidth(4, 140);
  sheet.setColumnWidth(5, 170);
  sheet.setColumnWidth(6, 180);
  sheet.setColumnWidth(7, 500);
  sheet.setColumnWidth(8, 400);
}

const OPSI = {
  pernah_keluhan: ['Ya', 'Tidak'],
  disampaikan_ke: ['Advomiba', 'HMPS', 'Dosen PA', 'Grup angkatan', 'Tidak disampaikan', 'Lainnya'],
  ditanggapi: ['Ya', 'Belum', 'Tidak tahu'],
  tahu_alur: ['Tahu', 'Sedikit', 'Tidak tahu'],
  kategori: ['Akademik', 'Fasilitas', 'Layanan administrasi', 'Lainnya']
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);

    if (d.website) return out({ ok: true });

    for (const k in OPSI) {
      if (d[k] && OPSI[k].indexOf(d[k]) === -1) {
        return out({ ok: false, error: 'opsi' });
      }
    }

    const aspirasi = String(d.aspirasi || '').trim();
    const saran = String(d.saran || '').trim();
    if (aspirasi.length < 10 || aspirasi.length > 500) {
      return out({ ok: false, error: 'aspirasi' });
    }
    if (saran.length > 300) {
      return out({ ok: false, error: 'saran' });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    sheet.appendRow([
      new Date(),
      d.pernah_keluhan || '',
      d.disampaikan_ke || '',
      d.ditanggapi || '',
      d.tahu_alur || '',
      d.kategori || '',
      clean(aspirasi),
      clean(saran)
    ]);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: 'server' });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function clean(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
