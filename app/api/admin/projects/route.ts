import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { approveSubmission, createSubmission, deleteSubmission, isAdminKeyValid, listSubmissions } from "@/lib/storage";

const MAX_UPLOAD_BYTES = 8 * 1024 * 1024; // 8MB

async function tryDeleteUploadedFile(imageUrl: string) {
  if (!imageUrl.startsWith("/uploads/")) return;
  if (imageUrl.includes("..")) return;

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, imageUrl.replace(/^\/uploads\//, ""));
  const relative = path.relative(uploadDir, filePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return;

  try {
    await unlink(filePath);
  } catch {
    // ignore
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");

  if (!isAdminKeyValid(key)) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const items = await listSubmissions();
  return NextResponse.json(items);
}

export async function PATCH(request: Request) {
  const body = (await request.json()) as { key?: string; id?: string; ids?: string[] };
  if (!isAdminKeyValid(body.key ?? null)) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const ids = body.id ? [body.id] : Array.isArray(body.ids) ? body.ids : [];
  if (!ids.length) {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const updated = await Promise.all(ids.map((id) => approveSubmission(id)));
  return NextResponse.json({ ok: true, items: updated.filter(Boolean) });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const key = String(formData.get("key") ?? "");
    if (!isAdminKeyValid(key)) {
      return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
    }

    const title = String(formData.get("title") ?? "").trim();
    const categoryRaw = String(formData.get("category") ?? "").trim();
    const alt = String(formData.get("alt") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const image = formData.get("image");

    if (!(image instanceof File) || !title || !categoryRaw || !message) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    if (image.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        { error: `Dosya çok büyük. Maksimum ${(MAX_UPLOAD_BYTES / (1024 * 1024)).toFixed(0)}MB.` },
        { status: 413 },
      );
    }

    const allowedTypes = ["image/webp", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(image.type)) {
      return NextResponse.json({ error: "Sadece webp, jpeg, png desteklenir" }, { status: 400 });
    }

    const category =
      categoryRaw === "celik" || categoryRaw === "prefabrik" || categoryRaw === "bungalov" || categoryRaw === "pimapen"
        ? categoryRaw
        : null;
    if (!category) {
      return NextResponse.json({ error: "Geçersiz kategori" }, { status: 400 });
    }

    const id = randomUUID();
    const fileName = `${id}.webp`;
    const outputDir = path.join(process.cwd(), "public", "uploads");
    const outputPath = path.join(outputDir, fileName);

    await mkdir(outputDir, { recursive: true });
    const arrayBuffer = await image.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    // sharp optional dependency: required for WebP conversion
    const sharpMod = await import("sharp").catch(() => null);
    if (!sharpMod) {
      return NextResponse.json(
        { error: "Sunucuda WebP dönüştürme modülü yok. `npm i sharp` kurulumunu yapın." },
        { status: 500 },
      );
    }

    const sharp = (sharpMod as unknown as { default?: any }).default ?? sharpMod;
    const webpBuffer = await sharp(inputBuffer)
      .rotate()
      .resize({ width: 2400, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer();
    await writeFile(outputPath, webpBuffer);

    await createSubmission({
      id,
      name: "Admin",
      phone: "-",
      service: title,
      title,
      category,
      alt: alt || `${title} proje görseli`,
      message,
      imageUrl: `/uploads/${fileName}`,
      status: "approved",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Yükleme başarısız" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = (await request.json()) as { key?: string; id?: string };
    if (!isAdminKeyValid(body.key ?? null) || !body.id) {
      return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
    }

    const removed = await deleteSubmission(body.id);
    if (!removed) {
      return NextResponse.json({ error: "Kayıt bulunamadı" }, { status: 404 });
    }

    await tryDeleteUploadedFile(removed.imageUrl);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Silme işlemi başarısız" }, { status: 500 });
  }
}
