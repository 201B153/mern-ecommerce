import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/"> 201b153 </a>
      </header>
      <main>
        <div className="products">
          <h1>Featured products</h1>
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p><strong>${product.price}</strong></p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
