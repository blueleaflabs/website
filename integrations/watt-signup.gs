/**
 * Watt Workshops signup -> Google Sheet.
 *
 * Receives the form on blueleaflabs.org/watt-workshops/register and appends
 * one row per signup to the "Signups" tab of the spreadsheet this script is
 * bound to. Setup steps are in README.md, section 8.
 */
const SHEET_NAME = 'Signups';
const HEADERS = [
  'Timestamp', 'Workshop', 'First name', 'Last name', 'Grade', 'Email address',
  'Current Math Olympiads student', 'Math Olympiads class', 'Primary area of interest',
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);
    if (d.website) return json_({ ok: true }); // honeypot: bots fill it, people never see it
    if (!d.firstName || !d.lastName || !d.grade || !d.email || !d.olympiads) {
      return json_({ ok: false, error: 'Missing required field' });
    }
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(), clean_(d.workshop), clean_(d.firstName), clean_(d.lastName), clean_(d.grade),
      clean_(d.email), clean_(d.olympiads), clean_(d.olympiadsClass), clean_(d.interest),
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Trim, cap length, and stop a value from being read as a spreadsheet formula.
function clean_(v) {
  const s = String(v == null ? '' : v).trim().slice(0, 1000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
