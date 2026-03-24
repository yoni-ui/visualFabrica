/**
 * Live FX snapshot for the home hero (server fetch + cache).
 * Uses exchangerate.host (no API key). Falls back to indicative values if unavailable.
 */

export type FxSnapshot = {
  ok: boolean;
  /** How many ETB for 1 USD */
  usdToEtb: number;
  /** How many USD for 1 ETB */
  etbToUsd: number;
  /** EUR per 1 USD */
  usdToEur: number;
  /** GBP per 1 USD */
  usdToGbp: number;
  /** CNY per 1 USD */
  usdToCny: number;
  /** JPY per 1 USD */
  usdToJpy: number;
  date: string;
};

const FALLBACK: FxSnapshot = {
  ok: false,
  usdToEtb: 154.25,
  etbToUsd: 1 / 154.25,
  usdToEur: 0.92,
  usdToGbp: 0.79,
  usdToCny: 7.24,
  usdToJpy: 149.5,
  date: new Date().toISOString().slice(0, 10),
};

type HostResponse = {
  success?: boolean;
  base?: string;
  date?: string;
  rates?: Record<string, number>;
};

export async function getFxSnapshot(): Promise<FxSnapshot> {
  try {
    const url =
      "https://api.exchangerate.host/latest?base=USD&symbols=ETB,EUR,GBP,CNY,JPY";
    const res = await fetch(url, {
      next: { revalidate: 600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return { ...FALLBACK, date: FALLBACK.date };

    const data = (await res.json()) as HostResponse;
    const rates = data.rates;
    if (!rates || typeof rates.ETB !== "number") {
      return { ...FALLBACK, date: data.date ?? FALLBACK.date };
    }

    const etb = rates.ETB;
    return {
      ok: data.success !== false,
      usdToEtb: etb,
      etbToUsd: 1 / etb,
      usdToEur: typeof rates.EUR === "number" ? rates.EUR : FALLBACK.usdToEur,
      usdToGbp: typeof rates.GBP === "number" ? rates.GBP : FALLBACK.usdToGbp,
      usdToCny: typeof rates.CNY === "number" ? rates.CNY : FALLBACK.usdToCny,
      usdToJpy: typeof rates.JPY === "number" ? rates.JPY : FALLBACK.usdToJpy,
      date: data.date ?? new Date().toISOString().slice(0, 10),
    };
  } catch {
    return { ...FALLBACK };
  }
}
