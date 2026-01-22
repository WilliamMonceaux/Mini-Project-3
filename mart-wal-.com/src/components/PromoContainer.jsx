import "../index.css";

function PromoContainer(props) {
  return (
    <section className="flex-container">
      <div className="promo-container">
        <header className="promo-header"></header>
        {props.children}
      </div>
    </section>
  );
}

export { PromoContainer };
