import Footer from "../footer";
import Header from "../header";

const PageContainer = (props) => {
  const { children, className } = props;
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default PageContainer;
