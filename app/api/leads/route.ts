import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { createLead } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      phone?: string;
      district?: string;
      service?: string;
      message?: string;
    };

    if (!body.name || !body.phone || !body.district || !body.service) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    await createLead({
      id: randomUUID(),
      name: body.name,
      phone: body.phone,
      district: body.district,
      service: body.service,
      message: body.message ?? "",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatasi" }, { status: 500 });
  }
}
