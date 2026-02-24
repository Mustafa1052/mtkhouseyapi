import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type LeadItem = {
  id: string;
  name: string;
  phone: string;
  district: string;
  service: string;
  message: string;
  createdAt: string;
};

export type ProjectSubmission = {
  id: string;
  name: string;
  phone: string;
  service: string;
  title?: string;
  category?: "celik" | "prefabrik" | "bungalov" | "pimapen";
  alt?: string;
  message: string;
  imageUrl: string;
  status: "pending" | "approved";
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "leads.json");
const submissionsFile = path.join(dataDir, "project-submissions.json");

async function ensureFile(filePath: string) {
  await mkdir(dataDir, { recursive: true });
  try {
    await readFile(filePath, "utf8");
  } catch {
    await writeFile(filePath, "[]", "utf8");
  }
}

async function readJsonFile<T>(filePath: string): Promise<T[]> {
  await ensureFile(filePath);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T[];
}

async function writeJsonFile<T>(filePath: string, data: T[]) {
  await ensureFile(filePath);
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

export async function createLead(payload: LeadItem) {
  const leads = await readJsonFile<LeadItem>(leadsFile);
  leads.unshift(payload);
  await writeJsonFile(leadsFile, leads);
}

export async function createSubmission(payload: ProjectSubmission) {
  const submissions = await readJsonFile<ProjectSubmission>(submissionsFile);
  submissions.unshift(payload);
  await writeJsonFile(submissionsFile, submissions);
}

export async function listSubmissions() {
  return readJsonFile<ProjectSubmission>(submissionsFile);
}

export async function approveSubmission(id: string) {
  const submissions = await readJsonFile<ProjectSubmission>(submissionsFile);
  const updated = submissions.map((item) =>
    item.id === id ? { ...item, status: "approved" as const } : item,
  );
  await writeJsonFile(submissionsFile, updated);
  return updated.find((item) => item.id === id);
}

export async function deleteSubmission(id: string) {
  const submissions = await readJsonFile<ProjectSubmission>(submissionsFile);
  const removed = submissions.find((item) => item.id === id) ?? null;
  const updated = submissions.filter((item) => item.id !== id);
  await writeJsonFile(submissionsFile, updated);
  return removed;
}

export function isAdminKeyValid(key: string | null) {
  const adminKey = process.env.ADMIN_SECRET_KEY ?? "mtk-admin-2026";
  return Boolean(key) && key === adminKey;
}
