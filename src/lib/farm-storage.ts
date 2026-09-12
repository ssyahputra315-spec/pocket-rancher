import { emptyFarmData, type FarmData } from "./farm-types";

const KEY = "livestock-farm-management-v1";
export const generateId = (prefix = "rec") => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export function readFarmData(): FarmData {
  if (typeof window === "undefined") return emptyFarmData();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyFarmData();
    const parsed = JSON.parse(raw) as Partial<FarmData>;
    const clean = emptyFarmData();
    return { ...clean, ...parsed, settings: { ...clean.settings, ...(parsed.settings ?? {}) } };
  } catch {
    return emptyFarmData();
  }
}

export function writeFarmData(data: FarmData) { localStorage.setItem(KEY, JSON.stringify(data)); }
export function updateRecord<K extends keyof FarmData>(data: FarmData, key: K, record: FarmData[K] extends Array<infer T> ? T & { id: string } : never): FarmData {
  const list = data[key];
  if (!Array.isArray(list)) return data;
  const exists = list.some((item) => (item as { id: string }).id === record.id);
  return { ...data, [key]: exists ? list.map((item) => (item as { id: string }).id === record.id ? record : item) : [record, ...list] };
}
export function deleteRecord<K extends keyof FarmData>(data: FarmData, key: K, id: string): FarmData {
  const list = data[key];
  return Array.isArray(list) ? { ...data, [key]: list.filter((item) => (item as { id: string }).id !== id) } : data;
}
export function formatCurrency(value: number, currency: string) { try { return new Intl.NumberFormat(undefined, { style: "currency", currency, maximumFractionDigits: currency === "IDR" || currency === "JPY" ? 0 : 2 }).format(value || 0); } catch { return `${currency} ${(value || 0).toLocaleString()}`; } }
export function formatDate(value: string, format = "DD/MM/YYYY") { if (!value) return "—"; const d = new Date(`${value}T00:00:00`); if (Number.isNaN(d.getTime())) return value; return format === "MM/DD/YYYY" ? d.toLocaleDateString("en-US") : format === "YYYY-MM-DD" ? value : d.toLocaleDateString("en-GB"); }
export function downloadFile(name: string, content: string, type: string) { const blob = new Blob([content], { type }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url); }
export function toCsv(rows: Record<string, unknown>[]) { if (!rows.length) return "No records\n"; const headers = Object.keys(rows[0] as Record<string, unknown>); const esc = (v: unknown) => `"${String(v ?? "").replaceAll('"', '""')}"`; return [headers.map(esc).join(","), ...rows.map((r) => headers.map((h) => esc(r[h])).join(","))].join("\n"); }