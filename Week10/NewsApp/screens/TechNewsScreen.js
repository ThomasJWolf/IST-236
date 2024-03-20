import News from "../components/News/News";
import { NEWS_ITEMS } from "../data/dummy_data";

function TechNewsScreen() {
  const type = "Tech";
  const displayedNews = NEWS_ITEMS.filter((NewsItem) => {
    return NewsItem.type === type;
  });

  return <News items={displayedNews} />;
}

export default TechNewsScreen;
