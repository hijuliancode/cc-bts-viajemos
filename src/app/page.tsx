import Image from "next/image";
import { Camera, Coffee, House } from "lucide-react";

export default function Home() {
  return (
    <div className="container">
      <header className="text-center mt-4">
        <h1>Sass Integration Verification</h1>
      </header>
      <main className="mt-4">
        <p className="text-center">
          If this text is centered, and the heading above is blue, and the
          button below works, Sass is working.
        </p>

        <div className="text-center mt-5">
          <h2>Lucide Icons</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Camera size={48} color="#0d6efd" />
            <Coffee size={48} color="#198754" />
            <House size={48} color="#dc3545" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button className="btn">Sass Button</button>
        </div>
      </main>
    </div>
  );
}
