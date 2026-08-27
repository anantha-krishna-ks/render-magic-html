import frame from "@/assets/cert-frame.png.asset.json";
import excelsoft from "@/assets/cert-excelsoft-hq.png.asset.json";
import mqa from "@/assets/cert-mqa-hq.png.asset.json";
import wreath from "@/assets/cert-wreath.png.asset.json";
import divShort from "@/assets/cert-div_short.png.asset.json";
import divLong from "@/assets/cert-div_long.png.asset.json";
import icons from "@/assets/cert-icons.png.asset.json";
import sig1 from "@/assets/cert-sig1.png.asset.json";
import sig2 from "@/assets/cert-sig2.png.asset.json";

// All coordinates are expressed as percentages of the original 1612 x 1250
// artwork so the certificate scales pixel-faithfully at any width.
const W = 1612;
const H = 1250;
const x = (px: number) => `${(px / W) * 100}%`;
const y = (px: number) => `${(px / H) * 100}%`;
const fs = (px: number) => `${(px / W) * 100}cqw`;

export type CertificateData = {
  recipientName: string;
  programTitle: string;
  date: string;
  credentialId: string;
  location: string;
};

export const defaultCertificate: CertificateData = {
  recipientName: "",
  programTitle: "",
  date: "",
  credentialId: "",
  location: "",
};

export function Certificate({ data = defaultCertificate }: { data?: CertificateData }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[1612px] select-none"
      style={{
        aspectRatio: `${W} / ${H}`,
        containerType: "inline-size",
        background: "linear-gradient(145deg,#f6f5f4 0%,#f0eeee 55%,#eceaea 100%)",
      }}
    >
      {/* ornate border artwork */}
      <img
        src={frame.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* logos + seal */}
      <img
        src={excelsoft.url}
        alt="Excelsoft Technologies"
        className="absolute"
        style={{ left: x(150), top: y(120), width: x(370) }}
      />
      <img
        src={wreath.url}
        alt=""
        aria-hidden
        className="absolute"
        style={{ left: x(690), top: y(60), width: x(220) }}
      />
      <img
        src={mqa.url}
        alt="Mysore Quantum AI"
        className="absolute"
        style={{ left: x(1240), top: y(110), width: x(200) }}
      />

      {/* title */}
      <h1
        className="absolute w-full text-center font-serif font-bold"
        style={{
          top: y(292),
          fontSize: fs(66),
          lineHeight: 1,
          letterSpacing: fs(1.5),
          color: "#152a5c",
        }}
      >
        CERTIFICATE OF COMPLETION
      </h1>
      <img
        src={divShort.url}
        alt=""
        aria-hidden
        className="absolute"
        style={{ left: x(540), top: y(365), width: x(570) }}
      />

      {/* presented to */}
      <p
        className="absolute w-full text-center"
        style={{ top: y(420), fontSize: fs(34), color: "#1b3a72" }}
      >
        This certificate is proudly presented to
      </p>
      <p
        className="absolute w-full text-center font-semibold"
        style={{ top: y(478), fontSize: fs(46), color: "#132a58" }}
      >
        {data.recipientName}
      </p>
      <img
        src={divLong.url}
        alt=""
        aria-hidden
        className="absolute"
        style={{ left: x(280), top: y(540), width: x(1070) }}
      />

      {/* program */}
      <p
        className="absolute w-full text-center"
        style={{ top: y(618), fontSize: fs(31), color: "#1b3a72" }}
      >
        for successfully completing the
      </p>
      <p
        className="absolute w-full text-center font-semibold"
        style={{ top: y(672), fontSize: fs(40), color: "#132a58" }}
      >
        {data.programTitle}
      </p>
      <img
        src={divLong.url}
        alt=""
        aria-hidden
        className="absolute"
        style={{ left: x(280), top: y(740), width: x(1070) }}
      />

      {/* conducted by */}
      <p
        className="absolute w-full text-center"
        style={{ top: y(818), fontSize: fs(31), color: "#1b3a72" }}
      >
        Conducted by <strong className="font-bold">Mysore Quantum AI (MQA)</strong>
      </p>

      {/* meta row: date / credential id / location */}
      <img
        src={icons.url}
        alt=""
        aria-hidden
        className="absolute"
        style={{ left: x(260), top: y(895), width: x(830) }}
      />
      <span
        className="absolute"
        style={{ left: x(330), top: y(918), fontSize: fs(26), color: "#1b3a72" }}
      >
        {data.date}
      </span>
      <span
        className="absolute"
        style={{ left: x(710), top: y(918), fontSize: fs(26), color: "#1b3a72" }}
      >
        {data.credentialId}
      </span>
      <span
        className="absolute"
        style={{ left: x(1095), top: y(918), fontSize: fs(26), color: "#1b3a72" }}
      >
        {data.location}
      </span>

      {/* signatures */}
      <img
        src={sig1.url}
        alt="Signature of Ajay Pramod"
        className="absolute"
        style={{ left: x(383), top: y(1000), width: x(193) }}
      />
      <div
        className="absolute text-center"
        style={{ left: x(310), top: y(1068), width: x(340) }}
      >
        <p className="font-bold" style={{ fontSize: fs(32), color: "#101010" }}>
          Ajay Pramod
        </p>
        <p style={{ fontSize: fs(29), color: "#1a1a1a", marginTop: y(6) }}>Principal Member</p>
      </div>

      <img
        src={sig2.url}
        alt="Signature of Adarsh Sudhindra"
        className="absolute"
        style={{ left: x(1110), top: y(985), width: x(230) }}
      />
      <div
        className="absolute text-center"
        style={{ left: x(1050), top: y(1068), width: x(340) }}
      >
        <p className="font-bold" style={{ fontSize: fs(32), color: "#101010" }}>
          Adarsh Sudhindra
        </p>
        <p style={{ fontSize: fs(29), color: "#1a1a1a", marginTop: y(6) }}>Founder</p>
      </div>
    </div>
  );
}
