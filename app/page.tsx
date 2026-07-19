"use client";

import { useState } from "react";
import Image from "next/image";

const classmates = [
  {
    name: "Kanad Basu",
    photo: "/kanad.jpeg",
    location: "New York, USA",
    message: "Still remembers the school auditorium, where we used to play cricket."
  },
  {
    name: "Anirban Mitra",
    photo: "/anirban.jpg",
  },
  {
    name: "Piyali Das",
    photo: "/piyali.jpg",
  },
  {
    name: "Vikram Ghosh",
  },
  {
    name: "Saptarshi Bishnu",
  },
  {
    name: "Sudeshna Ghosh",
  },
  {
    name: "Nabanita Chatterjee",
  },
  {
    name: "Vishal Bhutoria",
  },
];

export default function Home() {
  const [selectedClassmate, setSelectedClassmate] = useState<
  (typeof classmates)[number] | null
  >(null);
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f1e3",
        color: "#4b1720",
        padding: "40px 24px 64px",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Image
          src="/school-logo.jpeg"
          alt="St. Xavier's School, Burdwan logo"
          width={120}
          height={120}
          style={{
            display: "block",
            margin: "0 auto 18px",
            objectFit: "contain",
          }}
        />

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "0.04em",
          }}
        >
          ST. XAVIER&apos;S SCHOOL, BURDWAN
        </h1>

        <p
          style={{
            margin: "14px 0 0",
            fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
            color: "#2f2a26",
            letterSpacing: "0.08em",
          }}
        >
          ICSE BATCH OF 2001
        </p>

        <h2
          style={{
            margin: "28px 0 6px",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
          }}
        >
          25-Year Reunion
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
            color: "#8a6529",
            fontStyle: "italic",
          }}
        >
          “Together Again After 25 Years”
        </p>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid #9b7b3e",
            margin: "40px auto 32px",
            maxWidth: "900px",
          }}
        />

        <h2
          style={{
            marginBottom: "32px",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            letterSpacing: "0.12em",
          }}
        >
          CLASS OF 2001
          
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 160px))",
            justifyContent: "center",
            gap: "28px 20px",
            alignItems: "start",
          }}
        >
          {classmates.map((classmate) => (
            <div 
            key={classmate.name}
            onClick={() => setSelectedClassmate(classmate)}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
            }} 
            >
              {classmate.photo ? (
  <Image
    src={classmate.photo}
    alt={classmate.name}
    width={140}
    height={140}
    style={{
      width: "140px",
      height: "140px",
      maxWidth: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #b8924a",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    }}
  />
) : (
  <div
    style={{
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      border: "3px solid #b8924a",
      background: "#eadfc9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#4b1720",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    }}
  >
    {classmate.name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")}
  </div>
)}
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: 0,
                  fontSize: "1rem",
                  color: "#2f2a26",
                }}
              >
                {classmate.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      {selectedClassmate && (
  <div
    onClick={() => setSelectedClassmate(null)}
    style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      zIndex: 1000,
    }}
  >
    <div
      onClick={(event) => event.stopPropagation()}
      style={{
        backgroundColor: "#fffaf0",
        borderRadius: "16px",
        padding: "32px",
        width: "100%",
        maxWidth: "420px",
        textAlign: "center",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#6b1f2b" }}>
        {selectedClassmate.name}
      </h2>

      <p style={{ marginBottom: "12px", color: "#4f463f" }}>
  📍 {selectedClassmate.location || "Location coming soon"}
</p>

<p style={{ marginBottom: "24px", color: "#4f463f" }}>
  {selectedClassmate.message || "Personal message coming soon."}
</p>

      <button
        onClick={() => setSelectedClassmate(null)}
        style={{
          border: "none",
          borderRadius: "8px",
          padding: "10px 22px",
          backgroundColor: "#6b1f2b",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Close
      </button>
    </div>
  </div>
)}
<footer
  style={{
    marginTop: "60px",
    paddingTop: "30px",
    borderTop: "1px solid #d8d0c5",
    textAlign: "center",
    color: "#6d6258",
    fontSize: "0.95rem",
    lineHeight: "1.8",
  }}
>
  <p>
    Our reunion website is growing!
    <br />
    More classmates, photographs, and memories will be added over the coming
    weeks.
  </p>

  <p style={{ marginTop: "20px" }}>
    If you are from the <strong>ICSE Batch of 2001</strong>, please send your
    photograph, current location, and a short personal message.
  </p>

  <p style={{ marginTop: "30px", fontSize: "0.85rem" }}>
    © 2026 St. Xavier's School, Burdwan • ICSE Batch of 2001
  </p>
</footer>
    </main>
  );
}