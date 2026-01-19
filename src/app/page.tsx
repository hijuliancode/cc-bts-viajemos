import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header className="text-center mt-4">
        <h1>Sass Integration Verification</h1>
      </header>
      <main className="mt-4">
        <p className="text-center">
          If this text is centered, and the heading above is blue, and the button below works, Sass is working.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="btn">
            Sass Button
          </button>
        </div>
      </main>
    </div>
  );
}
