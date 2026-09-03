import "./practice.css";

import UsersList from "../../components/userList";
import Counter from "../../components/counter";
import FeedBacks from "../../components/feedbacks";
import Banner from "../../components/banner";
import PageContainer from "../../components/pageContainer";

function PracticePage() {
  return (
    <PageContainer className={"app"}>
      <UsersList />
      <Counter />
      <FeedBacks />
      <Banner />
    </PageContainer>
  );
}
export default PracticePage;
