import { useParams } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import styles from "./product.module.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [activeImage, setActiveImage] = useState(0);

  const getProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/" + productId);

      if (res.status >= 200 && res.status < 400) {
        const data = await res.json();
        setProduct(data);
        setStatus("done");
        return;
      }
      throw res;
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  return (
    <div className={styles.page}>
      <Header />

      {isLoading && (
        <h2 className={styles.status}>Loading product details...</h2>
      )}
      {isError && <h2 className={styles.status}>Something went wrong</h2>}
      {noProduct && <h2 className={styles.status}>Product not available</h2>}

      {hasProduct && (
        <ProductDetail
          product={product}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}

      <Footer />
    </div>
  );
};

const ProductDetail = ({ product, activeImage, setActiveImage }) => {
  const {
    title,
    description,
    category,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity,
    reviews,
    images,
    thumbnail,
  } = product;

  const gallery = images && images.length > 0 ? images : [thumbnail];
  const mainSrc = gallery[activeImage] || gallery[0];

  const hasDiscount = discountPercentage && discountPercentage > 0;
  const oldPrice = hasDiscount
    ? (price / (1 - discountPercentage / 100)).toFixed(2)
    : null;

  const isOutOfStock = stock === 0;
  const isLowStock = stock > 0 && stock <= 10;

  let stockClass = styles.inStock;
  let stockLabel = availabilityStatus || "In Stock";
  if (isOutOfStock) {
    stockClass = styles.outStock;
    stockLabel = "Out of Stock";
  } else if (isLowStock) {
    stockClass = styles.lowStock;
    stockLabel = `Only ${stock} left in stock`;
  }

  const reviewList = reviews || [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImageWrap}>
            <img className={styles.mainImage} src={mainSrc} alt={title} />
          </div>
          {gallery.length > 1 && (
            <div className={styles.thumbs}>
              {gallery.map((img, index) => (
                <div
                  key={img}
                  className={`${styles.thumb} ${
                    index === activeImage ? styles.thumbActive : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`${title} view ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className={styles.info}>
          <div className={styles.topMeta}>
            {brand && <span className={styles.brand}>{brand}</span>}
            <span className={styles.category}>{category}</span>
          </div>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.ratingRow}>
            <span className={styles.rating}>★ {rating}</span>
            <span className={styles.reviewCount}>
              {reviewList.length} review{reviewList.length === 1 ? "" : "s"}
            </span>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.priceRow}>
            <span className={styles.price}>${price}</span>
            {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
            {hasDiscount && (
              <span className={styles.discount}>{discountPercentage}% OFF</span>
            )}
          </div>

          <div className={styles.stockRow}>
            <span className={stockClass}>● {stockLabel}</span>
          </div>

          <div className={styles.ctaRow}>
            <button className={styles.buyNow} disabled={isOutOfStock}>
              ⚡ Buy Now
            </button>
            <button className={styles.addCart} disabled={isOutOfStock}>
              🛒 Add to Cart
            </button>
          </div>

          <div className={styles.highlights}>
            {shippingInformation && (
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>🚚</div>
                <div>
                  <p className={styles.highlightLabel}>Shipping</p>
                  <p className={styles.highlightValue}>{shippingInformation}</p>
                </div>
              </div>
            )}
            {warrantyInformation && (
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>🛡️</div>
                <div>
                  <p className={styles.highlightLabel}>Warranty</p>
                  <p className={styles.highlightValue}>{warrantyInformation}</p>
                </div>
              </div>
            )}
            {returnPolicy && (
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>↩️</div>
                <div>
                  <p className={styles.highlightLabel}>Returns</p>
                  <p className={styles.highlightValue}>{returnPolicy}</p>
                </div>
              </div>
            )}
            {minimumOrderQuantity > 0 && (
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>📦</div>
                <div>
                  <p className={styles.highlightLabel}>Min. Order</p>
                  <p className={styles.highlightValue}>
                    {minimumOrderQuantity} units
                  </p>
                </div>
              </div>
            )}
          </div>

          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Specifications */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Specifications</h2>
        <div className={styles.specGrid}>
          {sku && <Spec label="SKU" value={sku} />}
          {weight != null && <Spec label="Weight" value={`${weight} g`} />}
          {dimensions && (
            <Spec
              label="Dimensions"
              value={`${dimensions.width} × ${dimensions.height} × ${dimensions.depth} cm`}
            />
          )}
          {brand && <Spec label="Brand" value={brand} />}
          {category && <Spec label="Category" value={category} />}
          {stock != null && <Spec label="Stock" value={`${stock} units`} />}
        </div>
      </div>

      {/* Reviews */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Customer Reviews</h2>
        {reviewList.length === 0 ? (
          <p className={styles.emptyReviews}>
            No reviews yet. Be the first to review this product.
          </p>
        ) : (
          <div className={styles.reviewList}>
            {reviewList.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewHead}>
                  <span className={styles.reviewer}>{review.reviewerName}</span>
                  <span className={styles.reviewStars}>
                    {"★".repeat(review.rating)}
                    {"☆".repeat(Math.max(0, 5 - review.rating))}
                  </span>
                </div>
                <p className={styles.reviewComment}>{review.comment}</p>
                <span className={styles.reviewDate}>
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Spec = ({ label, value }) => (
  <div className={styles.specItem}>
    <span className={styles.specKey}>{label}</span>
    <span className={styles.specVal}>{value}</span>
  </div>
);

export default ProductPage;
