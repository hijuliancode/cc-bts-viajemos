export default function Banner() {
  return (
    <div className="banner">
      <div className="container banner__inner">
        <div className="banner__title">
          Grandes <span className="text-muted fw-normal">(45) Resultados</span>
        </div>
        <div className="banner__price-info">
          <small className="text-primary">+ Grandes Desde</small>
          <strong>
            $544.448 <span className="fw-normal text-muted fs-6">| día</span>
          </strong>
        </div>
      </div>
    </div>
  );
}
