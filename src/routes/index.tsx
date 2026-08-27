import { createFileRoute } from "@tanstack/react-router";
import { Certificate, type CertificateData } from "@/components/Certificate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certificate of Completion | Mysore Quantum AI" },
      {
        name: "description",
        content:
          "HTML certificate of completion issued by Mysore Quantum AI (MQA) in partnership with Excelsoft Technologies.",
      },
      { property: "og:title", content: "Certificate of Completion | Mysore Quantum AI" },
      {
        property: "og:description",
        content:
          "HTML certificate of completion issued by Mysore Quantum AI (MQA) in partnership with Excelsoft Technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Edit these values (or pass them in from your data source) to issue a certificate.
const certificate: CertificateData = {
  recipientName: "",
  programTitle: "",
  date: "",
  credentialId: "",
  location: "",
};

function Index() {
  return (
    <main className="min-h-screen bg-[#0a1430] p-4 font-sans sm:p-8">
      <Certificate data={certificate} />
    </main>
  );
}
