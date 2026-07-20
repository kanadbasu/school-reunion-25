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
    location: "Burdwan, India",
    message: "Listening to melodious Christmas carols and prayers during assembly, and savouring self/other's delicious tiffin during class."
  },
  {
    name: "Piyali Das",
    photo: "/piyali.jpg",
  },
  {
    name: "Nabomita Ghosh",
    photo: "/Nabomita.jpeg",
    location: "Ahmedabad, Gujarat, India",
    message: "I'm forever grateful to Father Michel, Miss Dutta, Miss Sen, Miss Choudhury, Father Alexander, Father Decampo, Sir Mondal, Miss Mondal, Miss Mitra, Miss Dasgupta, and Kangshabanik Sir for the love, discipline, songs, and memories that shaped me."
  },
  {
    name: "Chayanika Das",
    photo: "/chayanika.jpeg",
    location: "Bangalore, India",
    message: "Best School. Best Years. Best Friends Forever."
  },
  {
    name: "Gargi Mondal",
    photo: "/GargiM.jpeg",
    location: "Burdwan, India",
    message: "Annual Function Day; evergreen Hindi songs sung by Anthony and John Felix sir; Rabindra Sangeet by Miss Dasgupta, Gargi and Nabanita."
  },
  {
    name: "Nabanita Chatterjee",
    photo: "/pinki.jpeg",
    location: "Burdwan, India",
    message: "Miss Majhilla's English Class , Sir Mondal's BENGALI songs and Sir Chatterjee's Drawing class."
  },
  {
    name: "Vishal Bhutoria",
    photo: "/Vishal.jpeg",
    location: "Burdwan/Kolkata, India",
    message: "Tiffin time & Games period."
  },
  {
    name: "Deepmala Sadhu",
    photo: "/deepmala.jpeg",
    location: "Burdwan, India",
    message: "SPORTS DAYS."
  },
  {
    name: "Ipsita Sinha",
    photo: "/Ipsita.jpeg",
    location: "Bangalore, India",
    message: "Mrs. Majilla's English classes. Sir Kansha Banik believed in me even before I believed in myself, and Miss Majilla's English classes gave me the confidence to find my voice—the very voice that shaped my journey today."
  },
  {
    name: "Himadri Nag",
    photo: "/himadri.jpeg",
    location: "Burdwan, India",
    message: "Daily games period from 3.15 p.m to 3.45 p.m which was the infusion of fresh air  from the hectic classes all day."
  },
  {
    name: "Priyam Dawn",
    photo: "/priyam.jpeg",
    location: "Burdwan, India",
    message: "Always reminiscing about our school days and our bonds."
  },
  {
    name: "Somnath Chakraborty",
    photo: "/somnath.jpeg",
    location: "Kolkata, India",
    message: "Adda with friends both in class and outside (BBT - Bam Bat tala)."
  },
  {
    name: "Arnab Bose",
    photo: "/arnab.jpeg",
    location: "Burdwan, India",
    message: "Gossips during games period."
  },
  {
    name: "Soumita Ghosh",
    photo: "/soumita.jpeg",
    location: "Kolkata, India",
    message: "School uniforms, shoes, periods, sections,classrooms, exams,different staff room’s , even toilets, games periods. Getting love, scold and knowledge from lovely teachers , participating in sports day, annual functions. Friends , eating lunch together , millions of memories …… one school 11 years."
  },
  {
    name: "Suvadeep Thakur",
    photo: "/thakur.jpeg",
    location: "Burdwan, India",
    message: "25 Years Later… Same Hearts, New Stories, Forever Classmates."
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