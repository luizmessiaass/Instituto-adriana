"use client";

import { Download } from "lucide-react";

export function PrintCertificateButton() {
  return (
    <button className="download-button" type="button" onClick={() => window.print()}>
      <Download size={22} aria-hidden="true" /> BAIXAR CERTIFICADO
    </button>
  );
}
