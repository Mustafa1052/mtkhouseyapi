import { NextResponse } from "next/server";

export async function POST(request: Request) {
  void request;
  return NextResponse.json(
    { error: "Ziyaretçi görsel yükleme kapatıldı. Lütfen admin panelini kullanın." },
    { status: 410 },
  );
}
